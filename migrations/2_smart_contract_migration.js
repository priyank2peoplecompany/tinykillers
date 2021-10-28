const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract , "NFT-TPC" , "NFTs" , "https://shreecapital.in/metadata/");
};
