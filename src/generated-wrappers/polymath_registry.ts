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

export type PolymathRegistryEventArgs =
    | PolymathRegistryChangeAddressEventArgs
    | PolymathRegistryOwnershipRenouncedEventArgs
    | PolymathRegistryOwnershipTransferredEventArgs;

export enum PolymathRegistryEvents {
    ChangeAddress = 'ChangeAddress',
    OwnershipRenounced = 'OwnershipRenounced',
    OwnershipTransferred = 'OwnershipTransferred',
}

export interface PolymathRegistryChangeAddressEventArgs extends DecodedLogArgs {
    _nameKey: string;
    _oldAddress: string;
    _newAddress: string;
}

export interface PolymathRegistryOwnershipRenouncedEventArgs extends DecodedLogArgs {
    previousOwner: string;
}

export interface PolymathRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class PolymathRegistryContract extends BaseContract {
    private _defaultEstimateGasFactor: number;
    public storedAddresses = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'storedAddresses(bytes32)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [index_0
        ] = BaseContract._formatABIDataItemList(inputAbi, [index_0
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.storedAddresses;
            const encodedData = ethersFunction.encode([index_0
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
            const outputAbi = (_.find(self.abi, {name: 'storedAddresses'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public renounceOwnership = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('renounceOwnership()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
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
                self.renounceOwnership.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
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
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('renounceOwnership()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
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
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('renounceOwnership()').inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'renounceOwnership()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.renounceOwnership;
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
            const outputAbi = (_.find(self.abi, {name: 'renounceOwnership'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public reclaimERC20 = {
        async sendTransactionAsync(
            _tokenContract: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
            [_tokenContract
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract
    ]);
            const encodedData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
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
                self.reclaimERC20.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
                    self,
                    _tokenContract
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _tokenContract: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
            [_tokenContract
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
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
            _tokenContract: string,
        ): string {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
            [_tokenContract
    ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tokenContract: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'reclaimERC20(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_tokenContract
        ] = BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.reclaimERC20;
            const encodedData = ethersFunction.encode([_tokenContract
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
            const outputAbi = (_.find(self.abi, {name: 'reclaimERC20'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'owner()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, []);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner;
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
            const outputAbi = (_.find(self.abi, {name: 'owner'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            _newOwner: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [_newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner
    ]);
            const encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
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
                self.transferOwnership.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
                    self,
                    _newOwner
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _newOwner: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [_newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
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
            _newOwner: string,
        ): string {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
            [_newOwner
    ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _newOwner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'transferOwnership(address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_newOwner
        ] = BaseContract._formatABIDataItemList(inputAbi, [_newOwner
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferOwnership;
            const encodedData = ethersFunction.encode([_newOwner
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
            const outputAbi = (_.find(self.abi, {name: 'transferOwnership'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    public getAddress = {
        async callAsync(
            _nameKey: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'getAddress(string)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_nameKey
        ] = BaseContract._formatABIDataItemList(inputAbi, [_nameKey
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_nameKey
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAddress;
            const encodedData = ethersFunction.encode([_nameKey
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
            const outputAbi = (_.find(self.abi, {name: 'getAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public changeAddress = {
        async sendTransactionAsync(
            _nameKey: string,
            _newAddress: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<PolyResponse> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('changeAddress(string,address)').inputs;
            [_nameKey,
    _newAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
    _newAddress
    ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_nameKey,
    _newAddress
    ]);
            const encodedData = self._lookupEthersInterface('changeAddress(string,address)').functions.changeAddress.encode([_nameKey,
    _newAddress
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
                self.changeAddress.estimateGasAsync.bind<PolymathRegistryContract, any, Promise<number>>(
                    self,
                    _nameKey,
    _newAddress
    ,
                    estimateGasFactor,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            const receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
    
            return new PolyResponse(txHash, receipt);
        },
        async estimateGasAsync(
            _nameKey: string,
            _newAddress: string,
            factor?: number,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('changeAddress(string,address)').inputs;
            [_nameKey,
    _newAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
    _newAddress
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('changeAddress(string,address)').functions.changeAddress.encode([_nameKey,
    _newAddress
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
            _nameKey: string,
            _newAddress: string,
        ): string {
            const self = this as any as PolymathRegistryContract;
            const inputAbi = self._lookupAbi('changeAddress(string,address)').inputs;
            [_nameKey,
    _newAddress
    ] = BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
    _newAddress
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('changeAddress(string,address)').functions.changeAddress.encode([_nameKey,
    _newAddress
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _nameKey: string,
            _newAddress: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as PolymathRegistryContract;
            const functionSignature = 'changeAddress(string,address)';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [_nameKey,
        _newAddress
        ] = BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
        _newAddress
        ], BaseContract._bigNumberToString.bind(self));
            BaseContract.strictArgumentEncodingCheck(inputAbi, [_nameKey,
        _newAddress
        ]);
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAddress;
            const encodedData = ethersFunction.encode([_nameKey,
        _newAddress
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
            const outputAbi = (_.find(self.abi, {name: 'changeAddress'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray;
        },
    };
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>, defaultEstimateGasFactor?: number) {
        super('PolymathRegistry', abi, address, provider, txDefaults);
        this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1 : defaultEstimateGasFactor;
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
