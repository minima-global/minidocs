---
sidebar_position: 8
---

# Restoring your node

If you lose access to your node or you become out of sync with the chain, you can either:
1. **Restore a backup** to a new or existing node

2. **Chain re-sync**, your seed phrase is not required 

  If you have been offline for too long and your node is not on the correct tip block, you can re-sync to the latest block by performing a chain re-sync. Your wallet will NOT be wiped during this process.

3. **Import your seed phrase** (i.e. seed re-sync)

  If you do not have a valid backup or you have lost access to your node, you can restore access to your coins by importing your 24 word seed phrase. Your wallet will first be wiped before being re-generated and re-syncing.

All the above processes can be found in the Security MiniDapp.

![security](/img/app/security.png#width10)

:::important
Please note that by using someone else's archive node or file to re-sync your own node, you are **relying on a third party** and it should therefore only be used as a last resort. You may wish to [run your own archive node](/docs/runanode/archivenodes) for additional reassurance.
:::

## Restoring from a backup

<!-- For details on how to restore a backup, select your platform of choice from the [Get Started](/docs/runanode/get_started) page and see **How to restore your node from a backup** in the **FAQ** section.
 -->

#### Using the Security MiniDapp

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Restore a backup**
3. Upload an archive export file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima).

*If you choose not to use an archive file, your backup must have been taken whilst you were in sync with with the chain (correct tip block)*

4. Upload your backup and enter the password used when generating the backup 
5. Continue to start the restore process, please be patient and leave the process to finish
6. Restart the node for the re-sync to take effect

Once complete, your seed phrase will be imported and coins will be restored.

## Chain re-sync

Your coins will remain safe throughout this process.

### Using the Security MiniDapp

![security](/img/app/security.png#width10)

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Chain re-sync**
4. Upload an archive export file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima).
5. Continue to start the re-sync process, please be patient and leave the process to finish
6. Restart the node for the re-sync to take effect

Once complete, you will be on the correct tip block.

### Using the Terminal

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

## Import your seed phrase

Performing a seed re-sync will **WIPE your node completely** before re-syncing your coins from an Archive node.

### Using the Security MiniDapp

![security](/img/app/security.png#width10)

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Import seed phrase**
4. Upload an archive export file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima).
5. Continue to enter your seed phrase carefully 
6. start the re-sync process, please be patient and leave the process to finish
7. Restart the node for the import to take effect

<!-- 
1. On your new device that you wish to restore to, go to the **Archive** page
2. Select **SEED PHRASE RE-SYNC**
3. Enter your Seed Phrase, submitting each word individually until you have completed all 24 words. 
4. Leave **Max Keys Uses** as the default 1000 if you think you have not signed over 1000 transactions, otherwise enter a higher number indicating the maximum times you have signed a transaction.
5. Select **SEED PHRASE COMPLETE**
6. Leave the default Archive Node Host as **auto** to use one of the pre-set Archive nodes, or optionally enter the ip:port of the Archive node you wish to resync from e.g. 10.198.89.98:9001
7. Click **OK**, the resync will begin, please be patient -->

### Using the Terminal

:::warning
**This process requires you to type your 24 word seed phrase into an online device. Please ensure your device contains no malware before proceeding. This process should ONLY be used if you have no backup!** 
::: 

1. Set up your new clean node that you wish to restore to and login to your MiniDapp System (MDS)
2. Open the Terminal MiniDapp
3. Enter the following command, using the `phrase` parameter for your 24 word seed phrase and the `keyuses` parameter to set the maximum number of times you signed (i.e. sent) a transaction.
```
archive action:resync phrase:"YOUR 24 WORD SEED PHRASE HERE" host:auto keyuses:1000
```
:::note Parameters
- **host:** Enter the ip:port of an archive node you wish to re-sync from e.g. 10.198.89.98:9001. You can use the default **auto** option to use one of the pre-set Archive nodes.
- **keyuses:** (optional) How many times at most did you use your keys for signing a transaction.. Every time you resync with seed phrase this needs to be higher as Minima Signatures are stateful. Defaults to 1000 - the max is 262144 for normal keys.
- **keys:** (optional) The number of public/private key pairs to generate. All nodes are created with 64 addresses so 64 is the default, if you used `newaddress`, you can specify more. 
:::

4. Press Enter
5. The restore will begin, please be patient
6. Check the logs to see when the process is complete
7. Reload your MiniDapp System - you may have to accept the security warning again 

Once complete, your coins will be restored.