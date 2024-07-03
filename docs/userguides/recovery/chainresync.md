---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chain re-sync

A chain re-sync ensures your node is on the correct top block and restores the wallet to the latest state. 

:::warning transaction history
Transaction history will be deleted so you may wish to download this from the Wallet MiniDapp before proceeding.
:::

## QuickSync method

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
3. Select **QuickSync**
4. Enter the IP:port of a Mega node. If you do not have one, you can use the example IP provided, 34.32.59.133:9001
5. Select **Restore**
6. Wait for the sync to complete, this should only take a few moments. The node will shutdown when complete
7. Restart the node for the re-sync to take effect. Then allow a few minutes for the node to connect to the network

You will then be on the correct top block.

</TabItem>

<TabItem value="cli">

1. Access the Minima Terminal via the MiniDapp, Docker CLI, Command Line or RPC Client
2. Enter the following command, then press Enter

Example
```
megammrsync action:resync host:34.32.59.133:9001
```

The re-sync will begin, this should only take a few moments.

3. Check the logs to see when the process is complete. The node will shutdown automatically.

4. Restart the node for the re-sync to take effect. Then allow a few minutes for the node to connect to the network.

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
3. Select **Chain re-sync**
4. Select a recent internal archive file or upload a new one. If you do not have one, you can visit our [Discord server](https://discord.com/invite/minimaglobal) or go to https://spartacusrex.com/archive and download the latest file.

:::important
For a successful re-sync to the latest block, you must use an archive file from within the last week.
:::

5. Select **Continue**
6. Wait for the restore to finish, this can take a long time. **Please be patient and do not attempt to use any other MiniDapps whilst this is in progress.**
7. Restart the node for the re-sync to take effect. Please allow a few minutes for the node to connect to the network.

Once complete, you will be on the correct top block.

### From the Terminal (advanced)

<details>
<summary> Expand for details </summary>

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

Once complete, you will be on the correct top block.

For further help using the `archive` command, use `help command:archive` from the Terminal.
</details>
