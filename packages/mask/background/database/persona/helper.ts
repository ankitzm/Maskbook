import { concatArrayBuffer, decodeArrayBuffer } from '@dimensiondev/kit'
import {
    AESCryptoKey,
    AESJsonWebKey,
    ECKeyIdentifier,
    EC_Private_JsonWebKey,
    EC_Public_CryptoKey,
    IdentifierMap,
    ProfileIdentifier,
} from '@masknet/shared-base'
import type { IDBPSafeTransaction } from '../utils/openDB'
import { createReadonlyPersonaTransaction, PersonaDB } from './db'

//#region Local key helpers
/**
 * If has local key of a profile in the database.
 * @param id Profile Identifier
 */
export function hasLocalKeyOf(
    id: ProfileIdentifier,
    tx?: IDBPSafeTransaction<PersonaDB, ['personas', 'profiles'], 'readonly'>,
) {
    return getLocalKeyOf(id, tx).then(Boolean)
}

/**
 * Try to decrypt data using local key.
 *
 * @param authorHint Author of the local key
 * @param data Data to be decrypted
 * @param iv IV
 */
export async function decryptByLocalKey(
    authorHint: ProfileIdentifier | null,
    data: Uint8Array,
    iv: Uint8Array,
): Promise<Uint8Array> {
    const candidateKeys: AESJsonWebKey[] = []
    search: {
        if (!authorHint) break search
        const tx = (await createReadonlyPersonaTransaction())('personas', 'profiles')
        const key = await getLocalKeyOf(authorHint, tx)
        key && candidateKeys.push(key)
        // TODO: We may push every local key we owned to the candidate list so we can also decrypt when authorHint is null, but that might be a performance pitfall when localKey field is not indexed.
    }

    let check = () => {}
    return Promise.any(
        candidateKeys.map(async (key): Promise<Uint8Array> => {
            const k = await crypto.subtle.importKey('jwk', key, { name: 'AES-GCM', length: 256 }, false, ['decrypt'])
            check()

            const result: Uint8Array = await crypto.subtle.decrypt({ iv, name: 'AES-GCM' }, k, data)
            check = abort
            return result
        }),
    )
}

async function getLocalKeyOf(
    id: ProfileIdentifier,
    tx?: IDBPSafeTransaction<PersonaDB, ['personas', 'profiles'], 'readonly'>,
) {
    tx ||= (await createReadonlyPersonaTransaction())('personas', 'profiles')

    const profile = await tx.objectStore('profiles').get(id.toText())
    if (!profile) return
    if (profile.localKey) return profile.localKey
    if (!profile.linkedPersona) return

    const persona = await tx.objectStore('personas').get(profile.linkedPersona.toText())
    return persona?.localKey
}
//#endregion

//#region ECDH
export async function deriveAESByECDH(pub: EC_Public_CryptoKey, extractable = true) {
    const curve = (pub.algorithm as EcKeyAlgorithm).namedCurve || ''
    const sameCurvePrivateKeys = new Map<string, EC_Private_JsonWebKey>()

    db: {
        const t = (await createReadonlyPersonaTransaction())('personas')
        const hasPriv = await t.objectStore('personas').index('hasPrivateKey').openCursor(IDBKeyRange.only('yes'))
        if (hasPriv === null) break db
        for await (const { value } of hasPriv) {
            if (!value.privateKey) continue
            if (value.privateKey.crv !== curve) continue
            sameCurvePrivateKeys.set(value.identifier, value.privateKey)
        }
    }

    const deriveResult = new Map<string, AESCryptoKey>()
    const result = await Promise.allSettled(
        [...sameCurvePrivateKeys].map(async ([id, key]) => {
            const k = await crypto.subtle.importKey(
                'jwk',
                key,
                { name: 'ECDH', namedCurve: key.crv! } as EcKeyAlgorithm,
                false,
                ['deriveKey'],
            )
            const result = await crypto.subtle.deriveKey(
                { name: 'ECDH', public: pub },
                k,
                { name: 'AES-GCM', length: 256 },
                extractable,
                ['encrypt', 'decrypt'],
            )
            deriveResult.set(id, result as AESCryptoKey)
        }),
    )
    const failed = result.filter((x): x is PromiseRejectedResult => x.status === 'rejected')
    if (failed.length) {
        console.warn('Failed to ECDH', ...failed.map((x) => x.reason))
    }
    return new IdentifierMap<ECKeyIdentifier, AESCryptoKey>(deriveResult, ECKeyIdentifier)
}

const KEY = decodeArrayBuffer('KEY')
const IV = decodeArrayBuffer('IV')
export async function deriveAESByECDH_version38_or_older(
    pub: EC_Public_CryptoKey,
    iv: Uint8Array,
    extractable = false,
) {
    const deriveResult = (await deriveAESByECDH(pub, true)).__raw_map__
    type R = [key: AESCryptoKey, iv: Uint8Array]
    const next_map = new Map<string, R>()

    for (const [id, key] of deriveResult) {
        const derivedKeyRaw = await crypto.subtle.exportKey('raw', key)
        const _a = concatArrayBuffer(derivedKeyRaw, iv)
        const nextAESKeyMaterial = await crypto.subtle.digest('SHA-256', concatArrayBuffer(_a, iv, KEY))
        const iv_pre = new Uint8Array(await crypto.subtle.digest('SHA-256', concatArrayBuffer(_a, iv, IV)))
        const nextIV = new Uint8Array(16)
        for (let i = 0; i <= 16; i += 1) {
            // eslint-disable-next-line no-bitwise
            nextIV[i] = iv_pre[i] ^ iv_pre[16 + i]
        }
        const nextAESKey = await crypto.subtle.importKey(
            'raw',
            nextAESKeyMaterial,
            { name: 'AES-GCM', length: 256 },
            extractable,
            ['encrypt', 'decrypt'],
        )
        next_map.set(id, [nextAESKey as AESCryptoKey, nextIV])
    }

    return new IdentifierMap<ECKeyIdentifier, R>(next_map, ECKeyIdentifier)
}
//#endregion

function abort() {
    throw new Error('Cancelled')
}