---
sidebar_position: 2
---

# Maxima Contacts

Your Maxima Contacts are your friends, family or other connections that you wish to communicate with, peer-to-peer, without a centralised third-party being able to manage, collect or intercept your messages.

Maintaining connectivity with each contact involves providing a small amount of Tx-PoW, in the same way that it is required for transacting over Minima, to contribute to the security of the blockchain.

As a result, currently, it is reasonable for a node to have around 20 contacts. Any more and it may start to impact the node’s performance.

## Contact Addresses

Similar to a wallet address used to receive funds on Minima, all users have a Contact Address which can be used to receive messages, over Maxima. 

Knowing someone’s Maxima Contact Address will enable you to send messages to their node. This communication is off-chain and uses peers on the network to ensure the encrypted message reaches the desired node. 

Example Contact Address
`MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JP0Y8WHVT0JJPGJ01YAQPCEU3PWF51V5J5UKA4RBHYUZFYTTH98KYHZ1K6MF3V6D30DCDDYAH34AJ1PZ4GWHCW7SEDQ0HQ9R4TU2G7NS8N816V13ERQ532PYWK9Z732RBZ7KFCQCENAMAJP9V7EH3R06493T25U9PY7HJAS0Z311WA6K24P0BZ82NTQNY2BQTB5VUJRV6QYVK1060800712NCHC@187.220.305.194:9001`


Your Contact Address can be found and shared from the MaxContacts MiniDapp.


## Privacy

Both parties have control over their Contact list; if User A no longer wants to be connected to User B, User A can remove User B from their Contact list, which also removes them from User B’s Contact list. 

Furthermore, Contact Addresses change periodically, preventing User B from being able to reach User A at the same Contact address again, and allowing User A to become unreachable on Maxima, to avoid unwanted messages.



## Maxima Location Service 

The connection between you and your Contacts is maintained by your **Maxima Location Service (MLS)**, a randomly selected node on the Minima network

Your MLS ensures that, although your Contact Address periodically changes, you will still remain connected to your Contacts, provided that you connect to the network at least once in a 24-hour period. 

