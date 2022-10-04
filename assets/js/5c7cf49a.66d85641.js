"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5581],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7663:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:4},s="Mac",m={unversionedId:"runanode/mac",id:"runanode/mac",title:"Mac",description:"How to download and install Minima on your Mac",source:"@site/docs/runanode/mac.md",sourceDirName:"runanode",slug:"/runanode/mac",permalink:"/docs/runanode/mac",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/mac.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/runanode/windows"},next:{title:"Linux Desktop",permalink:"/docs/runanode/linux_desktop"}},p={},d=[{value:"How to download and install Minima on your Mac",id:"how-to-download-and-install-minima-on-your-mac",level:2},{value:"How to set up Incentive Program to receive rewards",id:"how-to-set-up-incentive-program-to-receive-rewards",level:2},{value:"Useful Commands",id:"useful-commands",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mac"},"Mac"),(0,o.kt)("h2",{id:"how-to-download-and-install-minima-on-your-mac"},"How to download and install Minima on your Mac"),(0,o.kt)("p",null,"If you have not run Minima before, please ensure you have the latest version of Java installed on the server ",(0,o.kt)("a",{parentName:"p",href:"https://java.com/en/"},"https://java.com/en/")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you have a previous version of Minima running, type ",(0,o.kt)("inlineCode",{parentName:"p"},"quit")," into the Command prompt window, then replace your existing minima.jar file with the latest version.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and save the latest Minima JAR ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima/raw/master/jar/minima.jar"},"here"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Command Prompt as Admin. When it opens, type the following (including a space after -jar):"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo java -jar\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"then drag and drop the minima.jar file into the command window, "),(0,o.kt)("li",{parentName:"ul"},"then add a space and type ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-rpcenable -mdsenable\n")),(0,o.kt)("p",null,"The command should look like the below (all on one line):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo java -jar /Users/YourName/minima.jar -rpcenable -mdsenable\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When starting a new node or to delete your existing node data ",(0,o.kt)("strong",{parentName:"p"},"-clean")," can be added on to the end. (Do not use ",(0,o.kt)("strong",{parentName:"p"},"-clean")," if you are simply restarting your node.)",(0,o.kt)("br",null),"\ne.g. sudo java -jar /Users/YourName/minima.jar -rpcenable -mdsenable -clean"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hit the ",(0,o.kt)("strong",{parentName:"p"},"Enter")," key")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Avoid"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Closing your Command Prompt window"),(0,o.kt)("li",{parentName:"ul"},"Allowing your PC to go to sleep"),(0,o.kt)("li",{parentName:"ul"},"Turning your PC off")),(0,o.kt)("p",null,"If any of the above happen, your Minima node will stop running and you will need to repeat step 3 to start it again."),(0,o.kt)("p",null,"Minima is now started, your output should look like the below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Users/YourName>java -jar minima.jar -rpcenable -mdsenable\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : *  __  __  ____  _  _  ____  __  __    __    *\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : * (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : *  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : * (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : *                                            *\nMinima @ 14/03/2022 17:32:30 [5.1 MB] : **********************************************\nMinima @ 14/03/2022 17:32:30 [6.4 MB] : Welcome to Minima v0.100.32 - for assistance type help. Then press enter.\nMinima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/userprefs.db\nMinima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/cascade.db\nMinima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/chaintree.db\nMinima @ 14/03/2022 17:32:31 [28.8 MB] : Load Object file does not exist : /Users/YourName/databases/p2p.db\nMinima @ 14/03/2022 17:32:32 [11.1 MB] : RPC Server started on port : 9002 \n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations - your node is now installed & running! ")),(0,o.kt)("h2",{id:"how-to-set-up-incentive-program-to-receive-rewards"},"How to set up Incentive Program to receive rewards"),(0,o.kt)("p",null,"After installing the app, if you have registered for the ",(0,o.kt)("a",{parentName:"p",href:"https://incentive.minima.global/account/register"},"Incentive Program"),", you must connect your Incentive ID to your node to receive daily Rewards."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to ",(0,o.kt)("a",{parentName:"li",href:"https://incentive.minima.global/"},"https://incentive.minima.global/"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Previous users")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you had an account prior to 6th December 2021, you must reset your password ",(0,o.kt)("a",{parentName:"p",href:"https://incentive.minima.global/account/forgot-password"},"here.")," Please check your junk mail for the reset password email."))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Connect your Incentive Program account to your node by copying YOUR OWN Incentive ID from the Incentive Program website above and typing ",(0,o.kt)("inlineCode",{parentName:"li"},"incentivecash uid:YourIncentiveID")," into the Terminal command line: ")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"incentivecash uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84\n")),(0,o.kt)("p",null,"You should receive a return status of ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and see your previous Rewards (if any) including missed Rewards (if any).\n",(0,o.kt)("strong",{parentName:"p"},"Your Incentive Program account is now connected to your node!")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your node will then ping us so we know it's running. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For every day your node pings us, we will add 1 Minima to your DAILY REWARDS. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To check your rewards, type ",(0,o.kt)("strong",{parentName:"p"},"incentivecash")," into the command line. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'incentivecash\n{\n  "command":"incentivecash",\n  "status":true,\n  "response":{\n    "uid":"731ae11b-b602-4dea-8564-7cb4edbe07b7",\n    "details":{\n      "lastPing":"2022-03-14T17:28:38.709Z",\n      "inviteCode":"BAEPAAD0",\n      "rewards":{\n        "dailyRewards":60,\n        "previousRewards":100.0,\n        "communityRewards":50.0,\n        "inviterRewards":10.0\n      }\n    }\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Rewards")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For every day your node is connected to the network, you will receive 1 Reward within the next 24 hours."))),(0,o.kt)("h2",{id:"useful-commands"},"Useful Commands"),(0,o.kt)("p",null,"The following commands can be typed directly into the Minima Terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"status : shows the status of Minima \nincentivecash : shows your incentive cash balance\nhelp : shows the full list of commands\n")),(0,o.kt)("p",null,"For a full list of Minima Terminal Commands see ",(0,o.kt)("a",{parentName:"p",href:"/docs/runanode/terminal_commands"},"Terminal Commands.")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Once your node running, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/runanode/usingminidapps"},"How to use MiniDapps")," to start testing!"),(0,o.kt)("p",null,"Thank you for participating and contributing to our Testnet."),(0,o.kt)("p",null,"Learn more:",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn/minidapps/minidappsintro"},"What are MiniDapps?")," ",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://minidapps.minima.global/"},"Download the latest MiniDapps")," ",(0,o.kt)("br",null)))}u.isMDXComponent=!0}}]);