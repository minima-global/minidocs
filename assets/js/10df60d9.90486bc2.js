"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[6481],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,p=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return t?a.createElement(p,o(o({ref:n},d),{},{components:t})):a.createElement(p,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7604:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:5},c="Run an archive node",l={unversionedId:"runanode/archivenodes",id:"runanode/archivenodes",title:"Run an archive node",description:"Archive nodes serve an important function of being able to recover any Minima user if they lose access to their node or require a re-sync to the chain.",source:"@site/docs/runanode/archivenodes.md",sourceDirName:"runanode",slug:"/runanode/archivenodes",permalink:"/docs/runanode/archivenodes",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/archivenodes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Desktop Command Line",permalink:"/docs/runanode/selectplatform/manualnode"},next:{title:"User Guides",permalink:"/docs/userguides/"}},d={},m=[{value:"Use cases",id:"use-cases",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Minimum hardware requirements",id:"minimum-hardware-requirements",level:3},{value:"Ports",id:"ports",level:3},{value:"Starting an archive node",id:"starting-an-archive-node",level:2},{value:"Manual archive node (desktop)",id:"manual-archive-node-desktop",level:3},{value:"Examples",id:"examples",level:4},{value:"Windows",id:"windows",level:4},{value:"Mac",id:"mac",level:4},{value:"Linux",id:"linux",level:4},{value:"Docker archive node",id:"docker-archive-node",level:3},{value:"Examples: Starting a new archive node",id:"examples-starting-a-new-archive-node",level:4},{value:"Linux VPS",id:"linux-vps",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Mac",id:"mac-1",level:4},{value:"Linux desktop",id:"linux-desktop",level:4},{value:"Check your archive data",id:"check-your-archive-data",level:2}],u={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-an-archive-node"},"Run an archive node"),(0,i.kt)("p",null,"Archive nodes serve an important function of being able to recover any Minima user if they lose access to their node or require a re-sync to the chain."),(0,i.kt)("p",null,"A standard Minima node is constantly pruning the chain and only holds the latest 2 months of archive blocks for the purpose of sharing missing recent blocks with other nodes that are rejoining the network after some time offline."),(0,i.kt)("p",null,"An archive node does not prune blocks after 2 months and can therefore be used to re-sync another node from the genesis block."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An archive node can only be used to re-sync users who created their nodes after your archive node was created. If you wish to be able to recover ",(0,i.kt)("em",{parentName:"p"},"any")," Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis."))),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Archive nodes can be for personal use or public use."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Personal Archive Node")),(0,i.kt)("p",{parentName:"blockquote"},"A user running a node on a mobile device may choose to run an Archive node locally on their laptop/desktop at home in case they lose their phone and do not have a valid backup of their node stored elsewhere. In this case, the user would always have the latest proofs for their coins on their own Archive node and they can recover their phone wallet to a new device without relying on any other Minima user.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Public Archive Node")),(0,i.kt)("p",{parentName:"blockquote"},"A user can choose to run an archive node for the purpose of helping other Minima users recover their wallet. By exporting their archive data to a file, another user can import the archive file and recover their wallet.\nIf the archive node is on a server with a static external IP address, other users can also use the ip:port of the archive node to recover their wallet by remotely connecting to the archive node. ")),(0,i.kt)("p",null,"To learn more about archive nodes, please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/aboutarchivenodes"},"archive nodes")," page."),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Anyone can run an archive node from Android, desktop or server."),(0,i.kt)("h3",{id:"minimum-hardware-requirements"},"Minimum hardware requirements"),(0,i.kt)("p",null,"The following assumes that only Minima is running on the server, you should consider increasing the RAM and storage depending on the requirements for other software you install e.g. virus protection etc"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Processing:")," 2 CPU ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Memory:")," 4GB RAM",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Storage:")," 5GB*"),(0,i.kt)("p",null,"*This may change over time."),(0,i.kt)("h3",{id:"ports"},"Ports"),(0,i.kt)("p",null,"If running an archive node on a desktop, no port forwarding is required."),(0,i.kt)("p",null,"If running a public archive node on a server, open inbound connections on port 9001 (or the main custom Minima port you have chosen). "),(0,i.kt)("h2",{id:"starting-an-archive-node"},"Starting an archive node"),(0,i.kt)("p",null,"When you start an archive node, you will start storing the archive data from that point onwards, therefore you can only re-sync coins for users that are created after this point."),(0,i.kt)("p",null,"It is possible to run an archive node that stores all blocks since the Genesis block by doing a chain re-sync from another archive node that already has all blocks."),(0,i.kt)("h3",{id:"manual-archive-node-desktop"},"Manual archive node (desktop)"),(0,i.kt)("p",null,"To start a Minima archive node manually, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-archive")," parameter to the start up command. "),(0,i.kt)("p",null,"If you have an existing node that you wish to change to an archive node, first take a backup of your existing node, then ",(0,i.kt)("inlineCode",{parentName:"p"},"quit")," your node from the Terminal and restart the same node, adding in the ",(0,i.kt)("inlineCode",{parentName:"p"},"-archive")," parameter on the start up line. "),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you used the ",(0,i.kt)("inlineCode",{parentName:"p"},"-data")," parameter to specify a data folder when starting your existing node, you must make sure you start the archive node using the same data folder you chose originally."))),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"windows"},"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar C:\\Users\\INSERTUSERNAME\\Downloads\\minima.jar -mdsenable -archive\n")),(0,i.kt)("h4",{id:"mac"},"Mac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo java -jar /Users/INSERTUSERNAME/Downloads/minima.jar -mdsenable -archive\n")),(0,i.kt)("h4",{id:"linux"},"Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo java -jar /home/INSERTUSERNAME/minima.jar -mdsenable -archive\n")),(0,i.kt)("h3",{id:"docker-archive-node"},"Docker archive node"),(0,i.kt)("p",null,"To start a Minima archive node container, you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-e minima_archive=true")," environment variable to the start up command. "),(0,i.kt)("p",null,"If you originally started your node without the ",(0,i.kt)("inlineCode",{parentName:"p"},"-e minima_archive=true")," environment variable, you can either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start a new separate container for your archive node,"),(0,i.kt)("li",{parentName:"ul"},"backup your existing node, the restore it to a new archive container you create, "),(0,i.kt)("li",{parentName:"ul"},"backup your existing node, then stop and remove your existing Minima container and start a new Minima container including ",(0,i.kt)("inlineCode",{parentName:"li"},"-e minima_archive=true"),", using the ",(0,i.kt)("strong",{parentName:"li"},"SAME")," data folder as your old node e.g. minimadocker9001 or minimadocker8001")),(0,i.kt)("h4",{id:"examples-starting-a-new-archive-node"},"Examples: Starting a new archive node"),(0,i.kt)("h4",{id:"linux-vps"},"Linux VPS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_server=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,i.kt)("h4",{id:"windows-1"},"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v C:\\Users\\INSERTUSERNAME\\minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,i.kt)("h4",{id:"mac-1"},"Mac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,i.kt)("h4",{id:"linux-desktop"},"Linux desktop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTPASSWORD -e minima_desktop=true -e minima_archive=true -v ~/minimadockerarchive:/home/minima/data -p 7001-7003:9001-9003 --restart unless-stopped --name minimaarchive minimaglobal/minima:latest\n")),(0,i.kt)("h2",{id:"check-your-archive-data"},"Check your archive data"),(0,i.kt)("p",null,"From the Terminal MiniDapp or Docker CLI, you can check the integrity of your archive data by running the command:"),(0,i.kt)("p",null,"This checks your archive data for missing or broken blocks and tells you the first block you can sync users from. If there is an error, you will need to re-sync from another archive node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"archive action:integrity\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example output "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'archive action:integrity\n{\n  "command":"archive",\n  "params":{\n    "action":"integrity"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "message":"Archive integrity check completed",\n    "start":1,\n    "blocks":6443,\n    "cascade":true,\n    "errors":0,\n    "recommend":"Your ArchiveDB is correct and has no errors."\n  }\n}\n'))))}h.isMDXComponent=!0}}]);