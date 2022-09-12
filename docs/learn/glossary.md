---
sidebar_position: 6
---

# Glossary

## Introduction
When you are new to the world of cryptocurrencies and blockchain, it can be pretty daunting reading through related news, let alone an entire Whitepaper. We've all been there. That's why we've created this glossary, to help you understand not only Minima but the entire crypto-industry and the slang they use on CT (Crypto-Twitter) better.

If there are any terms that we're missing, don't hesitate to contact us and we'll add them. We will consistently work on adding new words and editing old ones to ensure accuracy.

## 51% Attack

An attack where a malicious actor overtakes 51% of a network's hashrate and wreaks havoc on the system. If a blockchain undergoes a 51% attack, the attackers can reverse transactions, mint new tokens, and enrich themselves while destroying the integrity of the original chain.

## ABS
ABS is short for Adaptive Block Scaling and describes the Process Minima uses to adjust the block size depending on the traffic over the previous 24 hours. If the network traffic was high, blocks will automatically scale up to host more transactions, whereas lower traffic is met with smaller blocks.

## ASIC
“Application-Specific Integrated Circuit miner” is powerful high-performance hardware specifically designed to mine Proof-of-Work cryptocurrencies. ASIC mining has increased the hashrate on blockchain networks but also led to excluding individual miners from meaningfully participating in block validation.

## Base Block Weight (Minima)
The actual number of hashes it took for a particular block to meet (or exceed) the required block difficulty level.

## BFT
BFT stands for Byzantine Fault Tolerance and describes the ability of a system to tolerate up to 1/3 of its participants acting maliciously.
Byzantine Fault Tolerance is based on the Byzantine Generals Problem — which consisted in reaching consensus in a system one message at a time with a potential traitor among them.

## Binary (Hash) Tree	
A tree structure where each node in the tree has at most two children - a left and right child - and each node except the root has one parent.

