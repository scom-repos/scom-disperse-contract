import { BigNumber, IWallet } from "@ijstech/eth-contract";
export interface DisperseData {
    address: string;
    amount: BigNumber;
}
export declare function doDisperse(wallet: IWallet, contractAddress: string, tokenAddress: string | null, tokenDecimals: number | null, data: DisperseData[]): Promise<import("@ijstech/eth-contract").TransactionReceipt>;
