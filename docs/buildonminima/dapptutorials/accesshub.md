---
sidebar_position: 4
---

# MiniDapp Hub

The MiniDapp hub is where you will access all the MiniDapps you have installed on your node. 

![MDS](/img/runanode/mds_hub.png)

To access your node’s MiniDapps, the MiniDapp System (mds) must be enabled. To check whether it is enabled, run the `mds` command in the Minima Command Line Interface (CLI). 

You should see a password for logging into your MiniDapp hub, if the password value is null, mds is disabled and you should stop your node and restart it with the `-mdsenable` flag (or `-e minima_mdsenable=true` if using Docker).

Example
```
mds
{
  "command":"mds",
  "status":true,
  "pending":false,
  "response":{
    "password":"H8NW-7NZ9-TV63",
    "minidapps":[...
```

Each node runner has access to their MiniDapp hub via https://127.0.0.1:9003 (or [https://localhost:9003](https://localhost:9003)). 
Or if accessing on a remote server, [https://YourServerIP:9003](https://YourServerIP:9003).

If running your node on a mobile device, you can interact with your node from a Desktop on the same WiFi as the mobile, to find the URL and password you need, go to the **Settings > Desktop Connect** section in the Android app.

:::note Browser WARNING
Minima uses self-signed certificates. For this reason you may be shown a security certificate warning when accessing Minima, to which you can click on **Advanced**, then **Proceed**.
This may be different depending on the browser and OS you are using.
:::
