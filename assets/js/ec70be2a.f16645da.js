"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5391],{9744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var l=i(5893),s=i(1151);const a={sidebar_position:4},r="mds.js library",c={id:"buildonminima/dapps/mdsjs",title:"mds.js library",description:"The MiniDapp System library mds.js provides access to an MDS object that enables useful functionality when building MiniDapps.",source:"@site/docs/buildonminima/dapps/mdsjs.md",sourceDirName:"buildonminima/dapps",slug:"/buildonminima/dapps/mdsjs",permalink:"/docs/buildonminima/dapps/mdsjs",draft:!1,unlisted:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapps/mdsjs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Config file",permalink:"/docs/buildonminima/dapps/configfile"},next:{title:"Events",permalink:"/docs/buildonminima/dapps/events"}},t={},d=[{value:"General functions",id:"general-functions",level:2},{value:"init",id:"init",level:3},{value:"log",id:"log",level:3},{value:"notify",id:"notify",level:3},{value:"notifycancel",id:"notifycancel",level:3},{value:"cmd",id:"cmd",level:3},{value:"sql",id:"sql",level:3},{value:"dapplink",id:"dapplink",level:3},{value:"Network functions",id:"network-functions",level:2},{value:"net.GET",id:"netget",level:3},{value:"net.POST",id:"netpost",level:3},{value:"Keypair functions",id:"keypair-functions",level:2},{value:"get",id:"get",level:3},{value:"set",id:"set",level:3},{value:"Comms functions",id:"comms-functions",level:2},{value:"comms.broadcast",id:"commsbroadcast",level:3},{value:"comms.solo",id:"commssolo",level:3},{value:"File functions",id:"file-functions",level:2},{value:"file.list",id:"filelist",level:3},{value:"file.save",id:"filesave",level:3},{value:"file.savebinary",id:"filesavebinary",level:3},{value:"file.load",id:"fileload",level:3},{value:"file.loadbinary",id:"fileloadbinary",level:3},{value:"file.delete",id:"filedelete",level:3},{value:"file.getpath",id:"filegetpath",level:3},{value:"file.makedir",id:"filemakedir",level:3},{value:"file.copy",id:"filecopy",level:3},{value:"file.move",id:"filemove",level:3},{value:"file.download",id:"filedownload",level:3},{value:"file.copytoweb",id:"filecopytoweb",level:3},{value:"Form functions",id:"form-functions",level:2},{value:"form.getParams",id:"formgetparams",level:3},{value:"Utility functions",id:"utility-functions",level:2},{value:"util.hexToBase64",id:"utilhextobase64",level:3},{value:"util.base64ToHex",id:"utilbase64tohex",level:3},{value:"util.base64ToArrayBuffer",id:"utilbase64toarraybuffer",level:3},{value:"util.getStateVariable",id:"utilgetstatevariable",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"mdsjs-library",children:"mds.js library"}),"\n",(0,l.jsx)(n.p,{children:"The MiniDapp System library mds.js provides access to an MDS object that enables useful functionality when building MiniDapps."}),"\n",(0,l.jsxs)(n.p,{children:["The latest mds.js can be downloaded from GitHub ",(0,l.jsx)(n.a,{href:"https://github.com/minima-global/Minima/blob/master/mds/mds.js",children:"here"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"The following functions exist on the MDS object."}),"\n",(0,l.jsx)(n.h2,{id:"general-functions",children:"General functions"}),"\n",(0,l.jsx)(n.h3,{id:"init",children:"init"}),"\n",(0,l.jsx)(n.p,{children:"Minima Startup - with the callback function used for all Minima messages"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"init : function(callback)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Before being able to use the Minima API and run any commands, ",(0,l.jsx)(n.code,{children:"MDS.init"})," must be run."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MDS.init"})," takes one parameter, the callback function which returns a response object in JSON format."]}),"\n",(0,l.jsx)(n.p,{children:"That would look something like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MDS.init(function(event){});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"log",children:"log"}),"\n",(0,l.jsx)(n.p,{children:"Log some data with a timestamp in a consistent manner to the console."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"log : function(output)\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"log"})," is a simple helper function that will output to the browser's console a time stamped message of your choice. This is useful for debugging."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'MDS.log("this is a time stamped message");\n'})}),"\n",(0,l.jsx)(n.h3,{id:"notify",children:"notify"}),"\n",(0,l.jsx)(n.p,{children:"Notify the User - on Phone it pops up in status bar. On desktop appears in Logs."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"notify : function(output)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"notifycancel",children:"notifycancel"}),"\n",(0,l.jsx)(n.p,{children:"Cancel this MiniDAPPs notification"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"notifycancel : function()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"cmd",children:"cmd"}),"\n",(0,l.jsx)(n.p,{children:"Runs a function on the Minima Command Line - takes the same format as Minima"}),"\n",(0,l.jsx)(n.p,{children:"Minima Terminal commands can be executed within JavaScript functions."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MDS.cmd"})," takes two parameters, the name of the command to run and the callback function which returns a response object in JSON format."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MDS.cmd(minimaCommand,callback)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'MDS.cmd("balance", function(res){\r\nconsole.log(res);\r\n{\r\n/**\r\n  "command":"balance",\r\n  "status":true,\r\n  "response":[{\r\n    "token":"Minima",\r\n    "tokenid":"0x00",\r\n    "confirmed":"0",\r\n    "unconfirmed":"1000000000",\r\n    "sendable":"0",\r\n    "coins":"1",\r\n    "total":"1000000000"\r\n  }]\r\n}\r\n*/\r\n});\n'})}),"\n",(0,l.jsxs)(n.p,{children:["For the full list of terminal commands, run ",(0,l.jsx)(n.code,{children:"help"})," from the Minima Command Line, or see ",(0,l.jsx)(n.a,{href:"/docs/userguides/usingyournode/terminal_commands",children:"Terminal commands"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"sql",children:"sql"}),"\n",(0,l.jsx)(n.p,{children:"Runs a SQL command on this MiniDAPPs SQL Database."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sql : function(command, callback)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["An instance of a MySQL database is available for every MiniDapp.  You can create tables, insert, delete and query as you would any database using ",(0,l.jsx)(n.code,{children:"MDS.sql"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Under the hood is the H2 Java database engine, where you can do normal CRUD operations as you would.  There may be some minor differences between MySQL and MySQL with H2.  Read more ",(0,l.jsx)(n.a,{href:"https://www.h2database.com/html/main.html",children:"here"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MDS.sql"})," takes two parameters, the query string and a callback function."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MDS.sql(sqlQuery, callback);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'MDS.sql("CREATE TABLE IF NOT EXISTS CUSTOMTABLE values(...)", function(res));\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'MDS.sql("INSERT INTO table_name (column1, column2, column3, ...)\r\nVALUES (value1, value2, value3, ...)", function(res));\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'MDS.sql("CREATE TABLE IF NOT EXISTS MESSAGES...", function(res));\n'})}),"\n",(0,l.jsx)(n.h3,{id:"dapplink",children:"dapplink"}),"\n",(0,l.jsx)(n.p,{children:"Get a link to a different Dapp. READ dapps can only get READ DAPPS. WRITE can get all dapps."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"dapplink : function(dappname, callback)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"network-functions",children:"Network functions"}),"\n",(0,l.jsx)(n.h3,{id:"netget",children:"net.GET"}),"\n",(0,l.jsx)(n.p,{children:"Make a GET request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GET : function(url, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"netpost",children:"net.POST"}),"\n",(0,l.jsx)(n.p,{children:"Make a POST request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"POST : function(url, data, callback)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"keypair-functions",children:"Keypair functions"}),"\n",(0,l.jsx)(n.p,{children:"Simple GET and SET key value pairs that are saved persistently."}),"\n",(0,l.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,l.jsx)(n.p,{children:"GET a value"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"get : function(key, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"set",children:"set"}),"\n",(0,l.jsx)(n.p,{children:"SET a value"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"set : function(key, value, callback)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"comms-functions",children:"Comms functions"}),"\n",(0,l.jsx)(n.p,{children:"Send a message to ALL minidapps or JUST your own service.js"}),"\n",(0,l.jsx)(n.h3,{id:"commsbroadcast",children:"comms.broadcast"}),"\n",(0,l.jsx)(n.p,{children:"PUBLIC message broadcast to ALL (callback is optional)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"broadcast : function(msg, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"commssolo",children:"comms.solo"}),"\n",(0,l.jsx)(n.p,{children:"PRIVATE message send just to this MiniDAPP (callback is optional)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"solo : function(msg, callback)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"file-functions",children:"File functions"}),"\n",(0,l.jsx)(n.h3,{id:"filelist",children:"file.list"}),"\n",(0,l.jsx)(n.p,{children:"List file in a folder .. start at"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"list : function(folder, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filesave",children:"file.save"}),"\n",(0,l.jsx)(n.p,{children:"Save text - can be text, a JSON in string format or hex encoded data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"save : function(filename, text, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filesavebinary",children:"file.savebinary"}),"\n",(0,l.jsx)(n.p,{children:"Save Binary Data - supply as a HEX string"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"savebinary : function(filename, hexdata, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fileload",children:"file.load"}),"\n",(0,l.jsx)(n.p,{children:"Load text - can be text, a JSON in string format or hex encoded data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"load : function(filename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fileloadbinary",children:"file.loadbinary"}),"\n",(0,l.jsx)(n.p,{children:"Load Binary data - returns the HEX data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"loadbinary : function(filename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filedelete",children:"file.delete"}),"\n",(0,l.jsx)(n.p,{children:"Delete a file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"delete : function(filename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filegetpath",children:"file.getpath"}),"\n",(0,l.jsx)(n.p,{children:"Get the full path - if you want to run a command on the file / import a txn / unsigned txn etc"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"getpath : function(filename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filemakedir",children:"file.makedir"}),"\n",(0,l.jsx)(n.p,{children:"Make a directory"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"makedir : function(filename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filecopy",children:"file.copy"}),"\n",(0,l.jsx)(n.p,{children:"Copy a file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"copy : function(filename, newfilename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filemove",children:"file.move"}),"\n",(0,l.jsx)(n.p,{children:"Move a file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"move : function(filename, newfilename, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filedownload",children:"file.download"}),"\n",(0,l.jsx)(n.p,{children:"Download a File from the InterWeb - Will be put in Downloads folder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"download : function(url, callback)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"filecopytoweb",children:"file.copytoweb"}),"\n",(0,l.jsx)(n.p,{children:"Copy a file to your web folder"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"copytoweb : function(file, webfile, callback)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"form-functions",children:"Form functions"}),"\n",(0,l.jsx)(n.p,{children:"Handles form submissions. Function for GET parameters."}),"\n",(0,l.jsx)(n.h3,{id:"formgetparams",children:"form.getParams"}),"\n",(0,l.jsx)(n.p,{children:"Return the GET parameter by scraping the location. Allows you to retrieve parameters from your url."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"getParams : function(parameterName)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"utility-functions",children:"Utility functions"}),"\n",(0,l.jsx)(n.h3,{id:"utilhextobase64",children:"util.hexToBase64"}),"\n",(0,l.jsx)(n.p,{children:"Convert HEX to Base 64 - removes the 0x if necessary"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"hexToBase64(hexstring)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"utilbase64tohex",children:"util.base64ToHex"}),"\n",(0,l.jsx)(n.p,{children:"Convert Base64 to HEX"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"base64ToHex(str)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"utilbase64toarraybuffer",children:"util.base64ToArrayBuffer"}),"\n",(0,l.jsx)(n.p,{children:"Convert Base64 to a Uint8Array - useful for Blobs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"base64ToArrayBuffer(base64)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"utilgetstatevariable",children:"util.getStateVariable"}),"\n",(0,l.jsx)(n.p,{children:"Return a state variable given the coin"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"getStateVariable(coin,port)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var l=i(7294);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);