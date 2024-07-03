---
sidebar_position: 1
---

# Recovery options

If you still have access to your wallet (i.e. your seed phrase is correct) but it is not in sync with the latest block, you should perform a **chain re-sync** only.

If you have lost access to your node completely, you can either **restore a backup** that you took previously, or **restore from seed phrase**.

## Chain resync 

If you **still have access to your wallet** (i.e. your seed phrase is correct) but it is not in sync with the latest block, you should perform a [**chain re-sync**](/docs/userguides/recovery/chainresync). This will put you on the correct chain with your latest wallet balance. 

The most common reason for a chain re-sync is if your node has been offline for too long and it cannot catch up with the chain automatically

You will need:

- a recent archive file, exported from an archive node, or
- the IP address of a Mega node

## Restore from backup

To [**restore a backup**](/docs/userguides/recovery/restoreabackup) that you have previously taken to a new or existing device, you will need:

- A backup of your node that you took previously,

and, if the backup is older than 1 week

- a recent archive file, exported from an archive node, or
- the IP address of a Mega node

to ensure the backup is properly restored to the chain tip.

## Restore from Seed Phrase
Alternatively, you can [**import your seed phrase**](/docs/userguides/recovery/importseed) if you do not have a backup. Your wallet will be recovered from the 24 word seed phrase you provide. This should only be used as a last resort.

You will need:

- Your 24 word seed phrase,

and, 

- a recent archive file, exported from an archive node, or
- the IP address of a Mega node


All the above processes can be found in the Security MiniDapp.

![security](/img/app/security.png#width10)
