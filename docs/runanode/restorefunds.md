---
sidebar_position: 8
---

# Restoring lost funds

If you lose access to your node or you become out of sync with the chain, you can either:
- Start a new node, then **restore a recent, valid backup** you took previously
- Perform a **chain re-sync** from an Archive node (no seed phrase required) 
- Perform a **seed re-sync** from an Archive node (requires your 24 word seed phrase)

## Restoring from a backup

For a backup to be valid it must be:
1. recent, taken within the last 1-2 months
2. taken whilst you were in sync with with the chain (correct tip block)

Restoring from a recent backup is the recommended and fastest way to regain access to your lost funds.

For details on how to restore a backup, select your platform of choice from the [Get Started](/docs/runanode/get_started) page and see **How to restore your node from a backup** in the **FAQ** section.

## Re-syncing from an Archive node

Please note that by using an Archive node to re-sync your own node, you are **relying on a third party** and it should therefore only be used as a last resort. You may wish to [run your own Archive node](/docs/runanode/archivenodes) for additional reassurance.

There are two options when using an Archive node to re-sync your own node:

- **Chain re-sync:** If you have been offline for too long and your node is not on the correct tip block, you can re-sync to the latest block by performing a [chain re-sync](#chain-resync) from an Archive node. **Your node will NOT be wiped during this process.**

- **Seed re-sync:** If you do not have a valid backup or you have lost access to your node, you can restore access to your coins by performing a [seed re-sync](#seed-resync) from an Archive node using your 24 word seed phrase. **Your node will first be wiped before the re-sync begins.**


### How to perform a chain re-sync

Your coins will remain safe throughout this process.

#### From Android

1. From an existing node, go to the **Archive** page
2. Select **CHAIN RE-SYNC**
3. Read the information, then select **START CHAIN RE-SYNC**
4. Leave the default Archive Node Host as **auto** to use one of the pre-set Archive nodes, or optionally enter the ip:port of the Archive node you wish to resync from e.g. 10.198.89.98:9001
4. Click **OK**, the resync will begin, please be patient

Once complete, you will be on the correct tip block.

#### From desktop/server using the Terminal

1. From an existing node that is out of sync with the latest tip block, login to your MiniDapp System (MDS)
2. Open the Terminal MiniDapp
3. Enter the following command, WITHOUT providing your 24 word seed phrase.

You can use the default **auto** option to use one of the pre-set Archive nodes, or optionally enter the ip:port of the Archive node you wish to resync from e.g. 10.198.89.98:9001

```
archive action:resync host:auto
```

4. Press Enter
5. The re-sync will begin, please be patient
6. Check the logs to see when the process is complete
7. Reload your MiniDapp System - you may have to accept the security warning again 

Once complete, you will be on the correct tip block.

For further help using the `archive` command, use `help command:archive` from the Terminal.

### How to perform a seed re-sync

Performing a seed re-sync will **WIPE your node completely** before re-syncing your coins from an Archive node.

:::warning
**This process requires you to type your 24 word seed phrase into an online device. Please ensure your device contains no malware before proceeding. This process should ONLY be used if you have no backup!** 
::: 

#### From Android

1. On your new device that you wish to restore to, go to the **Archive** page
2. Select **SEED PHRASE RE-SYNC**
3. Enter your Seed Phrase, submitting each word individually until you have completed all 24 words. 
4. Leave **Max Keys Uses** as the default 1000 if you think you have not signed over 1000 transactions, otherwise enter a higher number indicating the maximum times you have signed a transaction.
5. Select **SEED PHRASE COMPLETE**
6. Leave the default Archive Node Host as **auto** to use one of the pre-set Archive nodes, or optionally enter the ip:port of the Archive node you wish to resync from e.g. 10.198.89.98:9001
7. Click **OK**, the resync will begin, please be patient

Once complete, the app will shutdown, reopen it to start the node and check your restored coins.

#### From desktop/server using the Terminal

1. Set up your new clean node that you wish to restore to and login to your MiniDapp System (MDS)
2. Open the Terminal MiniDapp
3. Enter the following command, providing your 24 word seed phrase.

You can use the default **auto** option to use one of the pre-set Archive nodes, or optionally enter the ip:port of the Archive node you wish to resync from e.g. 10.198.89.98:9001

```
archive action:resync phrase:"YOUR 24 WORD SEED PHRASE HERE" host:auto
```
4. Press Enter
5. The restore will begin, please be patient
6. Check the logs to see when the process is complete
7. Reload your MiniDapp System - you may have to accept the security warning again 

Once complete, your coins will be restored.