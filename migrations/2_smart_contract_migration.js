const SmartContract = artifacts.require("TinyKiller");

module.exports = function (deployer) {
  deployer.deploy(SmartContract , "NFT-TPC" , "NFTs" , "https://shreecapital.in/metadata/");
};
