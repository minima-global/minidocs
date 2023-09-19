---
sidebar_position: 11
---

# Archive nodes

*Only available from Mainnet (v1.0) onwards*

## Overview

All Minima nodes have a **txpow database** and an **archive database**.

The **txpow database** contains full blocks, which includes complete information about all transactions; the latest MMR proofs for all coins spent or created in the block; and the Proof-of-Work expended for the block. 
It only contains most recent blocks from the unpruned section of the chain which is approximately the last 24 hours worth.

The **archive database** contains the last 2 months of **syncblocks**, which do not include transaction details but do hold all the MMR proofs for coins spent or created in the block as well as the Proof-of-Work. Syncblocks older than 2 months are not stored.

When a connection is made between two nodes, they exchange **Initial Blockchain Download** (IBD) **data** which can consist of full blocks and syncblocks, depending on how far behind the tip block the other user is.

For a returning user who has been offline for too long or has lost access to their node - meaning they no longer hold up-to-date proofs for their own coins - the syncblocks available from regular peers during the IBD process may not be sufficient to re-sync the user.

**Archive nodes** store **all** the **syncblocks** from after the Archive node is started, no pruning is done after 2 months. Therefore, they can be used to re-sync any returning user, providing them with the most recent proofs for their coins. 

## Use cases 

Archive nodes with a static external IP can be used to re-sync users who have lost access to their node or been offline for too long and are therefore unable to sync to the chain tip block with the IBD data alone.

You may also choose run a local Archive node for your own purposes, in addition to a non-archive node, in the case you ever need to re-sync

A returning user has two options for re-syncing from an Archive node:

- **Chain re-sync:** to be used when the user still has access to their node but is on the wrong chain or is unable to catch up to the latest tip block as a result of being offline for too long. <br/>
In the case of a chain re-sync, the user's node will not be wiped, only re-synced to the latest tip block.

- **Seed re-sync:** to be used if a user has lost access to their node or device completely; they can restore access to their funds by doing a seed re-sync from a newly created node. Their 24 word Seed Phrase is required.

:::warning
A Seed re-sync should only ever be used as a last resort in the case a user has no valid backup to restore.
:::

> **Example A - Personal Archive Node**
> 
> A user running a node on a mobile device may choose to run an Archive node locally on their laptop/desktop at home in case they lose their phone and do not have a valid backup of their node stored elsewhere. In this case, the user would always have the latest proofs for their coins on their own Archive node that they could use to re-sync to a new device. 

> **Example B - Archive Node as a service**
> 
> A user with a server with a static external IP can run an Archive node and share the IP:Port of their Archive node with other users who require a chain or seed re-sync. The user requiring the re-sync would use the initiate the chain or seed re-sync from their new/exising node.
