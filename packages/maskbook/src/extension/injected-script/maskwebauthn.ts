'use strict'

import { createCredentialsContainer } from '@dimensiondev/mask-webauthn/api'
import { AsyncCall, JSONSerialization } from 'async-call-rpc'

const channel = {
    on(listener: Function) {
        const l = (x: Event) => x instanceof CustomEvent && listener(x.detail)
        document.addEventListener('mask-logout', l)
        return function removeMaskLogoutListener() {
            document.removeEventListener('mask-logout', l)
        }
    },
    send(message: string) {
        document.dispatchEvent(new CustomEvent('mask-in', { detail: message }))
    },
}

const server = AsyncCall<{
    version: () => number
}>({}, { channel, serializer: JSONSerialization() })

async function init() {
    await untilStart()
    const currentVersion = await server.version()
    if (currentVersion < 1) {
        console.error('incorrect version')
    }
    return server
    function untilStart() {
        if (document.querySelector('html')?.getAttribute('data-mask-sdk-ready')) {
            return Promise.resolve()
        }
        return new Promise((resolve) => document.addEventListener('mask-start', resolve, { once: true }))
    }
}

const rpc = init()

const { get, create } = createCredentialsContainer({
    publicKeyAuthenticator: {
        create(...args: any[]) {
            return init().then((server) => {
                // server.create(...args)
            })
        },
        get(...args: any[]) {
            return init().then((server) => {
                // server.get(...args)
            })
        },
    },
})

Object.defineProperty(globalThis, 'maskwebauthn', {
    value: Object.freeze({
        create,
        get,
    }),
    writable: false,
})
