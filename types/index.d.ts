import { IWallet } from '@ijstech/eth-wallet';
import * as Contracts from './contracts/index';
export * as DisperseActions from './utils';
export { DisperseData } from './utils';
export { Contracts };
export interface IDeployResult {
    disperse: string;
}
export declare function deploy(wallet: IWallet): Promise<IDeployResult>;
export declare function onProgress(handler: any): void;
declare const _default: {
    Contracts: typeof Contracts;
    deploy: typeof deploy;
    onProgress: typeof onProgress;
};
export default _default;
