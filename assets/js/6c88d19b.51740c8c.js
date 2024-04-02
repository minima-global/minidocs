"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8506],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},l="System requirements",u={unversionedId:"runanode/systemrequirements",id:"runanode/systemrequirements",title:"System requirements",description:"Minima is a lightweight blockchain that can be run on any Android device (version 9 or above), general purpose computer or server (VPS).",source:"@site/docs/runanode/systemrequirements.md",sourceDirName:"runanode",slug:"/runanode/systemrequirements",permalink:"/docs/runanode/systemrequirements",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/systemrequirements.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/runanode/quickstart"},next:{title:"Android",permalink:"/docs/runanode/selectplatform/android_v9_and_up"}},p={},c=[{value:"Minimum hardware requirement",id:"minimum-hardware-requirement",level:2},{value:"Standard full node",id:"standard-full-node",level:3},{value:"Archive node",id:"archive-node",level:3},{value:"Ports used",id:"ports-used",level:2},{value:"Recommended Firewall settings (VPS users)",id:"recommended-firewall-settings-vps-users",level:3},{value:"Ingress",id:"ingress",level:4}],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-requirements"},"System requirements"),(0,a.kt)("p",null,"Minima is a lightweight blockchain that can be run on any Android device (version 9 or above), general purpose computer or server (VPS)."),(0,a.kt)("p",null,"There is no minimum amount of Minima coins required to run a node."),(0,a.kt)("p",null,"The following information is for Server or Desktop users."),(0,a.kt)("h2",{id:"minimum-hardware-requirement"},"Minimum hardware requirement"),(0,a.kt)("h3",{id:"standard-full-node"},"Standard full node"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Processing:")," 2 CPU (4 if using Docker) ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Memory:")," 2GB RAM (4GB if using Docker) ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Storage:")," 2GB (4GB if using Docker)*"),(0,a.kt)("p",null,"*High MiniDapp usage may require higher availability of Storage"),(0,a.kt)("h3",{id:"archive-node"},"Archive node"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Processing:")," 2 CPU (4 CPU if using Docker) ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Memory:")," 4GB RAM ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Storage:")," 5GB*"),(0,a.kt)("p",null,"*This may change over time."),(0,a.kt)("p",null,"GPU is not necessary"),(0,a.kt)("h2",{id:"ports-used"},"Ports used"),(0,a.kt)("p",null,"By default, Minima reserves ports ",(0,a.kt)("strong",{parentName:"p"},"9001-9005"),", although an alternate 5-port range can be chosen by specifying a different main port on start up e.g. 8001."),(0,a.kt)("p",null,"If specifying a different main port e.g. 8001, the port range used will be the next consecutive 4 ports. e.g 8001-8005."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9001 TCP")," (main port): The main Minima port, for peer-to-peer communication over Minima and Maxima"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9002 TCP")," (or main port +1): Not currently used"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9003 TCP")," (or main port +2): MiniDapp System (MDS) Web Server"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9004 TCP")," (or main port +3): No longer used after v 1.0.37"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9005 TCP")," (or main port +4) : JSON-RPC over HTTP"),(0,a.kt)("p",null,"Desktop nodes are not required to configure any port forwarding to use Minima."),(0,a.kt)("h3",{id:"recommended-firewall-settings-vps-users"},"Recommended Firewall settings (VPS users)"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"docker users")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If using ",(0,a.kt)("strong",{parentName:"p"},"Docker")," to run your node on a VPS, you ",(0,a.kt)("strong",{parentName:"p"},"must not rely on UFW")," as your firewall, Docker will overwrite UFW firewall rules. You must use your VPS provider's firewall manager."))),(0,a.kt)("p",null,"After configuring your firewall, you should check they are enforced as expected. "),(0,a.kt)("h4",{id:"ingress"},"Ingress"),(0,a.kt)("p",null,"All inbound connections should be denied by default."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"22 tcp")," : allow all "),(0,a.kt)("p",null,"Allows ssh access to the server, optionally only allow this from your home IP address."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9001 tcp"),": allow all "),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Relay nodes")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Allowing inbound connections on port 9001 will ensure your node acts as a relay node. Relay nodes are the backbone of the Minima peer-to-peer network that faciliate the transmission of transactions and blocks across the network and support the network to scale.\nIf your inbound connection is closed, your node will only make outgoing connections and will not act as a relay node."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9003 tcp"),": allow only from your home IP address "),(0,a.kt)("p",null,"You may need to update this if your home IP is dynamic. Alternatively you can allow from anywhere but your login screen will be public facing, so your login password must be long and secure, using a combination of lowercase, uppercase letters numbers and symbols."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9002 tcp"),": deny all"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9004 tcp"),": deny all "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9005 tcp"),": deny all "),(0,a.kt)("p",null,"If you wish to enable RPC, ensure this is only allowed from your home IP address."))}d.isMDXComponent=!0}}]);