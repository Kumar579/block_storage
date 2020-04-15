
const SimpleStorage = artifacts.require("./SimpleStorage.sol");

// set storgage value
module.exports = function() {
  async function setStorageValue() {
    const contract = await SimpleStorage.deployed();
    const value = await contract.set("You are reading value from Storage contract which was set on : " + Date);
    console.log(value);
  }
  setStorageValue();
}


