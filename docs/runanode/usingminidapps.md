---
sidebar_position: 4
---

# Using MiniDapps

[MiniDapps](/docs/learn/minidapps/minidappsintro) are Minima's decentralized applications that run on your Minima node. 

All the latest MiniDapps can be downloaded from https://minidapps.minima.global/.

**The following guidance is for DESKTOP and SERVER users, Android users can access their MiniDapp hub from the app Home page.**

## Accessing the MiniDapp Hub

To access your MiniDapp hub, refer to the following guidance according to your platform of choice:


[Linux Server (Docker)](/docs/runanode/selectplatform/linux_vps#access-your-minidapp-hub)

Windows
- [Windows (Docker)](/docs/runanode/selectplatform/windows#access-your-minidapp-hub)
- [Windows (Non-Docker)](/docs/runanode/selectplatform/manualnode#access-your-minidapp-hub)

Mac
- [Mac (Docker)](/docs/runanode/selectplatform/mac#access-your-minidapp-hub)
- [Mac (Non-Docker)](/docs/runanode/selectplatform/manualnode#access-your-minidapp-hub)

Linux Desktop
- [Linux Desktop (Docker)](/docs/runanode/selectplatform/linux_desktop#access-your-minidapp-hub)
- [Linux Desktop (Non-Docker)](/docs/runanode/selectplatform/manualnode#access-your-minidapp-hub)

-------

## Installing MiniDapps
1. Download and save the MiniDapps you wish to use from our [MiniDapp site.](https://minidapps.minima.global/)
2. Click on **Choose File** and select a MiniDapp 
3. Click **Install** and return to the hub to open the app

![Windows](/img/buildonminima/minihub.png)

:::note Testnet Coins
To use the Wallet MiniDapp, you will need Testnet Minima coins which can be obtained from the **Gimme20** MiniDapp.
**Testnet coins have no real world value.**
:::

-------

## MiniDapp Permissions

By default, all MiniDapps will be given **READ** permission.

When a MiniDapp with READ permission attempts to run a command which would make changes to your node or require access to your funds, a PENDING command will be created which you will need to accept. 
:::warning 
You should only give **WRITE** permissions to MiniDapps that you trust. <br/>
Only the **Terminal** MiniDapp will need **WRITE** permission so you can approve/deny transactions.
:::


### Setting the Terminal permissions to WRITE 

1. Login and install the Terminal MiniDapp
2. Return to your desktop/server command line and run the `mds` command again (see above) to list your MiniDapps and check their existing permissions
3. You will see the Terminal MiniDapp listed, **copy the uid from YOUR node**
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
**You may now use the Terminal MiniDapp to execute all commands** - you will no longer need to use your desktop command line interface/server RPC commands. 


### Accepting/Denying Pending Commands

When using MiniDapps that have READ permissions, you will be asked to **accept/deny** commands that require access to your funds e.g. Sending funds from the Wallet or MaxSolo

To review your pending commands, open the Terminal MiniDapp and run:
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

Accepting the command will execute the command; denying will remove the pending command from the list and will not be executed.

-------

## Uninstalling MiniDapps
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
```