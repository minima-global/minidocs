---
sidebar_position: 6
---

# MiniBrowser

The Android MiniBrowser is the web browser that runs internally on the Minima Android app. 

It is a custom built browser that allows users to use MiniDapps without having to leave the app to open an external browser window such as Chrome. 

Using the MiniBrowser prevents users from needing to bypass the self-signed certificate warning however it does not contain the full breadth of functionality that comes with an external browser. 

The MiniBrowser javascript interface contains the following functions that can be called from your MiniDapp:
  

## Show title bar

```
showTitleBar()
```

Show the title bar to allow the user to refresh the page, view the console logs or open the MiniDapp in an external browser. 

This is normally hooked up to the MiniDapp's top bar so that tapping at the top of the screen brings up the title bar. 

## Blob download

```
blobDownload(String zMdsfile, String zHexData) 
```

Due to limitations of the Minima Browser, you cannot download blob files via an anchor tag. 

To get around this issue, you can convert your file contents into hex data by using `MDS.util.base64ToHex` and then `Android.blobDownload('fileName', hexData);`

## Share text

```
shareText(String zText) 
```

Displays Androids native share menu and allows you to share any text that is passed in as an argument.

## Share file
    
```
shareFile(String zFilePath, String zMimeType) 
```

This will display Androids native share menu with the attached file (filepath must be specified). This is useful for attaching a file to an email for sharing.

## Disable default content menu

```
disableDefaultContextMenu()
```

Disables the context menu (hold screen menu). This can be useful if the user needs to tap and hold the screen for some action instead of invoking Android's context menu.
    
## Enable default content menu

```
enableDefaultContextMenu() 
```

Enables the context menu (hold screen menu).

## Open external brower

```
openExternalBrowser(String zUrl, String zTarget)
```

This will open the app in the default external browser.

## Close Window

```
closeWindow()
```

A MiniDapp can call this function to close the window and return back to the previous window, in most cases this will be the MiniHUB.

## Shutdown Minima

```
shutdownMinima()
```
Gracefully shutdown Minima to ensure all databases are shutdown correctly.

