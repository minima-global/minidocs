---
sidebar_position: 4
---
# Importing your seed phrase

Performing a seed re-sync will **WIPE your node completely** before re-syncing your wallet using an archive file.

**Do not attempt to use any other MiniDapps whilst syncing is in progress.**

:::warning
If your device is connected to Microsoft Onedrive, iCloud or another app which automatically syncs locally changed files to the cloud, please pause syncing for the duration of your node recovery process as they can interfere.
:::

:::warning transaction history
Transaction history will be deleted so you may wish to download this from the Wallet MiniDapp before proceeding.
:::

## From the Security MiniDapp

![dappmenu](/img/app/security.png#width10)

1. Open the Security MiniDapp
2. Select **Archive reset**
3. Select **Import seed phrase**
4. Upload an archive file. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima) to get one or go to https://spartacusrex.com/archive and download the latest file.
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

Download an archive file and move it into your Minima data folder (the default location for exported files and backups). If you do not have one, you can visit our [Discord server](https://discord.com/invite/minima) or go to https://spartacusrex.com/archive and download the latest file, then run the following command entering your seed phrase and setting your key uses.

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