---
sidebar_position: 6
---

# Linux VPS

## How to download and Install Minima on your Linux Server/Desktop (Debian OS including Ubuntu)

1. Log in as the root user. (You may need to create a secure connection to your server using PuTTY, Terminal or a similar tool)
2. Open the command prompt, ensure you are in the root directory
3. If you have any older versions of Minima installed, please uninstall them before moving to the next step. 
Please run this script to uninstall minima:

```
wget -O minima_cleanup_v98.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_cleanup_v98.sh && chmod +x minima_cleanup_v98.sh && sudo ./minima_cleanup_v98.sh
```

4. If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/
5. From the root directory, please run the following script:

```
wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -r 9002 -p 9001
```

6. Wait a few minutes for Minima to start.

Running multiple nodes on one server? 
You can specify different port numbers on the end to do this, 
For example (using 9122 and 9121): 
```
wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -r 9122 -p 9121
```


___ 
## How to set up your Incentive Program account to receive rewards

1. Go to https://incentive.minima.global/ - 

:::info Previous users
If you had an account prior to 6th December 2021, you will need to reset your password using the Forgot Password button (this is because encrypted passwords could not be migrated to the new system.) 
You can set your new password to be the same as your old one. 
https://incentive.minima.global/account/forgot-password
Please check your junk mail for the reset password email.
:::

:::info New users
After you have registered, simply login to your account
:::

2. Once the Minima is running, connect your Incentive Program account to your node by copying YOUR OWN Node ID from the Incentive Program website above and typing the following directly into the command line: 

```
sudo apt install curl
curl 127.0.0.1:9002/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
Example:
curl 127.0.0.1:9002/incentivecash%20uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

You should receive a return status of true and see your previous reward balance (if any) including missed rewards (if any).

If you have multiple nodes on one server, you will need to change the port number in the curl command to update the second node using the port number after -r
For example:

```
curl 127.0.0.1:9122/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
```

Your Incentive Program account is now connected to your node!

:::tip Current rewards
This is the total of old and new rewards. It includes any reward collections you previously missed that were paid to you at the Hard Fork.
:::

:::tip Last Ping
This is the last date and time your node sent a PING message. For every day your node pings us, we'll add 1 Minima to your rewards.
:::

3. Your node will then ping us so we know it's running. 

4. For every day your node pings us, we'll add 1 Minima to your DAILY REWARDS. 

5. To check your rewards, type IncentiveCash into the Command Line. 
You may need to type journalctl -u minima -f to show the Minima Logs before running the IncentiveCash command. 
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

:::note Note 
There will temporarily be no MiniHub or MiniDapps - based on community feedback we are working hard to improve the MiniDapp system for a future release! 
:::


## Useful Commands

```
ctrl-c : Exits the Minima logs (Minima will continue to run in the background)
journalctl -u minima_9001 -f : Show the Minima logs
sudo ps -fC java : Shows all running Java processes

sudo apt install curl : allows you to use curl commands to interact with minima
Then y (for Yes)

sudo apt install jq : allows you to use jq to make the output look readable
Then y (for Yes)

Stopping/starting Minima (Service must be called minima.service)
sudo systemctl stop minima_9001 - Stop the Minima service
sudo systemctl disable minima_9001 - Disable the Minima service
sudo systemctl enable minima_9001 - Enable the Minima service 
sudo systemctl start minima_9001 - Start the Minima service

Interacting with Minima
curl 127.0.0.1:9002/status | jq - shows the status of Minima 
curl 127.0.0.1:9002/incentivecash | jq - shows your incentive cash balance
curl 127.0.0.1:9002/help | jq - shows the full list of commands
```


