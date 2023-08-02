---
sidebar_position: 6
---

# Interactive MiniDapp

In this tutorial, we will build a MiniDapp that interacts with Minima blockchain.

:::note
This tutorial uses JavaScript to create a web application. If you are not using JavaScript, you can still communicate with Minima using http to make secure RPC Get Requests. <br/>
You can see which Minima commands are available by typing `help` on your node’s CLI.  
:::

Create a new folder for a new MiniDapp - `helloworld2`.

Using your basic `helloworld` MiniDapp as a template, add the following files to your new folder, changing the name, version and description in the config file as you wish.

1. dapp.conf
2. favicon.ico
3. index.html
4. styling.css (optional)

Next, we will go into how to use the MiniDapp System (MDS) and JavaScript to create a MiniDapp that interacts with the Minima blockchain.

To learn about MDS.js, see [MDS JS Library](/docs/buildonminima/dapps/mdsjs).

## Using mds.js

To simplify development, a script is provided which gives you access to an MDS object that allows you to access useful properties which we will look at next.  

Download mds.js from GitHub [here](https://raw.githubusercontent.com/minima-global/Minima/master/mds/mds.js).

Add the mds.js file to your **helloworld2** folder.

Add the mds.js file as a script into the head of your **index.html** file to get access to the MDS object.

It should look something like the below:

```
<head>
    <!--   The MINIMA MDS JavaScript Library -->
    <script type="text/javascript" src="mds.js"></script>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>Hello World 2</title>
</head>
``` 

The example **index.html** file below provides a simple example of returning the latest block number from the node and querying the node's status, using the Minima `status` command.

Copy and paste the code into your **index.html** file.

```
<html>
<head>
    <!--   The MINIMA MDS JavaScript Library -->
    <script type="text/javascript" src="mds.js"></script>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>Hello World 2</title>
</head>
<body>
<style></style>

<h2>Hello World!</h2>
<p>Current Minima Block Height: <span id="block-height"></span></p>
<p>Current Node Status: <span id="node-status"></span></p>

<button onclick='runStatus();'>CHECK STATUS</button>

<script type="text/javascript">

	function runStatus(){
		
		// run the Minima status command to return information about the node's current state
		MDS.cmd("status", function(res) {
			
			//if the response status is true
			if (res.status) {
				// 	convert the JSON object response to a string and format it
				const nodeStatus = JSON.stringify(res.response, " ", '\t');
				
				// show the response on the page
				document.getElementById("node-status").innerText = nodeStatus;

			//if the response status is false
			}else{
				
				document.getElementById("node-status").innerText = "Could not retrieve current node Status";	
	
			}})
		}
	
		//Initialise web socket 
		MDS.init(function(msg){
			if(msg.event == "inited") {
				// READY TO RUN CMDS!
				// run the Minima status command to return information about the node's current state
				MDS.cmd("status", function(res) {
	
					if (res.status) {
						
						// get the block number from the Status object returned
						const blockHeight = res.response.chain.block;
	
						document.getElementById("block-height").innerText = blockHeight;	
	
					}
				})			
	
			}else if(msg.event == "NEWBLOCK"){
			// the chain tip has changed
	
			}else if(msg.event == "NEWBALANCE"){
			// user's balance has changed 
			
			}else if(msg.event == "MINING"){	
			// mining has started or ended
	
			}else if(msg.event == "MINIMALOG"){
			// new Minima log message
	
			}else{
	
				
			}
		});
		 
		
	</script>
</body>
</html>
```

## Packaging your MiniDapp

We now have a complete helloworld2 folder containing: 
1. dapp.conf
2. favicon.ico
3. index.html
4. styling.css (optional)
5. mds.js

Zip up the contents of this folder (not the folder itself).

Rename the folder to **helloworld2.mds.zip** or if you are using a zip library through your CLI run 
```
zip -r helloworld2.mds.zip 
```

## Installing your MiniDapp
Please refer to the [Installing your MiniDapp](/docs/buildonminima/dapptutorials/basicminidapp#installing-your-minidapp) section.

## MiniDapp Downloads

The **HelloWorld2** MiniDapp can also be downloaded from GitHub [here](https://github.com/minima-global/innovation-challenge/tree/main/Resources)

Minima’s official MiniDapps can be downloaded from the [MiniDapps website](https://minidapps.minima.global/).

## Next Steps

The most powerful MiniDapps will use Smart Contracts, written in Minima's scripting language. <br/>
Please follow the [Smart Contract Tutorial](/docs/buildonminima/txntutorial/start) to learn more about writing Scripts on Minima. 