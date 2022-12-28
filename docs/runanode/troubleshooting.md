---
sidebar_position: 8
---

# Troubleshooting

Last updated: December 2022

You will find some of our most commonly asked questions and issues below. <br/>

## Missed Incentive Rewards

Any missed Incentive Rewards will be compensated for at Mainnet, provided you have consistently been running Minima and have updated to version 103.28 or above.

## Android: App crashing on open
Please ensure you have uninstalled v100.32 before downloading Minima from the [Google Play Store](https://play.google.com/store/apps/details?id=com.minima.android&hl=en&gl=US).

## Unable to access the MiniDapp System (MDS) URL

Please ensure:
- You are using `https://` at the beginning of your URL
- You are not using Firefox, Firefox is not supported
- You have accepted the security warning. Guidance for passing the security warning can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>
- If running a manual node, the MiniDapp System (MDS) must be enabled by using the `-mdsenable` parameter on start up

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
1. To check the current resources, run `docker info` or `htop`
2. You can allocate additional memory using the following commands:

`sudo swapoff -a` <br/>
`sudo fallocate -l 2G /swapfile` <br/>
`sudo chmod 600 /swapfile`<br/>
`sudo mkswap /swapfile`<br/>
`sudo swapon /swapfile`<br/>



-----------

For further assistance, you can contact a Team member in Discord or Telegram community channels

- [Discord](https://discord.gg/ZQaUXPape5)
- [Telegram](https://t.me/Minima_Global) 







