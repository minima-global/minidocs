---
sidebar_position: 2
---

# MiniDapp permissions

By default, all MiniDapps will be given **READ** permission. Any transactions or sensitive commands triggered from read apps must be [approved](/docs/userguides/usingyournode/approvingtxns) from the Pending MiniDapp.

MiniDapps with **WRITE** permission can transact or run any command without asking for your approval. 

:::warning 
Before giving a MiniDapp WRITE permissions, ensure your [wallet is locked](/docs/userguides/walletsecurity/lockingyourwallet) with a password.<br/>
**You should only give WRITE permission to MiniDapps that you trust.**
:::


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
