require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Charger les variables d'environnement

module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: "https://sepolia-rpc.scroll.io", // URL du Scroll Sepolia Testnet
            accounts: [process.env.PRIVATE_KEY],  // Clé privée chargée depuis .env
        },
    },
};
