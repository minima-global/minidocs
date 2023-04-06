---
sidebar_position: 3
---
# Maxima Messaging

## Maxima Hosts 

Each user has a set of Maxima hosts which facilitate the relaying of messages to the user. 
Maxima hosts are randomly selected server nodes a user has previously connected to.

At any given time, only one Maxima host is responsible for forwarding a user’s encrypted message.

You can see your Maxima hosts, including the one you are currently connected to, with the `maxima action:hosts` command from the Minima Terminal.

The host you are connected to determines the ip:port shown in your contact address.

**Example Contact Address**
```
MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1JP0Y8WHVT0JJPGJ01YAQPCEU3PWF51V5J5UKA4RBHYUZFYTTH98KYHZ1K6MF3V6D30DCDD
YAH34AJ1PZ4GWHCW7SEDQ0HQ9R4TU2G7NS8N816V13ERQ532PYWK9Z732RBZ7KFCQCENAMAJP9V7EH3R06493T25U9PY7HJAS0Z311WA6K24P0BZ82NTQNY2BQ
TB5VUJRV6QYVK1060800712NCHC@187.220.305.194:9001
```

![MaximaContacts](/img/maxima/MaximaMessageDeliveryTopLM.svg#gh-light-mode-only-width50)![MaximaContacts](/img/maxima/MaximaMessageDeliveryTopDM.svg#gh-dark-mode-only-width50)

![MaximaContacts](/img/maxima/MaximaMessageDeliveryBottomLM.svg#gh-light-mode-only-width50)![MaximaContacts](/img/maxima/MaximaMessageDeliveryBottomDM.svg#gh-dark-mode-only-width50)


## Sending Messages

Sending a message over Maxima has the following steps:

1. **Connection** - The user exchanges contact details with a friend and (optionally) adds them as a Maxima contact.

2. **Create & Sign Message** - The sender creates a message either via a Minima MiniDapp or using Terminal commands. On sending the message, the message is signed with the sender's Maxima private key, generating a signature for the message.

3. **Encryption & Work** - the Maxima data package containing the public key of the sender, the message and the signature is encrypted. Sending a message has no monetary cost, but it must be paid for in ‘work’. A TxPoW unit is created, mined and sent to the recipient’s Maxima host with the signed, encrypted message.

4. **Send: Sender to Host** - the signed, encrypted message and mined TxPoW unit is sent to the recipient's Maxima host who checks whether the TxPoW is valid and the minimum amount of ‘work’ has been completed.

5. **Send: Host to Recipient** -  If the TxPoW is valid and the minimum amount of ‘work’ has been completed, the message will be forwarded to the recipient, else it is discarded (off-chain process).

6. **Block propagation** - If the TxPoW unit is a block, it will be propagated to ALL nodes for processing, otherwise the TxPoW unit will be discarded (on-chain).

:::note
All Maxima messages are encrypted end-to-end using asymmetric RSA encryption. Messages can only be decrypted and read by the recipient, other nodes involved in the relaying of the message cannot read the data.
:::

![MaximaContacts](/img/maxima/MaximaHowitworksLM.svg#gh-light-mode-only)![MaximaContacts](/img/maxima/MaximaHowitworksDM.svg#gh-dark-mode-only)

**Orange**: A Maxima process<br/>
**Blue**: A Minima process

