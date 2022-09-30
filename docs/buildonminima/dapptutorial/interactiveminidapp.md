---
sidebar_position: 5
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

## Introducing mds.js

To simplify development, a script is provided which gives you access to an MDS object that allows you to access useful properties which we will look at next.  

Download `mds.js` from GitHub [here](https://raw.githubusercontent.com/minima-global/Minima/master/mds/mds.js).

Add the `mds.js` file to your `helloworld2` folder.

Add the `mds.js` file as a script into the head of your `index.html` file to get access to the MDS object.

It should look something like the below:
```
<head>
    <!--   The MINIMA MDS JavaScript Library -->
    <script type="text/javascript" src="mds.js"></script>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>Hello World #2</title>
</head>
``` 

:::note
NPM pkg is due to be released in the future.
:::

If you open the script file and have a look inside you will notice a few useful functions that exist on the MDS object.  

`init` function which starts up Minima and a callback for all Minima messages.<br/>
`log` allows you to log some data to the console with consistent timestamp.<br/>
`cmd` allows you to run functions on the Minima command line.<br/>
`sql` allows you to run sql commands on the current MiniDapp’s SQL database.<br/>
`form` allows you to retrieve parameters from your url.<br/>

Now that we know at a high level what each function does we can go ahead and talk about each in more detail.


### Initialising MDS (MDS.init)
Before being able to use the Minima API and run any commands, you need to make sure you run `MDS.init` first.

`init` takes one parameter, the callback function which returns you a response object in JSON format.

That would look something like this:
```
MDS.init(function(event){});
```

### Events
Minima Events can be listened for, so that users can be notified when specific on-chain events occur.

The following events exist:

`inited`: MDS has been initialised.

`NEWBALANCE`: The balance of the node has changed. 

`NEWBLOCK`: The chain tip has changed (i.e. a new block has been added to the chain). JSON data returned: The TxPoW object of the last block is returned as a JSON Object.

`MINING`: Mining has started or ended. 
JSON data returned: The TxPoW Object, true (if started)/false (if ended).

`MINIMALOG`: A new log message is available


**Example:**

```
MDS.init(function(msg) {
 // inited means Minima API is ready to be used
Switch(msg.event)
case: "inited":

// do Minima dependent initializations

break;
case "newblock":
console.log(msg);
// newblock message data
break;
case:"mining":
// mining messages
console.log(msg);
// mining message data
break;
case:"newbalance":
console.log(msg);
// newbalance msg data
break;
//...
            }
```


### Commands (MDS.cmd)

Now that we have initialised Minima and MDS is ready to be used, we can run useful commands to interface with Minima using the `cmd` function property.

Minima Terminal commands can be executed within JavaScript functions. 

`cmd` takes two parameters, the name of the function you want to run and the callback function which returns you a response object in JSON format.


```
MDS.cmd(minimaCommand,callback)
```
**Example: **   
```
MDS.cmd("balance", function(res){
console.log(res);
{
/**
  "command":"balance",
  "status":true,
  "response":[{
    "token":"Minima",
    "tokenid":"0x00",
    "confirmed":"0",
    "unconfirmed":"1000000000",
    "sendable":"0",
    "coins":"1",
    "total":"1000000000"
  }]
}
*/
});
```

For the full list of terminal commands, run `help` from the Minima Command Line, additional details can be found [here.](/docs/runanode/terminal_commands)

### SQL (MDS.sql)

An instance of a MySQL database is available for every MiniDapp.  You can create tables, insert, delete and query as you would any database using MDS.sql.

Under the hood is the H2 Java database engine, where you can do normal CRUD operations as you would.  There may be some minor differences between MySQL and MySQL with H2.  Read more [here](https://www.h2database.com/html/main.html).

`sql` takes two parameters, the query string and a callback function.

**Examples:**
```
MDS.sql(sqlQuery, callback);
```
```
MDS.sql("CREATE TABLE IF NOT EXISTS CUSTOMTABLE values(...)", function(res));
```
```
MDS.sql("INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...)", function(res));
```
```
MDS.sql("CREATE TABLE IF NOT EXISTS MESSAGES...", function(res));
```

### Logs (MDS.log)
`log` is a simple helper function that will output to the browser's console a time stamped message of your choice. This is useful for debugging.

**Example:**
```
MDS.log("this is a time stamped message");
```


### Forms (MDS.form)
`MDS.form` handles form submissions.  
It has a property called getParams which will collect URL parameters.


**Example**

The example `index.html` file below provides a simple example of showing the latest block number and querying the node Status, using the Minima status command.

Copy and paste the code into your `index.html` file.
```
<html>
<head>
	<!--   The MINIMA MDS JavaScript Library -->
	<script type="text/javascript" src="mds.js"></script>
	
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	
	<title>Hello World</title>

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

Rename the folder to `helloworld2.mds.zip` or if you are using a zip library through your CLI run `zip -r helloworld2.mds.zip`.   

## Installing your MiniDapp
Please refer to the [Installing your MiniDapp](/docs/buildonminima/dapptutorial/basicminidapp#installing-your-minidapp) section.

## MiniDapp Downloads

The **HelloWorld2** MiniDapp can also be downloaded from GitHub [here](https://github.com/minima-global/innovation-challenge/tree/main/Resources)

Minima’s official MiniDapps can be downloaded from the [MiniDapps website](https://minidapps.minima.global/).

## Next Steps

The most powerful MiniDapps will use Smart Contracts, written in Minima's scripting language. <br/>
Please follow the [Smart Contract Tutorial](/docs/buildonminima/txntutorial/start) to learn more about writing Scripts on Minima. 