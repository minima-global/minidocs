---
sidebar_position: 8
---

# Restoring lost funds

If you lose access to your node or you become out of sync with the chain, you can either:
- Restore your node from a valid backup
- Restore your node from an Archive node using your 24 word seed phrase
- Resync to the latest block using an Archive node (no seed phrase required)

## Restoring from a backup

For a backup to be valid it must be:
1. recent, within 1-2 months old
2. taken whilst you were in sync with with the chain (correct tip block)

Restoring from a backup is the fastest way to get access to your lost funds.

For details on how to restore a backup, select your platform of choice from the [Get Started](/docs/runanode/get_started) page and see the **FAQ** section.

**Your node will be wiped and restored.**

## Restoring from an Archive node

If your node is behind on the chain but you still have access to your node, you can resync to the latest block by performing a [partial resync](#partial-resync-from-an-archive-node) from an Archive node. Your funds will NOT be wiped during this process. 

If you do not have a valid backup or you have lost access to your node, you can restore your coins by performing a [full restore](#full-restore-from-an-archive-node) from an archive node using your 24 word seed phrase.

:::warning
**Restoring or resyncing from an Archive node should only be used as a last resort.**
:::


### Partial resync from an Archive node 

Your coins will remain safe throughout this process.

#### Android

1. From an existing node, go to the Backup/Restore page, click **Archive Node**
2. Click **SEED PHRASE COMPLETE** without entering your seed phrase
3. Enter the Archive node host (IP:Port) of the Archive node you wish to resync from e.g. 10.198.89.98:9001
4. Click **OK**, the resync will begin, please be patient

Once complete, you will be on the correct tip block.

#### Using the Terminal

1. From an existing node that is out of sync with the latest tip block, login to your MiniDapp System (MDS)
2. Open the Terminal MiniDapp
3. Enter the following command, WITHOUT providing your 24 word seed phrase and the host (ip:port) of an Archive node:

```
archive action:resync host:
```

4. Press Enter
5. The resync will begin, please be patient
6. Check the logs to see when the process is complete
7. Reload your MiniDapp System - you may have to accept the security warning again 

Once complete, you will be on the correct tip block.

For further help using the `archive` command, use `help command:archive` from the Terminal.

### Full restore from an Archive node

Performing a full archive restore on an existing node will WIPE the node completely before restoring.

**ONLY to be used if you have no backup.** 

#### Android

1. On your new device that you wish to restore to, go to the Backup/Restore page, click **Archive Node**
2. Enter your seed phrase, selecting from the available words when prompted
3. Click **SEED PHRASE COMPLETE**
4. Enter the Archive node host (IP:Port) of the Archive node you wish to resync from e.g. 10.198.89.98:9001
5. Click **OK**, the restore will begin, please be patient

Once complete, your coins will be restored.

#### Using the Terminal

1. Set up your new clean node that you wish to restore to and login to your MiniDapp System (MDS)
2. Open the Terminal MiniDapp
3. Enter the following command, providing your 24 word seed phrase and the host (ip:port) of an Archive node:

```
archive action:resync phrase:"YOUR 24 WORD SEED PHRASE HERE" host:
```
4. Press Enter
5. The restore will begin, please be patient
6. Check the logs to see when the process is complete
7. Reload your MiniDapp System - you may have to accept the security warning again 

Once complete, your coins will be restored.