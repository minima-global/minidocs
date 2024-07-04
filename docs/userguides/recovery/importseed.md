---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Importing your seed phrase

Performing a seed re-sync will **WIPE your node completely** before restoring your wallet from the given 24 word seed phrase.

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

:::warning MiniSwap restore
If you have funds in MiniSwap, and you are importing your seed phrase, you will need to resync **TWICE**. <br/>
First restore your seed phrase with QuickSync, then open the MiniSwap app, put it in WRITE mode and set up your API keys. This will add the MiniSwap script to your node. You must then perform a [chain re-sync](/docs/userguides/recovery/chainresync) to restore your MiniSwap coins.  
:::

:::warning transaction history
Transaction history will be deleted so you may wish to download this from the Wallet MiniDapp before proceeding.
:::


## Restore your Seed phrase with QuickSync

<Tabs
  defaultValue="security"
  values={[
    {label: 'Security MiniDapp', value: 'security'},
    {label: 'Terminal/Command Line/RPC Client', value: 'cli'},  
  ]}>

<TabItem value="security">

![dappmenu](/img/app/security.png#width10)

1. Login to your MiniHub and open the Security MiniDapp
2. Select **Restore node**
3. Select **Import Seed Phrase**
4. Enter the IP:port of a Mega node. If you do not have one, you can use the example IP provided, 34.32.59.133:9001. Then select **Next**.
5. Enter your Seed Phrase carefully. Then select **Next**.
6. Enter the number of Keys to create, if unsure then leave this as the default of 64. Then select **Next**.
7. Enter Key Uses, if you have never restored your seed phrase before, use the default of 1000. If you have, enter a higher number e.g. 2000. This should be the highest number of times you could possibly have used your keys r.g. for signing transactions. Then select **Next**.
8. Select **Restore**
9. Wait for the sync to complete, please be patient whilst the keys are recreated and the wallet is restored. The node will shutdown when complete.
10. Restart the node for the restore to take effect. Then allow a few minutes for the node to connect to the network.

You will then be on the correct top block.

</TabItem>

<TabItem value="cli">

1. Access the Minima Terminal via the MiniDapp, Docker CLI, Command Line or RPC Client
2. Enter the following command, then press Enter

Example
```
megammrsync action:resync host:34.32.59.133:9001 phrase:"YOUR 24 WORD SEED PHRASE" keyuses:2000
```

The re-sync will begin, please be patient whilst the keys are recreated and the wallet is restored.

3. Check the logs to see when the process is complete. The node will shutdown automatically.

4. Restart the node for the restore to take effect. Then allow a few minutes for the node to connect to the network.

You will then be on the correct top block.

For further help using the `megammrsync` command, use `help command:megammrsync` from the Terminal.

</TabItem>
</Tabs>

-------

## Legacy method (using an Archive file)

:::warning
If your device is connected to Microsoft Onedrive, iCloud or another app which automatically syncs locally changed files to the cloud, please pause syncing for the duration of your node recovery process as they can interfere.
:::


1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Import seed phrase**
4. Upload an archive file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minimaglobal) to get one or go to https://spartacusrex.com/archive and download the latest file.
5. Continue to enter your seed phrase carefully 
6. Start the re-sync process, please be patient and leave the process to finish

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

7. Restart the node for the import to take effect

## From the Terminal (advanced)

<details>
<summary> Expand for details </summary>

**This process requires you to type your 24 word seed phrase into an online device. Please ensure your device contains no malware before proceeding. This process should ONLY be used if you have no backup!** 

1. Set up a new clean node that you wish to restore to and login to Minima
2. Open the Terminal MiniDapp
3. Decide if you wish to resync using an archive file (recommended) or by connecting to a running archive node

**Using an archive file (recommended):**

Download an archive file and move it into your Minima data folder (the default location for exported files and backups). If you do not have one, you can visit our [Discord server](https://discord.com/invite/minimaglobal) or go to https://spartacusrex.com/archive and download the latest file, then run the following command entering your seed phrase and setting your key uses.

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