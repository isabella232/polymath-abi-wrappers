// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, Provider, TxData, TxDataPayable, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
import { BigNumber, classUtils, logUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { PolyResponse } from '../polyResponse';
import * as ethers from 'ethers';
import * as _ from 'lodash';
// tslint:enable:no-unused-variable

export type ITransferManagerEventArgs =
    | ITransferManagerPauseEventArgs
    | ITransferManagerUnpauseEventArgs;

export enum ITransferManagerEvents {
    Pause = 'Pause',
    Unpause = 'Unpause',
}

export interface ITransferManagerPauseEventArgs extends DecodedLogArgs {
    _timestammp: BigNumber;
}

export interface ITransferManagerUnpauseEventArgs extends DecodedLogArgs {
    _timestamp: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ITransferManagerContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public getInitFunction = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'getInitFunction()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInitFunction;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getInitFunction'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public paused = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'paused()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.paused;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'paused'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public takeFee = {
        async sendTransactionAsync(
            _amount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
    ]);
            const encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.takeFee.estimateGasAsync.bind<ITransferManagerContract, any, Promise<number>>(
                    self,
                    _amount
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _amount: BigNumber,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _amount: BigNumber,
        ): string {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
            [_amount
    ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'takeFee(uint256)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_amount
        ] = BaseContract._formatABIDataItemList(inputAbi, [_amount
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.takeFee;
            const encodedData = ethersFunction.encode([_amount
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'takeFee'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public polyToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'polyToken()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.polyToken;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'polyToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public securityToken = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'securityToken()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.securityToken;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'securityToken'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public getPermissions = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'getPermissions()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getPermissions;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'getPermissions'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public factory = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'factory()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.factory;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'factory'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public FEE_ADMIN = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'FEE_ADMIN()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.FEE_ADMIN;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'FEE_ADMIN'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public verifyTransfer = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _amount: BigNumber,
            _data: string,
            _isTransfer: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ]);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.verifyTransfer.estimateGasAsync.bind<ITransferManagerContract, any, Promise<number>>(
                    self,
                    _from,
    _to,
    _amount,
    _data,
    _isTransfer
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _amount: BigNumber,
            _data: string,
            _isTransfer: boolean,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
            _from: string,
            _to: string,
            _amount: BigNumber,
            _data: string,
            _isTransfer: boolean,
        ): string {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
            [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
    _to,
    _amount,
    _data,
    _isTransfer
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _from: string,
            _to: string,
            _amount: BigNumber,
            _data: string,
            _isTransfer: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'verifyTransfer(address,address,uint256,bytes,bool)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_from,
        _to,
        _amount,
        _data,
        _isTransfer
        ] = BaseContract._formatABIDataItemList(inputAbi, [_from,
        _to,
        _amount,
        _data,
        _isTransfer
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
        _to,
        _amount,
        _data,
        _isTransfer
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
            const encodedData = ethersFunction.encode([_from,
        _to,
        _amount,
        _data,
        _isTransfer
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'verifyTransfer'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public unpause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.unpause.estimateGasAsync.bind<ITransferManagerContract, any, Promise<number>>(
                    self,
                    
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('unpause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'unpause()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.unpause;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'unpause'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public pause = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults,
                self.pause.estimateGasAsync.bind<ITransferManagerContract, any, Promise<number>>(
                    self,
                    
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            const defaultFromAddress = (await self._web3Wrapper.getAvailableAddressesAsync())[0];
            const contractDefaults = _.defaults(
                    self._web3Wrapper.getContractDefaults(),
                    {
                        from: defaultFromAddress 
                    }
                );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                contractDefaults
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            const networkGasLimit = (await self._web3Wrapper.getBlockWithTransactionDataAsync('latest')).gasLimit;
            const _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
            const _safetyGasEstimation = Math.round(_factor * gas);
            return (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as ITransferManagerContract;
            const inputAbi = self._lookupAbi('pause()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as ITransferManagerContract;
            const functionSignature = 'pause()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.pause;
            const encodedData = ethersFunction.encode([]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            let resultArray = ethersFunction.decode(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'pause'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('ITransferManager', abi, address, provider, txDefaults);
        this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1 : defaultEstimateGasFactor;
        this._web3Wrapper.abiDecoder.addABI(abi);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
