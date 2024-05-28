---
sidebar_position: 1
---

# Join the network 

<!-- ---
sidebar_position: 7
--- -->



To achieve Minima's vision of complete decentralisation, there are no centralised servers that control access to the network.

When running a node for the first time, you will need one or more connections to join the network. To get a list of connections, use one of the following methods:
- ask another node runner to [share their connections](#sharing-connections) with you
- enter `/minimapeers` into any channel in our [Discord server](https://discord.com/invite/minimaglobal) 
- Google search for **minimapeers.txt** 
- use a public URL that returns a list of Minima peers, for example https://www.spartacusrex.com/minimapeers.txt

**This is a one off task, only required when starting a node for the first time.**

![settings](/img/runanode/jointhenetwork.png#width50)

:::important Restoring a backup
If you are restoring a backup to a new node, select "I'll do this later" and continue to restore your backup using the Security MiniDapp.
:::

### Adding connections

Connections (or 'peers') are simply other node runners that can share the blockchain with new users, enabling them to join the network. 

**To add connections for the first time:**

1. From the Home screen, go to **Settings** 

![settings](/img/runanode/settingsicon.png#width10)

2. Select **Add connections**

![settings](/img/runanode/addconnectionssetting.png#width50)

3. Paste the list or URL into the box and select **Add connections**

![settings](/img/runanode/addconnections2.png#width50)

<!-- :::note Using a URL 

You may also use a public URL that returns a list of Minima peers, for example https://www.spartacusrex.com/minimapeers.txt

![settings](/img/runanode/addconnectionsurl.png#width50)
::: -->

5. Exit the Settings and wait a few minutes for the block number to appear in the top right

![settings](/img/runanode/blocknum.png#width50)

That's it! You are now connected to the network! 

Once you have joined the network, ensure you [write down your seed phrase](/docs/userguides/newusers/seedphrase).

### Sharing connections 

To help a new user join the network, share your connection list with them. 

**To share connections:**

1. From the Home screen, go to **Settings** 

![settings](/img/runanode/settingsicon.png#width10)

2. Select **Share connections**

![settings](/img/runanode/connectionssetting.png#width50)

2. Select **Copy**

![settings](/img/runanode/shareconnections.png#width50)

3. Send the list to the new node runner.

## Add/Share via the Terminal

Alternatively, you can add or share connections using the Terminal

**To add connections:**
```
peers action:addpeers peerslist:ip:port,ip;port,...
```

```
peers action:addpeers peerslist:https://spartacusrex.com/minimapeers.txt
```

**To share connections:**
```
peers action:list max:10
```