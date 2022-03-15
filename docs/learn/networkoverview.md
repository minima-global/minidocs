---
sidebar_position: 1
---

# Network Overview

The Minima network consists of four distinct layers. Each layer contributes to Minima being a truly decentralized, peer-to-peer network for value and information exchange.

## Minima - Layer 1
**Value transfer<br />
On-chain**

Minima is a censorship resistant value transfer layer. All transactions are processed by all nodes on the network. It is flood-fill. It uses a P2P system as its backbone for communication between nodes.

![Minima](/img/network/minimaLayer1Lm.svg#gh-light-mode-only)![Minima](/img/network/minimaLayer1Dm.svg#gh-dark-mode-only)

The Minima blockchain is where all on-chain transactions are processed. Every node in the network collectively comes to consensus on the state of the blockchain so all transactions are accounted for.
Users initiate their transacting relationships on Layer 1, prior to moving off-chain to use Layer 2 for faster and cheaper transactions. As the trust layer of the protocol, Layer 1 is also used for settling any disputes between users on Layer 2.

## Maxima
**Information transfer<br />
Off-chain**

Maxima is the censorship resistant information transport layer running over the Minima network. Communication is point-to-point. Messages can be sent, off-chain, to chosen connected peers.

![Minima](/img/network/maximaLm.svg#gh-light-mode-only)![Minima](/img/network/maximaDm.svg#gh-dark-mode-only)

Maxima is an information transport layer, enabling encrypted, peer-to-peer exchange of information between 1st and 2nd degree connections on the Minima network.
Maxima can be used to build censorship resistant messaging applications over the Minima network and will be used for sending messages for Layer 2 communication.

## Layer 2 Architecture
**Value transfer<br /> 
Off-chain**

Layer 2 is fast, cheap and scalable. It enables instant peer-to-peer payments by creating bi-directional payment channels between participants, using technology similar to Bitcoin’s Lightning Network.

Minima can also support alternative scaling solutions such as state channels and side chains with the potential for further solutions in the future. 

![Minima](/img/network/layer2ArchitectureLm.svg#gh-light-mode-only)![Minima](/img/network/layer2ArchitectureDm.svg#gh-dark-mode-only)

Once users have set up their transacting relationship on Minima, they can perform all transactions off-chain, on Layer 2. This is where the bulk of peer-to-peer exchange between users of the network takes place. It is faster, as each payment is not settled on the blockchain and transactions are only processed by the relevant users rather than the entire network, as occurs on Layer 1.

Using multi-signature smart contracts and payment channels, users can keep a ‘tab’ of their unsettled balances indefinitely, until they wish to settle on Layer 1.
This unlocks the possibility of essentially unlimited transactions per second (TPS).

## MiniDapps
**Web3 Applications**

MiniDapps are truly decentralised applications built using the functionality enabled by all components of the Minima network:
1. Value transfer on Minima
2. Information transfer on Maxima
3. Unlimited transaction per seconds on Layer 2 solutions

![Minima](/img/network/miniDappsLm.svg#gh-light-mode-only)![Minima](/img/network/miniDappsDm.svg#gh-dark-mode-only)

MiniDapps are decentralized applications combining the utility provided by Minima, Maxima and Layer 2 with Minima’s scripting language. The front-end for MiniDapps can be written using the widely known JavaScript, HTML and CSS.
Minima’s KISS scripting language is Turing-Complete, allowing for powerful smart contract driven applications. Building a MiniDapp is accessible to any web developer.
