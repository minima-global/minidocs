---
sidebar_position: 2
---

# MiniDapp Structure

MiniDapps are simple web apps created using basic web languages (HTML, CSS, JavaScript) that use the Minima API to interact with the blockchain. 

MiniDapps are zip files (.mds.zip) with the following basic structure:

- **dapp.conf** : Configuration file 
- **icon.png** : icon for the MiniDapp
- **index.html** : html web page 
- **mds.js** : JavaScript library for a simple Minima API
- **service.js** : Optional JavaScript file for running a background service that handles Main messages
- **assets** : folder containing assets used by the MiniDapp

All items must be zipped together and use the `.mds.zip` extension. Once zipped, it becomes a MiniDapp that can be installed onto any Minima node. 