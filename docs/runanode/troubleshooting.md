---
sidebar_position: 7
---

# Troubleshooting

Last updated: 27th July 2022

You will find some of our most commonly asked questions and issues below. <br/>
If you are unable to resolve your issue, please reach out in our [Discord](https://discord.gg/ZQaUXPape5) or [Telegram](https://t.me/Minima_Global) channel and a Team member will be happy to help. 

## Known Issues (v103)

Version 103 is a concensus critical change, therefore during the switchover period you may experience some of the following issues:


### Server nodes on the wrong chain
Due to an issue that occurred in the process of many server nodes upgrading simultaneously, some server nodes are on a side chain.

**Nodes on the wrong chain will not be able to participate in Testnet testing and will have issues receiving Incentive Rewards.**

**All server nodes are required to do a clean install of Minima. **

Please do the following to ensure you rejoin the main chain: 
:::note
If you have more than one node, you should adjustment the port numbers to your nodes.
:::

1. ssh onto your server
2. Stop the minima services 
```
sudo systemctl stop minima_9001
```
Repeat if you have multiple nodes, for example:
```
sudo systemctl stop minima_8001
sudo systemctl stop minima_7001
sudo systemctl stop minima_9021
```
3. Remove the Minima data files (this will remove the data for all nodes)
```
sudo rm -rf /home/minima/.minima*
```
4. Restart Minima
```
sudo systemctl start minima_9001
```
Repeat if you have multiple nodes, for example:
```
sudo systemctl start minima_8001
sudo systemctl start minima_7001
sudo systemctl start minima_9021
```
5. Set up your firewall by following the instructions on the [Linux Server](/docs/runanode/selectplatform/linux_vps#secure-your-node) page (if not already set up).

6. [Reconnect your Incentive ID](/docs/runanode/selectplatform/linux_vps#how-to-set-up-your-incentive-program-account-to-receive-rewards) to your node

### Missed Incentive Rewards

If you are running your node on a server, please follow the steps above to ensure you are on the right chain.

Please continue to run your node as usual and ensure that: <br/>
- Your Incentive ID is connected to your node
- The `status` command returns a value of TRUE
- The last block from your status command is close to the current time

Any missed Incentive Rewards as a result of the network upgrade will be compensated after the network upgrade is complete.

### Public IP nodes with open RPC Port vulnerability (Server users)
VPS users which have Minima's default RPC port (9005) open, are exposed to external access to their Minima node. <br/>
Please ensure this port is blocked from external access; firewall instructions are provided in the [Linux Server](/docs/runanode/selectplatform/linux_vps) page.

### Increased CPU  usage (Server users)
Some nodes experience increased CPU load. If this happens to you, please remove Minima completely and start a new, clean instance of Minima.

### Maxima messaging failing to send in MaxSolo
We are aware of some contacts occasionally having internal IP addresses which causes messages sent in MaxSolo to fail. <br/>
Contact addresses change periodically so the issue can be temporary, please Refresh your contacts list and try again later.<br/>
The team are working on a fix for a future release.


For further assistance, you can contact a Team member in Discord or Telegram community channels

- [Discord](https://discord.gg/ZQaUXPape5)
- [Telegram](https://t.me/Minima_Global) 







