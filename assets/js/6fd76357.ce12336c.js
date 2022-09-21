"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9991],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},a="Pruning",l={unversionedId:"buildonminima/txntutorial/pruning",id:"buildonminima/txntutorial/pruning",title:"Pruning",description:"To ensure all users on the Minima network can run a Complete node, both validating all transactions and helping in the construction of the chain, all users only keep track of coins and tokens that are relevant to them.",source:"@site/docs/buildonminima/txntutorial/pruning.md",sourceDirName:"buildonminima/txntutorial",slug:"/buildonminima/txntutorial/pruning",permalink:"/docs/buildonminima/txntutorial/pruning",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/pruning.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Transaction Basics",permalink:"/docs/buildonminima/txntutorial/txnbasics"},next:{title:"Basic signed contract",permalink:"/docs/buildonminima/txntutorial/layer1/basiccontract"}},s={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pruning"},"Pruning"),(0,r.kt)("p",null,"To ensure all users on the Minima network can run a Complete node, both validating all transactions and helping in the construction of the chain, all users only keep track of coins and tokens that are relevant to them. "),(0,r.kt)("p",null,"All the coin data is stored in an MMR database, a type of hash tree, and when a User wishes to spend a coin they add a proof of its existence to the transaction. This means when using multiple User coins in a single transaction each user may not have all the coin data required."),(0,r.kt)("p",null,"To assist in this Minima provides useful functions. ",(0,r.kt)("inlineCode",{parentName:"p"},"coinimport")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"coinexport")," allow a User to share coin proofs with other users ( this does not allow the spending of a coin - just the knowledge of its existence ), and ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens tokenid: action:export")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens tokenid: action:import data:")," allows the sharing of token data."),(0,r.kt)("p",null,"If the coin / token data is recent, in the last 24 hours, then each User will already have all the required data, so this will only apply for older coins."),(0,r.kt)("p",null,"Let's say you have a coin with coinid : ",(0,r.kt)("inlineCode",{parentName:"p"},"0x99ADECBF2579801921017F81F523D396AA2ED125BF8DE7244045F86C7F7B56E0"),"\n(Coin IDs can be found by running ",(0,r.kt)("inlineCode",{parentName:"p"},"coins relevant:true"),")"),(0,r.kt)("p",null,"To export this coin, so another node can import and now know about this coin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"coinexport coinid:0x99ADECBF2579801921017F81F523D396AA2ED125BF8DE7244045F86C7F7B56E0\n")),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," is the coin ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," required to be imported by another user."),(0,r.kt)("p",null,"Then the other node can import this proof by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"coinimport data:0x0000002099ADECBF2579801921017F81F523D396AA2ED125BF8DE7244045F86C7F7B56E000000020E5A95D8CDDA0A66A9EB5180479254B23FFBA427EF20603A83F66F95179D8257D00010A000000010001000100000000010A00000200D30001000000020130000100\n")),(0,r.kt)("p",null,"A similar set of functions can be run to export and then import token details:"),(0,r.kt)("p",null,"To export a token: ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens tokenid: action:export")),(0,r.kt)("p",null,"To import a token: ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens tokenid: action:import data:")))}u.isMDXComponent=!0}}]);