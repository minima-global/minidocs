---
sidebar_position: 11
---

# Troubleshooting

**Last updated:** April 2023<br/>
**As of version:** 1.0.26

You will find some of our most commonly asked questions and issues below. <br/>

Before continuing, please ensure you are on a Mainnet version of Minima **(v 1.0.x)** by checking the status of your node. 

If you are still running v 0.103.x or below, you are still on Testnet and need to update to the [latest version](/docs/runanode/get_started).


## Android: App crashing on open

If your app is crashing, there are several steps you can try:

1. Ensure you have uninstalled Testnet v100.32 before downloading Minima from the [Google Play Store](https://play.google.com/store/apps/details?id=com.minima.android&hl=en&gl=US).
2. Ensure you are on the latest version
3. Restart the phone
4. If the above steps do not help, you will need to uninstall the app and reinstall the latest version. You will then need to [restore a backup](/docs/runanode/selectplatform/android_v9_and_up#how-to-restore-your-node-from-a-backup) you have taken previously or do a [seed resync](/docs/runanode/restorefunds#how-to-perform-a-seed-re-sync) from an Archive node.<br/>
A video tutorial of a seed re-sync can be found [here](https://www.youtube.com/watch?v=54E1_PbHnXQ).

## Node is not remaining in sync with the top block

If your node is not remaining in sync with the top block, there are several steps you can try:

1. Check your internet connection
2. On Android, check your battery settings as per the guidance [here](/docs/runanode/selectplatform/android_v9_and_up). 
3. Restart the node and allow 10 minutes after restarting for the node to sync

**Android:** Select ShutDown from the menu on the Health Page<br/>
**Docker/desktop/server:** Type `quit compact:true` into the Terminal and wait for the shutdown to complete. Once complete, restart the node.

4. If still not syncing, attempt a [chain resync](/docs/runanode/restorefunds#how-to-perform-a-chain-re-sync) from an Archive node

## Unable to send coins due to script failure

If you have attempted to send coins but there is no change to your balance, please check the Logs after attempting to send. 

If you see a message saying:
```
Error Monotonic TxPoW failed script check from Client:0x00 
```

Please continue to check your keys.

**To check your keys:**

1. Open the Terminal MiniDapps and run 
```
keys action:checkkeys
```

2. Tick the box to see logs, you will see each address being checked - please be patient - this command can take 5 mins to complete. 

At the end you should see 
```
{
  "command":"keys",
  "params":{
    "action":"checkkeys"
  },
  "status":true,
  "pending":false,
  "response":{
    "allkeys":64,
    "correct":64,
    "wrong":0
  }
}
```

If you have any wrong keys, please visit the #check-keys channel in Discord and provide a screenshot of the output from the function. 

We will then look into your case on an individual basis.


## Unable to access the MiniDapp System (MDS) URL

Please ensure:
1. You are using `https://` at the beginning of your URL
2. You are not using Firefox, Firefox is not supported
3. You have accepted the security warning. Guidance for passing the security warning can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>
4. If running a manual node, the MiniDapp System (MDS) must be enabled by using the `-mdsenable` parameter on start up
5. If on a **server** or **Mac** device, you may also need to accept the security warning on https://YourServerIP:9004/ (server) or https://127.0.0.1:8004/ (Mac) before returning to the usual MDS url on port 9003 (server) or 8003 (Mac).

## Error logging into your MiniDapp System (MDS)

Please ensure you have only used lowercase characters a-z and numbers in your password.

To check or change your password, please revisit the Run a Node instructions:

[Linux VPS](/docs/runanode/selectplatform/linux_vps#how-to-check-your-minidapp-system-password)<br/>

[Windows](/docs/runanode/selectplatform/windows#how-to-check-your-minidapp-system-password)<br/>
[Mac](/docs/runanode/selectplatform/mac#how-to-check-your-minidapp-system-password)<br/>
[Linux Desktop](/docs/runanode/selectplatform/linux_desktop#how-to-check-your-minidapp-system-password)<br/>
[Desktop (Manual)*](/docs/runanode/selectplatform/manualnode#access-your-minidapp-hub)<br/>

*Note that you cannot set your own password if running a node manually on Desktop or on Android.

## Docker: Node keeps stopping

Please ensure you have given your node enough resources.

You should allow 2 CPUs and 2GB RAM per node. 

Desktop nodes: 
1. Go to the Docker Desktop settings
2. Ensure the CPU is set to 2 and Memory is set to 2GB per node.

Server nodes: 
You may prefer to [install Minima as a service](/docs/runanode/selectplatform/linuxvpsservice) on your server instead. 



-----------

For further assistance, you can contact a Team member in Discord or Telegram community channels

- [Discord](https://discord.gg/ZQaUXPape5)
- [Telegram](https://t.me/Minima_Global) 







