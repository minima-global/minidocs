"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4587],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:6},s="MiniBrowser",u={unversionedId:"buildonminima/dapps/minibrowser",id:"buildonminima/dapps/minibrowser",title:"MiniBrowser",description:"The Android MiniBrowser is the web browser that runs internally on the Minima Android app.",source:"@site/docs/buildonminima/dapps/minibrowser.md",sourceDirName:"buildonminima/dapps",slug:"/buildonminima/dapps/minibrowser",permalink:"/docs/buildonminima/dapps/minibrowser",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapps/minibrowser.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/buildonminima/dapps/events"},next:{title:"Start",permalink:"/docs/buildonminima/dapptutorial/start"}},p={},d=[{value:"Show title bar",id:"show-title-bar",level:2},{value:"Blob download",id:"blob-download",level:2},{value:"Share text",id:"share-text",level:2},{value:"Share file",id:"share-file",level:2},{value:"Disable default content menu",id:"disable-default-content-menu",level:2},{value:"Enable default content menu",id:"enable-default-content-menu",level:2},{value:"Open external brower",id:"open-external-brower",level:2},{value:"Close Window",id:"close-window",level:2},{value:"Shutdown Minima",id:"shutdown-minima",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minibrowser"},"MiniBrowser"),(0,o.kt)("p",null,"The Android MiniBrowser is the web browser that runs internally on the Minima Android app. "),(0,o.kt)("p",null,"It is a custom built browser that allows users to use MiniDapps without having to leave the app to open an external browser window such as Chrome. "),(0,o.kt)("p",null,"Using the MiniBrowser prevents users from needing to bypass the self-signed certificate warning however it does not contain the full breadth of functionality that comes with an external browser. "),(0,o.kt)("p",null,"The MiniBrowser javascript interface contains the following functions that can be called from your MiniDapp:"),(0,o.kt)("h2",{id:"show-title-bar"},"Show title bar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"showTitleBar()\n")),(0,o.kt)("p",null,"Show the title bar to allow the user to refresh the page, view the console logs or open the MiniDapp in an external browser. "),(0,o.kt)("p",null,"This is normally hooked up to the MiniDapp's top bar so that tapping at the top of the screen brings up the title bar. "),(0,o.kt)("h2",{id:"blob-download"},"Blob download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"blobDownload(String zMdsfile, String zHexData) \n")),(0,o.kt)("p",null,"Due to limitations of the Minima Browser, you cannot download blob files via an anchor tag. "),(0,o.kt)("p",null,"To get around this issue, you can convert your file contents into hex data by using ",(0,o.kt)("inlineCode",{parentName:"p"},"MDS.util.base64ToHex")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Android.blobDownload('fileName', hexData);")),(0,o.kt)("h2",{id:"share-text"},"Share text"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shareText(String zText) \n")),(0,o.kt)("p",null,"Displays Androids native share menu and allows you to share any text that is passed in as an argument."),(0,o.kt)("h2",{id:"share-file"},"Share file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shareFile(String zFilePath, String zMimeType) \n")),(0,o.kt)("p",null,"This will display Androids native share menu with the attached file (filepath must be specified). This is useful for attaching a file to an email for sharing."),(0,o.kt)("h2",{id:"disable-default-content-menu"},"Disable default content menu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"disableDefaultContextMenu()\n")),(0,o.kt)("p",null,"Disables the context menu (hold screen menu). This can be useful if the user needs to tap and hold the screen for some action instead of invoking Android's context menu."),(0,o.kt)("h2",{id:"enable-default-content-menu"},"Enable default content menu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enableDefaultContextMenu() \n")),(0,o.kt)("p",null,"Enables the context menu (hold screen menu)."),(0,o.kt)("h2",{id:"open-external-brower"},"Open external brower"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openExternalBrowser(String zUrl, String zTarget)\n")),(0,o.kt)("p",null,"This will open the app in the default external browser."),(0,o.kt)("h2",{id:"close-window"},"Close Window"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"closeWindow()\n")),(0,o.kt)("p",null,"A MiniDapp can call this function to close the window and return back to the previous window, in most cases this will be the MiniHUB."),(0,o.kt)("h2",{id:"shutdown-minima"},"Shutdown Minima"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shutdownMinima()\n")),(0,o.kt)("p",null,"Gracefully shutdown Minima to ensure all databases are shutdown correctly."))}m.isMDXComponent=!0}}]);