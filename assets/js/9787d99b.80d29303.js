"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8525],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return m}});var t=i(7294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=t.createContext({}),d=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(i),m=o,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return i?t.createElement(h,a(a({ref:n},u),{},{components:i})):t.createElement(h,a({ref:n},u))}));function m(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=i.length,a=new Array(l);a[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var d=2;d<l;d++)a[d]=i[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},5115:function(e,n,i){i.r(n),i.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return s}});var t=i(7462),o=i(3366),l=(i(7294),i(3905)),a=["components"],r={sidebar_position:5},p="Basic MiniDapp",d={unversionedId:"buildonminima/dapptutorials/basicminidapp",id:"buildonminima/dapptutorials/basicminidapp",title:"Basic MiniDapp",description:"In this section, we walk through how to create a very simple MiniDapp that does not interact with the Minima blockchain.",source:"@site/docs/buildonminima/dapptutorials/basicminidapp.md",sourceDirName:"buildonminima/dapptutorials",slug:"/buildonminima/dapptutorials/basicminidapp",permalink:"/docs/buildonminima/dapptutorials/basicminidapp",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapptutorials/basicminidapp.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"MiniDapp Hub",permalink:"/docs/buildonminima/dapptutorials/accesshub"},next:{title:"Interactive MiniDapp",permalink:"/docs/buildonminima/dapptutorials/interactiveminidapp"}},u={},s=[{value:"Config file",id:"config-file",level:2},{value:"Icon",id:"icon",level:2},{value:"Basic interface for your MiniDapp",id:"basic-interface-for-your-minidapp",level:2},{value:"Packaging your MiniDapp",id:"packaging-your-minidapp",level:2},{value:"Installing your MiniDapp",id:"installing-your-minidapp",level:2},{value:"Installing onto a mobile device",id:"installing-onto-a-mobile-device",level:3},{value:"Installing onto a desktop node",id:"installing-onto-a-desktop-node",level:3}],c={toc:s};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"basic-minidapp"},"Basic MiniDapp"),(0,l.kt)("p",null,"In this section, we walk through how to create a very simple MiniDapp that does not interact with the Minima blockchain. "),(0,l.kt)("p",null,"You will learn how to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the MiniDapp config file"),(0,l.kt)("li",{parentName:"ol"},"Give your MiniDapp an icon"),(0,l.kt)("li",{parentName:"ol"},"Create a basic interface for your MiniDapp"),(0,l.kt)("li",{parentName:"ol"},"Package your MiniDapp to load to your MiniDapp Hub"),(0,l.kt)("li",{parentName:"ol"},"Install your MiniDapp on your node on Minima")),(0,l.kt)("h2",{id:"config-file"},"Config file"),(0,l.kt)("p",null,"The first step is to create a folder that your MiniDapp will live in. Call it ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld"),"."),(0,l.kt)("p",null,"In your code editor, create a new file called ",(0,l.kt)("inlineCode",{parentName:"p"},"dapp.conf")," and save it into your helloworld folder. "),(0,l.kt)("p",null,"The dapp.conf file is the configuration file for your MiniDapp and is where we provide the MiniDapp metadata in JSON format which will be required by the MiniDapp Hub later. "),(0,l.kt)("p",null,"Following the HelloWorld example, your dapp.conf file should look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n"name":"Hello World",\n"icon" :"favicon.ico",\n"version" : "1.0",\n"description": "My Hello World MiniDapp",\n}\n')),(0,l.kt)("p",null,"Save it. That\u2019s your config file done! "),(0,l.kt)("h2",{id:"icon"},"Icon"),(0,l.kt)("p",null,"To include an icon for your MiniDapp, save an image as ",(0,l.kt)("inlineCode",{parentName:"p"},"favicon.ico")," and add it to your ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," folder with your ",(0,l.kt)("inlineCode",{parentName:"p"},"dapp.conf")," file."),(0,l.kt)("p",null,"Your folder should now contain 2 files"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"dapp.conf"),(0,l.kt)("li",{parentName:"ol"},"favicon.ico")),(0,l.kt)("p",null,"Your config file and icon used will determine what is visible when your MiniDapp is loaded into the MiniDapp Hub, as shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Accessing the MiniDapp Hub",src:i(7748).Z+"#width10",width:"114",height:"141"})),(0,l.kt)("h2",{id:"basic-interface-for-your-minidapp"},"Basic interface for your MiniDapp"),(0,l.kt)("p",null,"Next, we will create a simple webpage which will be the homepage of your MiniDapp. "),(0,l.kt)("p",null,"Create and open an ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file."),(0,l.kt)("p",null,"Copy and paste the following code, or alternatively, create your own basic html page. "),(0,l.kt)("p",null,"If you are comfortable with CSS styling you can also go ahead and create a .CSS file for your html file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<html>\n\n<head>\n    <link rel="icon" type="image/x-icon" href="favicon.ico">\n    <title>Hello World</title>\n</head>\n<body style="font-family:manrope;">\n    <h1>Hello World!</h1>\n\n    <p>This is my first MiniDapp!</p>\n\n    <h3>Welcome to complete decentralization</h3>\n    <p>     \n    Minima is a cooperative network that enables everyone to freely connect and prosper.<br></br>\n    Click <a href="https://minima.global">here</a> to go to the Minima website.\n    </p>\n\n    <h3>Next Steps</h3>\n    <p>\n        Next, you will learn how to create a MiniDapp that interacts with the Minima Blockchain.\n    </p>\n    </body>\n\n</html>\n')),(0,l.kt)("p",null,"Save it. "),(0,l.kt)("p",null,"Your folder should now contain 3 files. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"dapp.conf"),(0,l.kt)("li",{parentName:"ol"},"favicon.ico"),(0,l.kt)("li",{parentName:"ol"},"index.html")),(0,l.kt)("p",null,"If you also created a CSS file, add that to your ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," folder. "),(0,l.kt)("p",null,"Next, we will see how the MiniDapp looks when installed onto a Minima node."),(0,l.kt)("h2",{id:"packaging-your-minidapp"},"Packaging your MiniDapp"),(0,l.kt)("p",null,"We now have a complete helloworld folder containing: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"dapp.conf"),(0,l.kt)("li",{parentName:"ol"},"favicon.ico"),(0,l.kt)("li",{parentName:"ol"},"index.html"),(0,l.kt)("li",{parentName:"ol"},"styling.css (optional)")),(0,l.kt)("p",null,"Zip up the contents of this folder (not the folder itself) "),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Accessing the MiniDapp Hub",src:i(5454).Z,width:"833",height:"243"})),(0,l.kt)("p",null,"Name the folder as ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld.mds.zip")," or if you are using a zip library through your cli run ",(0,l.kt)("inlineCode",{parentName:"p"},"zip -r helloworld.mds.zip"),".   "),(0,l.kt)("h2",{id:"installing-your-minidapp"},"Installing your MiniDapp"),(0,l.kt)("p",null,"The final stage is to install the MiniDapp onto your node."),(0,l.kt)("h3",{id:"installing-onto-a-mobile-device"},"Installing onto a mobile device"),(0,l.kt)("p",null,"To install the MiniDapp on your phone:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Send the zip file to your mobile device (via email or other method)"),(0,l.kt)("li",{parentName:"ol"},"Download the MiniDapp zip file to your mobile device"),(0,l.kt)("li",{parentName:"ol"},"Open the Minima App"),(0,l.kt)("li",{parentName:"ol"},"From the Home page, click the + button"),(0,l.kt)("li",{parentName:"ol"},"Find the MiniDapp in your mobile\u2019s file explorer (most likely the Downloads folder) "),(0,l.kt)("li",{parentName:"ol"},"Select the MiniDapp, the MiniDapp will install on your node"),(0,l.kt)("li",{parentName:"ol"},"Click on your MiniDapp to open it")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations! You have created your first MiniDapp!")),(0,l.kt)("h3",{id:"installing-onto-a-desktop-node"},"Installing onto a desktop node"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Login to your MiniDapp Hub and click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," in the top right"),(0,l.kt)("li",{parentName:"ol"},"Select your ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld.mds.zip")," MiniDapp"),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Install"),", then return to the Hub")),(0,l.kt)("p",null,"Alternatively, to install from the command line:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the command ",(0,l.kt)("inlineCode",{parentName:"li"},"mds action:install file:helloworld.mds.zip")," from the Minima Command Line (including the path with the file if required.)")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mds action:install file:C:\\Users\\Downloads\\HelloWorld.mds.zip\nMinima @ 06/07/2022 12:49:44 [233.9 MB] : unzipping package into C:\\Users\\minima\\mds\\web\\0xCFAB5D98C98CED060F5FDD235CDA27AF\n{\n  "command":"mds",\n  "params":{\n    "action":"install",\n    "file":"C:\\\\Users\\\\Downloads\\\\HelloWorld.mds.zip"\n  },\n  "status":true,\n  "response":{\n    "installed":{\n      "uid":"0xCFAB5D98C98CED060F5FDD235CDA27AF",\n      "conf":{\n        "name":"Hello World",\n        "icon":"favicon.ico",\n        "version":"1.0",\n        "description":"My Hello World MiniDapp",\n        "browser":"internal"\n      }\n    }\n  }\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Login to your MiniDapp Hub (see ",(0,l.kt)("a",{parentName:"li",href:"/docs/buildonminima/dapptutorials/accesshub"},"accessing the MiniDapp Hub"),")"),(0,l.kt)("li",{parentName:"ol"},"Click on your MiniDapp to open it")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations! You have created your first MiniDapp!")))}m.isMDXComponent=!0},5454:function(e,n,i){n.Z=i.p+"assets/images/zipup-2bb5fe286ae07f4d45c27de52f06b0f5.png"},7748:function(e,n){n.Z="data:image/png;base64,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"}}]);