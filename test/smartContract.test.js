const SmartContract = artifacts.require("TinyKiller");

contract("SmartContract", (accounts) => {
  let smartContract;

  before(async () => {
    smartContract = await SmartContract.deployed();
  });

  describe("smartContract deployment", async () => {
    it("deploys successfully", async () => {
      const address = await smartContract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
    });

    it("has correct name", async () => {
      const name = await smartContract.name();
      assert.equal(name, "NFT-TPC");
    });
  });

  describe("address is whitelist",async ()=>{
    it("is admin wallet", async () => {
      const result = await smartContract.whitelist(accounts[0]);
      assert.equal(result, true);
    });
  });

  describe("Minting",async ()=>{
    it("should not paused", async () => {
      const result = await smartContract.paused();
      assert.equal(result, false);
    });
  
    it("Minted successfully", async () => {
      const result = await smartContract.mint(accounts[1],1,"ASAGO",{from:accounts[0],value:web3.utils.toWei('1')});
      assert.equal(result.receipt.status,true);
    });
  });
});
