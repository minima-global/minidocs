---
sidebar_position: 4
---

# Mac

## How to download and install Minima on your Mac

If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/

1. If you have a previous version of Minima running, type `quit` into the Command prompt window, then replace your existing minima.jar file with the latest version.

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

The command should look like the below (all on one line):
```
sudo java -jar /Users/YourName/minima.jar -rpcenable -mdsenable
```
:::note Note
When starting a new node or to delete your existing node data **-clean** can be added on to the end. (Do not use **-clean** if you are simply restarting your node.)<br/>
e.g. sudo java -jar /Users/YourName/minima.jar -rpcenable -mdsenable -clean
:::

4. Hit the **Enter** key

5. Avoid
- Closing your Command Prompt window
- Allowing your PC to go to sleep
- Turning your PC off

If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again.

Minima is now started, your output should look like the below: 
```
/Users/YourName>java -jar minima.jar -rpcenable -mdsenable
Minima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *  __  __  ____  _  _  ____  __  __    __    *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : * (  \/  )(_  _)( \( )(_  _)(  \/  )  /__\   *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *  )    (  _)(_  )  (  _)(_  )    (  /(__)\  *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : * (_/\/\_)(____)(_)\_)(____)(_/\/\_)(__)(__) *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *                                            *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************
Minima @ 14/03/2022 17:32:30 [6.4 MB] : Welcome to Minima v0.100.32 - for assistance type help. Then press enter.
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/userprefs.db
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/cascade.db
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/chaintree.db
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/p2p.db
Minima @ 14/03/2022 17:32:32 [11.1 MB] : RPC Server started on port : 9002 
```
----

**Congratulations - your node is now installed & running! **

## How to set up Incentive Program to receive rewards

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

Once your node running, see [How to use MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>