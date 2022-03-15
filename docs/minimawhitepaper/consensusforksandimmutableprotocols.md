---
sidebar_position: 15
---

# Consensus, Forks and Immutable Protocols

In decentralized blockchain systems all full users need to agree on the rules. If there is no agreement on the rules there can be no consensus on the ordering and eventual outcome of actions. Current blockchain systems have 2 types of consensus changes available. This is because there are 2 types of ‘full’ user. The first helps in the construction and validation of the chain - Complete nodes (the miners). The second only helps in the validation of the chain - Full nodes (the validators). We ignore Wallet users, by far the largest group on these chains (unlike Minima), who neither validate nor construct, and are simply swept along, whether they agree or not.

A soft fork is when the Complete nodes change the rules in ways that are still valid to the Full nodes. A soft-fork is a reduction in the chains’ abilities. All Full nodes still see a valid block, just with a reduced solution space. Permanent censorship of a transaction or address is a soft-fork, since only those involved in the construction of the chain have any say. On fixed block size blockchains, a reduction in block size is a soft fork, as it still appears valid to all the Full nodes, just a smaller block. A hard fork is when all nodes need to agree to an increase in capabilities, adding an ability that was not there before. On fixed block size blockchains, an increase in the block size requires everyone to agree, as it is invalid to Full nodes given the old rules, that specified a lower maximum block size. Adding a new function or feature is a hard fork. Upgrading or fundamentally changing the protocol is a hard fork.

Soft forks are much easier to implement than hard forks since only a majority of the much smaller group of Complete nodes needs to agree. Soft forks can be imposed. The Complete nodes do not need the Full nodes’ permission. Hard forks are much harder to implement. The larger the network the harder it gets. A decentralized protocol can only grow in adoption once it has stopped being updated, since it is impossible to update once deployed at scale. This is why the ossification of truly decentralized protocols occurs.

On Minima :

- everyone runs a Complete node.
- everyone is involved in the construction and validation of the chain.
- everyone needs to agree on everything because everyone is involved in everything.
- there are no soft forks, only hard forks. 

The Minima Protocol is complete from inception, containing all the scaling and functionality it will ever have or need. No soft forks allowed. No hard forks required - ever. No limit on the size of the network that can use it. POP3, SMTP, UDP and TCP/IP are examples of ossified global decentralized protocols. They don't change. That's the point. That’s why they are the back-bone of the Internet.






