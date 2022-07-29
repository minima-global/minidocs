---
sidebar_position: 4
---

# Basic MiniDapp

In this section, we walk through how to create a very simple MiniDapp that does not interact with the Minima blockchain. 

You will learn how to:
1. Create the MiniDapp config file
2. Give your MiniDapp an icon
3. Create a basic interface for your MiniDapp
4. Package your MiniDapp to load to your MiniDapp Hub
5. Install your MiniDapp on your node on Minima

## Config file
The first step is to create a folder that your MiniDapp will live in. Call it `helloworld`.

In your code editor, create a new file called `dapp.conf` and save it into your helloworld folder. 

The dapp.conf file is the configuration file for your MiniDapp and is where we provide the MiniDapp metadata in JSON format which will be required by the MiniDapp Hub later. 

Metadata options:
- **name**: Name of your MiniDapp
- **icon**: name of icon file (located in the same folder)
- **version**: MiniDapp version number
- **description**: MiniDapp description
- **browser**: internal or external (for mobile interface), depending on whether your MiniDapp should be launched within the app or in an external browser

Following the HelloWorld example, your dapp.conf file should look something like this:
```
{
"name":"Hello World",
"icon" :"favicon.ico",
"version" : "1.0",
"description": "My Hello World MiniDapp",
"browser": "internal"
}
```

Save it. That’s your config file done! 

## Icon

To include an icon for your MiniDapp, save an image as `favicon.ico` and add it to your `helloworld` folder with your `dapp.conf` file.

Your folder should now contain 2 files
1. dapp.conf
2. favicon.ico

Your config file and icon used will determine what is visible when your MiniDapp is loaded into the MiniDapp Hub, as shown below.

![Accessing the MiniDapp Hub](/img/buildonminima/helloworld.png)

## Basic interface for your MiniDapp

Next, we will create a simple webpage which will be the homepage of your MiniDapp. 
 
Create and open an `index.html` file.

Copy and paste the following code, or alternatively, create your own basic html page. 

If you are comfortable with CSS styling you can also go ahead and create a .CSS file for your html file.
```
<html>

<head>
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	<title>Hello World</title>
</head>
<body style="font-family:manrope;">
	<h1>Hello World!</h1>

	<p>This is my first MiniDapp!</p>

	<h3>Welcome to complete decentralization</h3>
	<p>		
	Minima is a cooperative network that enables everyone to freely connect and prosper.<br></br>
	Click <a href="https://minima.global">here</a> to go to the Minima website.
	</p>

	<h3>Next Steps</h3>
	<p>
		Next, you will learn how to create a MiniDapp that interacts with the Minima Blockchain.
	</p>
	</body>

</html>
```

Save it. 


Your folder should now contain 3 files. 
1. dapp.conf
2. favicon.ico
3. index.html

If you also created a CSS file, add that to your `helloworld` folder. 

Next, we will see how the MiniDapp looks when installed onto a Minima node.

## Packaging your MiniDapp

We now have a complete helloworld folder containing: 
1. dapp.conf
2. favicon.ico
3. index.html
4. styling.css (optional)

Zip up the contents of this folder (not the folder itself) 
![Accessing the MiniDapp Hub](/img/buildonminima/zipup.png)

Name the folder as `helloworld.mds.zip` or if you are using a zip library through your cli run `zip -r helloworld.mds.zip`.   

## Installing your MiniDapp

The final stage is to install the MiniDapp onto your node.

### Installing onto a mobile device

To install the MiniDapp on your phone:
1. Send the zip file to your mobile device (via email or other method)
2. Download the MiniDapp zip file to your mobile device
3. Open the Minima App
4. From the Home page, click the + button
5. Find the MiniDapp in your mobile’s file explorer (most likely the Downloads folder) 
6. Select the MiniDapp, the MiniDapp will install on your node
7. Click on your MiniDapp to open it

**Congratulations! You have created your first MiniDapp!**

### Installing onto a desktop node


1. Login to your MiniDapp Hub and click on **Choose a file**
2. Select your `helloworld.mds.zip` MiniDapp
3. Click on **Install**, then return to the Hub

Alternatively, to install from the command line:

1. Run the command `mds action:install file:helloworld.mds.zip` from the Minima Command Line (including the path with the file if required.)

Example
```
mds action:install file:C:\Users\Downloads\HelloWorld.mds.zip
Minima @ 06/07/2022 12:49:44 [233.9 MB] : unzipping package into C:\Users\minima\mds\web\0xCFAB5D98C98CED060F5FDD235CDA27AF
{
  "command":"mds",
  "params":{
    "action":"install",
    "file":"C:\\Users\\Downloads\\HelloWorld.mds.zip"
  },
  "status":true,
  "response":{
    "installed":{
      "uid":"0xCFAB5D98C98CED060F5FDD235CDA27AF",
      "conf":{
        "name":"Hello World",
        "icon":"favicon.ico",
        "version":"1.0",
        "description":"My Hello World MiniDapp",
        "browser":"internal"
      }
    }
  }
```
2. Login to your MiniDapp Hub (see [accessing the MiniDapp Hub](/docs/buildonminima/dapptutorial/accesshub))
3. Click on your MiniDapp to open it

**Congratulations! You have created your first MiniDapp!**
