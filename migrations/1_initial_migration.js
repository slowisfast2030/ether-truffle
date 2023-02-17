var MyContract = artifacts.require("MyContract");
var Impossible = artifacts.require("Impossible");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
  deployer.deploy(Impossible);
};
