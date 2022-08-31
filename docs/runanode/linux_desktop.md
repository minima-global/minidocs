---
sidebar_position: 5
---

# Linux Desktop

## How to download and install Minima on your Linux Desktop 

:::note Note
If you are using Debian OS (including Ubuntu) please follow the instructions on the get-started-linux-server channel.
:::

If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/

1. If you have a previous version of Minima running, replace your existing minima.jar file with the latest version.

2. Download and save the latest Minima JAR [here](https://github.com/minima-global/Minima/raw/master/jar/minima.jar)

3. Open the Command Prompt as Admin. When it opens, type the following (including a space after -jar):
``` 
sudo java -jar 
``` 
- then drag and drop the minima.jar file into the command window, 
- then add a space and type 
```
-rpcenable -mdsenable 
```
The command should look like the below:
``` 
sudo java -jar /home/user/minima.jar -rpcenable -mdsenable
``` 

:::note Note
When starting a new node or to delete your existing node data **-clean** can be added on to the end. (Do not use **-clean** if you are simply restarting your node.)<br/>
e.g. java -jar /home/user/minima.jar -rpcenable -mdsenable -clean
:::

4. Hit the **Enter** key

5. Avoid
- Closing your Command Prompt window
- Allowing your desktop to go to sleep
- Turning your desktop off

If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again. 

**Congratulations - your node is now installed & running!**

## How to set up your Incentive Program account to receive rewards

After installing the app, if you have registered for the [Incentive Program](https://incentive.minima.global/account/register), you must connect your Incentive ID to your node to receive daily Rewards.

1. Login to https://incentive.minima.global/

:::info Previous users
If you had an account prior to 6th December 2021, you must reset your password [here.](https://incentive.minima.global/account/forgot-password) Please check your junk mail for the reset password email.
:::

2. Connect your Incentive Program account to your node by copying YOUR OWN Incentive ID from the Incentive Program website above and typing `incentivecash uid:YourIncentiveID` into the Terminal command line: 

Example:
```
incentivecash uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```
You should receive a return status of `true` and see your previous Rewards (if any) including missed Rewards (if any).
**Your Incentive Program account is now connected to your node!**

3. Your node will then ping us so we know it's running. 

4. For every day your node pings us, we will add 1 Minima to your DAILY REWARDS.  

5. To check your rewards, type **incentivecash** into the command line. 
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

The following commands can be typed directly into the Minima Terminal:

```
status : shows the status of Minima 
incentivecash : shows your incentive cash balance
help : shows the full list of commands
```
For a full list of Minima Terminal Commands see [Terminal Commands.](/docs/runanode/terminal_commands)

## Next Steps

Once your node running, you can contribute to our Testnet by testing our decentralized applications - **MiniDapps.** 

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[How to use MiniDapps](/docs/runanode/usingminidapps) <br/>
[Download the latest MiniDapps](/docs/runanode/latestminidapps) <br/>