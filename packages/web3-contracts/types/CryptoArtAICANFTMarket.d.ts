/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
    Callback,
    PayableTransactionObject,
    NonPayableTransactionObject,
    BlockType,
    ContractEventLog,
    BaseContract,
} from './types'

export interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export type AuctionAwardUpdated = ContractEventLog<{
    auctionId: string
    bidder: string
    award: string
    0: string
    1: string
    2: string
}>
export type MarketFeesUpdated = ContractEventLog<{
    caPoints: string
    artistPoints: string
    sellerPoints: string
    auctionAwardPoints: string
    sharePoints: string
    0: string
    1: string
    2: string
    3: string
    4: string
}>
export type ReserveAuctionBidPlaced = ContractEventLog<{
    auctionId: string
    bidder: string
    amount: string
    endTime: string
    0: string
    1: string
    2: string
    3: string
}>
export type ReserveAuctionCanceled = ContractEventLog<{
    auctionId: string
    0: string
}>
export type ReserveAuctionCanceledByAdmin = ContractEventLog<{
    auctionId: string
    reason: string
    0: string
    1: string
}>
export type ReserveAuctionConfigUpdated = ContractEventLog<{
    minPercentIncrementInBasisPoints: string
    maxBidIncrementRequirement: string
    duration: string
    extensionDuration: string
    goLiveDate: string
    0: string
    1: string
    2: string
    3: string
    4: string
}>
export type ReserveAuctionCreated = ContractEventLog<{
    seller: string
    tokenId: string
    auctionId: string
    duration: string
    extensionDuration: string
    reservePrice: string
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
}>
export type ReserveAuctionFinalized = ContractEventLog<{
    auctionId: string
    seller: string
    bidder: string
    tokenId: string
    amount: string
    0: string
    1: string
    2: string
    3: string
    4: string
}>
export type ReserveAuctionSellerMigrated = ContractEventLog<{
    auctionId: string
    originalSellerAddress: string
    newSellerAddress: string
    0: string
    1: string
    2: string
}>
export type ReserveAuctionUpdated = ContractEventLog<{
    auctionId: string
    reservePrice: string
    0: string
    1: string
}>
export type ShareAwardUpdated = ContractEventLog<{
    share: string
    award: string
    0: string
    1: string
}>
export type WithdrawPending = ContractEventLog<{
    user: string
    amount: string
    0: string
    1: string
}>
export type Withdrawal = ContractEventLog<{
    user: string
    amount: string
    0: string
    1: string
}>

