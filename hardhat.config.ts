import { task } from 'hardhat/config';

import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';
import '@nomiclabs/hardhat-web3';
import '@nomiclabs/hardhat-ethers';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, { ethers }) => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async (taskArgs, { web3 }) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, 'ether'), 'ETH');
  });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  defaultNetwork: 'hardhat',
  paths: {
    artifacts: './src/artifacts',
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/projectid",
    //   accounts: [process.env.a2key]
    // },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: '0.8.3',
};
