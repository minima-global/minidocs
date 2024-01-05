---
sidebar_position: 3
---

# Managing MiniDapps

Provided the MiniDapp system is enabled, a set of default MiniDapps will be installed when starting a new node. New or updated MiniDapps can be found in the **Dapp Store** MiniDapp.

## Installing new MiniDapps

1. Login to Minima and open the **Dapp Store** MiniDapp
2. If the Dapp Store is in WRITE mode, you can install MiniDapps with one click then return to the home screen to open the new MiniDapp.

![MDS](/img/runanode/mds_dappstore.png#width50)


3. If the Dapp Store is in READ mode, you must first download the MiniDapp to your device

*Alternatively, MiniDapps can be downloaded from our [MiniDapp site.](https://minidapps.minima.global/)*

![MDS](/img/runanode/mds_dappstoreread.png#width50)

:::info Safari users
If using Safari, ensure the MiniDapps are not unzipped during the download by changing the setting as follows:
1. Open Safari 
2. Click Preferences
3. Under the **General** tab, uncheck the option **"Open “safe” files after downloading"**
:::

4. Return to the home screen and click on the + icon in the top right 

![MDS](/img/runanode/mds_installdapp.png)

5. **Choose File** and select the MiniDapp you just downloaded

6. Click **Install**, then return to the home screen to open it

![MDS](/img/runanode/mds_installdapp3.png#width30)


## Updating MiniDapps

MiniDapps do not automatically update when a new version is released to the DAPP store, this gives you the flexibility to decide which version of a MiniDapp you wish to use and ensures that MiniDapp distribution is not centralized. 

When a new version of a MiniDapp becomes available, it is generally best practice to **update** a MiniDapp instead of installing the new one and deleting the old one, as each MiniDapp contains it's own data which is lost when deleting a MiniDapp.

By updating a MiniDapp, all data will be transferred automatically to the new MiniDapp, preventing loss of data. 

**To update a MiniDapp to a new version:**

1. Login to Minima and open the **Dapp Store** MiniDapp

2. If the Dapp Store is in WRITE mode, you can update MiniDapps with one click then return to the home screen to open the new MiniDapp.

3. If the Dapp Store is in READ mode, you must first download the MiniDapp to your device 

*Alternatively, MiniDapps can be downloaded from our [MiniDapp site.](https://minidapps.minima.global/)*

3. Return to the Home screen and right click (or long press on mobile) on the MiniDapp you wish to update

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