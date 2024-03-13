---
sidebar_position: 4
---

# Docker Desktop

:::note What is Docker?
Docker is an open-source software platform that simplifies the process of running, testing and managing applications. 
It uses the operating system of the computer on which it’s installed to provide an independent computing environment for an application to run on.
::: 

## Start a new Minima node

<!-- ### Remove existing nodes

Before starting, stop any existing nodes you started manually by typing `quit` into the Terminal where the Minima logs are running. -->

1. Download and run the Docker installer from [here](https://docs.docker.com/desktop/).
2. Once installed, set Docker to start when your computer turns on - launch Docker and click on the **Settings** icon in the top right. Under **General**, select **Start Docker Desktop when you log in**, then click **Apply & Restart**.
3. Open a new terminal/command line window and start a docker container for your Minima node by pasting the following into your command line window

:::important SET YOUR PASSWORD
Make sure to set the password below to at least 12 characters including alphanumeric characters and symbols.
:::

Mac/Linux (Set a password)

```
docker run -d -e minima_mdspassword=IN$ERTPA$$WORD -e minima_desktop=true -v ~/minimadocker9001:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

Windows (Set a password and the correct path)

```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v C:\Users\INSERTUSERNAME\minimadocker9001:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

<details>
<summary>What do all the parameters mean?</summary>
-d: daemon mode, Minima will run in the background <br/><br/>
-e minima_mdspassword=IN$ERTPA$$WORD : sets the password to login to your node.<br/><br/>
-e minima_desktop=true : sets your node type as a desktop node that does not receive incoming connections <br/><br/>
-v ~/minimadocker9001:/home/minima/data : creates a local folder called minimadocker9001 in your home directory and maps it to the /home/minima/data directory in Docker. The minimadocker9001 folder is where the Minima database and is also where your backups will be stored.<br/><br/>
-p 9001-9003:9001-9003 : the port number mapping from your desktop to the Docker container<br/><br/>
--restart unless-stopped : ensures your container automatically restarts unless you stop it<br/><br/>
--name minima9001 : sets the name of your Minima container to minima9001<br/><br/>
minimaglobal/minima:latest : specifies the Minima docker image<br/><br/>
</details>

<details>
<summary>Optional additional startup parameters</summary>

The following start up parameters can optionally be specified when starting your Docker node. 

To add/remove parameters after a node has been started, you must stop and remove your **minima9001** Docker container, then start it again, adding/removing the required parameters in front of **-v ~/minimadocker9001:/home/minima/data**.
As long as you use the same minimadocker8001 folder, your previous node will be preserved but will use different parameters.

#### General
- `-e minima_clean=true` : CAREFUL! Clears existing data, starts a new fresh node. All coins will be lost.<br/>
- `-e minima_host=ipaddress` : specify the host IP<br/>
- `-e minima_dbpassword=yourdbpassword` : Main Wallet / SQL AES password - MUST be specified on first launch. **CANNOT be changed later.** <br/>
- `-e minima_allowallip=true` : Allow all IPs for Maxima / Networking. Local IPs won't be allowed otherwise.<br/>
- `-e minima_archive=true` : Run an Archive node - store all archive data / the cascade to allow for resyncs from this node<br/>
- `-e minima_isclient=true` : Tells the P2P System that this node can't accept incoming connections<br/>
- `-e minima_server=true` : Use Server settings - this node can accept incoming connections<br/>
- `-e minima_desktop=true` : Use Desktop settings - this node can't accept incoming connections<br/>
- `-e minima_connect=ip:port` : Disable the automatic P2P system and create your own network by manually connecting to this list of host:port<br/>

#### MiniDapp System (mds)
- `-e minima_mdsenable=true/false` : enable the MiniDapp System (default port 9003). Enabled by default.<br/>
- `-e minima_mdspassword=yourmdspassword` : specify the mds login password <br/>

#### RPC
- `-e minima_rpcenable=true/false` : enable remote procedure call. Disabled by default.<br/>
- `-e minima_rpcssl=true` : use Self Signed SSL cert to run RPC<br/>
- `-e minima_rpcpassword=yourrpcpassword` : set Basic Auth password for RPC calls ( Use with SSL / stunnel ). Only secure if used with SSL.<br/>
- `-e minima_rpcclrf=true` : use CRLF at the end of the RPC headers (NodeJS)<br/>

#### Help
- `-e minima_showparams=true` : Show relevant startup params on launch<br/>
- `-e minima_help=true` : print help for the start up parameters

</details>

You will notice a container in Docker called **minima9001**, this is running your Minima node.

![Windows_dockercontainer](/img/runanode/docker_desktopcontainerwindows.png)

4. Click on **minima9001** and check the **logs** tab and ensure your node has started up.

![Windows_dockerlogs](/img/runanode/docker_desktoplogs.png)


**Congratulations - your node is now installed & running!**

To ensure your node updates automatically when a new version of Minima is released, continue to start a Watchtower container.

## Automate updates with Watchtower
:::note What is a Watchtower container?
A Watchtower container enables automatic updates of your Minima node when a new version is released. 
It will pull down the latest Minima image and restart the node using the same parameters you initially specified.
:::

Create the Watchtower container by running the following command from your terminal/command line interface.

```
docker run -d --restart unless-stopped --name watchtower -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -e WATCHTOWER_POLL_INTERVAL=28800 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower
```

**This will update ALL containers you have running in Docker, to restrict it to your Minima container only, add the container name of your Minima node to the end of the command. You can specify multiple containers by listing the names separated by a space.** For more details, see the [Docker documentation](https://containrrr.dev/watchtower/arguments/)

You will see the Watchtower in Docker.

![Desktop_dockerwatchtower](/img/runanode/docker_desktopwatchtowerwindows.png)

Every 8 hours, the Watchtower will check whether there is a new version of Minima and will update if so. 

Optionally, to run a one time update on demand, you can start a watchtower container that you can run whenever you wish to check for updates. 

```
docker run --name watchtower_runonce -e WATCHTOWER_CLEANUP=true -e WATCHTOWER_TIMEOUT=60s -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --run-once
```


## Login to your node

1. Go to **https://127.0.0.1:9003/** in your web browser

The first time accessing your Minima node, you may need to pass through the security warning as Minima uses self-signed certificates. Learn how [**here**](https://www.vultr.com/docs/how-to-bypass-the-https-warning-for-self-signed-ssl-tls-certificates/).

You will see the login screen for your node. 

![mds_login](/img/runanode/mds_login.png#width50)

2. Enter your password to login

:::note don't remember your password?
To check your password, click on the name of your Minima node (e.g. minima9001) in Docker desktop. On the **Inspect** tab, check the parameter for **mdspassword**.
:::

Please see the [first steps](#first-steps) to complete now your node is running.

## First steps

The first time you install Minima, you will need to 

1. Connect to the network
2. Write down your seed phrase

Please refer to the [user guides](/docs/userguides/newusers/jointhenetwork) to learn how.


## FAQ 

### Using the RPC client

You can use the Docker CLI/Terminal to interact with your node, for example to check your status, balance, password, incentive program setup or to create a backup. This requires enabling RPC. 

To permanently enable RPC, stop and delete the container - this will not delete your data files - then start a new container with the following parameters:

```
docker run -d -e minima_mdspassword=IN$ERTPA$$WORD -e minima_desktop=true -e minima_rpcenable=true -v ~/minimadocker9001:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

Alternatively, to temporarily enable RPC:


1. Click on the **minima9001** container and select the **Terminal** tab.
2. Enter the following commands

```
/bin/bash
nano minima.config
```
![Desktop_dockerlogs](/img/runanode/docker_desktopbinbash.png)

3. Scroll to the bottom of the file and add a new line, insert `rpcenable=true`. 

Example:
```
data=/home/minima/data/.minima/
mdsenable=true
basefolder=/home/minima/data/
daemon=true
rpcenable=true
```

5. Exit by pressing ctrl+x together, then save the file with `y`
7. Exit the container with `exit`
8. Restart the container using the Restart icon in the top right 
9. Once restarted, from the Terminal tab type `minima` and press Enter, you will see the Minima RPC client where you can enter any Minima command. To see a complete list of commands, type `help`.

![Desktop_dockerlogs](/img/runanode/docker_desktopterminal.png)

:::note 
RPC will be disabled the next time your docker container is updated to a new version.
:::


------

### How to check or change your login password

To check your login password, click on the name of the container and check the **Inspect** tab. The `mdspassword` parameter is your login password. 

To change your password, stop and remove your **minima9001** container and restart it with a different password. 

1. From the Containers screen, stop and remove the **minima9001** container

![Desktop_dockerremovecontainer](/img/runanode/docker_desktopremovecontainer.png)

2. Repeat step 4 and 5 from [Start a new Minima node using Docker](#start-a-new-minima-node), with a different password.  

:::important
Deleting the container will not delete the `minimadocker9001` data folder so your coins will be safe during this process.

When starting the new container, you must use the same `minimadocker9001` folder to ensure your coins and data are restored.
:::

------

### How to start a second node in Docker

To run a second node in Docker, you can create another container using different port numbers, file path and name. 

To create a node on port 8001:

Mac/Linux (Set a password)

```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v ~/minimadocker8001:/home/minima/data -p 8001-8003:9001-9003 --restart unless-stopped --name minima8001 minimaglobal/minima:latest
```

Windows (Set a password and the correct path)

```
docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -v C:\Users\INSERTUSERNAME\minimadocker9001:/home/minima/data -p 8001-8003:9001-9003 --restart unless-stopped --name minima9001 minimaglobal/minima:latest
```

Access your second node by going to https://127.0.0.1:8003/


------

### How to remove a node

:::important
**Removing a container does not remove your minima data files - these are stored in the minimadocker9001 folder in your home directory. Deleting the minimadocker9001 folder without taking a backup will result in losing your coins.**
:::

To remove a Docker node, stop and delete the **minima9001** container.

![Desktop_dockerlogs](/img/runanode/docker_desktopremove.png)

To start the same node with new startup parameters, reuse the minimadocker9001 directory in the startup line.

To start a new, clean node, delete the minimadocker9001 folder in your home directory or specify a different when starting the container.