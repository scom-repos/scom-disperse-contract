export default {
"abi":[
{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"disperseEther","outputs":[],"stateMutability":"payable","type":"function"},
{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"disperseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"disperseTokenSimple","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b5061072c806100206000396000f3fe6080604052600436106100345760003560e01c806351ba162c14610039578063c73a2d601461005b578063e63d38ed1461007b575b600080fd5b34801561004557600080fd5b50610059610054366004610512565b61008e565b005b34801561006757600080fd5b50610059610076366004610512565b6101b7565b610059610089366004610595565b6103c3565b60005b838110156101af578573ffffffffffffffffffffffffffffffffffffffff166323b872dd338787858181106100c8576100c8610601565b90506020020160208101906100dd9190610630565b8686868181106100ef576100ef610601565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff9586166004820152949093166024850152506020909102013560448201526064016020604051808303816000875af1158015610170573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101949190610654565b61019d57600080fd5b806101a7816106a5565b915050610091565b505050505050565b6000805b848110156101fb578383828181106101d5576101d5610601565b90506020020135826101e791906106dd565b9150806101f3816106a5565b9150506101bb565b506040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810182905273ffffffffffffffffffffffffffffffffffffffff8716906323b872dd906064016020604051808303816000875af1158015610275573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102999190610654565b6102a257600080fd5b60005b848110156103ba578673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8787848181106102db576102db610601565b90506020020160208101906102f09190610630565b86868581811061030257610302610601565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff909416600485015260200291909101356024830152506044016020604051808303816000875af115801561037b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f9190610654565b6103a857600080fd5b806103b2816106a5565b9150506102a5565b50505050505050565b60005b83811015610465578484828181106103e0576103e0610601565b90506020020160208101906103f59190610630565b73ffffffffffffffffffffffffffffffffffffffff166108fc84848481811061042057610420610601565b905060200201359081150290604051600060405180830381858888f19350505050158015610452573d6000803e3d6000fd5b508061045d816106a5565b9150506103c6565b5047801561049a57604051339082156108fc029083906000818181858888f193505050501580156101af573d6000803e3d6000fd5b5050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146104c357600080fd5b50565b60008083601f8401126104d857600080fd5b50813567ffffffffffffffff8111156104f057600080fd5b6020830191508360208260051b850101111561050b57600080fd5b9250929050565b60008060008060006060868803121561052a57600080fd5b8535610535816104a1565b9450602086013567ffffffffffffffff8082111561055257600080fd5b61055e89838a016104c6565b9096509450604088013591508082111561057757600080fd5b50610584888289016104c6565b969995985093965092949392505050565b600080600080604085870312156105ab57600080fd5b843567ffffffffffffffff808211156105c357600080fd5b6105cf888389016104c6565b909650945060208701359150808211156105e857600080fd5b506105f5878288016104c6565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561064257600080fd5b813561064d816104a1565b9392505050565b60006020828403121561066657600080fd5b8151801515811461064d57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036106d6576106d6610676565b5060010190565b808201808211156106f0576106f0610676565b9291505056fea2646970667358221220ae17f947d38770afe70d82c3a668887686a8857af4ee60d47e7b255568123bb264736f6c63430008130033"
}