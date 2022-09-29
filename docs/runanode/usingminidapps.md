---
sidebar_position: 7
---

# Using MiniDapps

MiniDapps are decentralized applications on Minima. To learn more about MiniDapps, please see the [About MiniDapps](/docs/learn/minidapps/minidappsintro) section.

:::note Android Users 
The following guidance is for Desktop and Server users. Android users can download the latest MiniDapps from within the app by visiting the **DAPP Store**. Once downloaded, MiniDapps can be installed from the app **Home** page.<br/>
For more guidance on Android, please visit the **Help** section in the app. 
:::

## Accessing the MiniDapp Hub
1. Go to to https://127.0.0.1:9003/ or https://localhost:9003/ in your web browser. <br/>
Server users will need to use https://YourServerIP:9003/  

:::note Security warning
You may be shown a security certificate warning, to which you can click on Advanced, then Proceed. <br/>
This may be different depending on the browser and OS you are using; details on how to do this can be found at: https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/
:::

2. You will see your login page, to get your password return to the Command Line and enter 

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
    "minidapps":[]
  }
}
```
3. Copy and Paste your password into the field and click **Enter**
4. You will see your MiniDapp hub!


## Installing MiniDapps
1. Download and save the MiniDapps you wish to use from [here.](https://github.com/minima-global/Minima/tree/master/mds/store/files)
2. Click on **Choose File** and select a MiniDapp 
3. Click **Install** and return to the hub to open the app

![Windows](/img/buildonminima/minihub.png)

:::note Testnet Coins
To use the Wallet MiniDapp, you will need Testnet Minima coins. These can be got by using the Gimme20 MiniDapp. Testnet coins are not of any value.
:::

## MiniDapp Permissions

By default, all MiniDapps will be given **READ** permission.

When a MiniDapp with READ permission attempts to run a command which would make changes to your node or require access to your funds, a PENDING command will be created which you will need to accept. 
:::warning 
You should only give **WRITE** permissions to MiniDapps that you trust. <br/>
Only the **Terminal** MiniDapp will need to be installed with **WRITE** permission 
:::


To install the Terminal with WRITE permission; you must run following command from the Command Line Interface where Minima is running (ensure you have downloaded the Terminal MiniDapp first and use the relevant file path below):

```
mds action:install file:C:\Users\Downloads\Terminal.mds.zip trust:write
```

You can then use the Terminal to change permissions for a MiniDapp.

### Changing MiniDapp Permissions

To list your MiniDapps and check their existing permission, use `mds` from the Terminal. Each MiniDapp has a `uid` to identify it. 

To change permissions for a MiniDapp, copy the `uid` of the MiniDapp you wish to change and run the following command from the Terminal: 
```
mds action:permissions uid:0x... trust:read/write
```
The output should look like
```
mds action:permissions uid:0x02FA22EF2A2A3B0FA01D688A902779E5 trust:write
{
  "command":"mds",
  "params":{
    "action":"permissions",
    "uid":"0x02FA22EF2A2A3B0FA01D688A902779E5",
    "trust":"write"
  },
  "status":true,
  "pending":false
}
```
### Accepting/Denying Pending Commands

When using MiniDapps that have READ permissions, you will be asked to **accept/deny** commands that require access to your funds e.g. Sending funds from the Wallet or MaxSolo

To review your pending commands, run from the Terminal MiniDapp
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