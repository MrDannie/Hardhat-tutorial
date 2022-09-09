require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_PRIVATE_KEY =
  "2fe1af546f0c6d3b2d29074e315dcdd801a8ffc1823264d58a22742cde8b597c";
const ALCHEMY_API_KEY = "QyiVa-ke1TPHiIF2EPA9039zX10h4AWY";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
