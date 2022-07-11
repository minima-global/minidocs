---
sidebar_position: 1
---

# Network Overview

The Minima network consists of four distinct layers. <br/>
Each layer contributes to Minima being a truly decentralized, censorship resistant, peer-to-peer network for value and information exchange.

## Layer 1: Minima
**Value transfer<br />
On-chain**

Minima is the blockchain layer for value transfer. All transactions are processed by all nodes on the network. It is flood-fill. It uses the peer-to-peer network as its backbone for communication between nodes.

![Minima](/img/network/minimaLayer1Lm.svg#gh-light-mode-only)![Minima](/img/network/minimaLayer1Dm.svg#gh-dark-mode-only)

The Minima blockchain is where all on-chain transactions are processed. Every node in the network collectively comes to consensus on the state of the blockchain so all transactions are accounted for.
Users initiate their transacting relationships on Layer 1, prior to moving off-chain to use Layer 2 for faster and cheaper transactions. As the trust layer of the protocol, Layer 1 is also used for settling any disputes between users on Layer 2.

## Maxima
**Information transfer<br />
Off-chain**

Maxima is the information transport layer running over the Minima network. <br/>
Communication is point-to-point so that messages can be sent, off-chain, to chosen connected peers.

![Minima](/img/network/maximaLm.svg#gh-light-mode-only)![Minima](/img/network/maximaDm.svg#gh-dark-mode-only)

Maxima enables encrypted, peer-to-peer exchange of information between 1st and 2nd degree connections on the Minima network.
Maxima can be used to build censorship resistant messaging applications and will be used for sending data required for Layer 2 communication on Omnia.

## Layer 2: Omnia
**Value transfer<br /> 
Off-chain**

Minima's Layer 2 - Omnia - is fast, cheap and scalable. It enables instant peer-to-peer payments by creating bi-directional payment channels between participants, using the latest Lightning technology - ELTOO. It is analogous to Bitcoin’s Lightning Network but more advanced.

Minima can also support alternative scaling solutions such as state chains and side chains with the potential for further solutions in the future. 

![Minima](/img/network/layer2ArchitectureLm.svg#gh-light-mode-only)![Minima](/img/network/layer2ArchitectureDm.svg#gh-dark-mode-only)

Once users have set up their transacting relationship on Minima, they can perform **all transactions off-chain**, on Omnia. This is where the bulk of peer-to-peer exchange between users of the network takes place. It is **affordable and fast**, as each payment is not settled on the blockchain and transactions are only processed by the relevant users rather than the entire network, as occurs on Layer 1.

Based on **ELTOO** technology, Omnia can do more than simple payments. It can do any smart contract sequence with a given subset of users and subset of coins. Using hash time locked contracts (HTLCs) and payment channels, users can keep a ‘tab’ of their unsettled balances indefinitely, until they wish to settle on Minima (Layer 1).<br/> 
**Omnia unlocks the possibility of essentially unlimited transactions per second (TPS).**

## Layer 3: MiniDapps
**Web3 Applications**

MiniDapps are truly decentralised applications built using the functionality enabled by any/all components of the Minima network:
1. Value transfer on Minima
2. Information transfer on Maxima
3. Unlimited transaction per seconds on Omnia

![Minima](/img/network/miniDappsLm.svg#gh-light-mode-only)![Minima](/img/network/miniDappsDm.svg#gh-dark-mode-only)

MiniDapps are decentralized applications combining the utility provided by Maxima, Minima and Omnia with Minima’s scripting language. The front-end for MiniDapps can be written using the widely known JavaScript, HTML and CSS.
Minima’s KISS scripting language is Turing-Complete, allowing for powerful smart contract driven applications. Building a MiniDapp is accessible to any web developer.
