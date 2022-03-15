---
sidebar_position: 5
---

# Linux Desktop

## How to download and Install Minima on your Linux Desktop 

:::note Note
If you are using Debian OS (including Ubuntu) please follow the instructions on the get-started-linux-server channel.
:::

If you have not run Minima before, please ensure you have the latest version of Java installed on the server https://java.com/en/

1. If you have a previous version of Minima running, replace your existing minima.jar file with the latest version.
2. Download and save the latest Minima JAR using the button below (https://github.com/minima-global/Minima/raw/master/jar/minima.jar)
3. Open the Command Prompt as Admin. When it opens, type the following (including a space after -jar):
``` 
sudo java -Xmx1G -jar 
``` 
- then drag and drop the minima.jar file into the command window, 
- then add a space and type -rpcenable 
The output should look like the below:
``` 
sudo java -Xmx1G -jar /home/user/minima.jar -rpcenable
``` 

:::note Note
When starting a new node or to delete your existing node data -clean can be added on to the end. Do not use -clean if you are simply restarting your node.
i.e. sudo java -Xmx1G -jar /home/user/minima.jar -rpcenable -clean
:::

4. Hit the Enter key

5. Avoid
- Closing your Command Prompt window
- Allowing your desktop to go to sleep
- Turning your desktop off

If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again. 
``` 
C:\Users\username>ssh pi@192.168.0.24
pi@192.168.0.24's password:

pi@raspberrypi:~ $ sudo java -Xmx1G -jar /home/pi/minima.jar -rpcenable
``` 
## How to set up your Incentive Program account to receive rewards

1. Go to https://incentive.minima.global/  

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
curl 127.0.0.1:9002/incentivecash+uid:xxx-xxx-xxx-xxx-xxx
```

Example:
```
curl 127.0.0.1:9002/incentivecash+uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

You should receive a return status of true and see your previous reward balance (if any) including missed rewards (if any).
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


