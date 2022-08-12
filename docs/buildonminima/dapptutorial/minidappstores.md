---
sidebar_position: 7
---

# MiniDapp Stores

:::note
MiniDapp stores are currently only available on Android.
:::

MiniDapp stores are a collection of MiniDapps that can be shared with users.

By installing a MiniDapp store, you can choose to download and install any MiniDapps within the store. 

## Creating a MiniDapp Store
To create a MiniDapp store, create a `.json` file containing your list of MiniDapps. 

Your `.json` file can be hosted on a server, this could even be a Raspberry Pi with a public, static IP. 

**MiniDapp Store JSON File Format**
```
{
	"name":"Store Name",
	"description":"Store Description",
    "icon":"Store icon ",
	"version":"Store version",

	"dapps":[
        {
        "file":"URL to MiniDapp1",
        "icon":"URL to icon1",
        "name":"MiniDapp1 name",
        "description": "MiniDapp1 Description",
        "version" : "MiniDapp1 version number"
        },
        {
        "file":"URL to MiniDapp2",
        "icon":"URL to icon2",
        "name":"MiniDapp2 name",
        "description": "MiniDapp2 Description",
        "version" : "MiniDapp2 version number"
        }
    ]
}
```

**Minima Dapp Store Example**
```
{
	"name":"Minima Global",
	"description":"Official Minima DAPPs",
"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/minima_logo.png",
	"version":"1.0",

	"dapps":[

{
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/news-1.0.mds.zip",			"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/news.png",
"name":"News Feed",
"description": "Keep up to date with Minima News",
"version" : "1.0"
	},
	{
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/block-0.1.5.mds.zip",
"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/block.png",
"name":"Block",
"description": "Explore the Minima blockchain",
"version" : "0.1.5"
	},
	{
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/wallet-0.1.5.mds.zip",
"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/wallet.png",
"name":"Wallet",
"description": "Official Minima wallet",
"version" : "0.1.5"
	},
	{
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/terminal-1.91.mds.zip",
"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/terminal.png",
"name":"Terminal",
"description": "Terminal CLI for Minima",
"version" : "1.91"
	},
	{
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/helpdocs-0.1.1.mds.zip",			"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/helpdocs.png",
		"name":"Help Docs",
		"description": "Help Docs",
		"version" : "0.1.1"
	},
{
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/maxsolo-1.83.mds.zip",		"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/maxsolo.png",
		"name":"MaxSolo",
		"description": "P2P chat app running over Maxima",
		"version" : "1.83"
	},
{	
"file":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/files/scriptide-1.7.mds.zip",			"icon":"https://raw.githubusercontent.com/minima-global/Minima/dev-spartacus/mds/store/icons/scriptide.png",
		"name":"Script IDE",
		"description": "Minima Script IDE",
		"version" : "1.7"
		}
	]
}
```

## Adding a MiniDapp Store to an Android node

To add a store to an Android node, 
1. Go to the **DAPP Store** page in the Minima Android app
2. Click on the + button 
3. Add the URL to the MiniDapp store JSON file
4. The store will appear

You will then be able to download the MiniDapps and install them in your MiniDapp Hub!

