"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Join the network",s={unversionedId:"userguides/newusers/jointhenetwork",id:"userguides/newusers/jointhenetwork",title:"Join the network",description:"\x3c!-- ---",source:"@site/docs/userguides/newusers/jointhenetwork.md",sourceDirName:"userguides/newusers",slug:"/userguides/newusers/jointhenetwork",permalink:"/docs/userguides/newusers/jointhenetwork",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/userguides/newusers/jointhenetwork.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Login to Minima",permalink:"/docs/userguides/login"},next:{title:"Your seed phrase",permalink:"/docs/userguides/newusers/seedphrase"}},l={},c=[{value:"Adding connections",id:"adding-connections",level:3},{value:"Sharing connections",id:"sharing-connections",level:3},{value:"Add/Share via the Terminal",id:"addshare-via-the-terminal",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"join-the-network"},"Join the network"),(0,o.kt)("p",null,"To achieve Minima's vision of complete decentralisation, there are no centralised servers that control access to the network. Therefore, when running a node for the first time, you will need one or more connections to join the network. "),(0,o.kt)("p",null,"To get a list of connections, use one of the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ask another node runner to ",(0,o.kt)("a",{parentName:"li",href:"#sharing-connections"},"share their connections")," with you"),(0,o.kt)("li",{parentName:"ul"},"enter ",(0,o.kt)("inlineCode",{parentName:"li"},"/minimapeers")," into any channel in our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/invite/minimaglobal"},"Discord server")," "),(0,o.kt)("li",{parentName:"ul"},"Google search for ",(0,o.kt)("strong",{parentName:"li"},"minimapeers.txt")," "),(0,o.kt)("li",{parentName:"ul"},"use a public URL that returns a list of Minima peers, for example ",(0,o.kt)("a",{parentName:"li",href:"https://www.spartacusrex.com/minimapeers.txt"},"https://www.spartacusrex.com/minimapeers.txt"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is a one off task, only required when starting a node for the first time.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(1376).Z+"#width50",width:"727",height:"703"})),(0,o.kt)("admonition",{title:"Restoring a backup",type:"important"},(0,o.kt)("p",{parentName:"admonition"},'If you are restoring a backup to a new node, select "I\'ll do this later" and continue to restore your backup using the Security MiniDapp.')),(0,o.kt)("h3",{id:"adding-connections"},"Adding connections"),(0,o.kt)("p",null,"Connections (or 'peers') are simply other nodes that can share the blockchain with new users, enabling them to join the network. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To add connections for the first time:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the Home screen, go to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(8578).Z+"#width10",width:"116",height:"152"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add connections"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(6925).Z+"#width50",width:"718",height:"256"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Paste the list or URL into the box and select ",(0,o.kt)("strong",{parentName:"li"},"Add connections"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(5543).Z+"#width50",width:"727",height:"703"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Exit the Settings and wait a few minutes for the block number to appear in the top right")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(7799).Z+"#width50",width:"727",height:"703"})),(0,o.kt)("p",null,"That's it! You are now connected to the network! "),(0,o.kt)("p",null,"Once you have joined the network, ensure you ",(0,o.kt)("a",{parentName:"p",href:"/docs/userguides/newusers/seedphrase"},"write down your seed phrase"),"."),(0,o.kt)("h3",{id:"sharing-connections"},"Sharing connections"),(0,o.kt)("p",null,"To help a new user join the network, share your connection list with them. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To share connections:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the Home screen, go to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(8578).Z+"#width10",width:"116",height:"152"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Share connections"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(9084).Z+"#width50",width:"720",height:"337"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Copy"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"settings",src:n(2971).Z+"#width50",width:"727",height:"703"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Send the list to the new node runner.")),(0,o.kt)("h2",{id:"addshare-via-the-terminal"},"Add/Share via the Terminal"),(0,o.kt)("p",null,"Alternatively, you can add or share connections using the Terminal"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To add connections:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"peers action:addpeers peerslist:ip:port,ip;port,...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"peers action:addpeers peerslist:https://spartacusrex.com/minimapeers.txt\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To share connections:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"peers action:list max:10\n")))}u.isMDXComponent=!0},5543:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addconnections2-341a7377521b072a1d9863ccbbbcbf0e.png"},6925:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addconnectionssetting-9c7ec0150282855f96618e2daa7a2e79.png"},7799:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/blocknum-46e82640ac209c24d9d33ac015177464.png"},9084:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connectionssetting-e8665638eb2e75cecc93ea37f7de01da.png"},1376:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jointhenetwork-db4d521fee460df796666a40faac1d1e.png"},8578:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settingsicon-882226046ee121dcc991181bd2164849.png"},2971:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shareconnections-84254f11fe26f16cbc1f3640e0b74de7.png"}}]);