var EchoChainber = artifacts.require("./EchoChainber.sol");

module.exports = function(deployer) {
  deployer.deploy(EchoChainber);
};
