"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),A=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=A(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=A(n),c=a,d=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var A=2;A<o;A++)i[A]=n[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>A});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Quick start",s={unversionedId:"runanode/quickstart",id:"runanode/quickstart",title:"Quick start",description:"When you first run Minima the first thing you need is to add some connections.",source:"@site/docs/runanode/quickstart.md",sourceDirName:"runanode",slug:"/runanode/quickstart",permalink:"/docs/runanode/quickstart",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/runanode/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/docs/runanode/get_started"},next:{title:"System requirements",permalink:"/docs/runanode/systemrequirements"}},l={},A=[{value:"Command Line",id:"command-line",level:2},{value:"Android",id:"android",level:2},{value:"Desktop",id:"desktop",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Docker",id:"docker",level:2},{value:"Server",id:"server",level:2}],p={toc:A},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"When you first run Minima the first thing you need is to add some connections."),(0,a.kt)("p",null,"You can get this list by asking any user on the network. "),(0,a.kt)("p",null,"Alternatively, copy this link directly into the app when prompted to join the network (also in Settings > 'Add connections') "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://spartacusrex.com/minimapeers.txt"},"https://spartacusrex.com/minimapeers.txt"))),(0,a.kt)("h2",{id:"command-line"},"Command Line"),(0,a.kt)("p",null,"At it's core, Minima is a Java application."),(0,a.kt)("p",null,"So on a server or CLI the easiest way to run Minima is to install Java and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima/blob/master/jar/minima.jar"},"download the latest minima.jar"),"."),(0,a.kt)("p",null,"Then, from your command line, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -jar minima.jar\n")),(0,a.kt)("p",null,"If you are on an external server, open port ",(0,a.kt)("strong",{parentName:"p"},"9001")," on your machine - the default Minima port - to get the best connection to the network."),(0,a.kt)("p",null,"If you want to run this on a server that you log into via ssh, you can use ",(0,a.kt)("strong",{parentName:"p"},"tmux")," so that it continues to run once you log out."),(0,a.kt)("p",null,"For more information on startup params and the MDS checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima"},"Github README")," or see ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/manualnode"},"here"),"."),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("p",null,"The next simplest way is to install and run the Android app."),(0,a.kt)("p",null,"This is available on Google Playstore.. ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.minima.android"},"Minima")),(0,a.kt)("p",null,"If you cannot use the Google Playstore, you can download a signed APK from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima/tree/master/jar"},"Github"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.minima.android"},(0,a.kt)("img",{parentName:"a",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png#width20",alt:"GooglePlay"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima/tree/master/jar"},(0,a.kt)("img",{alt:"Github",src:n(8788).Z+"#gh-light-mode-only-width10",width:"240",height:"240"})),(0,a.kt)("a",{parentName:"p",href:"https://github.com/minima-global/Minima/tree/master/jar"},(0,a.kt)("img",{alt:"Github",src:n(9628).Z+"#gh-dark-mode-only-width10",width:"230",height:"225"}))),(0,a.kt)("p",null,"Detailed guidance on starting a node on Android can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/android_v9_and_up"},"here"),"."),(0,a.kt)("h2",{id:"desktop"},"Desktop"),(0,a.kt)("p",null,"For Desktop users Minima can be launched from a JNLP file.. The Java Network Launch Protocol."),(0,a.kt)("p",null,"First install ",(0,a.kt)("a",{parentName:"p",href:"https://openwebstart.com/download/"},"Open Web Start")," - the new updated version of Java Web Start."),(0,a.kt)("p",null,"Then download the Minima JNLP file from the Launch button below and open it, ensuring it opens with Open Web Start (right click > open with Open Web Start), this will install Minima as an application and update automagically when you start it in future."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.spartacusrex.com/javaws/minima.jnlp"},(0,a.kt)("img",{alt:"JNLP",src:n(7886).Z+"#width10",width:"88",height:"23"}))," "),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Further guidance can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/windows"},"here"),"."),(0,a.kt)("h3",{id:"mac"},"Mac"),(0,a.kt)("p",null,"Further guidance can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/mac"},"here"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"There is also a nice docker image that you can use if you have Docker installed. Set a secure password below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -e minima_mdspassword=INSERTYOURPASSWORD -e minima_desktop=true -v ~/minimadocker:/home/minima/data -p 9001-9003:9001-9003 --restart unless-stopped --name minima minimaglobal/minima:latest\n")),(0,a.kt)("p",null,"Then you log into your node via ",(0,a.kt)("a",{parentName:"p",href:"https://127.0.0.1:9003/"},"https://127.0.0.1:9003/")),(0,a.kt)("p",null,"Further guidance on starting a node in Docker desktop can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/dockerdesktop"},"here")," "),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("p",null,"You should only run a node on a server if you have experience setting up VPS instances and understand how to set up firewall rules."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/systemrequirements#recommended-firewall-settings-vps-users"},"recommended firewall rules")," before starting a node on a VPS."),(0,a.kt)("p",null,"Then choose whether to run a node using ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/linux_vps"},"Docker")," or a ",(0,a.kt)("a",{parentName:"p",href:"/docs/runanode/selectplatform/linuxvpsservice"},"Script"),"."))}m.isMDXComponent=!0},9628:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},8788:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},7886:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);