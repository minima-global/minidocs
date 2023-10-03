---
sidebar_position: 2
---

# Quick Start

When you first run Minima the first thing you need is to add some connections.

You can get this list by asking any user on the network. 

Alternatively, copy this link directly into the app when prompted to join the network (also in Settings > 'Add connections')

**https://spartacusrex.com/minimapeers.txt**

## Command Line

At it's core, Minima is a Java application.

So on a server or CLI the easiest way to run Minima is to install Java and [download the latest minima.jar](https://github.com/minima-global/Minima/blob/master/jar/minima.jar).

Then, from your command line, run:

```
java -jar minima.jar
```

If you are on an external server, open port **9001** on your machine - the default Minima port - to get the best connection to the network.

If you want to run this on a server that you log into via ssh, you can use **tmux** so that it continues to run once you log out.

For more information on startup params and the MDS checkout the [Github README](https://github.com/minima-global/Minima).

## Android

The next simplest way is to install and run the Android app.

This is available on Google Playstore.. [Minima](https://play.google.com/store/apps/details?id=com.minima.android)

If you cannot use the Google Playstore, you can download a signed APK from [Github](https://github.com/minima-global/Minima/tree/master/jar).

[![GooglePlay](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png#width20)](https://play.google.com/store/apps/details?id=com.minima.android)
[![Github](/img/runanode/github-mark.png#gh-light-mode-only-width10)](https://github.com/minima-global/Minima/tree/master/jar)[![Github](/img/runanode/github-mark-white.png#gh-dark-mode-only-width10)](https://github.com/minima-global/Minima/tree/master/jar)



## Desktop

For Desktop users Minima can be launched from a JNLP file.. The Java Network Launch Protocol.

First install Open Web Start - the new updated version of Java Web Start.

[Download Open Web Start](https://openwebstart.com/download/)

Then download the Minima JNLP file from the Launch button below, and open / double-click it, this will install as an application and update automagically when you start it in future.

[![JNLP](/img/runanode/jws-launch-button.png#width10)](https://www.spartacusrex.com/javaws/minima.jnlp) 

### Windows

On Windows the procedure should work almost seamlessly. The JNLP will be opened automatically by Open Web Start and start your Minima node.

If not, right click on the file and choose 'Open With' and select **Open Web Start**.

### Mac

If you are not sure which version of Open Web start to download, click on the Apple icon in the top left corner of your Mac then click on “About This Mac”. If the processor says **Intel** select the **OpenWebStart_macos-x64** option, if you see **M1** or **M2**, select the **OpenWebStart_macos-aarch64** option.

If you install OpenWebStart FOR ALL USERS, which requires admin rights and will ask for a password, the file association works so that when you open the JNLP file to start Minima, it opens correctly with OpenWebStart and not Java.

If you install just for your user - the file association does not seem to work, so you will need to **Command+Right Click the JNLP** and choose **OpenWebStart** to open the file.
If you choose 'Other' - you can then set it as the default option so the next time it does it automatically.

## Docker

There is also a nice docker image that you can use if you have Docker installed. Set a secure password below.


``````
docker run -d -e minima_mdspassword=INSERTYOURPASSWORD -e minima_desktop=true -v ~/minimadocker:/home/minima/data -p 9001-9004:9001-9004 --restart unless-stopped --name minima minimaglobal/minima:latest
``````

Then you log into your node via https://127.0.0.1:9003/


## Further guidance 

For more detailed information about how to run a node, select your platform of choice from the [Get Started](/docs/runanode/get_started) page.

