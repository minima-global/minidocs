"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[2852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),h=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=h(n),p=o,d=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return n?r.createElement(d,s(s({ref:t},m),{},{components:n})):r.createElement(d,s({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var h=2;h<a;h++)s[h]=n[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},s="The Pulse Network",i={unversionedId:"learn/minimawhitepaper/thepulsenetwork",id:"learn/minimawhitepaper/thepulsenetwork",title:"The Pulse Network",description:"Both Minima and Maxima require users to perform a small amount of PoW when sending messages. The more messages, the more PoW. The more PoW, the more secure the network. But what if a user is not sending any messages? Can that user also help to secure the network? What if sending a message is time-critical, and there must be no delay before sending it \u2013 say a high-frequency trader? Maxima addresses both these concerns by repurposing existing technology, allowing users to do the work beforehand, and then present that work as proof when sending messages.",source:"@site/docs/learn/minimawhitepaper/thepulsenetwork.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/thepulsenetwork",permalink:"/docs/learn/minimawhitepaper/thepulsenetwork",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/thepulsenetwork.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Maxima",permalink:"/docs/learn/minimawhitepaper/maxima"},next:{title:"PoW vs Distributed PoW",permalink:"/docs/learn/minimawhitepaper/powvsdistributedpow"}},l={},h=[],m={toc:h},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-pulse-network"},"The Pulse Network"),(0,o.kt)("p",null,"Both Minima and Maxima require users to perform a small amount of PoW when sending messages. The more messages, the more PoW. The more PoW, the more secure the network. But what if a user is not sending any messages? Can that user also help to secure the network? What if sending a message is time-critical, and there must be no delay before sending it \u2013 say a high-frequency trader? Maxima addresses both these concerns by repurposing existing technology, allowing users to do the work beforehand, and then present that work as proof when sending messages."),(0,o.kt)("p",null,"Most network protocols have a PING message. This is a message network peers periodically send to check the health and status of their peers. Network nodes send a PING message and peers reply, to show they are functioning correctly. But in a crypto network like Minima far more information on the health and status of a node can be transmitted in a PING message. Add some PoW to a PING message, and you create a Pulse."),(0,o.kt)("p",null,"Every 10 minutes every Minima user creates a valid Tx-PoW message, with its current correct block details, but leaves the transaction blank. Performs 10 seconds of work. Then sends this message to each of its peers. If the message is not a valid Tx-PoW message, the peer is kicked off the network. If a peer does not send a Pulse message every 10 minutes, the peer is kicked off the network. If the Tx-PoW message is also a block, on average 1 Tx-PoW message every 50 seconds, that is then forwarded on to the rest of the network"),(0,o.kt)("p",null,"This has many benefits :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shares the peers\u2019 current mempool - the list of transactions it knows about not in the current longest chain. Any discrepancies can be resolved and missing transactions passed on. Peer data synchronisation."),(0,o.kt)("li",{parentName:"ul"},"Shows the peer is a functioning Minima node, has a working network connection, is a valid router for network messages and can help secure the network."),(0,o.kt)("li",{parentName:"ul"},"Adds to the overall PoW security of the network."),(0,o.kt)("li",{parentName:"ul"},"This is all off-chain. Only the immediate peers check the Pulse message and only a block is forwarded on to the rest of the network.")),(0,o.kt)("p",null,"As the requirements to send a Pulse message are so small, should a peer not be able to send a Pulse message, there must be something wrong, so there is no point wasting resources. When they fix themselves, they can come back online, and rejoin the network. Those thinking they will not pay the PoW, will just be kicked off the network."),(0,o.kt)("p",null,"Minima has a Pulse. No zombies allowed (nodes with no Pulse)."))}u.isMDXComponent=!0}}]);