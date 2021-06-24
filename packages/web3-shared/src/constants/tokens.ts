import { ChainId } from '../types'

/**
 * @deprecated Use @masknet/constants
 */
export const TOKEN_CONSTANTS = {
    WETH_ADDRESS: {
        [ChainId.Mainnet]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        [ChainId.Ropsten]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        [ChainId.Rinkeby]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        [ChainId.Kovan]: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
        [ChainId.Mumbai]: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    USDC_ADDRESS: {
        [ChainId.Mainnet]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        [ChainId.Ropsten]: '0x0D9C8723B343A8368BebE0B5E89273fF8D712e3C',
        [ChainId.Rinkeby]: '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
        [ChainId.Kovan]: '0x2F375e94FC336Cdec2Dc0cCB5277FE59CBf1cAe5',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        [ChainId.Mumbai]: '',
    },
    USDT_ADDRESS: {
        [ChainId.Mainnet]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        [ChainId.Ropsten]: '0x516de3a7A567d81737e3a46ec4FF9cFD1fcb0136',
        [ChainId.Rinkeby]: '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0x55d398326f99059fF775485246999027B3197955',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        [ChainId.Mumbai]: '',
    },
    HUSD_ADDRESS: {
        [ChainId.Mainnet]: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    BUSD_ADDRESS: {
        [ChainId.Mainnet]: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    COMP_ADDRESS: {
        [ChainId.Mainnet]: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c',
        [ChainId.Mumbai]: '',
    },
    EASY_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xDb3b3b147A030F032633f6C4BEBf9a2fB5a882B5',
        [ChainId.Mumbai]: '',
    },
    MKR_ADDRESS: {
        [ChainId.Mainnet]: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    MASK_ADDRESS: {
        [ChainId.Mainnet]: '0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074',
        [ChainId.Ropsten]: '0x5B966f3a32Db9C180843bCb40267A66b73E4f022',
        [ChainId.Rinkeby]: '0xFD9Eb54f6aC885079e7bB3E207922Bb7256E3fcb',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    MSKA_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '0xe54bf69054da160c597f8b5177924b9e4b81e930',
        [ChainId.Rinkeby]: '0x960B816d6dD03eD514c03F56788279154348Ea37',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    MSKB_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '0xe379c7a6ba07575a5a49d8f8ebfd04921b86917d',
        [ChainId.Rinkeby]: '0xFa4Bddbc85c0aC7a543c4b59dCfb5deB17F67D8E',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    MSKC_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '0xb1465b954f893d921566d8bb4092b6f03fc8c313',
        [ChainId.Rinkeby]: '0xbE88c0E7029929f50c81690275395Da1d05745B0',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    MSKD_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '0x49A6D6FE38405e21C4402CcEacd23636AbE301bf',
        [ChainId.Rinkeby]: '0x57b9bD626507421d82C7542e2877D72fE7815aFd',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    MSKE_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '0xE8f4dDB8c8b655B4e161d3480522d1d576561A4D',
        [ChainId.Rinkeby]: '0xB46e44E06B89798Af11b8fE456b4796dc9026cE0',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    DAI_ADDRESS: {
        [ChainId.Mainnet]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        [ChainId.Ropsten]: '0x31f42841c2db5173425b5223809cf3a38fede360',
        [ChainId.Rinkeby]: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
        [ChainId.Kovan]: '0x1528F3FCc26d13F7079325Fb78D9442607781c8C',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        [ChainId.Mumbai]: '',
    },
    AMPL_ADDRESS: {
        [ChainId.Mainnet]: '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    OKB_ADDRESS: {
        [ChainId.Mainnet]: '0x75231F58b43240C9718Dd58B4967c5114342a86c',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    UST_ADDRESS: {
        [ChainId.Mainnet]: '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    eUSDC_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x4eBdE54ba404bE158262EDe801744b92b9878c61',
        [ChainId.Mumbai]: '',
    },
    eUSDT_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xfc39742Fe9420a7Af23757Fc7E78D1c3AE4A9474',
        [ChainId.Mumbai]: '',
    },
    eDAI_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xa1C09C8F4f5D03fcC27b456475d53d988e98D7C5',
        [ChainId.Mumbai]: '',
    },
    UNITOKEN_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
        [ChainId.Mumbai]: '',
    },
    TT01_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x1DBb7f76CDC5413eE211ff4100723791B2d98c05',
        [ChainId.Mumbai]: '',
    },
    TT02_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xd07B432B565AE10C6Dc0739989Ee3CF36A8dFf29',
        [ChainId.Mumbai]: '',
    },
    QUICK_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
        [ChainId.Mumbai]: '',
    },
    WBTC_ADDRESS: {
        [ChainId.Mainnet]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
        [ChainId.Mumbai]: '',
    },
    IGG_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0xe6FC6C7CB6d2c31b359A49A33eF08aB87F4dE7CE',
        [ChainId.Mumbai]: '',
    },
    OM_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x9f5755D47fB80100E7ee65Bf7e136FCA85Dd9334',
        [ChainId.Mumbai]: '',
    },
    SUSHI_ADDRESS: {
        [ChainId.Mainnet]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    YAM_ADDRESS: {
        [ChainId.Mainnet]: '0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    RUNE_ADDRESS: {
        [ChainId.Mainnet]: '0x3155BA85D5F96b2d030a4966AF206230e46849cb',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    YFI_ADDRESS: {
        [ChainId.Mainnet]: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    sUSD_ADDRESS: {
        [ChainId.Mainnet]: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    BTCB_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    CAKE_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '',
        [ChainId.Mumbai]: '',
    },
    ETHER_ADDRESS: {
        [ChainId.Mainnet]: '',
        [ChainId.Ropsten]: '',
        [ChainId.Rinkeby]: '',
        [ChainId.Kovan]: '',
        [ChainId.Gorli]: '',
        [ChainId.BSC]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        [ChainId.BSCT]: '',
        [ChainId.Matic]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
        [ChainId.Mumbai]: '',
    },
    NATIVE_TOKEN_ADDRESS: {
        [ChainId.Mainnet]: '0x0000000000000000000000000000000000000000',
        [ChainId.Ropsten]: '0x0000000000000000000000000000000000000000',
        [ChainId.Rinkeby]: '0x0000000000000000000000000000000000000000',
        [ChainId.Kovan]: '0x0000000000000000000000000000000000000000',
        [ChainId.Gorli]: '0x0000000000000000000000000000000000000000',
        [ChainId.BSC]: '0x0000000000000000000000000000000000000000',
        [ChainId.BSCT]: '0x0000000000000000000000000000000000000000',
        [ChainId.Matic]: '0x0000000000000000000000000000000000000000',
        [ChainId.Mumbai]: '0x0000000000000000000000000000000000000000',
    },
}