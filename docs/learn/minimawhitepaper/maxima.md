---
sidebar_position: 4
---

# Maxima

- Layer 1 does not scale.
- Layer 2 scales.
 
‘...scales’ –  there is no upper bound on possible transactions per second.
 
The base layer of any cryptocurrency is known as layer 1 or on-chain. This is the layer every full member of the network needs to process. Solutions built on top of layer 1 occur away from the main chain, deliberately so, and are called layer 2 or off-chain. On layer 2, only those directly involved in the transaction need to process it, not the whole network. This is why layer 2 scales but layer 1 does not. The idea that everyone should process everything does not scale.

If most of the traffic is taken off-chain using the Lightning Network, Sidechains,  Multi-Signature Federations or another method, then by definition most of the traffic is not even viewable let alone auditable on-chain. There is currently no mechanism that secures layer 1 with layer 2 traffic. No way to incentivise or force fees down from layer 2 operators and users to the miners on layer 1. For all miner-centric coins, this is a problem. How can trillions be transacted off-chain when only millions are spent in fee-paying transactions securing layer 1? Clearly, these layered systems are only as secure as the security of their lower levels. Less money spent equals fewer fees paid. So either layer 2 works, it scales, and everyone jumps off-chain, reducing layer 1 security by starving miners on-chain... or layer 2 does not work, users stay on layer 1, all the on-chain miners get paid, but it can’t scale... 

One solution is (very) high fees for layer 1 and thus very large transaction amounts, keeping all the smaller interactions off-chain. This does indeed secure layer 1 by paying the miners adequately, but makes it impossible for normal users to transact on-chain, since the fee alone would likely be larger than the desired transaction amount. Sometimes you have to use layer 1, it’s not always a choice (if someone tries to force close your Lightning Channel and steal funds), and then what?

Another solution is to inflate the coin supply. Just print 1% extra per year and use that to pay the miners. A clean solution... that does indeed secure layer 1, but of course, you lose the hard cap on your total supply which is a very desirable quality if you want to be considered a Store of Value. Supply inflation is just a hidden tax on every user.


Minima has an innovative and unique solution.

- Replace fee-based security. 
- Make layer 2 secure layer 1.

Minima runs over a Peer-to-Peer (P2P) network called Maxima. Every user on the Minima network is connected to every other user. Maxima opens up this P2P backbone, via a simple network API, so that users can transmit any data they like, not just Minima transactions, to other individual Maxima users, point-to-point and not flood-fill. This gives a method of communication that can be used by all the layer 2 protocols, such as the Lightning Network, Sidechains, Decentralized Exchanges etc.

Even better, users of Maxima who have no Minima, no tokens, send no transactions and have no interest in layer 2 magic, can still help to PoW secure the network, by sending messages over Maxima. For instance, MaxChat, a simple low-bandwidth chat application that runs on Maxima, a resilient decentralized censorship-resistant P2P network, could bring countless users and there are countless other compatible applications that require network communication.
 
All Maxima users run Minima. All messages pay PoW. All PoW secures Minima.
 
We define a :
 
- Minima transaction /  on-chain  / flood-fill / does not scale.
- Maxima transaction / off-chain / point-to-point / scales.
        	
Maxima allows the transfer of small amounts of data for free, aside from the required PoW, but routing larger amounts of data is possible and can be paid for using Lightning. A simple technique encrypts the data with the same key as the Lightning invoice (the preimage of a hash). This way the recipient only gets access to the decrypted data once a payment is made. An atomic data exchange - where either both actions happen or neither happen. 

As more and more fee-paying traffic is generated, Maxima incentivises users to set up Minima routers, effectively a node with an external IP which other Minima users can easily access, which is invaluable to the integrity of any P2P network. Instead of incentivising miners to use more and more energy finding coins, Maxima incentivises users to set up increasingly better routers that improve the integrity and quality of the backbone P2P network that runs Minima. 

Minima provides value transfer. Maxima provides information transfer.
