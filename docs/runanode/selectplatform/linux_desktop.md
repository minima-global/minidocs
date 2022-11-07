---
sidebar_position: 5
---

# Linux Desktop

We will be using Docker software to make running a Minima node simple.

Once your node is set up, you will be able to use Minima's decentralized applications.

:::note What is Docker?
Docker is an open-source software platform that simplifies the process of running, testing and managing applications. 
It uses the operating system of the computer on which it’s installed to provide an independent computing environment for an application to run on.
::: 

## How to start a new Minima node

### Remove existing nodes

Before starting, stop any existing nodes you started manually by typing `quit` into the Terminal where the Minima logs are running.

### Start a new Minima node using Docker
1. Download and run the Docker installer from [here](https://docs.docker.com/desktop/install/linux-install/). Please check your system requirements.
2. Once installed, open Docker
3. Click on the **settings** icon, and select **Start Docker Desktop when you log in**

![Windows_dockerstartup](/img/runanode/docker_desktopstartup.png)


3. Click **Apply & Restart**
4. Open the Linux Terminal
5. Copy and paste the following into the Terminal 

:::important SET YOUR PASSWORD
**Make sure to change the password below from `123` to a secure password using lowercase letters and numbers only of your choice. This will be the password to access your Minidapp Hub.**
:::
```
docker run -d -e minima_mdspassword=123 -e minima_desktop=true -v ~/minimadocker9001:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```
6. Press the **Enter** key to run the command and start your node. 

:::note What do all the parameters mean?

- `-d`: daemon mode, Minima will run in the background
- `-e minima_mdspassword=123` : sets the password for your MiniDapp system to 123. **YOU MUST USE A SECURE PASSWORD USING LOWERCASE LETTERS AND NUMBERS ONLY**
- `-e minima_desktop = true` : sets your node type as a desktop node that does not receive incoming connections 
- `-v ~/minimadocker9001:/home/minima/data` : creates a local folder called **minimadocker9001** in your home directory and maps it to the **/home/minima/data** directory in Docker. The **minimadocker9001** folder is where the Minima database and is also where your backups will be stored.
- `-p 9001-9004:9001-9004` : the port number mapping from your desktop to the Docker container
- `--restart unless-stopped` : ensures your container automatically restarts unless you stop it
- `--name minima9001` : sets the name of your Minima container to minima9001
- `minimaglobal/minima:latest` : specifies where to pull the Minima code from
:::

7. You will notice a container in Docker called **minima9001**, this is running your Minima node.

![Windows_dockercontainer](/img/runanode/docker_desktopcontainer.png)

8. Click on **minima9001** to check the logs and ensure your node has started up

![Windows_dockerlogs](/img/runanode/docker_desktoplogs.png)


**Congratulations - your node is now installed & running!**

To ensure your node updates automatically when a new version of Minima is released, continue to start a Watchtower container.

## How to automate updates with Watchtower
:::note What is a Watchtower container?
Once set up, a Watchtower container enables automatic updates of your Minima node when a new version is released. 
It will pull down the latest Minima version and restart with the same parameters you initially specified.
:::

Create the Watchtower container by pasting the following command into the Linux Terminal.

```
docker run -d --restart unless-stopped --name watchtower -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -e WATCHTOWER_POLL_INTERVAL=28800 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower
```
Press the **Enter** key to run the command and start the Watchtower. 

You will see the Watchtower in Docker.

![Desktop_dockerwatchtower](/img/runanode/docker_desktopwatchtower.png)

Every 8 hours, the Watchtower will check whether there is a new version of Minima and will update if so. 

Next, **[setup your Incentive Program account](/docs/runanode/incentivesetup)** to start earning Rewards.


## Set up your Incentive Program account 

The first time accessing your MiniDapp hub, you may need to pass through the security warning - see below - as the MiniDapp system currently uses self-signed certificates.

1. Go to **https://127.0.0.1:9003/** in your web browser

Click on **Advanced**, then **Proceed**. Or in Google Chrome, you may have to click anywhere on the page and type `thisisunsafe` to proceed. Details for other browsers can be found [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).<br/>

You will see your MiniDapp System (MDS) login page. 

![mds_login](/img/runanode/mds_login.png#width50)

3. Enter your password to login, if you don't remember, you can check [here](#how-to-check-your-minima-hub-password).

4. You will see your MiniDapp hub!

5. Open the Incentive Program minidapp

![mds_IP](/img/runanode/IP_minidapp.png#width50)

6. Follow the instructions to login to the Incentive Program website and **copy your Incentive ID**

7. Paste your Incentive ID into the field provided and click **Update**

![mds_IP](/img/runanode/IP_updateid.png#width50)

8. Check the Rewards page to check your balance!

![mds_IP](/img/runanode/IP_checkrewards.png#width50)

## FAQ 

### How to check your Minima hub password
You can use the Docker CLI/Terminal to interact with your node, for example to check your status, balance, password, incentive program setup or to create a backup.

1. From the Containers screen, click on **minima9001** to view the logs
2. Click on **CLI** or **Terminal** (depending on the version)

![Desktop_dockerlogs](/img/runanode/docker_desktopcli.png)

3. Type `minima` and press Enter, you will see the Minima Terminal appear
4. Type `mds`

![Desktop_dockerlogs](/img/runanode/docker_desktopterminal.png)


**Other useful commands:**<br/>
`status` - see the status of your node<br/>
`incentivecash` - check your Incentive Program balance<br/>
`incentivecash uid:` - setup your Incentive Program account by connecting your Incentive ID<br/>
`help` - show all commands


### How to start a second node in Docker

To run a second node in Docker, you can create another container using different port numbers, file path and name. 

For example to create a node on port 8001:

>docker run -d -e minima_mdspassword=123 -e minima_desktop=true -v ~/**minimadocker8001**:/home/minima/data -p **8001-8004**:9001-9004 --restart unless-stopped --name **minima8001** minimaglobal/minima:latest

:::note Port Mappings
**This creates a node on ports 8001-8004 on YOUR DESKTOP, this will be mapped to ports 9001-9004 in the Docker container.**
:::

### How to start a test node as a developer
To create a private test node from Genesis, use the following start up command:

> ```docker run -d -e minima_mdspassword=123 -e minima_desktop=true -e minima_genesis=true -e minima_test=true -e minima_nop2p=true -v ~/minimadocker10001_dev:/home/minima/data -p 10001-10004:9001-9004 --restart unless-stopped --name minima10001_dev minimaglobal/minima:latest```
:::note test parameters
The additional test parameters used are:

`-e minima_genesis=true` : Start a node from the Genesis block<br/>
`-e minima_test=true` : Use test parameters e.g. blocks are automined and block times are faster<br/>
`-e minima_nop2p=true` : Do not start the p2p system<br/>

To enable RPC, use `-p 10001-10005:9001-9005`
:::


### How to take a backup of your node

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `backup` command, completing the parameters

```
backup password: file: auto: complete:
```
:::note backup parameters
**password:** set a password using **lowercase letters and numbers only** for your backup, this will be required when restoring it

**file:** (optional) backup name 

**auto:** (optional) **true** or **false**. Will set the backup to repeat every 24 hours.

**complete:** (optional) **true** or **false**. A complete backup includes the Archive database. Please allow more time for a complete backup to finish. 
:::

Your backup will go to the **minimadocker9001** folder in your home directory.

### How to restore your node from a backup

Your backup must be in the **minimadocker9001** folder in your home directory (as specified at start up).

1. Login to your Minima Hub 
2. Open the Terminal MiniDapp
3. Enter the `restore` command, completing the parameters

```
restore file: password:
```
:::note restore parameters
**password:** (optional) the password of the backup 

**file:** (optional) backup name, with or without file path
:::

If successful, you will need to log out/log in from your Minima hub for the restore to take effect.

### How to remove a node
:::important
**Removing a node without taking a backup will delete all your coins! Only remove a node if you have taken a backup or are running a test node.**
:::

To remove a Docker node:
1. Open Docker
2. Stop the **minima9001** container
3. Delete the container

![Desktop_dockerlogs](/img/runanode/docker_desktopremove.png)

This will not remove the  **minimadocker9001** folder from your home directory, so if you subsequently create a new container with the same name, the same folder will be reused. 

To start a clean node (and lose your balance) you must provide a new name for the folder in the start up command or delete this folder from your Home directory.

----------------

## Next Steps

Once your node running, see [How to use MiniDapps](/docs/runanode/usingminidapps) to start testing!

Thank you for participating and contributing to our Testnet.

Learn more:<br/>

[What are MiniDapps?](/docs/learn/minidapps/minidappsintro) <br/>
[Download the latest MiniDapps](https://minidapps.minima.global/) <br/>
