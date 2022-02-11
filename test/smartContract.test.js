const SmartContract = artifacts.require("TinyKiller");

// require("chai").use(require("chai-as-promised")).should();

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

    describe("address is whitelist", async () => {
        it("is admin wallet", async () => {
            const result = await smartContract.whitelist(accounts[0]);
            assert.equal(result, true);
        });
    });

    describe("Minting", async () => {
        it("should not paused", async () => {
            const result = await smartContract.paused();
            assert.equal(result, false);
        });
        it("Amount is zero", async () => {
            let threw = false
            try {
                await smartContract.mint(accounts[1], 0, "ASAGO", { from: accounts[0], value: web3.utils.toWei('1') })
            } catch (e) {
                threw = true
            }
            assert.equal(threw, true)
        });
        it("You can mint a maximum of 20 NFT at once", async () => {
            let threw = false
            try {
                await smartContract.mint(accounts[1], 21, "ASAGO", { from: accounts[0], value: web3.utils.toWei('1') })
            } catch (e) {
                threw = true
            }
            assert.equal(threw, true)
        });
        it("Ether sent is not correct", async () => {
            let threw = false
            try {
                await smartContract.mint(accounts[1], 20, "ASAGO", { from: accounts[0], value: web3.utils.toWei('0.1') })
            } catch (e) {
                threw = true
            }
            assert.equal(threw, true)
        });

        it("Minted 3 NFTs successfully for address 1", async () => {
            const result = await smartContract.mint(accounts[1], 3, "ASAGO", { from: accounts[0], value: web3.utils.toWei('1') });
            assert.equal(result.receipt.status, true);
        });

        it("address 1 has 3 NFTs", async () => {
            const result = await smartContract.walletOfOwner(accounts[1]);
            assert.equal(result.length, 3);
        });

        it("increase NFT per transaction", async () => {
            const result = await smartContract.setmaxMintAmount(2000);
            console.log("increased")
        });
        

        it("Exceeds maximum supply", async () => {
            let threw = "";
            try {
              
                await smartContract.mint(accounts[1], 2000, "ASAGO", { from: accounts[0], value: web3.utils.toWei('1') });
              
            } catch (e) {
                threw = e.reason
            }
            assert.equal(threw,"Exceeds maximum supply")
        });
    });
});