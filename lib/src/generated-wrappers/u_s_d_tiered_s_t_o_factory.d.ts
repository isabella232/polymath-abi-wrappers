import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { PolyResponse } from '../polyResponse';
export declare type USDTieredSTOFactoryEventArgs = USDTieredSTOFactoryOwnershipRenouncedEventArgs | USDTieredSTOFactoryOwnershipTransferredEventArgs | USDTieredSTOFactoryChangeFactorySetupFeeEventArgs | USDTieredSTOFactoryChangeFactoryUsageFeeEventArgs | USDTieredSTOFactoryChangeFactorySubscriptionFeeEventArgs | USDTieredSTOFactoryGenerateModuleFromFactoryEventArgs | USDTieredSTOFactoryChangeSTVersionBoundEventArgs;
export declare enum USDTieredSTOFactoryEvents {
    OwnershipRenounced = "OwnershipRenounced",
    OwnershipTransferred = "OwnershipTransferred",
    ChangeFactorySetupFee = "ChangeFactorySetupFee",
    ChangeFactoryUsageFee = "ChangeFactoryUsageFee",
    ChangeFactorySubscriptionFee = "ChangeFactorySubscriptionFee",
    GenerateModuleFromFactory = "GenerateModuleFromFactory",
    ChangeSTVersionBound = "ChangeSTVersionBound"
}
export interface USDTieredSTOFactoryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}
export interface USDTieredSTOFactoryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export interface USDTieredSTOFactoryChangeFactorySetupFeeEventArgs extends DecodedLogArgs {
    _oldSetupCost: BigNumber;
    _newSetupCost: BigNumber;
    _moduleFactory: string;
}
export interface USDTieredSTOFactoryChangeFactoryUsageFeeEventArgs extends DecodedLogArgs {
    _oldUsageCost: BigNumber;
    _newUsageCost: BigNumber;
    _moduleFactory: string;
}
export interface USDTieredSTOFactoryChangeFactorySubscriptionFeeEventArgs extends DecodedLogArgs {
    _oldSubscriptionCost: BigNumber;
    _newMonthlySubscriptionCost: BigNumber;
    _moduleFactory: string;
}
export interface USDTieredSTOFactoryGenerateModuleFromFactoryEventArgs extends DecodedLogArgs {
    _module: string;
    _moduleName: string;
    _moduleFactory: string;
    _creator: string;
    _setupCost: BigNumber;
    _timestamp: BigNumber;
}
export interface USDTieredSTOFactoryChangeSTVersionBoundEventArgs extends DecodedLogArgs {
    _boundType: string;
    _major: BigNumber;
    _minor: BigNumber;
    _patch: BigNumber;
}
export declare class USDTieredSTOFactoryContract extends BaseContract {
    monthlySubscriptionCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getName: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeTitle: {
        sendTransactionAsync(_newTitle: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newTitle: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newTitle: string): string;
        callAsync(_newTitle: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeFactorySubscriptionFee: {
        sendTransactionAsync(_newSubscriptionCost: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newSubscriptionCost: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newSubscriptionCost: BigNumber): string;
        callAsync(_newSubscriptionCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    title: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    version: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    changeFactorySetupFee: {
        sendTransactionAsync(_newSetupCost: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newSetupCost: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newSetupCost: BigNumber): string;
        callAsync(_newSetupCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    changeVersion: {
        sendTransactionAsync(_newVersion: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newVersion: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newVersion: string): string;
        callAsync(_newVersion: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    polyToken: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    description: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    setupCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getLowerSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    changeName: {
        sendTransactionAsync(_newName: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newName: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newName: string): string;
        callAsync(_newName: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getSetupCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    changeFactoryUsageFee: {
        sendTransactionAsync(_newUsageCost: BigNumber, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newUsageCost: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newUsageCost: BigNumber): string;
        callAsync(_newUsageCost: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    logicContract: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    usageCost: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    changeDescription: {
        sendTransactionAsync(_newDesc: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newDesc: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newDesc: string): string;
        callAsync(_newDesc: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferOwnership: {
        sendTransactionAsync(_newOwner: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_newOwner: string): string;
        callAsync(_newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    getUpperSTVersionBounds: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    changeSTVersionBounds: {
        sendTransactionAsync(_boundType: string, _newVersion: (number | BigNumber)[], txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_boundType: string, _newVersion: (number | BigNumber)[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_boundType: string, _newVersion: (number | BigNumber)[]): string;
        callAsync(_boundType: string, _newVersion: (number | BigNumber)[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    deploy: {
        sendTransactionAsync(_data: string, txData?: Partial<TxData>): Promise<PolyResponse>;
        estimateGasAsync(_data: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_data: string): string;
        callAsync(_data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getTypes: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
    };
    getInstructions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getTags: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=u_s_d_tiered_s_t_o_factory.d.ts.map