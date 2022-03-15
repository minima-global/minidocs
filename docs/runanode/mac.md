---
sidebar_position: 4
---

# Mac

## How to download and Install Minima on your Mac 
These instructions will set Minima up as a service on your Mac, so that it can run in the background without having to keep your Terminal open. 

1. If you have not run Minima before, please ensure you have the latest version of Java installed https://java.com/en/
2. If you have a previous version of Minima running, type quit into the Terminal command line, then replace your existing minima.jar file with the latest version.

If you have not used Homebrew before, you will need to install it first:
1. Open a Terminal window
2. Copy and execute the following script to install Homebrew. Follow all onscreen instructions and provide 
your system password when required:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Once Homebrew is installed, or if already installed, you can follow the following steps to install and configure your node - please ensure you provide your system password when prompted:

```
1 - brew tap minima-global/minima
2 - brew install minima-global/minima/minima
3 - brew services start minima
```

Your Terminal will provide details of where your logs can be found, which you may need in the future. Please make a note of this location for future reference.

```
To update Minima to a new version:
1 - mcli quit
2 - brew services stop minima
3 - brew tap minima-global/minima
4 - brew install minima-global/minima/minima
5 - brew services start minima
6 - check your incentive account is connected with mcli incentivecash
```

Congratulations - your node is now installed & running! The last step is to connect it to your Incentive Account. 


## How to set up your Incentive Program account to receive rewards

:::info Previous users
If you had an account prior to 6th December 2021, you will need to reset your password using the Forgot Password button (this is because encrypted passwords could not be migrated to the new system.)
You can set your new password to be the same as your old one. 
https://incentive.minima.global/account/forgot-password
Please check your junk mail for the reset password email.
Once logged in, copy your Node ID.
:::

:::info New users
After you have registered and once Minima is running, login to your Incentive Account at https://incentive.minima.global/ and copy your Node ID.

Then run the following common in your Terminal, replacing xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx with the copied Node ID:

mcli incentivecash uid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
:::

Once this is done, your installation is complete and your Incentive account is connected to your node! You may close your Terminal Window.

To see your rewards, type:
```
mcli incentivecash
```

:::tip Current rewards
This is the total of old and new rewards. It includes any reward collections you previously missed that were paid to you at the Hard Fork.
:::

:::tip Last Ping
This is the last date and time your node sent a PING message. For every day your node pings us, we'll add 1 Minima to your rewards.
:::

3. Your node will then ping us so we know it's running. 

4. For every day your node pings us, we'll add 1 Minima to your DAILY REWARDS. 
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

