"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[6852],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=m(a),g=r,N=k["".concat(i,".").concat(g)]||k[g]||s[g]||l;return a?n.createElement(N,o(o({ref:e},p),{},{components:a})):n.createElement(N,o({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7183:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],d={sidebar_position:10},i="Terminal Commands",m={unversionedId:"runanode/terminal_commands",id:"runanode/terminal_commands",title:"Terminal Commands",description:"The following commands can be run directly from a Minima Terminal:",source:"@site/docs/runanode/terminal_commands.md",sourceDirName:"runanode",slug:"/runanode/terminal_commands",permalink:"/docs/runanode/terminal_commands",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/terminal_commands.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Archive Nodes",permalink:"/docs/runanode/archivenodes"},next:{title:"Troubleshooting",permalink:"/docs/runanode/troubleshooting"}},p={},s=[],k={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"terminal-commands"},"Terminal Commands"),(0,l.kt)("p",null,"The following commands can be run directly from a Minima Terminal: "),(0,l.kt)("p",null,"These can also be viewed by typing ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," into the Minima Terminal."),(0,l.kt)("p",null,"For detailed help, use ",(0,l.kt)("inlineCode",{parentName:"p"},"help command:")," followed by the command."),(0,l.kt)("p",null," ; can be used to chain multiple commands",(0,l.kt)("br",null),"\nparameter values in ",(0,l.kt)("strong",{parentName:"p"},"bold")," indicate default value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Optional Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backup"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"password:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"file:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"auto:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"complete:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Backup your node. Uses a timestamped name by default. Option to set a password and set the file name/path. ",(0,l.kt)("br",null)," Complete true will include the archive database. ",(0,l.kt)("br",null)," Auto true will schedule a default backup every 24 hours.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"balance"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"address:"),"Mx.. ","|"," 0x.. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"confirmations:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show your total balance of Minima coins and custom tokens. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"address")," - 0x or Mx address to filter by ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"confirmations")," - number of blocks required for coins to be considered confirmed in your balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"burn"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"View number of burn txns and min/median/max/avg Burn metrics for latest 1, 10 and 50 blocks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"coinexport"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"coinid:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Export a coin and its proof")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"coinimport"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"data:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"track:")," ",(0,l.kt)("strong",{parentName:"td"},"true")," ","|"," false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Import a coin and its MMR proof and keep tracking it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"coins"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"relevant:")," ",(0,l.kt)("strong",{parentName:"td"},"true")," ","|"," false ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"sendable:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false"),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"coinid:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"amount:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"address:")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"tokenid:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Search for coins in the tree. Optional filters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cointrack"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"enable:")," ",(0,l.kt)("strong",{parentName:"td"},"true")," ","|"," false ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"coinid:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Track or untrack the MMR proof for a coin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connect"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"host:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Connect to a network Minima instance using ip:port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"consolidate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"tokenid:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"coinage:3"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"maxcoins:"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"maxsigs:"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"burn:"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"debug:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"dryrun:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Merge multiple coins (UTxOs) into one coins by sending them back to yourself.",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"coinage")," - set a minimum coin age in blocks, default 3 blocks  ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"maxcoins")," - maximum number of coins to consolidate ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"maxsigs")," - maximum number of signatures for the txn ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"burn")," - the amount to burn in the txn  ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"debug")," - true will provide additional logs ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"dryrun")," - true will simulate the command without executing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"disconnect"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"uid:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Disconnect from a connected or connecting host. Use network command to find peer UID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"getaddress"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Get one of your default Minima addresses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hash"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"data:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"type:"),"keccak ","|"," sha2 ","|"," sha3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hash the data ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"type:")," the hashing algorithm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hashtest"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"amount:"),"1000000"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Check the speed of hashing of this device. Option to set the number of hashes. Default 1 million hashes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"help"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show Help.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"incentivecash"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"uid:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show your rewards or specify your Incentive ID for the Incentive Program")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:list")," ","|"," new"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Get a list of all your public keys or create a new key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxcontacts"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:list")," ","|"," mls ","|"," add ","|"," remove ","|"," search"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"contact:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"id:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"publickey:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Manage your Maxima contacts. Refresh contacts using the mls service. Add by Contact address, remove by id, search by id or publickey.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxima"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:info")," ","|"," setname ","|"," hosts ","|"," send ","|"," refresh"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"id:")," ","|"," ",(0,l.kt)("strong",{parentName:"td"},"to:")," ","|"," ",(0,l.kt)("strong",{parentName:"td"},"publickey:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"application:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"logs:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"poll"),":true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action")," - Check your Maxima details (info), ",(0,l.kt)("br",null),"set your name (setname), ",(0,l.kt)("br",null),"view your Maxima hosts (hosts), ",(0,l.kt)("br",null),"send a message (send), refresh maxima (refresh). ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"name")," - (setname) set your name ",(0,l.kt)("strong",{parentName:"td"},"id/to/publickey")," - (send) send to given maxima contact id (id)/full address/public key ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"application")," - (send) provide host:port,",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"data")," - (send) The HEX data for the message to send",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"logs")," - enable/disable logs",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"poll")," - poll messages to perform multiple sends quickly")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mds"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:list")," ","|"," install ","|"," uninstall ","|"," pending ","|"," accept ","|"," deny ","|"," permission ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"file:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"uid:")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"trust:read")," ","|"," write"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MiniDapp System management. ",(0,l.kt)("br",null)," Actions:",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"list"),": lists all MiniDapps, their uid and details, ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"install:")," install a MiniDAPP (requires ",(0,l.kt)("em",{parentName:"td"},"file")," - file path to minidapp),",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"uninstall:")," uninstall a MiniDAPP (requires minidapp ",(0,l.kt)("em",{parentName:"td"},"uid"),")",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"pending:")," show all pending commands, ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"accept:")," accept a pending command (requires pending command ",(0,l.kt)("em",{parentName:"td"},"uid"),"),",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"deny:")," deny a pending command (requires pending command ",(0,l.kt)("em",{parentName:"td"},"uid"),"), ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"permission:")," set the permission for a minidapp (requires minidapp ",(0,l.kt)("em",{parentName:"td"},"uid")," and ",(0,l.kt)("em",{parentName:"td"},"trust"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"uid:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"data:"),"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Send a network message to one or all of your direct Minima peers. Use network command to find peer UID. NOT a Maxima command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mmrcreate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"nodes:"),'[" ",...]'),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create an MMR Tree of data. JSON array of leaf nodes, nodes can be STRING / HEX ",(0,l.kt)("br",null)," e.g. mmrcreate nodes:",'["RETURN TRUE","RETURN FALSE"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mmrproof"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"data:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"proof:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"root:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Check an MMR proof. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data")," - Leaf node data, data can be STRING / HEX ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"proof")," - mmr proof for data (from mmrcreate output)",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"root")," - mmr root for data  (from mmrcreate output) ",(0,l.kt)("br",null),'e.g. mmrproof data:"RETURN TRUE" proof:0x\u2026 root:0x\u2026')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"network"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:list")," ","|"," restart"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show network connections or restart")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"newaddress"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create a new address that will not be not used for anything else (not a default change address)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"newscript"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"script:")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"trackall:true")," ","|"," false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add a new custom script ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"trackall")," - keep track of on chain activity with this script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"printtree"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"depth:"),"32 ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"cascade:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Print a tree representation of the blockchain. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"depth")," - number of blocks ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"cascade")," - Print the Cascading chain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"quit"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shutdown Minima")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"restore"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"file:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Restore the entire system.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rpc"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"enable:"),"true ","|"," false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable and disable RPC on port 9005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"runscript"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"script:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"clean:true")," ","|"," false ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"state:"),'{"port":"value",..} ',(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"prevstate:"),'{"port":"value",..} ',(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"globals:"),'{"@GLOBALVAR":"value",...} ',(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"signatures:"),'[" ",...]'," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"extrascripts:"),'{"script":"scriptproof",...}'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Run a script with the defined parameters",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"clean")," - clean the script",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"state")," - JSON Object, state variable values for the script",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"prevstate")," - JSON Object, previous state variables values for the coin ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"globals"),' -  JSON Object, global variable values for the script e.g. globals:{"@BLOCK":"101"} signatures: JSON Array ',(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"extrascripts")," - JSON Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scripts"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"address:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Search scripts",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"address")," - script address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"send"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"address:"),"Mx.. ","|"," 0x..",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"amount:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"multi:"),'["address1:amount","address2:amount"]',(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"tokenid:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"state:"),'{"port":"value"} ',(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"burn:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"split:"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"debug:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"dryrun:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Send Minima or Tokens to an address. ",(0,l.kt)("br",null),"Options to send to multiple addresses; add state variable as a JSON object; set a burn amount for the txn or split inputs to a chosen number of new coins.",(0,l.kt)("br",null)," Debug true will provide additional logs. ",(0,l.kt)("br",null)," Dryrun true will simulate the command without executing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sendpoll"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:")," add ","|"," list ","|"," remove ",(0,l.kt)("br",null)," uid:"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Can be used in the same way as the ",(0,l.kt)("inlineCode",{parentName:"td"},"send")," function. The send command is added to a list and polls every 30 seconds until complete. Useful when wanting to send many transactions that require waiting on coins to be returned")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sign"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"publickey:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sign the HEX data with the publickey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"status"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"clean:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show general status for Minima and optionally clean RAM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tokencreate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"name:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"amount:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"decimals:"),"8 ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"script:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"state:"),'{"port":"value",..} ',(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"signtoken:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"webvalidate:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"burn:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create a custom token (coloured Minima Coins)",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"name")," - can be a STRING or JSON Object",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"decimals")," - specify how many decimal places the token will have (default 8, max 16)",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"script")," - add a custom script that must return TRUE when spending the token,",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"state variables")," - JSON object ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"signtoken")," - provide a public key to sign the token with,",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"webvalidate")," - provide a URL storing the tokenID for validation purposes",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"burn")," - amount to burn in the tokencreate txn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tokens"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"tokenid:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List tokens on the chain. Option to filter by token id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tokenvalidate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"tokenid:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Validate the signature and web link in a token. Web link must contain token ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"trace"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"enable:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"filter:"),"STRING"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show the message stacks of the internal Minima Engine with optional filter string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tutorial"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show the complete Grammar for Minima KISSVM scripting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnbasics"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Automatically set the MMR proofs and scripts for a txn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txncheck"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show details about the transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnclear"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Clear ALL the Witness data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txncreate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create a transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txndelete"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Delete this custom transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnexport"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"file:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Export a transaction as HEX or to a file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnimport"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"file:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Import a transaction as a file or HEX data. Optionally specify the txn id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txninput"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"coinid:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"coindata:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"floating:"),"true ","|"," false ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"address:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"amount:"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"tokenid:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"scriptmmr:true")," ","|"," false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add a selected coin as an input to a transaction.",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"coinid")," - use an existing coin by referencing its coin id. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"coindata")," - Alternatively specify a coin using exported coin data. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"floating")," - true flag indicates an eltoo txn. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"address")," - If no coin is specified, the address (of a script), ",(0,l.kt)("strong",{parentName:"td"},"amount")," and ",(0,l.kt)("strong",{parentName:"td"},"token ID")," can be specified to create a new coin. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"scriptmmr")," - true flag adds script and coin proofs, default TRUE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnlist"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"List current custom transactions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnoutput"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"amount:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"address:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"tokenid:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"storestate:true")," ","|"," false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Create a transaction output. Specify txn id, output amount and recipient address. Option to specify custom token ID, default is 0x00 (Minima), store state variables flag, default TRUE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnpost"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"auto:"),"true ","|"," ",(0,l.kt)("strong",{parentName:"td"},"false")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"burn:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Post a transaction. Option to automatically set the Scripts and MMR. Optional Burn amount for the transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnscript"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"scripts:"),"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'Add scripts to a txn. Specify txn id and JSON list of scripts with optional proof. {""script"":""proof""} with optional proof value for MAST scripts created with mmrcreate E.g. txnscript id:txnmast scripts:{""RETURN TRUE"":""""}')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnsign"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"publickey:"),"0x.. ","|"," auto"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sign a transaction. Specify txn id. Can use auto parameter for publickey if all coin inputs are simple, otherwise specify the correct publickey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txnstate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"id:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"port:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"value:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add a state variable. Specify txn id, state variable port number and state variable value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"txpow"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"txpowid:")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"block:")," ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"address:"),"Mx.. ","|"," 0x.."),(0,l.kt)("td",{parentName:"tr",align:"left"},"Search for a specific TxPoW. Option to specify block number or address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"vault"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:"),"seed ","|"," lock ","|"," unlock"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"seed:")),(0,l.kt)("td",{parentName:"tr",align:"left"},"BE CAREFUL. Show base seed, lock to wipe your private keys, unlock to restore your private keys")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"verify"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"publickey:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"data:")," ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"signature:")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Verify a signature with the HEX data and public key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"webhooks"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"action:list")," ","|"," add ","|"," remove ","|"," clear ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"hook:"),"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add a web hook URL that is called with Minima events as they happen")))))}g.isMDXComponent=!0}}]);