---
sidebar_position: 6
---

# Desktop (Manual method)

:::note Please Note
The following process is for running a Minima node manually. You must leave your desktop running at all times for Minima to continue running and must update your node manually when new versions become available.
:::

## Start a new Minima node

Before starting, ensure you have the latest version of Java installed from https://java.com/en/

1. Download and save the latest minima.jar file from Github [here](https://github.com/minima-global/Minima/raw/master/jar/minima.jar)

2. Open your command line interface

**Windows**: Open the Command Prompt as admin (click on Start and search for **command prompt**)

**Mac:** Open the Terminal app from the Utilities folder in Applications

3. Type the following command all on one line, replacing **`INSERTUSERNAME`** with the username for your files:

:::note Tip
To avoid typing in the folder path, you can drag and drop the downloaded minima.jar file into the command line window.
:::

**Windows**
```
java -jar C:\Users\INSERTUSERNAME\Downloads\minima.jar -mdsenable
```
**Mac**
```
sudo java -jar /Users/INSERTUSERNAME/Downloads/minima.jar -mdsenable
```
**Linux**
```
sudo java -jar /home/INSERTUSERNAME/minima.jar -mdsenable
```

4. Hit the **Enter** key

5. Avoid
- Closing the Command Prompt/Terminal
- Allowing your PC to go to sleep
- Turning your PC off

If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again.

Minima is now started, your output should look similar to the below and you should start to see the logs running.
```
Minima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *  __  __  ____  _  _  ____  __  __    __    *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : * (  \/  )(_  _)( \( )(_  _)(  \/  )  /__\   *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *  )    (  _)(_  )  (  _)(_  )    (  /(__)\  *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : * (_/\/\_)(____)(_)\_)(____)(_/\/\_)(__)(__) *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : *                                            *
Minima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************
```

**Congratulations - your node is now installed & running!**

You can type `status` to show the status of your Minima node, or `help` to show the full list of commands.

**Continue to access your MiniDapp hub and setup your Incentive Program account to start earning Rewards.**

---------

## Access your MiniDapp Hub

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

:::note custom ports
Note that **9003** is the default port for accessing your MiniDapp system - if you installed Minima on custom ports, you will need to use your custom base port + 2. E.g. If you installed Minima on 8001, you will need to use **https://127.0.0.1:8003/**
:::

**Windows/Linux Desktop** 

- Go to **https://127.0.0.1:9003/** in your web browser (Firefox is not supported)
- Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).

**Mac** 

- In Safari, go to **https://127.0.0.1:9004/**, click on **Show Details** then **Visit this website**
- Go to **https://127.0.0.1:9003/** and repeat, you should see the MiniDapp System login page
- Close **https://127.0.0.1:9004/**

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

2. To get your **password** - return to your desktop command line/terminal where the Minima logs are running and enter 

```
mds
```

You should see an output similar to below:

```
mds
{
  "command":"mds",
  "status":true,
  "response":{
    "password":"1SV0-F0WN-K367",
    "minidapps":[]
  }
}
```
3. Copy and Paste your password into the field and click **Enter**
4. You will see your MiniDapp hub!

-------

## Set up your Incentive Program account

If you have registered for the Incentive Program you must connect your Incentive ID to your node to start receiving daily Rewards.

