---
sidebar_position: 3
---

# Windows

## How to download and Install Minima on your Windows PC 

If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/

1. If you have a previous version of Minima running, type quit into the Command prompt window, then replace your existing minima.jar file with the latest version.
2. Download and save the latest Minima JAR using the button below (https://github.com/minima-global/Minima/raw/master/jar/minima.jar)
3. Open the Command Prompt as Admin. When it opens, type the following:
```
java -Xmx1G -jar (including a space after -jar) 
```
- then drag and drop the minima.jar file into the command window, 
- then add a space and type 
- rpcenable 
The output should look like the below (all on one line):
```
java -Xmx1G -jar C:\Users\YourName\minima.jar -rpcenable
```
:::note Note
When starting a new node or to delete your existing node data -clean can be added on to the end. Do not use -clean if you are simply restarting your node.
i.e. java -Xmx1G -jar C:\Users\YourName\minima.jar -rpcenable -clean
:::

4. Hit the Enter key

5. Avoid
- Closing your Command Prompt window
- Allowing your PC to go to sleep
- Turning your PC off

If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again.

Minima is now started, your output should look like the below: 
```
C:\Users\username\Desktop>java -Xmx1G -jar minima.jar -rpcenable
Minima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *  __  __  ____  _  _  ____  __  __    __    *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : * (  \/  )(_  _)( \( )(_  _)(  \/  )  /__\   *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *  )    (  _)(_  )  (  _)(_  )    (  /(__)\  *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : * (_/\/\_)(____)(_)\_)(____)(_/\/\_)(__)(__) *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *                                            *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************
Minima @ 14/03/2022 17:32:30 [6.4 MB] : Welcome to Minima v0.100.32 - for assistance type help. Then press enter.
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : C:\Users\username\Desktop\testconfig\databases\userprefs.db
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : C:\Users\username\Desktop\testconfig\databases\cascade.db
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : C:\Users\username\Desktop\testconfig\databases\chaintree.db
Minima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : C:\Users\username\Desktop\testconfig\databases\p2p.db
Minima @ 14/03/2022 17:32:32 [11.1 MB] : RPC Server started on port : 9002 
```
----

## How to set up Incentive Program to receive rewards
1. Go to https://incentive.minima.global/ - 

:::info Previous users:
If you had an account prior to 6th December 2021, you will need to reset your password using the Forgot Password button (this is because encrypted passwords could not be migrated to the new system.)
You can set your new password to be the same as your old one. 
https://incentive.minima.global/account/forgot-password
Please check your junk mail for the reset password email.
:::

:::info New users 
After you have registered, simply login to your account
:::

2. Once Minima is running, connect your Incentive Program account to your node by copying YOUR OWN Node ID from the Incentive Program website above and typing the following directly into the Terminal command line: 
```
incentivecash uid: InsertYourNodeID
Example:
incentivecash uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```
You should receive a return status of true and see your previous reward balance (if any) including missed rewards (if any)!
```
incentivecash uid:731ae11b-b602-4dea-8564-7cb4edbe07b7
{
  "command":"incentivecash",
  "params":{
    "uid":"731ae11b-b602-4dea-8564-7cb4edbe07b7"
  },
  "status":true,
  "response":{
    "uid":"731ae11b-b602-4dea-8564-7cb4edbe07b7",
    "details":{
      "lastPing":"2022-03-15T09:59:38.802Z",
      "inviteCode":"BAEPAADG",
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
**Your Incentive Program account is now connected to your node!**

:::tip Current rewards 
This is the total of old and new rewards. It includes any reward collections you previously missed that were paid to you at the Hard Fork.
Last Ping: : This is the last date and time your node sent a PING message. For every day your node pings us, we'll add 1 Minima to your rewards.
:::

3. Your node will then ping us so we know it's running. 

4. For every day your node pings us, we'll add 1 Minima to your DAILY REWARDS. 

5. To check your rewards, type IncentiveCash into the Command Line. 
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


