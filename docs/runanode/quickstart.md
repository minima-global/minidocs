---
sidebar_position: 2
---

# Quick start

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

For more information on startup params and the MDS checkout the [Github README](https://github.com/minima-global/Minima) or see [here](/docs/runanode/selectplatform/manualnode).

## Android

The next simplest way is to install and run the Android app.

This is available on Google Playstore.. [Minima](https://play.google.com/store/apps/details?id=com.minima.android)

If you cannot use the Google Playstore, you can download a signed APK from [Github](https://github.com/minima-global/Minima/tree/master/jar).

[![GooglePlay](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png#width20)](https://play.google.com/store/apps/details?id=com.minima.android)
[![Github](/img/runanode/github-mark.png#gh-light-mode-only-width10)](https://github.com/minima-global/Minima/tree/master/jar)[![Github](/img/runanode/github-mark-white.png#gh-dark-mode-only-width10)](https://github.com/minima-global/Minima/tree/master/jar)

Detailed guidance on starting a node on Android can be found [here](/docs/runanode/selectplatform/android_v9_and_up).

## Desktop

For Desktop users Minima can be launched from a JNLP file.. The Java Network Launch Protocol.

First install [Open Web Start](https://openwebstart.com/download/) - the new updated version of Java Web Start.

Then download the Minima JNLP file from the Launch button below and open it, ensuring it opens with Open Web Start (right click > open with Open Web Start), this will install Minima as an application and update automagically when you start it in future.

[![JNLP](/img/runanode/jws-launch-button.png#width10)](https://www.spartacusrex.com/javaws/minima.jnlp) 

### Windows

Further guidance can be found [here](/docs/runanode/selectplatform/windows).

### Mac

Further guidance can be found [here](/docs/runanode/selectplatform/mac).

## Docker

There is also a nice docker image that you can use if you have Docker installed. Set a secure password below.


``````
docker run -d -e minima_mdspassword=INSERTYOURPASSWORD -e minima_desktop=true -v ~/minimadocker:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name minima minimaglobal/minima:latest
``````

Then you log into your node via https://127.0.0.1:9003/

Further guidance on starting a node in Docker desktop can be found [here](/docs/runanode/selectplatform/dockerdesktop) 

## Server

You should only run a node on a server if you have experience setting up VPS instances and understand how to set up firewall rules.

Please see [recommended firewall rules](/docs/runanode/systemrequirements#recommended-firewall-settings-vps-users) before starting a node on a VPS.

Then choose whether to run a node using [Docker](/docs/runanode/selectplatform/linux_vps) or a [Script](/docs/runanode/selectplatform/linuxvpsservice).

