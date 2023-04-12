import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDisperseEtherParams {
    recipients: string[];
    values: (number | BigNumber)[];
}
export interface IDisperseTokenParams {
    token: string;
    recipients: string[];
    values: (number | BigNumber)[];
}
export interface IDisperseTokenSimpleParams {
    token: string;
    recipients: string[];
    values: (number | BigNumber)[];
}
export declare class Disperse extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    disperseEther: {
        (params: IDisperseEtherParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDisperseEtherParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
        txData: (params: IDisperseEtherParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
    };
    disperseToken: {
        (params: IDisperseTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDisperseTokenParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IDisperseTokenParams, options?: TransactionOptions) => Promise<string>;
    };
    disperseTokenSimple: {
        (params: IDisperseTokenSimpleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDisperseTokenSimpleParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IDisperseTokenSimpleParams, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
