---
sidebar_position: 10
---

# Restore your node

If you lose access to your node or you become out of sync with the chain, you can either:

1. **Restore a backup** to a new or existing node

2. **Chain re-sync**, your seed phrase is not required 

  If you have been offline for too long and your node is not on the correct tip block, you can re-sync to the latest block by performing a chain re-sync. All your coins will be re-synced from the existing seed phrase.

3. **Import your seed phrase** (seed re-sync)

  If you do not have a valid backup or you have lost access to your node, you can restore access to your coins by importing your 24 word seed phrase. All your coins will be re-synced from the seed phrase you provide.

All the above processes can be found in the Security MiniDapp.

![security](/img/app/security.png#width10)

:::important
Please note that by using someone else's archive node or file to re-sync your own node, you are **relying on a third party.**

Also see how to [run your own archive node](/docs/runanode/archivenodes).
:::

## Restoring from a backup

<!-- For details on how to restore a backup, select your platform of choice from the [Get Started](/docs/runanode/get_started) page and see **How to restore your node from a backup** in the **FAQ** section.
 -->

### Restore a backup via the Security MiniDapp

**If your backup is less than a week old:**

1. Open the Security MiniDapp
2. Select **Restore from backup**
3. If you previously uploaded a backup or enabled auto backups, you may select an internal backup. Alternatively, upload an external backup from your file storage. 
4. Enter the password used when generating the backup 
5. Optionally, enter the IP:Port or URL of an archive node - this will be used to sync the latest blocks since the backup was taken
6. Select **Restore** 
7. Wait for the restore to finish.

**Please be patient and do not attempt to use any other MiniDapps whilst this is in progress.**

8. Once complete the node will shutdown

Once restarted, your seed phrase and coins will have been restored.

**If your backup is older than 1 week:**

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Restore a backup**
4. Upload an archive export file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima) to get one
5. Upload your backup and enter the password used when generating the backup 
6. Select **Restore** 
7. Wait for the restore to finish, this can take a long time. 

**Please be patient and do not attempt to use any other MiniDapps whilst this is in progress.**

8. Once complete the node will shutdown

Once restarted, your seed phrase and coins will have been restored.

## Chain re-sync

Your coins will all be re-synced using the existing seed phrase.

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

### Chain resync via the Security MiniDapp

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Chain re-sync**
4. Select a recent internal archive file or upload a new one. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima).

:::important
For a successful re-sync to the latest block, you must use an archive file from within the last week.
:::

5. Select **Continue**
6. Wait for the restore to finish, this can take a long time. **Please be patient and do not attempt to use any other MiniDapps whilst this is in progress.**
7. Restart the node for the re-sync to take effect. Please allow a few minutes for the node to connect to the network.

Once complete, you will be on the correct tip block.

### Chain resync via the Terminal

<details><summary> Expand for details </summary>

1. From an existing node that is out of sync with the latest tip block, login to Minima
2. Open the Terminal MiniDapp
3. Use one the following commands depending on whether you wish to re-sync from an archive file or a host, WITHOUT providing your 24 word seed phrase.

Example using an archive file (recommended)
```
archive action:import file:archive-export.gzip

```

Example using an host
```
archive action:resync file:xx.xxx.xx.xx:9001

```

4. Press Enter
5. The re-sync will begin, please be patient
6. Check the logs to see when the process is complete
7. Once complete, restart Minima - you may have to accept the security warning again 

Once complete, you will be on the correct tip block.

For further help using the `archive` command, use `help command:archive` from the Terminal.
</details>

## Import your seed phrase

Performing a seed re-sync will **WIPE your node completely** before re-syncing your coins from an Archive node.

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

### Import seed phrase via the Security MiniDapp

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Import seed phrase**
4. Upload an archive export file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima).
5. Continue to enter your seed phrase carefully 
6. Start the re-sync process, please be patient and leave the process to finish

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

7. Restart the node for the import to take effect

<!-- 
1. On your new device that you wish to restore to, go to the **Archive** page
2. Select **SEED PHRASE RE-SYNC**
3. Enter your Seed Phrase, submitting each word individually until you have completed all 24 words. 
4. Leave **Max Keys Uses** as the default 1000 if you think you have not signed over 1000 transactions, otherwise enter a higher number indicating the maximum times you have signed a transaction.
5. Select **SEED PHRASE COMPLETE**
6. Leave the default Archive Node Host as **auto** to use one of the pre-set Archive nodes, or optionally enter the ip:port of the Archive node you wish to resync from e.g. 10.198.89.98:9001
7. Click **OK**, the resync will begin, please be patient -->

### Import seed phrase via the Terminal MiniDapp

<details><summary> Expand for details </summary>

**This process requires you to type your 24 word seed phrase into an online device. Please ensure your device contains no malware before proceeding. This process should ONLY be used if you have no backup!** 

1. Set up a new clean node that you wish to restore to and login to Minima
2. Open the Terminal MiniDapp
3. Decide if you wish to resync using an archive file (recommended) or by connecting to a running archive node

**Using an archive file (recommended):**

Download an archive file and move it into your Minima data folder (the default location for exported files and backups). If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima), then run the following command entering your seed phrase and setting your key uses.

```
reset archivefile:archiveexport.gzip action:seedsync phrase:"TWENTY FOUR WORDS HERE" keyuses:
```

**Using an archive host:**

Alternatively, you can sync from a running archive node using its host ip:

```
archive action:resync phrase:"YOUR 24 WORD SEED PHRASE HERE" keyuses: host: 
```

***Parameters:***

- **host:** *Enter the ip:port of an archive node you wish to re-sync from e.g. 10.198.89.98:9001.*
- **keyuses: (optional)** *How many times at most did you use your keys for signing a transaction.. Every time you resync with seed phrase this needs to be higher as Minima Signatures are stateful. Defaults to 1000 - the max is 262144 for normal keys.*
- **keys: (optional)** *The number of public/private key pairs to generate. All nodes are created with 64 addresses so 64 is the default, if you used `newaddress`, you can specify more.*


4. Press Enter and **enable logs by checking the box in the top right corner**

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

5. The restore will take a few minutes to begin and could take over 1 hour to complete, please be patient
6. Once complete, the node will shut down
7. Restart Minima and login to access your restored node

</details>