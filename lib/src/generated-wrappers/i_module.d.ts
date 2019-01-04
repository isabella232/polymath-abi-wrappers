import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class IModuleContract extends BaseContract {
    getInitFunction: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    getPermissions: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
    };
    takeFee: {
        sendTransactionAsync(_amount: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_amount: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_amount: BigNumber): string;
        callAsync(_amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_module.d.ts.map