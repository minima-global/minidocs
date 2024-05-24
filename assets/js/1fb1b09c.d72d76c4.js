"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3189],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:9},s="Coin Flip v2",c={unversionedId:"buildonminima/txntutorial/layer2/coinflipv2",id:"buildonminima/txntutorial/layer2/coinflipv2",title:"Coin Flip v2",description:"And now - how does this relate to our original slow clunky expensive coin flip game?",source:"@site/docs/buildonminima/txntutorial/layer2/coinflipv2.md",sourceDirName:"buildonminima/txntutorial/layer2",slug:"/buildonminima/txntutorial/layer2/coinflipv2",permalink:"/docs/buildonminima/txntutorial/layer2/coinflipv2",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer2/coinflipv2.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"State Chains",permalink:"/docs/buildonminima/txntutorial/layer2/statechains"},next:{title:"MiniDapp Contracts",permalink:"/docs/buildonminima/txntutorial/dappcontracts/"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coin-flip-v2"},"Coin Flip v2"),(0,o.kt)("p",null,"And now - how does this relate to our original slow clunky expensive coin flip game?"),(0,o.kt)("p",null,"Well - the CoinFlip game is just a sequence of rounds. Just like an ELTOO sequence. So we start an ELTOO channel with 1 Minima from each player - as normal. "),(0,o.kt)("p",null,"Then the settlement transaction of each update, pays out to the CoinFlip script, with the latest updated state variables.. It's really that simple. "),(0,o.kt)("p",null,"If at any stage either User stops cooperating or becomes unresponsive, no problem, the latest transactions are posted and the game continues on chain. With both parties knowing that this is the case, there is no reason not to finish the game off chain."),(0,o.kt)("p",null,"And so the Players can play Coin Flip instantly and for free, as many times as their channel will allow before either closing the game or rebalancing, to fight another day."),(0,o.kt)("p",null,"Coin Flip itself is not a very complicated nor a very interesting game.. but it shows the basics of a possible structure required for any round based game. "),(0,o.kt)("p",null,"This is also not limited to 2 individuals either - there is nothing to stop more participants entering the ELTOO contract. The maximum size of the transaction coupled with the signatures is the limiting factor here."),(0,o.kt)("p",null,"On one side you could be writing far more complex scripts that checked chess or poker dice, and on the other you could be writing House buying contract sequences that require different parties to sign at different times, with non-refundable deposits after a certain point etc etc.."),(0,o.kt)("p",null,"Most importantly is that you can play out different ELTOO 'scenarios' without always having to do an on-chain transaction to start or finish. "),(0,o.kt)("p",null,"Once you have an open channel you can run through any sequence as often as your channel amounts will allow - by always agreeing on the final state at the end, without the need for arbitration on Layer 1. "),(0,o.kt)("p",null,"Layer 1 arbitration should only happen when one party is forced due to technical issues to become unresponsive - otherwise there seems little point to not cooperating since the final outcome is the same."))}f.isMDXComponent=!0}}]);