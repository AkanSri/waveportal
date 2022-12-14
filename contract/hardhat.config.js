require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:'.env'});


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address)
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const { STAGING_QUICKNODE_KEY, PRIVATE_KEY } = process.env;
module.exports = {
    solidity: "0.8.17",
    networks: {
      goerli: {
        url: STAGING_QUICKNODE_KEY,
        accounts: ['0x'+PRIVATE_KEY]
      },
    },
};