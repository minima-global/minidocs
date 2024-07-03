"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="MiniDapp Structure",p={unversionedId:"buildonminima/dapps/structure",id:"buildonminima/dapps/structure",title:"MiniDapp Structure",description:"MiniDapps are simple web apps created using basic web languages (HTML, CSS, JavaScript) that use the Minima API to interact with the blockchain.",source:"@site/docs/buildonminima/dapps/structure.md",sourceDirName:"buildonminima/dapps",slug:"/buildonminima/dapps/structure",permalink:"/docs/buildonminima/dapps/structure",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/dapps/structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/buildonminima/dapps/overview"},next:{title:"Config file",permalink:"/docs/buildonminima/dapps/configfile"}},s={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minidapp-structure"},"MiniDapp Structure"),(0,i.kt)("p",null,"MiniDapps are simple web apps created using basic web languages (HTML, CSS, JavaScript) that use the Minima API to interact with the blockchain. "),(0,i.kt)("p",null,"MiniDapps are zip files (.mds.zip) with the following basic structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dapp.conf")," : Configuration file "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"icon.png")," : icon for the MiniDapp"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"index.html")," : html web page "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mds.js")," : JavaScript library for a simple Minima API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"service.js")," : Optional JavaScript file for running a background service that handles Main messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"assets")," : folder containing assets used by the MiniDapp")),(0,i.kt)("p",null,"All items must be zipped together and use the ",(0,i.kt)("inlineCode",{parentName:"p"},".mds.zip")," extension. Once zipped, it becomes a MiniDapp that can be installed onto any Minima node."))}m.isMDXComponent=!0}}]);