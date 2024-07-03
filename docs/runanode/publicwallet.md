---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Host a Public Wallet (NEW)

Users who are running a Mega node are able to set up a public wallet interface for users who are not able to run a node themselves. 

A Public wallet can only be enabled on [Mega nodes](/docs/runanode/meganode) with the MiniDapp System (MDS) enabled.

## What is a Public wallet?

A Public wallet allows any user to hold, send and receive native Minima and other custom tokens or NFTs on the Minima blockchain in a non-custodial wallet. 

On accessing a public wallet, the user can generate a secret key which they must write down and keep secure - this effectively acts as their seed phrase to their funds. 

Logging in with their secret, a user will be provided with one native Minima wallet address for their personal use. 

Users of a Public wallet are able to login to any Public wallet with their secret key, however we only recommend always using the same node from a trusted provider. Using the same Public wallet every time also ensures the user's key uses are counted accurately. 

## How to start a Public wallet

As a Mega node runner, you must first ensure that:

- You have a Mega node running on a server with a public facing IP address 
- You have either performed a chain resync from an archive node, or imported a Mega MMR file from another Mega node runner. This is essential to ensure the node is tracking all available coins and to support any potential user of your Public wallet.

To enable the Public wallet, run the following command from the Terminal MiniDapp:

`mds action:publicmds enable:true`

You will then be required to accept the pending command from the Pending MiniDapp. 

Once enabled, navigate to https://yourserverIP:9003/publicmds/ to access your Public wallet interface.


