---
sidebar_position: 3
---

# Config file

The **dapp.conf** file is the configuration file for your MiniDapp and is where the MiniDapp metadata is provided in JSON format which will be required by the MiniDapp Hub later. 

Metadata options:
- **name**: name of your MiniDapp
- **icon**: name of icon file (located in the same folder)
- **version**: MiniDapp version number
- **description**: MiniDapp description
- **browser**: internal or external (for mobile interface), depending on whether your MiniDapp should be launched within the app or in an external browser

**Example**

```
{
"name":"Hello World",
"icon" :"favicon.ico",
"version" : "1.0",
"description": "My Hello World MiniDapp",
"browser": "internal"
}
```