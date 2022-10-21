---
sidebar_position: 6
---

# Linux VPS

## How to download and install Minima on your Linux Server/Desktop (Debian OS including Ubuntu)

If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/

1. Log in as the root user. (You may need to create a secure SSH connection to your server using PuTTY, Terminal or a similar tool)

2. Open the Command prompt, ensure you are in the root directory

3. From the root directory, please run the following script to set Minima as a service which will run continuously in the background on your server:

```
wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -p 9001
```

4. Wait for Minima to start, this can take up to 30 minutes and Minima will restart during the process

5. When you see the log message below, Minima has started and synced to the chain.
`[+] Connected to the blockchain Initial Block Download received.`

6. Hold `ctrl`+`c` together to exit the logs, Minima will continue to run in the background.

**Congratulations - your node is now installed & running! **

**Running multiple nodes on one server?**<br/> 
You can specify different port numbers on the end to do this, for example using 9121-9125: 
```
wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -p 9121
```

## Interacting with your node

By default Minima is installed on ports 9001-9005. The default RPC port is 9005.
 
You can send commands to your Minima node using curl to the RPC port. 

To install curl:
`sudo apt install curl` then `y`

For improved formatting:
`sudo apt install jq` then `y`

Example: To check the status of your Minima node when logged on to the server:

`curl 127.0.0.1:9005/status | jq`

You will see the current block and other information about your node. 
 
## How to start a clean node

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
5. Set up your [firewall](/docs/runanode/linux_vps#secure-your-node) if not already set up.

6. [Reconnect your Incentive ID](/docs/runanode/linux_vps#how-to-set-up-your-incentive-program-account-to-receive-rewards) to your node

## How to remove a node

:::note
If you have more than one node, you should adjustment the port numbers to your nodes.
:::

1. ssh onto your server
2. Run the following removal script 
```
wget -O minima_remove.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_remove.sh && chmod +x minima_remove.sh && sudo ./minima_remove.sh -p 9001 -x
```
3. Repeat if you have multiple nodes, for example:
```
wget -O minima_remove.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_remove.sh && chmod +x minima_remove.sh && sudo ./minima_remove.sh -p 8001 -x
```
4. Remove the Minima data files and directory (this will remove the data for all nodes)
```
sudo rm -rf /home/minima
```

## How to set up your Incentive Program account to receive Rewards

1. Register at https://incentive.minima.global/ (if you have not done so already)

2. Go to the Incentive ID page and copy your Incentive ID. 

3. Once the Minima is running, enter the following command from your server to connect your Incentive ID to your node

```
curl 127.0.0.1:9005/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
```
(replace the xxx with your own Incentive ID)

Example:
```
curl 127.0.0.1:9005/incentivecash%20uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

You should receive a return status of `true` and see your Reward balances.<br/>


:::note
*If you have multiple nodes on one server, you will need to change the port number in the curl command to the next number from the custom port you chose <br/>
E.g. if you used -9121 to start your node, the RPC port will be 9125*

Example:
```
curl 127.0.0.1:9125/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
```
:::
**Your Incentive Program account is now connected to your node!**

4) Your node will then ping us so we know it's running. 

5) For every day your node pings us, we'll add 1 Minima to your DAILY REWARDS. 

6) To check your Rewards, type `curl 127.0.0.1:9005/incentivecash | jq` into the Command Line on your server.

```
incentivecash
{
  "command":"incentivecash",
  "status":true,
  "response":{
    "uid":"731ae11b-b602-4dea-8564-7cb4edbe07b7",
    "details":{
      "lastPing":"2022-03-14T17:28:38.709Z",
      "inviteCode":"BAEPAAD0",
      "rewards":{
        "dailyRewards":60,
        "previousRewards":100.0,
        "communityRewards":50.0,
        "inviterRewards":10.0
      }
    }
  }
}
```
:::tip Rewards
For every day your node is connected to the network, you will receive 1 Reward within the next 24 hours.
:::


## Useful Commands
`ctrl-c` : Exits the Minima logs (Minima will continue to run in the background)<br/>
`journalctl -u minima_9001 -f` : Show the Minima logs<br/>
`sudo ps -fC java` : Shows all running Java processes<br/>

`sudo apt install curl` : allows you to use curl commands to interact with minima<br/>
Then `y` (for Yes)

`sudo apt install jq` : allows you to use jq to make the output look readable<br/>
Then `y` (for Yes)

`sudo systemctl status minima_9001` - Check the status of the Minima background service

**Stopping/starting Minima (Service must be called minima.service)**<br/>
`sudo systemctl stop minima_9001` - Stop the Minima service<br/>
`sudo systemctl disable minima_9001` - Disable the Minima service<br/>
`sudo systemctl enable minima_9001` - Enable the Minima service <br/>
`sudo systemctl start minima_9001` - Start the Minima service<br/>

**Interacting with Minima**<br/>
`curl 127.0.0.1:9005/status | jq` - shows the status of Minima <br/>
`curl 127.0.0.1:9005/incentivecash | jq` - shows your incentive cash balance<br/>
`curl 127.0.0.1:9005/help | jq` - shows the full list of commands<br/>

**__Terminal Commands__**<br/>
For a full list of Minima Terminal Commands see [Terminal Commands.](/docs/runanode/terminal_commands)

## Secure your Node

We have been made aware of malicious users using Curl commands to insert Incentive IDs into externally accessible server nodes.

**You must take steps to protect your server from external access.**

To prevent access to your node, you must block the RPC Port, 9005 is the default. 

:::note
If you have installed multiple instances of Minima on the same server, you will need to block multiple RPC ports. <br/>
E.g. If you installed Minima on ports 9001 (default), 9121 and 8001, the RPC ports for those nodes will be 9005 (default), 9125 and 8005.
:::

:::warning
If you have other applications on your server other than Minima - please review your existing firewall settings before proceeding.
:::

To install a firewall and secure your node:

1. ssh into your server as root

2. Install Uncomplicated Firewall (ufw)<br/>
`apt-get install ufw`

3. Then immediately disable it, to first configure it<br/>
`ufw disable`

4. Allow incoming/outgoing connections as default<br/>
`ufw default allow`

5. Deny incoming connections to your RPC ports - 9005 (and other RPC if you have multiple nodes)<br/>
`ufw deny in 9005`<br/>
`ufw deny in 9125` (optional)<br/>
`ufw deny in 8005` (optional)<br/>

6. Ensure ssh is allowed<br/>
`ufw allow ssh`

7. Enable the firewall<br/>
`ufw enable`

8. Confirm<br/>
`y` <br/>

Your firewall is now configured.

You will still be able to send rpc commands directly from your server using curl <br/>
e.g.  `curl 127.0.01:9005/status | jq`

However, if you wish to check your node from an external computer, you must use SSH with each command. <br/>
e.g. `ssh  root@YourServerIP curl 127.0.0.1:9005/status`

If you have jq installed on your computer (for improved formatting)<br/>
`ssh  root@YourServerIP curl 127.0.0.1:9005/status | jq`

Each request will require your server password.

Lock it down.

## Next Steps

Once your node running, see [How to use MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>