## Block (Minima)
Also known as TxBlock in Minima. A block contains records of transactions and an immutable hash to its previous block in the blockchain. In Minima, blocks are [TxPoW units](#txpow-unit-minima) which meet the required difficulty level to become a block and are therefore added to the end of the blockchain.

## Block Difficulty	(Minima)
A value determining whether an already mined TxPoW unit will become a block. The value of the TxPoW ID must be lower than the block difficulty target value for it to become a block. Block Difficulty is dynamic and changes with each block.

## Block Reward
Block rewards describe how much miners earn for being the first to find the next block that will be added to the chain by solving a cryptographic puzzle. There are no block rewards in Minima.

## Blockchain Trilemma
The Blockchain Trilemma describes the idea that a blockchain cannot unite all three: Decentralization, Security, and Scalability. According to the trilemma, a blockchain can only ever achieve two of the three features and has to sacrifice one of them.

## Branch
Branching is a natural occurrence in a blockchain, which happens when two or more valid blocks with the same block number are produced by different nodes in the network and are added to the chain, creating a split. In Minima, nodes in the network come to consensus on which branch to continue building on based on which branch is heaviest. See [GHOST](#ghost-minima)

## BUIDL
This is crypto-slang and a play on HODL (see below). It's unclear when the term was first used, but it seems to have emerged around 2017. It serves as a reminder to focus one's energy and resources on building and not just short-term gains.

## Burn
In the context of tokens, a burn is a mechanism that removes tokens from the circulating supply, therefore reducing tokens in circulation. A burn can be either directly programmed into the protocol, or conducted by a company by buying back, and destroying tokens (by sending them to a wallet address that no one can control).<br/>
On Minima, The Burn is a small cost (fee) which is incurred when sending transactions on the Minima network during times of high demand. It serves to order transactions, regulate on-chain traffic and maintain our deflationary model.

## Cascade (Minima)
Also known as The Cascading Chain. The Cascade is an immutable, chronological, unbroken chain consisting of Super Blocks which provide proof of the total Proof-of-Work input into the blockchain.

## Cascade Levels (Minima)
The Cascading Chain consists of 32 levels, where each level consists of [Super Blocks](#super-block) which, by chance, exceeded the difficulty met by the blocks in the previous level by a factor of 2. e.g. A block in level 3 of the Cascading Chain achieved twice the difficulty of a block in level 2.

## CeFi
Short for centralized Finance, describing the existing financial system which is run mostly by centralized intermediaries. Sometimes also called TradFi, short for traditional Finance.

## Change
In a UTxO based blockchain, the amount input into a transaction must be more than or equal to the desired output. If the input is more than the desired output, another output must be specified to return the difference (the change) to the sender. In Minima, if change is not specified, the difference is burned (i.e. removed from circulation).

## Coin
The native currency of a blockchain. e.g. Minima is the native coin for the Minima blockchain. <br/>
In Minima, the term Coin can also be used to refer to a specific [UTxO](#utxo).

## Coin Mixer
Coin Mixers are services promising users more privacy when they transact on public blockchains. When using Coin Mixer, users' transactions are mixed with other transactions, obfuscating the path of the original transaction to increase its anonymity.

## Coin Proof (Minima)
In Minima, coins are recorded as leaf nodes in a hash-sum tree (an [MMR](#mmr)), with each user only keeping the paths of the tree that point to their own coins. Users are required to present a Coin Proof for each coin when they wish to spend them, to prove it exists and is unspent. <br/>
A Coin Proof is a collection of entries (proof-chunks) in the MMR tree which, together, can be used by any other node in the network to calculate the path to a peak of the MMR tree, proving that a coin exists.

## Coloured Coins (Minima)	
Coloured coins are used to create custom tokens and NFTs on Minima. When creating custom tokens/NFTs, tiny fractions of 1 Minima are allocated to represent the supply of a custom token or NFT which can then be exchanged in the same way as Minima coins.

## Current Super Level (Minima)	
The level representing how deep in the Cascading Chain a particular [Super Block](#super-block) is currently positioned.

## Current Block Weight (Minima)
The current weight of a block is its [base weight](#base-block-weight-minima) multiplied by a factor dependant on the [current level](#current-super-level-minima) the block is positioned in, such that Current Weight = Base Weight * 2<sup>Current level no.</sup>

## DAO
DAO is an acronym for Decentralized Autonomous Organization. A DAO is a community-led entity without one central authority that is governed by rules of open-source blockchain protocols. Most DAOs employ governance tokens to help them come to a consensus.

## dApps
dApps is short for decentralized apps and describes apps running on top of blockchain networks. One important thing to remember is that the User-Interface you will likely interact with by going to a dApps website such as Uniswap.com is not the actual dApp. It's a centralized interface that enables anyone to engage with the dApp and the underlying blockchain easily.

## Decentralization
Decentralization more broadly refers to the dispersion of power and control. In Blockchain networks, decentralized means having thousands, millions of nodes all running the same software and storing a copy of the entire blockchain ledger.

Decentralization increases accessibility, fault tolerance and makes everyone an equal participant. At Minima, one of our prime measures for decentralization is our node count and the lack of any entity that could overtake the network. In a truly decentralized network, there is no space for any bit of centralized infrastructure.

## DeFi
Short for decentralized finance, describes an ecosystem of financial apps built on top of public blockchains that promises to be more accessible, transparent, and fair than the currently existing financial system.

## Difficulty (Minima)
In Minima, the difficulty is a target value influencing the number of hashes required for a node to mine a Transaction or Block. Minima has multiple levels of difficulty: Transaction difficulty, Block difficulty and Super Block difficulty. The mining process ends once the Transaction difficulty has been met. 

## Digital Keys	
Digital keys are analogous to physical keys in that they provide access to something private of value. In Minima, and with cryptocurrencies in general, a pair of private and public keys are required to spend and prove ownership of your coins.

## Digital Signature Scheme	
An algorithm that creates unforgeable digital signatures from a private key and a piece of data that requires authentication e.g. a transaction. Examples include Elliptic Curve Digital Signature Algorithm (ECDSA) (used in Bitcoin) or the Winternitz One-Time Signature Scheme (used in Minima).

## dPOS
dPoS stands for delegated Proof-of-Stake and is a variation of Proof-of-Stake consensus algorithms. Usually, in a delegated Proof-of-Stake network, you will find a set amount of validating nodes that other participants can delegate their stake (token holdings) to in return for a percentage of the Staking Rewards.

## DYOR
*“Do your own research”* highlights the need to not simply trust what others on Twitter or YouTube are trying to sell. Instead, spend time researching what a project is trying to achieve and how they stack up against their claim. Ideally, researching a crypto project goes all the way to reading the Whitepaper.

## ELTOO
Eltoo, pronounced “L2”, is a proposed upgrade to Bitcoin to improve its Layer 2 solutions, primarily The Lightning Network.
Minima's Layer 2 - Omnia - uses ELTOO technology, enabling greater flexibility and functionality for Layer 2 transactions. 

## FOMO
Fear of missing out - or that nagging feeling you get when you see a cryptocurrency’s price skyrocket in a short amount of time and you haven’t invested in it, and are missing out. Note that investing based on FOMO is usually a very risky thing to do. The opposite of FOMO is sometimes coined JOMO - Joy of missing out.

## FUD
Acronym for Fear, Uncertainty & Doubt. Also used as verb as in "Stop fudding my bags".<br/>
Used in crypto to describe negative news, events, and information.

## Full Node
Not all nodes are equal (except on the Minima Protocol). A complete node in other blockchain protocols is a node that validates and constructs the blockchain. It also keeps a copy of the entire ledger.

## Future of France
A Crypto community Meme. It’s not exactly clear who the first one was to mistype, or spell Defi as the “Future of France” but whenever you encounter it (in the context of DeFi), it means the “future of finance”.

## Genesis Block
The first block of a new blockchain is its genesis block.

## GHOST (Minima)
Greedy Heaviest Observed Sub Tree - the algorithm used by all nodes in the Minima network to decide which branch in the TxPoW Tree should be considered the main chain. An alternative to the Longest Chain rule. See [GHOST](/docs/learn/minima/miningconsensus#selecting-the-main-chain-ghost).

## GM
It stands for “Good Morning” and is often used on Crypto Twitter by y crypto enthusiasts to wish each other a good morning. The correct reaction to receiving a “GM” is responding with “GM.” Not to be confused with General Motors.

## Hard Fork
A hard fork is a significant network upgrade on a blockchain. During a hard fork, all network nodes are required to upgrade to the new blockchain software. Only nodes running the latest version will be participating in the network, the rules of the old blockchain aren’t accepted into new blocks — a hard fork is not backward compatible.

## Hash Tree
Also known as a Merkle Tree, a Hash Tree is a hash-based data structure used for efficient data verification. The leaf nodes of the tree are the hashes of some data, and each non-leaf node is a hash of its children.

## Hashrate
The Hashrate describes the computing power backing a blockchain network.

## Hashrate distribution
The Hashrate distribution shows how the computing power in a blockchain network is distributed and offers valuable insight into how (de)centralized a network is.

## HODL
Hodl is not unlike often assumed short for “Hold on for dear life”, but simply a misspelling of hold. It’s often used by crypto investors to encourage each other to not sell their coins. Since the wall streets bet saga earlier this year, it’s often used in conjunction with diamond hands (💎 🙌).

## Initial Blockchain Download (IBD)
When a new node joins the network, they need to download the Minima Blockchain from a peer. This process is the Initial Blockchain Download.

## Layer 1
Layer 1 refers to the base protocol of a blockchain — the actual blockchain on top of which other applications and layers can be built. For Minima, Layer 1 is the Minima blockchain, which every node runs.

## Light Client
Light clients are lightweight applications, that only keep track of their own transactions. They rely on connections to full nodes to catch up and execute their transactions or verify the status of the blockchain.

## Liquidity
Liquidity in financial markets and crypto refers to the ability to easily buy and sell an asset. The more liquid an asset is, the faster one can sell or buy it.

## Liquidity Mining
Describes the process of providing liquidity to decentralized exchanges and earning a share of transaction fees in return.

## Liquidity Provider
Individuals or entities that provide liquidity by depositing tokens into a DEXs smart contracts are called Liquidity Providers, sometimes shortened LP.

## Maxima
Maxima is the censorship resistant information transport layer running over the Minima network. See [Network Overview.](/docs/learn/networkoverview)

## Maximum supply
The maximum amount of a token that will ever exist. By capping the supply, a token retains scarcity. Minima’s maximum supply is one billion Minima coins.

## Mempool (Minima)
Short for “memory pool”, the Mempool is a collection of valid, unconfirmed TxPoW units (Transactions) that nodes in the network have not yet included in a block. Nodes will order Mempool transactions by the amount they burn. 

## Metaverse
The Metaverse is the latest buzzword in crypto, and a term put together from the greek meta for Beyond and Universe which describes everything that exists. While no agreed-upon definition of it exists, we believe that it will be an experience that combines the digital with the real world, contain its economy that connects to broader economies, spans different worlds together, leverages VR & AR, and provides a level of interoperability we’ve not seen so far. You can read more about the Metaverse [here](https://minima.global/blog/ready-for-the-metaverse).

## Minima
Minima is a censorship resistant blockchain and network. See [Network Overview.](/docs/learn/networkoverview)

## MiniDapps
MiniDapps is the term used to refer to decentralized applications built on top of Minima. See [Network Overview.](/docs/learn/networkoverview)

## Mining
The process in which nodes race to find the right hash in Proof-of-Work blockchains, to validate blocks and receive block rewards.

## Mining Pools
Mining Pools are groups or communities of people pooling their computing resources to mine cryptocurrencies. Often, these are commercial operations run by profit-oriented businesses.

## MMR (Minima)
Merkle Mountain Range. An MMR tree is a binary tree structure used in Minima to store coins, scripts and signatures. MMR entries are stored in the MMR Database.

## NFT
Non-Fungible-Token, a digital asset with unique properties, that can't be replicated nor interchanged. You can read more about them here.

## Node
Any computer that is connected to a network is referred to as a Node. While many might think mostly of mining nodes when referring to PoW networks, various other node types exist that play a crucial role in storing the ledger's history.

On Minima, all Minima nodes are equal. Each one of them participates in constructing the blockchain and in validating transactions.

## Off-chain
Transactions that don't happen on the main blockchain, are off-chain. Often implemented to increase the transactions a network can handle.
On Minima, users can transact off-chain once a relationship has been established on-chain.

## Omnia	
Omnia is Minima's Layer 2 solution which uses the latest Lightning technology - ELTOO. It is analogous to Bitcoin's Lightning Network, but more advanced. See [Network Overview.](/docs/learn/networkoverview)

## On-chain
All transactions that happen on the main blockchain are on-chain. In Minima's case, that's establishing transaction relationships, and anything related to resolving conflicts.

## Orphan Block
Sometimes blocks are verified, and valid, but not added to the blockchain.
This often happens when two or more miners try to solve the block at the same time.
Ultimately, the block with the highest amount of PoW is added to the chain, while the one with lower PoW will be discarded, and miners working on it won't receive any rewards.

## PoS
Proof-of-Stake. A consensus algorithm in which nodes with the native platform token at "stake" are responsible for validating new transactions.
Often in these networks, the more stake a node has, the higher the chances to validate blocks and verify blocks. Another implementation of Proof-of-Stake is delegated Proof-of-Stake (see dPoS).

## PoW
Proof-of-Work, nodes in Proof-of-Work networks solve cryptographic puzzles (deliver work) in order to verify transactions.
PoW first came up as a measure to fight spam and Denial-of-Service attacks. Since the inception of Bitcoin, it's been implemented in various blockchains to enable the trustless transfer of value. Minima uses a variant of PoW to secure its network: [TxPoW](#txpow).

## Private Key
A 32-character string used to generate an associated Public Key and subsequently a Public Address. A Private Key enables its owner to spend the cryptocurrency associated with its Public Key/Address.

## Proof (Minima)
In Minima, users are required to present Proofs for their coins, scripts and signatures which are held in an MMR tree. Proofs are a collection of entries (proof-chunks) in the user's MMR database which, together, can be used to calculate a peak or root node of the MMR tree, proving that a leaf node of the tree (i.e. a coin, script or signature) exists.

## Public key
A public key is generated from the private key, and is used to create a Public Address that users can share with others to receive cryptocurrency.

## Pulse
The Pulse is the unique mechanism Minima uses to enable all Minima, Maxima and Omnia users in the network to secure the blockchain by providing PoW to the chain.
 The Pulse happens periodically and consists of two parts:
 1. The node generates a message with a list of the latest 256 blocks in its main chain and shares this with its peers. This serves to ensure all nodes keep up to date with the latest blocks. 
 2. Next, a TxPoW unit with an empty main transaction is generated and 'mined'. This TxPoW will contain a list of transactions from the node's mempool, serving to propagate unconfirmed transactions around the network.

## Scalability
When talking about Scalability in relation to Blockchain, what most think of is "Transactions per second" - how high the throughput for a network can be.
However, scalability isn't just about TPS. It has a broader meaning as well, with more scalable blockchains being able to adjust to handling a growing amount of work.

## Script (Minima)
In Minima, a script is a function or series of functions written in Minima's scripting language - KISS VM. It is analogous to a Smart Contract. Every with every UTxO (coin) has a script associated with it. Scripts must return a value of TRUE at the time of attempting to spent the coin for the transaction to be considered valid. The default script associated with a normal UTxO is **RETURN(SIGNEDBY(UserPublicKey))** i.e. If signed by the owner's public key, this script will return TRUE and can be spent in a transaction. 

## Sidechains
Sidechains are separate blockchains that are connected with the main chain to increase their functionality, and often throughout. Examples include Loom which is a PoS sidechain on Ethereum, and the Blockstream Liquid side-chain that enables faster, confidential Bitcoin transfers. Sidechains tend to be more centralized than the main chain, and require their own set of validators/miners.

## Soft Fork
A soft fork brings upgrades to a blockchain. It maintains the old chain by running different sets of rules. The latest Bitcoin Upgrade was a soft fork introducing changes to the base protocol. This means that, unlike a hard fork, a soft fork is backward compatible. Even nodes that haven’t been updated will still be able to run the chain.

## Super Block	
A Super Block is a block which meets a Super Level difficulty required to take a position on the [Cascade](#cascade-minima).

## Super Level	
Also referred to as a block's maximum potential Level on the [Cascade](#cascade-minima). This is the level representing the furthest depth a Super Block could be positioned on the Cascade. (Determined at random by the amount of PoW used to mine the block.)

## Tokenomics
A term made up of a combination of "token" and economics, describing the structure of a token from an economic standpoint. Tokenomics cover areas such as token distribution, allocation, supply, issuance schedule, and utility.

## Transaction Difficulty (Minima)
A value influencing how much 'Proof-of-Work' a user's node must perform before being able to propagate their transaction to the network.

## TxBlock (Minima)
A TxBlock is a [TxPoW unit](#txpow-unit) that met a difficulty level (in the process of 'mining') high enough to become a block and therefore be added to the blockchain. A TxBlock contains the TxPoW unit plus additional information including the MMR peaks from the previous block, coin proofs for all the spent coins in this block and a list of all newly created coins (UTxOs).

## TxPoW	
Transaction Proof-of-Work is Minima's unique Proof-of-Work mechanism which involves all users providing a small amount of hash power to the network when they want to send a transaction. <br/> 
All users must provide TxPoW before their transaction can be sent across the network, this means that all users contribute to securing the chain. Although the TxPoW 'mining' process involves solving a cryptographic puzzle similar to traditional PoW as known in Bitcoin, the difference is that there are no dedicated miners and no financial rewards gained.

## TxPoW Tree
The unpruned portion of the Minima blockchain, consisting of the main chain of blocks (i.e. heaviest chain according to the [GHOST](#ghost-minima) algorithm) and any branches off the main chain. The root of the TxPoW tree meets the tip of the Cascade.

## TxPoW Tree Node	
A node in the TxPoW tree. Analogous to a TxBlock.

## TxPoW Unit (Minima)
The main building block in Minima. A TxPoW unit consists of a header and body containing one main transaction and a list of mempool transactions. A TxPoW unit may or may not become a block in the blockchain.

## UTXO
UTXO stands for Unspent Transaction Output and describes how (in some cryptocurrencies, including Minima) transactions are created.<br/> 
In Minima, UTxOs are also known as Coins. UTxOs are output(s) from transactions which can then be used as inputs for future transactions. For a valid blockchain transaction, only unspent outputs can be used as inputs for a transaction.

## Velvet Fork
A protocol upgrade mechanism was first proposed by researchers at the Imperial College of London. Unlike hard forks, velvet forks don't harm the miners that haven't updated to the new rules, as they are completely backward compatible.

## WAGMI
WAGMI is an acronym for "We're all going to make it". It's expressing the sentiment of crypto enthusiasts that it's not just about getting rich oneself, but ensuring that we are all going to make it. The opposite of WAGMI is "NGMI", short for "not going to make it".

## Wallet (Hot & Cold)
Wallets enable users to store their cryptocurrencies. Generally, we distinguish between hot and cold wallets. Hot wallets are software-based, and constantly connected to the internet, therefore hot. Cold wallets are either paper wallets or specialized hardware devices that keep crypto holdings offline. It's advised to keep crypto as much as possible in cold wallets.

## Web 1.0
The first iteration of the Web, the so-called "Read-only Web", consisted of static websites, and had to be accessed through phone lines. You can learn more about it [here](https://minima.global/blog/a-short-history-of-the-internet).

## Web 2.0
The second version of the Web, the web as we currently use it. Web 2.0 enabled anyone to become a content creator and offered a much richer user experience. More details on it are also covered in our [blog](https://minima.global/blog/web-2-0-the-web-as-a-platform).

## Web 3.0
Web 3.0 doesn't have a clear-cut definition yet. It's used to refer to the next generation of the Web, a web that's not just read, and write, but also empowers individuals to own their data. You can learn more about the characteristics of Web 3.0 [here](https://minima.global/blog/web-3-0-more-than-just-crypto).

## Whitepaper
In a Whitepaper blockchain, companies and crypto projects explain their project in-depth, outline the need for it, and the token structure. You can find the Minima WP [here](https://cdn.minima.global/media/2021/07/02/Minima_Whitepaper_v9.pdf).

## Winternitz Signature Scheme	
Minima uses the, quantum secure, Winternitz One-Time-Use Signature Scheme to generate multiple, one-time-use, private and public key pairs and for generating digital signatures required for signing messages or transactions.

## Zero-Knowledge Proofs
Zero-Knowledge-Proofs are a cryptographic method used to prove that something is known without revealing the underlying information directly.
When using them you can basically prove that you know a secret to another party, without revealing the secret itself. The method dates back to the 80s and has since found its way into cryptocurrencies, with Zcash being the first one to deploy it, enabling private transactions.


