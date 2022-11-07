---
sidebar_position: 3
---

# Incentive Program Setup

After [installing Minima](/docs/runanode/get_started_in_3_steps), if you have registered for the Incentive Program you must connect your Incentive ID to your node to start receiving daily Rewards.

If you have not registered, click [here](https://incentive.minima.global/account/register) to sign up.

>*If you had an Incentive Program account prior to 6th December 2021, you must reset your password [here.](https://incentive.minima.global/account/forgot-password) Please check your junk mail for the reset password email.*

:::note
The following guidance is for **Windows/Mac/Linux Desktop and Server** users. <br/>
Android users please see [here](android_v9_and_up#setting-up-your-incentive-account).
:::

There are two methods to setup your Incentive Program account:

A. [Use the Incentive Program MiniDapp](/docs/runanode/incentivesetup#a-using-the-incentive-program-minidapp-recommended) (recommended) <br/>
B. [Use the Minima Terminal](/docs/runanode/incentivesetup#b-using-the-minima-terminal-advanced-method) (advanced users)

## A. Using the Incentive Program MiniDapp (recommended)

1. Download and save the **Incentive Program** MiniDapp from our [MiniDapp site.](https://minidapps.minima.global/) 

2.  To access your MiniDapp hub, go to **https://127.0.0.1:9003/** in your web browser. The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.
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
**Server**

- Go to **https://YourServerIP:9003/** in your web browser
- Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/><br/>

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

3. Get your password 
- **Windows/Mac/Linux Desktop** users, return to the Windows/Linux Command Line or Mac Terminal where the Minima logs are running, type **`mds`,** press Enter
- **Server** users, login to your server and type `curl 127.0.0.1:9005/mds`, press Enter

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

## B. Using the Minima Terminal (advanced method)

1. Login to https://incentive.minima.global/

2. Go to the **Incentive ID** page and copy your Incentive ID

3. Enter the following command:

**Windows/Mac/Linux Desktop users**<br/>
- Return to the Windows/Linux Command Line or Mac Terminal where the Minima logs are running
- Type `incentivecash uid:xxx-xxx-xxx-xxx-xxx` (replacing xxx-xxx-xxx-xxx-xxx with your OWN incentive ID)
- Press Enter

Example:
```
incentivecash uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

**Server users**<br/>
- Login to your server 
- Type `curl 127.0.0.1:9005/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx` (replacing xxx-xxx-xxx-xxx-xxx with your OWN incentive ID)
- Press Enter

Example:
```
curl 127.0.0.1:9005/incentivecash%20uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84
```

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
:::note Multiple Nodes?
*If you have multiple nodes on one server, you will need to change the port number in the curl command to the next number from the custom port you chose <br/>
E.g. if you used -9121 to start your node, the RPC port will be 9125*

Example:
```
curl 127.0.0.1:9125/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx
```
:::

**Your Incentive account is now connected to your now and you will receive 1 Reward each day your node is running.**

4. To check your Rewards:

- **Windows/Mac/Linux Desktop** users, type `incentivecash`
- **Server** users, type `curl 127.0.0.1:9005/incentivecash | jq` into the Command Line on your server.

:::tip Rewards
For every day your node is connected to the network, you will receive 1 Reward within the next 24 hours.
:::

## Next Steps

Once your node running, see [How to use MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>