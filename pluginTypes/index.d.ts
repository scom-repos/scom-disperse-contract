/// <reference path="@ijstech/eth-contract/index.d.ts" />
/// <amd-module name="@scom/scom-disperse-contract/contracts/Disperse.json.ts" />
declare module "@scom/scom-disperse-contract/contracts/Disperse.json.ts" {
    const _default: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-disperse-contract/contracts/Disperse.ts" />
declare module "@scom/scom-disperse-contract/contracts/Disperse.ts" {
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
    export class Disperse extends _Contract {
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
}
/// <amd-module name="@scom/scom-disperse-contract/contracts/index.ts" />
declare module "@scom/scom-disperse-contract/contracts/index.ts" {
    export { Disperse } from "@scom/scom-disperse-contract/contracts/Disperse.ts";
}
/// <amd-module name="@scom/scom-disperse-contract/utils.ts" />
declare module "@scom/scom-disperse-contract/utils.ts" {
    import { BigNumber, IWallet } from "@ijstech/eth-contract";
    export interface DisperseData {
        address: string;
        amount: BigNumber;
    }
    export function doDisperse(wallet: IWallet, contractAddress: string, tokenAddress: string | null, tokenDecimals: number | null, data: DisperseData[]): Promise<import("@ijstech/eth-contract").TransactionReceipt>;
}
/// <amd-module name="@scom/scom-disperse-contract" />
declare module "@scom/scom-disperse-contract" {
    import { IWallet } from '@ijstech/eth-wallet';
    import * as Contracts from "@scom/scom-disperse-contract/contracts/index.ts";
    export * as DisperseActions from "@scom/scom-disperse-contract/utils.ts";
    export { DisperseData } from "@scom/scom-disperse-contract/utils.ts";
    export { Contracts };
    export interface IDeployResult {
        disperse: string;
    }
    export function deploy(wallet: IWallet): Promise<IDeployResult>;
    export function onProgress(handler: any): void;
    const _default_1: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        onProgress: typeof onProgress;
    };
    export default _default_1;
}