export interface CryptoArtAICANFTMarket extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): CryptoArtAICANFTMarket
    clone(): CryptoArtAICANFTMarket
    methods: {
        accessControl(): NonPayableTransactionObject<string>

        adminCancelReserveAuction(auctionId: number | string | BN, reason: string): NonPayableTransactionObject<void>

        adminUpdateConfig(
            minPercentIncrementInBasisPoints: number | string | BN,
            duration: number | string | BN,
            _caPoints: number | string | BN,
            _artistPoints: number | string | BN,
            _sellerPoints: number | string | BN,
            _auctionAwardPoints: number | string | BN,
            _sharePoints: number | string | BN,
        ): NonPayableTransactionObject<void>

        awards(arg0: string): NonPayableTransactionObject<string>

        cancelReserveAuction(auctionId: number | string | BN): NonPayableTransactionObject<void>

        createReserveAuction(
            tokenId: number | string | BN,
            seller: string,
            reservePrice: number | string | BN,
        ): NonPayableTransactionObject<void>

        finalizeReserveAuction(auctionId: number | string | BN): NonPayableTransactionObject<void>

        getArtist(tokenId: number | string | BN): NonPayableTransactionObject<string>

        getCATreasury(): NonPayableTransactionObject<string>

        getFeeConfig(): NonPayableTransactionObject<{
            0: string
            1: string
            2: string
            3: string
            4: string
        }>

        getFees(
            tokenId: number | string | BN,
            price: number | string | BN,
        ): NonPayableTransactionObject<{
            caFee: string
            artistFee: string
            sellerFee: string
            auctionFee: string
            shareFee: string
            0: string
            1: string
            2: string
            3: string
            4: string
        }>

        getIsPrimary(tokenId: number | string | BN): NonPayableTransactionObject<boolean>

        getMinBidAmount(auctionId: number | string | BN): NonPayableTransactionObject<string>

        getPendingWithdrawal(user: string): NonPayableTransactionObject<string>

        getReserveAuction(
            auctionId: number | string | BN,
        ): NonPayableTransactionObject<[string, string, string, string, string, string, string, string]>

        getReserveAuctionConfig(): NonPayableTransactionObject<{
            minPercentIncrementInBasisPoints: string
            duration: string
            0: string
            1: string
        }>

        getReserveAuctionIdFor(tokenId: number | string | BN): NonPayableTransactionObject<string>

        placeBid(auctionId: number | string | BN, shareUser: string): PayableTransactionObject<void>

        setCATreasury(_treasury: string): NonPayableTransactionObject<void>

        updateReserveAuction(
            auctionId: number | string | BN,
            reservePrice: number | string | BN,
        ): NonPayableTransactionObject<void>

        withdraw(): NonPayableTransactionObject<void>

        withdrawFor(user: string): NonPayableTransactionObject<void>

        withdrawFunds(to: string): NonPayableTransactionObject<void>

        withdrawStuckEther(_withdrawalAccount: string): NonPayableTransactionObject<void>

        withdrawThreshold(): NonPayableTransactionObject<string>
    }
    events: {
        AuctionAwardUpdated(cb?: Callback<AuctionAwardUpdated>): EventEmitter
        AuctionAwardUpdated(options?: EventOptions, cb?: Callback<AuctionAwardUpdated>): EventEmitter

        MarketFeesUpdated(cb?: Callback<MarketFeesUpdated>): EventEmitter
        MarketFeesUpdated(options?: EventOptions, cb?: Callback<MarketFeesUpdated>): EventEmitter

        ReserveAuctionBidPlaced(cb?: Callback<ReserveAuctionBidPlaced>): EventEmitter
        ReserveAuctionBidPlaced(options?: EventOptions, cb?: Callback<ReserveAuctionBidPlaced>): EventEmitter

        ReserveAuctionCanceled(cb?: Callback<ReserveAuctionCanceled>): EventEmitter
        ReserveAuctionCanceled(options?: EventOptions, cb?: Callback<ReserveAuctionCanceled>): EventEmitter

        ReserveAuctionCanceledByAdmin(cb?: Callback<ReserveAuctionCanceledByAdmin>): EventEmitter
        ReserveAuctionCanceledByAdmin(
            options?: EventOptions,
            cb?: Callback<ReserveAuctionCanceledByAdmin>,
        ): EventEmitter

        ReserveAuctionConfigUpdated(cb?: Callback<ReserveAuctionConfigUpdated>): EventEmitter
        ReserveAuctionConfigUpdated(options?: EventOptions, cb?: Callback<ReserveAuctionConfigUpdated>): EventEmitter

        ReserveAuctionCreated(cb?: Callback<ReserveAuctionCreated>): EventEmitter
        ReserveAuctionCreated(options?: EventOptions, cb?: Callback<ReserveAuctionCreated>): EventEmitter

        ReserveAuctionFinalized(cb?: Callback<ReserveAuctionFinalized>): EventEmitter
        ReserveAuctionFinalized(options?: EventOptions, cb?: Callback<ReserveAuctionFinalized>): EventEmitter

        ReserveAuctionSellerMigrated(cb?: Callback<ReserveAuctionSellerMigrated>): EventEmitter
        ReserveAuctionSellerMigrated(options?: EventOptions, cb?: Callback<ReserveAuctionSellerMigrated>): EventEmitter

        ReserveAuctionUpdated(cb?: Callback<ReserveAuctionUpdated>): EventEmitter
        ReserveAuctionUpdated(options?: EventOptions, cb?: Callback<ReserveAuctionUpdated>): EventEmitter

        ShareAwardUpdated(cb?: Callback<ShareAwardUpdated>): EventEmitter
        ShareAwardUpdated(options?: EventOptions, cb?: Callback<ShareAwardUpdated>): EventEmitter

        WithdrawPending(cb?: Callback<WithdrawPending>): EventEmitter
        WithdrawPending(options?: EventOptions, cb?: Callback<WithdrawPending>): EventEmitter

        Withdrawal(cb?: Callback<Withdrawal>): EventEmitter
        Withdrawal(options?: EventOptions, cb?: Callback<Withdrawal>): EventEmitter

        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
    }

    once(event: 'AuctionAwardUpdated', cb: Callback<AuctionAwardUpdated>): void
    once(event: 'AuctionAwardUpdated', options: EventOptions, cb: Callback<AuctionAwardUpdated>): void

    once(event: 'MarketFeesUpdated', cb: Callback<MarketFeesUpdated>): void
    once(event: 'MarketFeesUpdated', options: EventOptions, cb: Callback<MarketFeesUpdated>): void

    once(event: 'ReserveAuctionBidPlaced', cb: Callback<ReserveAuctionBidPlaced>): void
    once(event: 'ReserveAuctionBidPlaced', options: EventOptions, cb: Callback<ReserveAuctionBidPlaced>): void

    once(event: 'ReserveAuctionCanceled', cb: Callback<ReserveAuctionCanceled>): void
    once(event: 'ReserveAuctionCanceled', options: EventOptions, cb: Callback<ReserveAuctionCanceled>): void

    once(event: 'ReserveAuctionCanceledByAdmin', cb: Callback<ReserveAuctionCanceledByAdmin>): void
    once(
        event: 'ReserveAuctionCanceledByAdmin',
        options: EventOptions,
        cb: Callback<ReserveAuctionCanceledByAdmin>,
    ): void

    once(event: 'ReserveAuctionConfigUpdated', cb: Callback<ReserveAuctionConfigUpdated>): void
    once(event: 'ReserveAuctionConfigUpdated', options: EventOptions, cb: Callback<ReserveAuctionConfigUpdated>): void

    once(event: 'ReserveAuctionCreated', cb: Callback<ReserveAuctionCreated>): void
    once(event: 'ReserveAuctionCreated', options: EventOptions, cb: Callback<ReserveAuctionCreated>): void

    once(event: 'ReserveAuctionFinalized', cb: Callback<ReserveAuctionFinalized>): void
    once(event: 'ReserveAuctionFinalized', options: EventOptions, cb: Callback<ReserveAuctionFinalized>): void

    once(event: 'ReserveAuctionSellerMigrated', cb: Callback<ReserveAuctionSellerMigrated>): void
    once(event: 'ReserveAuctionSellerMigrated', options: EventOptions, cb: Callback<ReserveAuctionSellerMigrated>): void

    once(event: 'ReserveAuctionUpdated', cb: Callback<ReserveAuctionUpdated>): void
    once(event: 'ReserveAuctionUpdated', options: EventOptions, cb: Callback<ReserveAuctionUpdated>): void

    once(event: 'ShareAwardUpdated', cb: Callback<ShareAwardUpdated>): void
    once(event: 'ShareAwardUpdated', options: EventOptions, cb: Callback<ShareAwardUpdated>): void

    once(event: 'WithdrawPending', cb: Callback<WithdrawPending>): void
    once(event: 'WithdrawPending', options: EventOptions, cb: Callback<WithdrawPending>): void

    once(event: 'Withdrawal', cb: Callback<Withdrawal>): void
    once(event: 'Withdrawal', options: EventOptions, cb: Callback<Withdrawal>): void
}