If you have not registered, click [here](https://incentive.minima.global/account/register) to sign up.

There are two methods to setup your Incentive Program account:

A. [Use the Incentive Program MiniDapp](/docs/runanode/incentivesetup#a-using-the-incentive-program-minidapp-recommended) (recommended) <br/>
B. [Use the Minima Terminal](/docs/runanode/incentivesetup#b-using-the-minima-terminal-advanced-method) (advanced users)


### A. Using the Incentive Program MiniDapp (recommended)

1. Download and save the latest **Incentive Program** MiniDapp from our [MiniDapp site.](https://minidapps.minima.global/) 

2.  Access your MiniDapp hub. The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

:::note custom ports
Note that **9003** is the default port for accessing your MiniDapp system - if you installed Minima on custom ports, you will need to use your custom base port + 2. E.g. If you installed Minima on 8001, you will need to use **https://127.0.0.1:8003/**
:::<br/><br/>
**Windows/Linux Desktop** 
- Go to **https://127.0.0.1:9003/** in your web browser (Firefox is not supported)
- Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/><br/>
**Mac** 

- In Safari, go to **https://127.0.0.1:9004/**, click on **Show Details** then **Visit this website**
- Go to **https://127.0.0.1:9003/** and repeat, you should see the MiniDapp System login page
- Close **https://127.0.0.1:9004/**<br/><br/>

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

3. Get your password 
- **Windows/Mac/Linux Desktop** users, return to the Windows/Linux Command Line or Mac Terminal where the Minima logs are running, type **`mds`,** press Enter

You should see an output similar to below:

```
mds
{
  "command":"mds",
  "status":true,
  "response":{
    "password":"1SV0-F0WN-K367",
    "minidapps":[]
  }
}
```
4. Copy and paste your password into the field and click **login** - you will see your MiniDapp hub!
5. To install the Incentive Program MiniDapp, click on **Choose File** and select the downloaded MiniDapp from your computer's downloads folder

![Windows](/img/buildonminima/minihub.png)

6. Click **Install** and return to the hub and open the app
7. Follow the instructions to copy your Incentive ID from the [Incentive Program](https://incentive.minima.global/home/pages/incentiveid) website and paste into the field provided
8. Click **Update** 

![mds_login](/img/runanode/incentiveidfield.png)

Your Incentive account is now connected to your now and you will receive 1 Reward each day your node is running. 

Using the Incentive Program app, you can:
- See your Rewards balance by going to the **Rewards** tab <br/>
- See your unique Invite link by going to the **Invite Link** tab. Learn more about the invite program [here](/docs/earnrewards/minimainviteprogram).

### B. Using the Minima Terminal (advanced method)

1. Login to https://incentive.minima.global/

2. Go to the **Incentive ID** page and copy your Incentive ID

3. Enter the command `incentivecash uid:xxx-xxx-xxx-xxx-xxx` into to the Command Line/Terminal where the Minima logs are running (replacing xxx-xxx-xxx-xxx-xxx with your OWN incentive ID)

Example:
```
incentivecash uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

4. Press Enter

You should receive a return status of `true` and see your Reward balances.<br/>

Example:
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
**Your Incentive account is now connected to your now and you will receive 1 Reward each day your node is running.**

4. To check your Rewards, simply type `incentivecash`

:::tip Rewards
For every day your node is connected to the network, you will receive 1 Reward within the next 24 hours.
:::

-------

## Using the MiniDapp hub

By default, all MiniDapps will be given **READ** permission when you install them.

When a MiniDapp with READ permission attempts to run a command which would make changes to your node or require access to your funds, a PENDING command will be created which you will need to accept. 
:::warning 
You should only give **WRITE** permissions to MiniDapps that you trust. <br/>
Only the **Terminal** MiniDapp will need **WRITE** permission so you can approve/deny transactions.
:::

### Setting the Terminal permissions to WRITE

1. Login to your MiniDapp hub and install the Terminal MiniDapp from the [MiniDapp site](https://minidapps.minima.global/). 
2. Return to your desktop command line/terminal and run the `mds` command again (see above) to list your MiniDapps and check their existing permissions
3. You will see the Terminal MiniDapp listed, **copy the uid from YOUR node**
```
    {
      "uid":"0xB4C47D4AD267C3D2D4EF6E086FD12845",
      "conf":{
        "name":"Terminal",
        "icon":"terminal.png",
        "version":"1.91",
        "description":"Terminal CLI for Minima",
        "permission":"write",
        "browser":"internal"
      }
    },
```
4. Run the following command in the Command line/Terminal where the Minima logs are running, **pasting in YOUR uid**:

**Windows/Mac/Linux Desktop**
```
mds action:permission uid:0x02FA22EF2A2A3B0FA01D688A902779E5 trust:write
```

**You may now use the Terminal MiniDapp to execute all commands** - you will no longer need to use your desktop command line interface/Terminal. 


-------

## How to update your node

1. Type **quit** into the Command prompt/Terminal window where the Minima logs are running
2. Download and save the latest minima.jar file from Github [here](https://github.com/minima-global/Minima/raw/master/jar/minima).
3. Replace your existing minima.jar file with the latest version
4. Restart Minima using the command in step 3 in [Start a new Minima node](#start-a-new-minima-node).

:::note Starting a Clean node
To create a fresh install of a node **-clean** can be added on to the end of the start up command<br/>
DO NOT use **-clean** if you are simply restarting your node, your coins will be wiped and you will only be able to recover them from a backup! <br/>
e.g. java -jar C:\Users\Username\Downloads\minima.jar -mdsenable -clean
:::

-------

## How to remove your node
:::important
**Removing a node without taking a backup will delete all your coins! Only remove a node if you have taken a backup or are running a test node.**
:::

1. Type **quit** into the Command prompt/Terminal window where the Minima logs are running
2. Delete the minima.jar file you downloaded
3. (Optional) Remove the minima database files located in your home directory (you may need to show hidden files)

----------------

## Next Steps

Once your node running, see [Using MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>

