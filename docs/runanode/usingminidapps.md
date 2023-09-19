---
sidebar_position: 7
---

# Manage your MiniDapps

Once your node running, you can use Minima's decentralized applications - **MiniDapps.** 

MiniDapps are simply zip files (.mds.zip) containing a web application that interacts with Minima. 

Learn more about MiniDapps [here](/docs/learn/minidapps/minidappsintro) <br/>

To use MiniDapps, you must be running a node with the MiniDapp system enabled and be logged in.
<!-- 
:::tip
All the latest MiniDapps can be downloaded from our official [MiniDapp site](https://minidapps.minima.global/) or from the **Dapp Store** MiniDapp installed on your node.
:::

:::note ANDROID USERS
If running a node on Android, please see the [Using MiniDapps](/docs/runanode/selectplatform/android_v9_and_up#using-minidapps) section on the Android page instead. 
::: -->

-------

## Installing MiniDapps

1. Login to Minima and open the **Dapp Store** MiniDapp
2. Download and save the MiniDapps you wish to use 

*Alternatively, MiniDapps can be downloaded from our [MiniDapp site.](https://minidapps.minima.global/)*

:::info Safari users
If using Safari, ensure the MiniDapps are not unzipped during the download by changing the setting as follows:
1. Open Safari 
2. Click Preferences
3. Under the **General** tab, uncheck the option **"Open “safe” files after downloading"**
:::

3. Return to Minima and click on the + icon in the top right 

![MDS](/img/runanode/mds_installdapp.png)

4. **Choose File**, select a MiniDapp that you just downloaded

5. Click **Install** and return to the hub to open it

![MDS](/img/runanode/mds_installdapp2.png)

-------

## MiniDapp Permissions

By default, all MiniDapps will be given **READ** permission. This means that you must approve any transaction or command made by the MiniDapp that attempts to access your wallet.

MiniDapps with **WRITE** permission can transact or run any command without asking for your approval. 

:::warning 
Before giving a MiniDapp WRITE permissions, ensure your node is locked with a password.<br/>
**You should only give WRITE permissions to MiniDapps that you trust.**
:::


### Setting MiniDapp permissions 

To change the permissions for a MiniDapp:

1. Right click on a MiniDapp (or long press on mobile)
2. Select **Write mode** (or Read mode)

![MDS](/img/runanode/mds_updateperms.png#width40)

3. Click **Confirm**

![MDS](/img/runanode/mds_writeaccess.png#width40)
<!-- 
#### Setting MiniDapp permissions - using Terminal

To change MiniDapp permissions from the Terminal:

1. Open the Terminal MiniDapp
2. Run the `mds` command to list your MiniDapps and check their existing permissions (If Terminal is in read mode, you will have to accept the Pending command from the Pending MiniDapp)
3. Copy the uid from YOUR node
```
    {
      "uid":"0xB4C47D4AD267C3D2D4EF6E086FD12845",
      "conf":{
        "name":"Terminal",
        "icon":"terminal.png",
        "version":"1.91",
        "description":"Terminal CLI for Minima",
        "permission":"write",
        "browser":"internal"
      }
    },
```
4. Run the following command, **pasting in YOUR uid**:

**Windows/Mac/Linux Desktop**
```
mds action:permission uid:0x02FA22EF2A2A3B0FA01D688A902779E5 trust:write
```

**Server (Using RPC)**
```
curl 127.0.0.1:9005/mds%20action:permission%20uid:0x02FA22EF2A2A3B0FA01D688A902779E5%20trust:write
```
Output:
```
{
  "command":"mds",
  "params":{
    "action":"permission",
    "uid":"0x02FA22EF2A2A3B0FA01D688A902779E5",
    "trust":"write"
  },
  "status":true,
  "pending":false,
  "response":{
    "uid":"0x02FA22EF2A2A3B0FA01D688A902779E5",
    "conf":{
      "name":"Wallet",
      "icon":"minimaWallet.png",
      "version":"0.1.5",
      "description":"Official Minima Wallet",
      "permission":"write",
      "browser":"internal"
    }
  }
}
```
 -->

### Accepting/Denying Pending Commands

When using MiniDapps that have READ permissions, you will need to **accept/deny** commands that require access to your wallet e.g. Sending funds from the Wallet or MaxSolo

To review and Accept/deny your Pending actions:

1. Open the Pending MiniDapp

![MDS](/img/runanode/mds_pendingicon.png#width10)

2. All actions pending approval will be listed

3. Review each action and select **Approve** to run the command or **Deny** to discard the command and remove it from the list

![MDS](/img/runanode/mds_pending.png)


<!-- 
```
mds action:pending 
```
**Example: Sending a transaction from the Wallet**

```
mds action:pending
{
  "command":"mds",
  "params":{
    "action":"pending"
  },
  "status":true,
  "pending":false,
  "response":{
    "pending":[{
      "uid":"0x4D020F84762AAB4EF593B6E6DACE7064",    <--COPY THIS UID
      "minidapp":{
        "uid":"0xFE2750C4186CF82FB4E91D5FEA21839F",
        "conf":{
          "name":"Wallet",
          "icon":"minimaWallet.png",
          "version":"0.1.5",
          "description":"Official Minima Wallet",
          "browser":"internal",
          "permission":"read"
        }
      },
      "command":"send amount:1 address:MxG087TG0E8G7FN4SF8T22YTZ00Z8MHA8FF7ERZMWD4TWAK3Y07GGBG4PBGEG1U tokenid:0x00 burn:0"
    },
```

Copy the `uid` of the pending command, then **to accept/deny the command** write:
```
mds action:accept/deny uid:0x4D020F84762AAB4EF593B6E6DACE7064
```

Accepting the command will execute the command; denying will remove the pending command from the list and will not be executed. -->

-------
## Updating MiniDapps

MiniDapps do not automatically update when a new version is released to the DAPP store, this gives you the flexibility to decide which version of a MiniDapp you wish to use and ensures that MiniDapp distribution is not centralized. 

When a new version of a MiniDapp becomes available, it is generally best practice to **update** a MiniDapp instead of installing the new one and deleting the old one, as each MiniDapp contains it's own data which is lost when deleting a MiniDapp.

By updating a MiniDapp, all data will be transferred automatically to the new MiniDapp, preventing loss of data. 

**To update a MiniDapp to a new version:**

1. Login to Minima and open the **Dapp Store** MiniDapp

2. Download the new version of the MiniDapp you wish to update

*Alternatively, MiniDapps can be downloaded from our [MiniDapp site.](https://minidapps.minima.global/)*

3. Right click on the MiniDapp you wish to update (or long press on mobile)

![MDS](/img/runanode/mds_dappoptions.png#width40)

4. Select **Update**

5. Find and select the MiniDapp you just downloaded 

6. Click **Update**


<!-- 
2. Save it to your node's basefolder. If using Docker, this will be the `minimadocker9001` folder for example. Desktop users can set their basefolder when starting their node using the `-basefolder` parameter.
3. From the Minima Terminal, run 
```
mds
```
You may have to accept a pending command. 

4. Copy the `uid` of the minidapp you wish to update

```
      "uid":"0x21D94D4EBE2AFE1284D180334F34B93E0C435CDDBC1A219C501E1F72EBBCF103",
      "conf":{
        "name":"MiniSwap",
        "icon":"webicon.png",
        "version":"0.1",
        "description":"Swap ETH or Tokens for Minima trustlessly using HTLC atomic swaps on Miniswap",
        "permission":"write",
        "browser":"internal"
```

5. Run


``` 
mds action:update uid: file:
```

where 
- `uid` is the uid of the MiniDapp you are updating and 
- `file:` is either the name of the MiniDapp e.g. wallet-1.0.mds.zip (if the MiniDapp exists in the basefolder) or the full path is the MiniDapp is not in the basefolder.

You may have to accept another pending command unless the Terminal has been given WRITE access.

Example

``` 
mds action:update uid:0x21D94D4EBE2AFE1284D18034F34B93E0C435CDDBC1A219C501E1F72EBBCF103 file:miniswap-0.2.mds.zip
```
or 
```
mds action:update uid:0x21D94D4EBE2AFE1284D180334F34B93E0C435CDDBC1A219C501E1F72EBBCF103 file:C\Users\youruser\Downloads\miniswap-0.2.mds.zip
```
Output:
```
{
  "command":"mds",
  "params":{
    "action":"update",
    "file":"miniswap-0.2.mds.zip",
    "uid":"0x21D94D4EBE2AFE1284D180334F34B93E0C435CDDBC1A219C501E1F72EBBCF103"
  },
  "status":true,
  "pending":false,
  "response":{
    "updated":{
      "uid":"0x21D94D4EBE2AFE1284D180334F34B93E0C435CDDBC1A219C501E1F72EBBCF103",
      "conf":{
        "name":"MiniSwap",
        "icon":"webicon.png",
        "version":"0.2",
        "description":"Swap ETH or Tokens for Minima trustlessly using HTLC atomic swaps on Miniswap",
        "permission":"write",
        "browser":"internal"
      }
    }
  }
}
```

6. The MiniDapp will be updated, retaining it's previous data and permissions. -->

-------
## Deleting MiniDapps

**Deleting a MiniDapp is irreversible. Any data stored in the MiniDapp's database will be lost when deleted.**

**On-chain data will not be lost** as a result of deleting a MiniDapp, this means that deleting the Wallet MiniDapp for example, will not result in any loss of coins.

To delete a MiniDapp:

1. Right click on the MiniDapp to uninstall (or long press on mobile)

2. Select **Delete MiniDapp** 

![MDS](/img/runanode/mds_dappoptions.png#width40)

3. Select **Confirm**

<!-- 
1. From the Command Line where Minima is running, type 
```
mds
```
You should see an output similar to below:

```
mds
{
  "command":"mds",
  "status":true,
  "response":{
    "password":"1SV0-F0WN-K367",
    "minidapps":[{
      "uid":"0xFE2750C4186CF82FB4E91D5FEA21839F",
      "conf":{
        "name":"Wallet",
        "icon":"minimaWallet.png",
        "version":"0.1.5",
        "description":"Official Minima Wallet"
      }
    }]
  }
}
```
3. Copy the **UID**
4. Enter the following command, pasting your MiniDapp `uid` on the end:

**Example** 
```
mds action:uninstall uid:0xFE2750C4186CF82FB4E91D5FEA21839F
``` -->