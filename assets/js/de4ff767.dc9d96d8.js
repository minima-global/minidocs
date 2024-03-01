"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[6435],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5791:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},s="Token/NFT scripts",u={unversionedId:"buildonminima/contracts/tokenscripts",id:"buildonminima/contracts/tokenscripts",title:"Token/NFT scripts",description:"Each custom token or NFT has a separate script that must also return TRUE when attempting to spend a UTxO.",source:"@site/docs/buildonminima/contracts/tokenscripts.md",sourceDirName:"buildonminima/contracts",slug:"/buildonminima/contracts/tokenscripts",permalink:"/docs/buildonminima/contracts/tokenscripts",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/contracts/tokenscripts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Scripting Basics",permalink:"/docs/buildonminima/contracts/scriptbasics"},next:{title:"KISS VM",permalink:"/docs/buildonminima/contracts/kissvm"}},p={},l=[],m={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokennft-scripts"},"Token/NFT scripts"),(0,i.kt)("p",null,"Each custom token or NFT has a separate script that must also return TRUE when attempting to spend a UTxO. "),(0,i.kt)("p",null,"Minima has a token address of ",(0,i.kt)("inlineCode",{parentName:"p"},"0x00")," and a token script of ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN TRUE"),"."),(0,i.kt)("p",null,"Custom tokens/NFTs by default have ",(0,i.kt)("strong",{parentName:"p"},"RETURN TRUE")," as their token script. "),(0,i.kt)("p",null,"This token structure is added to any transaction using that token so every user can check whether the token should be allowed to be spent."),(0,i.kt)("p",null,'For instance this could be a script for a "make sure 1% is sent to this address for a charity" token:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RETURN VERIFYOUT(@INPUT CHARITY_ADDRESS @AMOUNT*0.01 @TOKENID) \n")),(0,i.kt)("p",null,"or a counter mechanism that checks a counter has been incremented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RETURN STATE(99) EQ INC(PREVSTATE(99))\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Both the Token script and coin address script must return TRUE for the transaction to be valid.")))}d.isMDXComponent=!0}}]);