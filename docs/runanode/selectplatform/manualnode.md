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

3. When it opens, type the following command all on one line:

:::note Tip
To avoid typing in the full folder path, you can drag and drop the downloaded minima.jar file into the command line window.
:::

**Windows**
```
java -jar C:\Users\Username\Downloads\minima.jar -mdsenable
```
**Mac**
```
sudo java -jar /Users/Username/Downloads/minima.jar -mdsenable
```
**Linux**
```
sudo java -jar /home/user/minima.jar -mdsenable
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

Next, **[setup your Incentive Program account](/docs/runanode/incentivesetup)** to start earning Rewards.


:::note Starting a Clean node
To create a fresh install of a node **-clean** can be added on to the end of the start up command<br/>
DO NOT use **-clean** if you are simply restarting your node, your coins will be wiped and you will only be able to recover them from a backup! <br/>
e.g. java -jar C:\Users\Username\Downloads\minima.jar -mdsenable -clean
:::

## How to update your node
1. Type **quit** into the Command prompt/Terminal window where the Minima logs are running
2. Download and save the latest minima.jar file from Github [here](https://github.com/minima-global/Minima/raw/master/jar/minima).
3. Replace your existing minima.jar file with the latest version
4. Start Minima using the command in step 3 above

## How to remove your node
:::important
**Removing a node without taking a backup will delete all your coins! Only remove a node if you have taken a backup or are running a test node.**
:::

1. Type **quit** into the Command prompt/Terminal window where the Minima logs are running
2. Delete the minima.jar file you downloaded
3. (Optional) Remove the minima database files located in your home directory (you may need to show hidden files)