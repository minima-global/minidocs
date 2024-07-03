"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2},s="MiniDapp permissions",a={unversionedId:"userguides/usingyournode/dapppermissions",id:"userguides/usingyournode/dapppermissions",title:"MiniDapp permissions",description:"By default, all MiniDapps will be given READ permission. Any transactions or sensitive commands triggered from read apps must be approved from the Pending MiniDapp.",source:"@site/docs/userguides/usingyournode/dapppermissions.md",sourceDirName:"userguides/usingyournode",slug:"/userguides/usingyournode/dapppermissions",permalink:"/docs/userguides/usingyournode/dapppermissions",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/userguides/usingyournode/dapppermissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Check your node status",permalink:"/docs/userguides/usingyournode/nodestatus"},next:{title:"Approving transactions",permalink:"/docs/userguides/usingyournode/approvingtxns"}},p={},u=[],l={toc:u},c="wrapper";function d(e){let{components:n,...o}=e;return(0,i.kt)(c,(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minidapp-permissions"},"MiniDapp permissions"),(0,i.kt)("p",null,"By default, all MiniDapps will be given ",(0,i.kt)("strong",{parentName:"p"},"READ")," permission. Any transactions or sensitive commands triggered from read apps must be ",(0,i.kt)("a",{parentName:"p",href:"/docs/userguides/usingyournode/approvingtxns"},"approved")," from the Pending MiniDapp."),(0,i.kt)("p",null,"MiniDapps with ",(0,i.kt)("strong",{parentName:"p"},"WRITE")," permission can transact or run any command without asking for your approval. "),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Before giving a MiniDapp WRITE permissions, ensure your ",(0,i.kt)("a",{parentName:"p",href:"/docs/userguides/walletsecurity/lockingyourwallet"},"wallet is locked")," with a password.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"You should only give WRITE permission to MiniDapps that you trust."))),(0,i.kt)("p",null,"To change the permissions for a MiniDapp:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Right click on a MiniDapp (or long press on mobile)"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Write mode")," (or Read mode)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MDS",src:t(1355).Z+"#width40",width:"410",height:"234"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Confirm"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MDS",src:t(8905).Z+"#width40",width:"472",height:"417"})))}d.isMDXComponent=!0},1355:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mds_updateperms-190f33c393c537771a05920889e41ab6.png"},8905:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mds_writeaccess-7c4dac248f64da2a997a898dc8e48ca2.png"}}]);