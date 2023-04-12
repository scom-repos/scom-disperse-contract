"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disperse = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Disperse_json_1 = __importDefault(require("./Disperse.json"));
class Disperse extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Disperse_json_1.default.abi, Disperse_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
        let disperseEtherParams = (params) => [params.recipients, this.wallet.utils.toString(params.values)];
        let disperseEther_send = async (params, options) => {
            let result = await this.send('disperseEther', disperseEtherParams(params), options);
            return result;
        };
        let disperseEther_call = async (params, options) => {
            let result = await this.call('disperseEther', disperseEtherParams(params), options);
            return;
        };
        let disperseEther_txData = async (params, options) => {
            let result = await this.txData('disperseEther', disperseEtherParams(params), options);
            return result;
        };
        this.disperseEther = Object.assign(disperseEther_send, {
            call: disperseEther_call,
            txData: disperseEther_txData
        });
        let disperseTokenParams = (params) => [params.token, params.recipients, this.wallet.utils.toString(params.values)];
        let disperseToken_send = async (params, options) => {
            let result = await this.send('disperseToken', disperseTokenParams(params), options);
            return result;
        };
        let disperseToken_call = async (params, options) => {
            let result = await this.call('disperseToken', disperseTokenParams(params), options);
            return;
        };
        let disperseToken_txData = async (params, options) => {
            let result = await this.txData('disperseToken', disperseTokenParams(params), options);
            return result;
        };
        this.disperseToken = Object.assign(disperseToken_send, {
            call: disperseToken_call,
            txData: disperseToken_txData
        });
        let disperseTokenSimpleParams = (params) => [params.token, params.recipients, this.wallet.utils.toString(params.values)];
        let disperseTokenSimple_send = async (params, options) => {
            let result = await this.send('disperseTokenSimple', disperseTokenSimpleParams(params), options);
            return result;
        };
        let disperseTokenSimple_call = async (params, options) => {
            let result = await this.call('disperseTokenSimple', disperseTokenSimpleParams(params), options);
            return;
        };
        let disperseTokenSimple_txData = async (params, options) => {
            let result = await this.txData('disperseTokenSimple', disperseTokenSimpleParams(params), options);
            return result;
        };
        this.disperseTokenSimple = Object.assign(disperseTokenSimple_send, {
            call: disperseTokenSimple_call,
            txData: disperseTokenSimple_txData
        });
    }
}
exports.Disperse = Disperse;
Disperse._abi = Disperse_json_1.default.abi;
