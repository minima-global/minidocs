---
sidebar_position: 1
---

# Login to Minima

<!-- ---
sidebar_position: 6
--- -->




## Desktop

If you are using the JNLP on desktop, simply click on the `Launch MinimaOS` button or go to https://127.0.0.1:9003/ in your web browser. If you have any trouble logging in, close the window and restart Minima. 

Similarly, if using docker desktop go to https://127.0.0.1:9003/ 

If you installed Minima on a different port to 9001, your login page can be accessed from this base port +2. 

## Server

Access your login screen by going to https://YourserverIP:9003/

**We recommend configuring your server's firewall to only having the mds port (9003) accessible from your home IP address.**

## Android - Desktop connect

Android users can connect to their phone node from a computer that is connected to the same WiFi network. 

1. Open Minima and find **Settings** 

![settings](/img/app/settingsicon.png#width10)

2. Select **Desktop connect**
3. If you have recently joined a WiFi network, refresh the URL
4. From your computer's web browser, go to the URL shown

![desktopconnect](/img/app/desktopconnect.png#width30)

5. Accept the security warning shown 
6. Enter the password shown to login 

Voila! You can now use your node on your computer!

### Set your own password

To set your own password for Desktop Connect:

1. Open the Minima app on your phone
2. Tap at the top of the screen to show the MinimaOS title bar
3. Tap on the 3 dots and select **Startup Params**
4. Enter `-mdspassword yOurp@ssw0rdhere` to set your own password
5. Select **Save**
5. Tap at the top of the screen to show the MinimaOS title bar again
6. Select **Shutdown** to restart Minima

When you reopen Minima, go to **Settings > Desktop Connect** to confirm your password has been set.