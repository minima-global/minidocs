---
sidebar_position: 3
---

# Approving transactions

When using MiniDapps that have READ permission, you will need to **accept or deny** any transactions or sensitive commands they trigger from the **Pending** MiniDapp.

![MDS](/img/runanode/mds_pendingicon.png#width10)

To review and accept or deny pending commands:

1. Open the **Pending** MiniDapp.
2. All actions awaiting approval will be listed in the order they were triggered.
3. Review each command and select **Approve** to run the command or **Deny** to stop the command and remove it from the list.
4. If your wallet if locked, you may be prompted to enter your password when approving a command.

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

