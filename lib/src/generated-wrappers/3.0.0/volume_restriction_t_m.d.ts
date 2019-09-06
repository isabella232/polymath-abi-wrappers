import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, TxData, SupportedProvider, AbiDefinition } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../../PolyResponse';
export declare type VolumeRestrictionTMEventArgs_3_0_0 = VolumeRestrictionTMChangedExemptWalletListEventArgs_3_0_0 | VolumeRestrictionTMAddIndividualRestrictionEventArgs_3_0_0 | VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs_3_0_0 | VolumeRestrictionTMModifyIndividualRestrictionEventArgs_3_0_0 | VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs_3_0_0 | VolumeRestrictionTMAddDefaultRestrictionEventArgs_3_0_0 | VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs_3_0_0 | VolumeRestrictionTMModifyDefaultRestrictionEventArgs_3_0_0 | VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs_3_0_0 | VolumeRestrictionTMIndividualRestrictionRemovedEventArgs_3_0_0 | VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs_3_0_0 | VolumeRestrictionTMDefaultRestrictionRemovedEventArgs_3_0_0 | VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs_3_0_0 | VolumeRestrictionTMPauseEventArgs_3_0_0 | VolumeRestrictionTMUnpauseEventArgs_3_0_0;
export declare enum VolumeRestrictionTMEvents_3_0_0 {
    ChangedExemptWalletList = "ChangedExemptWalletList",
    AddIndividualRestriction = "AddIndividualRestriction",
    AddIndividualDailyRestriction = "AddIndividualDailyRestriction",
    ModifyIndividualRestriction = "ModifyIndividualRestriction",
    ModifyIndividualDailyRestriction = "ModifyIndividualDailyRestriction",
    AddDefaultRestriction = "AddDefaultRestriction",
    AddDefaultDailyRestriction = "AddDefaultDailyRestriction",
    ModifyDefaultRestriction = "ModifyDefaultRestriction",
    ModifyDefaultDailyRestriction = "ModifyDefaultDailyRestriction",
    IndividualRestrictionRemoved = "IndividualRestrictionRemoved",
    IndividualDailyRestrictionRemoved = "IndividualDailyRestrictionRemoved",
    DefaultRestrictionRemoved = "DefaultRestrictionRemoved",
    DefaultDailyRestrictionRemoved = "DefaultDailyRestrictionRemoved",
    Pause = "Pause",
    Unpause = "Unpause"
}
export interface VolumeRestrictionTMChangedExemptWalletListEventArgs_3_0_0 extends DecodedLogArgs {
    _wallet: string;
    _exempted: boolean;
}
export interface VolumeRestrictionTMAddIndividualRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyIndividualRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _holder: string;
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMAddDefaultRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyDefaultRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs_3_0_0 extends DecodedLogArgs {
    _allowedTokens: BigNumber;
    _startTime: BigNumber;
    _rollingPeriodInDays: BigNumber;
    _endTime: BigNumber;
    _typeOfRestriction: BigNumber;
}
export interface VolumeRestrictionTMIndividualRestrictionRemovedEventArgs_3_0_0 extends DecodedLogArgs {
    _holder: string;
}
export interface VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs_3_0_0 extends DecodedLogArgs {
    _holder: string;
}
export interface VolumeRestrictionTMDefaultRestrictionRemovedEventArgs_3_0_0 extends DecodedLogArgs {
}
export interface VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs_3_0_0 extends DecodedLogArgs {
}
export interface VolumeRestrictionTMPauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export interface VolumeRestrictionTMUnpauseEventArgs_3_0_0 extends DecodedLogArgs {
    account: string;
}
export declare class VolumeRestrictionTMContract_3_0_0 extends BaseContract {
    private _defaultEstimateGasFactor;
    reclaimETH: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    ADMIN: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    unpause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    paused: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(): string;
    };
    UNLOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    pause: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    reclaimERC20: {
        sendTransactionAsync(_tokenContract: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_tokenContract: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_tokenContract: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_tokenContract: string): string;
    };
    OPERATOR: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    LOCKED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    securityToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    factory: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getDataStore: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    executeTransfer: {
        sendTransactionAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string;
    };
    verifyTransfer: {
        callAsync(_from: string, index_1: string, _amount: BigNumber, index_3: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, string]>;
        getABIEncodedTransactionData(_from: string, index_1: string, _amount: BigNumber, index_3: string): string;
    };
    changeExemptWalletList: {
        sendTransactionAsync(_wallet: string, _exempted: boolean, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_wallet: string, _exempted: boolean, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_wallet: string, _exempted: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_wallet: string, _exempted: boolean): string;
    };
    addIndividualRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    addIndividualDailyRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    addIndividualDailyRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
    };
    addIndividualRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
    };
    addDefaultRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    addDefaultDailyRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    removeIndividualRestriction: {
        sendTransactionAsync(_holder: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holder: string): string;
    };
    removeIndividualRestrictionMulti: {
        sendTransactionAsync(_holders: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holders: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holders: string[]): string;
    };
    removeIndividualDailyRestriction: {
        sendTransactionAsync(_holder: string, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holder: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holder: string): string;
    };
    removeIndividualDailyRestrictionMulti: {
        sendTransactionAsync(_holders: string[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holders: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holders: string[]): string;
    };
    removeDefaultRestriction: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    removeDefaultDailyRestriction: {
        sendTransactionAsync(txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(): string;
    };
    modifyIndividualRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    modifyIndividualDailyRestriction: {
        sendTransactionAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holder: string, _allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    modifyIndividualDailyRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
    };
    modifyIndividualRestrictionMulti: {
        sendTransactionAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_holders: string[], _allowedTokens: BigNumber[], _startTimes: BigNumber[], _rollingPeriodInDays: BigNumber[], _endTimes: BigNumber[], _restrictionTypes: (number | BigNumber)[]): string;
    };
    modifyDefaultRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _rollingPeriodInDays: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    modifyDefaultDailyRestriction: {
        sendTransactionAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, txData?: Partial<TxData> | undefined, estimateGasFactor?: number | undefined): Promise<PolyResponse>;
        estimateGasAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, factor?: number | undefined, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_allowedTokens: BigNumber, _startTime: BigNumber, _endTime: BigNumber, _restrictionType: number | BigNumber): string;
    };
    getTokensByPartition: {
        callAsync(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_partition: string, _tokenHolder: string, _additionalBalance: BigNumber): string;
    };
    getIndividualBucketDetailsToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_user: string): string;
    };
    getDefaultBucketDetailsToUser: {
        callAsync(_user: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_user: string): string;
    };
    getTotalTradedByUser: {
        callAsync(_user: string, _at: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_user: string, _at: BigNumber): string;
    };
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    getExemptAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getIndividualRestriction: {
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_investor: string): string;
    };
    getIndividualDailyRestriction: {
        callAsync(_investor: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(_investor: string): string;
    };
    getDefaultRestriction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(): string;
    };
    getDefaultDailyRestriction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        getABIEncodedTransactionData(): string;
    };
    getRestrictionData: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber[], BigNumber[], BigNumber[], BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(): string;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _securityToken: string, _polyAddress: string): Promise<VolumeRestrictionTMContract_3_0_0>;
    /**
     * @returns The contract ABI
     */
    static ABI(): ContractAbi;
    /**
     * To add ABIs to the decoder to decode every event log emmited
     */
    addABItoDecoder(abiArray: AbiDefinition[], contractName?: string): void;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number);
}
//# sourceMappingURL=volume_restriction_t_m.d.ts.map