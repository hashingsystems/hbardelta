# Decentralized Exchange on Hedera Hashgraph

Hedera DEX is a Gitcoin Global Communities hackathon project.

Contracts were deployed on Hedera using [Console](https://console.hashingsystems.com/) and all interactions with the smart contracts are done using [Composer](https://chrome.google.com/webstore/detail/composer-for-hedera-hashg/hdjnnemgikeoehneddegfcmkljenlean)

# Technical
1. You can find exchange and ERC20 contracts in the `contracts` folder.
2. You can find web-app in `dex-app` folder.

Deploy contracts using [Console](https://console.hashingsystems.com/).
Web-app is a static app that is IPFS friendly (should you decide to use it). You can run it on your local system by simply using a npm package called `http-server`. Just clone the repo, go to the dex-app folder and run the `http-server` command, then open `localhost:8080` in your browser.

# Functions & Logic

I have deployed 3 ERC20 tokens, one is hypothetical ETH pegged token called ETHB, this is the base token of the DEX, all other tokens form a pair with it.

Other two tokens are CoolToken and FIXED.

You will need to get hold of these tokens (message me on discord), once you have them you can simply log-in to the dex-app, choose an orderbook and then start depositing choosen token and ETHB into the DEX contract.

Once you have the tokens in the DEX contract, you can make Buy and Sell orders.

A video demonstraction is provided below.  

# Demo Video
https://www.youtube.com/watch?v=dCQZ0vKFd-c

[<img src="https://img.youtube.com/vi/dCQZ0vKFd-c/maxresdefault.jpg" width="50%">](https://youtu.be/dCQZ0vKFd-c)
