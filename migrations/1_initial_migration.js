var MyContract = artifacts.require("MyContract");
var Impossible = artifacts.require("Impossible");
var AnotherContract = artifacts.require("AnotherContract");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
  deployer.deploy(Impossible);
  deployer.deploy(AnotherContract);
};
