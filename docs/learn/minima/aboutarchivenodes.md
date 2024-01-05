---
sidebar_position: 11
---

# Archive nodes

## Overview

All Minima nodes have a **txpow database** and an **archive database**.

The **txpow database** contains full blocks, which includes complete information about all transactions. This is limited to the most recent blocks from the unpruned section of the chain - approximately the last 24 hours worth.

The **archive database** contains the last 2 months of **sync blocks**, which do not include transaction details but do hold all the MMR proofs for coins spent or created in the block. Sync blocks older than 2 months are not stored unless the node is set up as an archive node.

**Archive nodes** store **all** the **sync blocks** from after the archive node is started, no pruning is done after 2 months. 

:::important
An archive node can only be used to recover users who created their nodes after your archive node was created. If you wish to be able to recover *any* Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis.
:::

