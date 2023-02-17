const MyContract = artifacts.require('MyContract')

contract('MyContract', ([_, creator]) => {
  it('can be deployed manually', async function () {
    const byteCode = MyContract.bytecode

    const transactionHash = await web3.eth.sendTransaction({ from: creator, to: 0x0, data: byteCode, gas: 4600000 })
    // console.log(transactionHash)

    const receipt = await web3.eth.getTransactionReceipt(transactionHash.transactionHash)

    const myContract = await MyContract.at(receipt.contractAddress)
    const addition = await myContract.add1(2, 10)
    // assert(addition.eq(12))
    assert.equal(addition, 12, 'all is well')
  })
})

// contract('MyContract', (accounts) => {
//   it('10 plus 5 equals 15', async () => {
//     const myContractInstance = await MyContract.deployed();
//     const sum = await myContractInstance.add1(10, 5);

//     assert.equal(sum, 15, "are u ok");
//   })
// })
