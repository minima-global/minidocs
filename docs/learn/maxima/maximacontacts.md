---
sidebar_position: 2
---

# Contacts

Your Maxima Contacts are your friends, family or other connections that you wish to communicate with, peer-to-peer, without a centralised third-party being able to manage, collect or intercept your messages.

Maintaining connectivity with each contact involves providing a small amount of Tx-PoW, in the same way that it is required for transacting over Minima, to contribute to the security of the blockchain.

As a result, currently, it is reasonable for a node to have around 20 contacts. Any more and it may start to impact the node’s performance.

## Contact Addresses

Similar to a wallet address used to receive funds on Minima, all users have a **contact address** which can be used to receive messages over Maxima. This communication is off-chain and uses peers on the network to ensure the encrypted message reaches the desired node. 

Contact addresses change at random time intervals, therefore contacts must always be added shortly after an address is shared. 

Once a contact is added, a user's [Maxima Location Service host (mls)](#maxima-location-service) manages the connection between a user and their contacts to ensure they remain connected to their latest contact address.

**Example Contact Address**
```
MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JP0Y8WHVT0JJPGJ01YAQPCEU3PWF51V5J5UKA4RBHYUZFYTTH98KYHZ1K6MF3V6D30DCDD
YAH34AJ1PZ4GWHCW7SEDQ0HQ9R4TU2G7NS8N816V13ERQ532PYWK9Z732RBZ7KFCQCENAMAJP9V7EH3R06493T25U9PY7HJAS0Z311WA6K24P0BZ82NTQNY2BQ
TB5VUJRV6QYVK1060800712NCHC@187.220.305.194:9001
```

## Privacy

Both parties have control over their contact list; if User A no longer wants to be connected to User B, User A can remove User B from their contact list, which also removes them from User B’s ontact list. 

Furthermore, the expiring nature of contact addresses prevents User B from being able to reach User A at the same contact address again, and allowing User A to become unreachable on Maxima if desired to avoid unwanted messages.


## Contact management

The connection between you and your Contacts is maintained by your **Maxima Location Service (MLS)** host, a randomly selected server node on the Minima network.

To learn more about MLS, see the [Maxima Location Service](/docs/learn/maxima/mls) page.