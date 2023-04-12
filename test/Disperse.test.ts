import 'mocha';

import { Utils, Wallet, Erc20, BigNumber } from "@ijstech/eth-wallet";
import { Contracts } from '../src/index';
import * as Ganache from "ganache";
import { DisperseData, DisperseActions} from '../src/index'

describe('##Contracts', function() {  
    this.timeout(40000);
    let provider = Ganache.provider()
    let wallet = new Wallet(provider);
    let accounts: string[];
    let disperse: Contracts.Disperse;
    
    let disperseData: DisperseData[] = [];
    let token1: Erc20;
    before(async function(){
        accounts = await wallet.accounts;
    })
    it('Deploy contracts', async function(){
        wallet.defaultAccount = accounts[0];
        disperse = new Contracts.Disperse(wallet);
        await disperse.deploy();
        token1 = new Erc20(wallet);
        await token1.deploy({
            name: 'ERC20',
            symbol: 'ERC20',
            minter: accounts[0],
            cap: 1000
        });
        await token1.mint({
            address: accounts[0],
            amount: 1000
        })
        await token1.approve({
            spender: disperse.address,
            amount: 1000
        })
    })
    it('Disperse by account 0', async function(){
        wallet.defaultAccount = accounts[0];
        disperseData = [
            {
                address: accounts[1],
                amount:new BigNumber('123.123')
            },
            {
                address: accounts[2],
                amount:new BigNumber('0.123')
            }
        ];
        console.log(`${accounts[0]} balance : ${await token1.balance}`);
        //FIXME will fail
        let receipt = await DisperseActions.doDisperse(
            wallet, 
            disperse.address, 
            token1.address,
            await token1.decimals,
            disperseData
        );
        console.log(receipt.transactionHash);
    })
    it('Verify token amount',async function(){
        wallet.defaultAccount = accounts[1];

        console.log(`${accounts[1]} balance : ${await token1.balance}`);
        
        wallet.defaultAccount = accounts[2];
        console.log(`${accounts[2]} balance : ${await token1.balance}`);

    })
})