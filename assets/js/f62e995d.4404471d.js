"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3625],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=n.createContext({}),s=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,A=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,p=d["".concat(A,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(p,a(a({ref:t},l),{},{components:r})):n.createElement(p,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var A in t)hasOwnProperty.call(t,A)&&(c[A]=t[A]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7263:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return A},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:1},A="Archive file exports",s={unversionedId:"userguides/managingarchive/archiveexports",id:"userguides/managingarchive/archiveexports",title:"Archive file exports",description:"If running an archive node, you can export your archive data to a file that can be used for recovering a node from the Security MiniDapp or using the reset command to either chain re-sync, import seed phrase or restore a backup with chain re-sync.",source:"@site/docs/userguides/managingarchive/archiveexports.md",sourceDirName:"userguides/managingarchive",slug:"/userguides/managingarchive/archiveexports",permalink:"/docs/userguides/managingarchive/archiveexports",editUrl:"https://github.com/minima-global/minidocs/docs/userguides/managingarchive/archiveexports.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Importing your seed phrase",permalink:"/docs/userguides/recovery/importseed"},next:{title:"Exporting to MySQL",permalink:"/docs/userguides/managingarchive/mysqlarchive"}},l={},u=[],d={toc:u};function m(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"archive-file-exports"},"Archive file exports"),(0,i.kt)("p",null,"If running an archive node, you can export your archive data to a file that can be used for recovering a node from the Security MiniDapp or using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/userguides/usingyournode/terminal_commands#backup"},"reset")," command to either chain re-sync, import seed phrase or restore a backup with chain re-sync."),(0,i.kt)("p",null,"To export your archive data to a file:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the Security MiniDapp")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"security",src:r(4436).Z+"#width10",width:"136",height:"173"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Archive reset")),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Archive export"),", then ",(0,i.kt)("strong",{parentName:"li"},"Export archive file")),(0,i.kt)("li",{parentName:"ol"},"Wait for the file to be generated")),(0,i.kt)("p",null,"Once the file generation is complete you can download it to share with others. You can also ",(0,i.kt)("strong",{parentName:"p"},"Browse internal archives")," to download, share or use."),(0,i.kt)("p",null,"Alternatively to export from the Terminal, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"archive action:export file:archiveexport-ddmmyy.raw.dat\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An archive node can only be used to re-sync users who created their nodes after your archive node was created. If you wish to be able to recover ",(0,i.kt)("em",{parentName:"p"},"any")," Minima user, you must perform a chain re-sync from an archive node that holds the entire blockchain since genesis."))))}m.isMDXComponent=!0},4436:function(e,t){t.Z="data:image/png;base64,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"}}]);