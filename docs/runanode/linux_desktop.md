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
- Allowing your PC to go to sleep
- Turning your PC off

If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again.

Minima is now started, your output should look like the below: 
```
/Users/Username>java -jar minima.jar -rpcenable -mdsenable
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

Next, **[setup your Incentive Program account](/docs/runanode/incentivesetup)** to start earning Rewards.

## How to set up your Incentive Program account to receive Rewards

After installing Minima, if you have registered for the Incentive Program you must [setup your Incentive Program account](/docs/runanode/incentivesetup) to receive daily Rewards. 

If you have not registered, click [here](https://incentive.minima.global/account/register) to sign up.

:::info Previous users
If you had an Incentive Program account prior to 6th December 2021, you must reset your password [here.](https://incentive.minima.global/account/forgot-password) Please check your junk mail for the reset password email.
:::

## Next Steps

Once your node running, see [How to use MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>