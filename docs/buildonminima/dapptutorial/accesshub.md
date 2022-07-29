---
sidebar_position: 3
---

# MiniDapp Hub

The MiniDapp hub is where you will access all the MiniDapps you have installed on your node. 

![Accessing the MiniDapp Hub](/img/buildonminima/minihub2.png)

To access your node’s MiniDapp hub, your node will need to have mds (MiniDapp System) enabled. 

To check that your node has mds enabled, run the `mds` command in the Minima Command Line Interface (CLI). 

You should see a password for accessing your MiniDapp hub, if the password value is null, mds is disabled and you should stop your node and restart it with the `-mdsenable` flag.

Example
```
mds
{
  "command":"mds",
  "status":true,
  "response":{
    "password":"H8NW-7NZ9-TV63",
    "minidapps":[]
  }
}
```

Each node runner has access to their MiniDapp hub via https://127.0.0.1:9003 (or [https://localhost:9003](https://localhost:9003)). 
Or if accessing on a remote server, [https://YourServerIP:9003](https://YourServerIP:9003).

:::note
You may be shown a security certificate warning, to which you can click on Advanced, then Proceed.
This may be different depending on the browser and OS you are using.
:::

If running your node on a mobile device, you can interact with your node from a Desktop on the same WiFi as the mobile, to find the URL you need, go to the **Health** page in the Android app.

When you see the MDS login page, enter the password provided when running `mds` from your node's CLI to access the MiniDapp Hub.

With no apps installed, it will look something like this: 
![Accessing the MiniDapp Hub](/img/buildonminima/minihub.png)

