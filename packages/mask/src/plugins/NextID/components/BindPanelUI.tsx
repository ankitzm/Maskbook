import { memo } from 'react'
import { Box, DialogActions, DialogContent, Stack, Typography } from '@mui/material'
import { MasksIcon } from '@masknet/icons'
import { WalletStatusBox } from '../../../components/shared/WalletStatusBox'
import { LoadingButton } from '@mui/lab'
import DoneIcon from '@mui/icons-material/Done'
import { useI18N } from '../locales'
import { getMaskColor, makeStyles } from '@masknet/theme'
import type { Persona } from '../../../database'
import { formatFingerprint, LoadingAnimation } from '@masknet/shared'
import { InjectedDialog } from '../../../components/shared/InjectedDialog'
import classNames from 'classnames'
import { NetworkPluginID, usePluginIDContext } from '@masknet/plugin-infra'

const useStyles = makeStyles()((theme) => ({
    persona: {
        padding: theme.spacing(1.5),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        borderRadius: 8,
        alignItems: 'center',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '4px',
        width: 48,
        height: 48,
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500,
    },
    identifier: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'break-all',
    },
    subTitle: {
        fontSize: 18,
        lineHeight: '24px',
        fontWeight: 600,
        marginBottom: 11.5,
        color: theme.palette.text.primary,
    },
    done: {
        background: '#60DFAB !important',
        color: `${theme.palette.text.primary} !important`,
    },
    loadingIcon: {
        position: 'relative',
        right: -6,
    },
    stepNumber: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        border: `1px solid ${getMaskColor(theme).twitterMain}`,
        borderRadius: '50%',
    },
    stepNumberDone: {
        border: '1px solid #60DFAB',
        color: '#60DFAB',
    },
    stepLine: {
        borderTop: `1px solid ${getMaskColor(theme).twitterMain}`,
        height: 0,
        width: '60%',
        marginLeft: '24px',
        marginRight: '24px',
    },
    stepLineDone: {
        border: '0.5px solid #60DFAB',
    },
    error: {
        color: getMaskColor(theme).redMain,
        paddingLeft: theme.spacing(0.5),
        borderLeft: `solid 2px ${getMaskColor(theme).redMain}`,
    },
}))

interface BindPanelUIProps {
    title: string
    open: boolean
    currentPersona: Persona
    action: 'create' | 'delete'
    signature: {
        persona: {
            value?: string
            loading: boolean
        }
        wallet: {
            value?: string
            loading: boolean
        }
    }
    isBound: boolean
    isCurrentAccount: boolean
    onClose(): void
    onPersonaSign(): void
    onWalletSign(): void
}

const SUPPORTED_PLUGINS = [NetworkPluginID.PLUGIN_EVM]

export const BindPanelUI = memo<BindPanelUIProps>(
    ({
        onPersonaSign,
        onWalletSign,
        currentPersona,
        signature,
        action,
        isBound,
        title,
        onClose,
        open,
        isCurrentAccount,
    }) => {
        const t = useI18N()
        const { classes } = useStyles()
        const pluginId = usePluginIDContext()
        const isSupported = SUPPORTED_PLUGINS.includes(pluginId)

        const isDisableWalletSign = action === 'delete' ? false : isBound
        const isDisablePersonaSign = action === 'delete' ? !isBound : isBound

        const isWalletSigned = !!signature.wallet.value
        const isPersonaSigned = !!signature.persona.value
        console.log(isWalletSigned)

        return (
            <InjectedDialog open={open} title={title} onClose={onClose}>
                <DialogContent style={{ minWidth: 515 }}>
                    <Box>
                        <Typography className={classes.subTitle}>{t.persona()}</Typography>
                        <Stack direction="row" className={classes.persona}>
                            <div className={classes.iconContainer}>
                                <MasksIcon style={{ fontSize: '48px' }} />
                            </div>
                            <div>
                                <Typography className={classes.name}>{currentPersona?.nickname}</Typography>
                                <Typography className={classes.identifier}>
                                    {formatFingerprint(currentPersona?.identifier.compressedPoint ?? '', 10)}
                                </Typography>
                            </div>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography className={classes.subTitle}>{t.wallet()}</Typography>
                        <WalletStatusBox />
                    </Box>
                    {isBound && action === 'create' && (
                        <Typography className={classes.error}>{t.bind_wallet_bound_error()}</Typography>
                    )}
                    {!isSupported && <Typography className={classes.error}>{t.unsupported_network()}</Typography>}
                    {action === 'create' && (
                        <Stack direction="row" alignItems="center" justifyContent="center" px="16%" pt="24px">
                            <Box
                                className={classNames(
                                    classes.stepNumber,
                                    isPersonaSigned ? classes.stepNumberDone : null,
                                )}>
                                1
                            </Box>
                            <Box
                                className={classNames(
                                    classes.stepLine,
                                    isPersonaSigned || isWalletSigned ? classes.stepLineDone : null,
                                )}
                            />
                            <Box
                                className={classNames(
                                    classes.stepNumber,
                                    isWalletSigned ? classes.stepNumberDone : null,
                                )}>
                                2
                            </Box>
                        </Stack>
                    )}
                </DialogContent>
                <DialogActions>
                    <Stack
                        direction="row"
                        mb="24px"
                        mt="24px"
                        width="100%"
                        justifyContent="space-around"
                        alignItems="center">
                        <LoadingButton
                            disabled={isDisablePersonaSign || !!isPersonaSigned || !isSupported}
                            classes={{
                                loadingIndicatorEnd: classes.loadingIcon,
                            }}
                            loadingPosition="end"
                            style={{ width: '40%' }}
                            className={isPersonaSigned ? classes.done : ''}
                            loading={signature.persona.loading}
                            variant="contained"
                            onClick={onPersonaSign}
                            endIcon={
                                isPersonaSigned ? (
                                    <DoneIcon sx={{ color: (theme) => theme.palette.text.primary }} />
                                ) : null
                            }
                            loadingIndicator={<LoadingAnimation />}>
                            {t.persona_sign()}
                        </LoadingButton>
                        {action === 'delete' && <Box> {t.unbind_or()} </Box>}
                        <LoadingButton
                            classes={{
                                loadingIndicatorEnd: classes.loadingIcon,
                            }}
                            loadingPosition="end"
                            disabled={isDisableWalletSign || !isCurrentAccount || !!isWalletSigned || !isSupported}
                            style={{ width: '40%' }}
                            className={isWalletSigned ? classes.done : ''}
                            loading={signature.wallet.loading}
                            variant="contained"
                            onClick={onWalletSign}
                            endIcon={
                                isWalletSigned ? (
                                    <DoneIcon sx={{ color: (theme) => theme.palette.text.primary }} />
                                ) : null
                            }
                            loadingIndicator={<LoadingAnimation />}>
                            {!isCurrentAccount && action === 'delete'
                                ? t.unbind_wallet_same_account_error()
                                : t.wallet_sign()}
                        </LoadingButton>
                    </Stack>
                </DialogActions>
            </InjectedDialog>
        )
    },
)
