"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3599],{3905:(L,M,j)=>{j.d(M,{Zo:()=>s,kt:()=>I});var u=j(7294);function N(L,M,j){return M in L?Object.defineProperty(L,M,{value:j,enumerable:!0,configurable:!0,writable:!0}):L[M]=j,L}function S(L,M){var j=Object.keys(L);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(L);M&&(u=u.filter((function(M){return Object.getOwnPropertyDescriptor(L,M).enumerable}))),j.push.apply(j,u)}return j}function t(L){for(var M=1;M<arguments.length;M++){var j=null!=arguments[M]?arguments[M]:{};M%2?S(Object(j),!0).forEach((function(M){N(L,M,j[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(j)):S(Object(j)).forEach((function(M){Object.defineProperty(L,M,Object.getOwnPropertyDescriptor(j,M))}))}return L}function y(L,M){if(null==L)return{};var j,u,N=function(L,M){if(null==L)return{};var j,u,N={},S=Object.keys(L);for(u=0;u<S.length;u++)j=S[u],M.indexOf(j)>=0||(N[j]=L[j]);return N}(L,M);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(L);for(u=0;u<S.length;u++)j=S[u],M.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(L,j)&&(N[j]=L[j])}return N}var x=u.createContext({}),i=function(L){var M=u.useContext(x),j=M;return L&&(j="function"==typeof L?L(M):t(t({},M),L)),j},s=function(L){var M=i(L.components);return u.createElement(x.Provider,{value:M},L.children)},w="mdxType",C={inlineCode:"code",wrapper:function(L){var M=L.children;return u.createElement(u.Fragment,{},M)}},z=u.forwardRef((function(L,M){var j=L.components,N=L.mdxType,S=L.originalType,x=L.parentName,s=y(L,["components","mdxType","originalType","parentName"]),w=i(j),z=N,I=w["".concat(x,".").concat(z)]||w[z]||C[z]||S;return j?u.createElement(I,t(t({ref:M},s),{},{components:j})):u.createElement(I,t({ref:M},s))}));function I(L,M){var j=arguments,N=M&&M.mdxType;if("string"==typeof L||N){var S=j.length,t=new Array(S);t[0]=z;var y={};for(var x in M)hasOwnProperty.call(M,x)&&(y[x]=M[x]);y.originalType=L,y[w]="string"==typeof L?L:N,t[1]=y;for(var i=2;i<S;i++)t[i]=j[i];return u.createElement.apply(null,t)}return u.createElement.apply(null,j)}z.displayName="MDXCreateElement"},4704:(L,M,j)=>{j.r(M),j.d(M,{assets:()=>x,contentTitle:()=>t,default:()=>C,frontMatter:()=>S,metadata:()=>y,toc:()=>i});var u=j(7462),N=(j(7294),j(3905));const S={sidebar_position:4},t="Maxima Location Service",y={unversionedId:"learn/maxima/mls",id:"learn/maxima/mls",title:"Maxima Location Service",description:"Your Maxima Location Service (MLS) host is a randomly selected Minima node running on a server that ensures your Contacts always have your most recent contact address to reach you.",source:"@site/docs/learn/maxima/mls.md",sourceDirName:"learn/maxima",slug:"/learn/maxima/mls",permalink:"/docs/learn/maxima/mls",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/learn/maxima/mls.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/docs/learn/maxima/maximamessaging"},next:{title:"Maxima FAQ",permalink:"/docs/learn/maxima/maximafaq"}},x={},i=[{value:"Static MLS",id:"static-mls",level:2},{value:"Permanent Addresses",id:"permanent-addresses",level:2}],s={toc:i},w="wrapper";function C(L){let{components:M,...S}=L;return(0,N.kt)(w,(0,u.Z)({},s,S,{components:M,mdxType:"MDXLayout"}),(0,N.kt)("h1",{id:"maxima-location-service"},"Maxima Location Service"),(0,N.kt)("p",null,"Your Maxima Location Service (MLS) host is a randomly selected Minima node running on a server that ensures your Contacts always have your most recent contact address to reach you."),(0,N.kt)("p",null,"Your MLS ensures that, although your contact address expires periodically, you will remain connected to your contacts provided you connect to the network at least once in a 24-hour period. "),(0,N.kt)("p",null,(0,N.kt)("img",{alt:"MaximaContacts",src:j(1266).Z+"#gh-light-mode-only-width50",width:"300",height:"350"}),(0,N.kt)("img",{alt:"MaximaContacts",src:j(1998).Z+"#gh-dark-mode-only-width50",width:"300",height:"350"})),(0,N.kt)("p",null,(0,N.kt)("em",{parentName:"p"},"where C1, C2, C3 represent contacts")),(0,N.kt)("p",null,"When your contact address changes, your MLS host is informed and your online contacts are updated with your new address. "),(0,N.kt)("p",null,"For enhanced privacy, your node connects to a new MLS host every 12 hours. To ensure a smooth changeover, for 12 hours after moving to a new MLS host, your node remains connected with your previous MLS in case any of your contacts have been offline for longer than 12 hours. "),(0,N.kt)("p",null,"This ensures that if you remove a contact, they will not be able to re-add you after a maximum of 12 hours."),(0,N.kt)("h2",{id:"static-mls"},"Static MLS"),(0,N.kt)("p",null,"A static MLS is a dedicated, single server node that manages the connection to your contacts instead of relying on random nodes on the network. It can ensure a more stable connection with your contacts."),(0,N.kt)("p",null,"To learn how to set a static MLS, see ",(0,N.kt)("a",{parentName:"p",href:"/docs/userguides/usingmaxima/advancedoptions#setting-your-static-mls"},"setting your static MLS"),"."),(0,N.kt)("h2",{id:"permanent-addresses"},"Permanent Addresses"),(0,N.kt)("p",null,"Permanent addresses can be configured if a non-expiring contact address is required, allowing new users to add you or message you at any time without having to provide them with your latest contact address."),(0,N.kt)("p",null,"To enable a permanent address for your node, see ",(0,N.kt)("a",{parentName:"p",href:"/docs/userguides/usingmaxima/advancedoptions#setting-up-a-permanent-address"},"setting up a permanent address"),"."))}C.isMDXComponent=!0},1998:(L,M,j)=>{j.d(M,{Z:()=>u});const u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye3N0cm9rZTojOTE5MTlkO30uY2xzLTIsLmNscy0zLC5jbHMtNHtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0yLC5jbHMtMywuY2xzLTQsLmNscy01e2ZpbGw6bm9uZTt9LmNscy0zLC5jbHMtNXtzdHJva2U6I2ZmZjt9LmNscy00e3N0cm9rZTojZmY1MTJmO308L3N0eWxlPjwvZGVmcz48Zz48bGluZSBjbGFzcz0iY2xzLTUiIHgxPSIxNTAiIHkxPSI4OS4xNyIgeDI9IjE1MCIgeTI9IjEyNS45OSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNDcuODIgMTI0LjUxIDE1MCAxMzIuNjQgMTUyLjE4IDEyNC41MSAxNDcuODIgMTI0LjUxIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0Ni4zMSwzMDYuOThjLS45MiwwLTEuNzEtLjItMi4zNS0uNi0uNjUtLjQtMS4xNC0uOTctMS40OS0xLjY5LS4zNC0uNzItLjUyLTEuNTYtLjUyLTIuNTFzLjE3LTEuNzksLjUyLTIuNTFjLjM0LS43MiwuODQtMS4yOCwxLjQ5LTEuNjksLjY1LS40LDEuNDMtLjYsMi4zNS0uNiwxLjA2LDAsMS45NCwuMjcsMi42NCwuODEsLjcsLjU0LDEuMTgsMS4yNiwxLjQ2LDIuMTdsLTEuMzYsLjM3Yy0uMTgtLjY0LS41LTEuMTUtLjk2LTEuNTItLjQ2LS4zNy0xLjA1LS41NS0xLjc4LS41NS0uNjUsMC0xLjIsLjE1LTEuNjMsLjQ0cy0uNzYsLjcxLS45OCwxLjIzYy0uMjIsLjUzLS4zMywxLjE1LS4zMywxLjg1LDAsLjcsLjEsMS4zMiwuMzIsMS44NSwuMjIsLjUzLC41NSwuOTQsLjk5LDEuMjMsLjQ0LC4yOSwuOTgsLjQ0LDEuNjMsLjQ0LC43MywwLDEuMzItLjE4LDEuNzgtLjU1cy43OC0uODcsLjk2LTEuNTFsMS4zNiwuMzdjLS4yNywuOTEtLjc2LDEuNjMtMS40NiwyLjE3LS43LC41NC0xLjU4LC44MS0yLjY0LC44MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTEuNTYsMzA2Ljc4di0xLjE5czQuMDItMy42LDQuMDItMy42Yy4zMi0uMjksLjU0LS41NiwuNjYtLjgyLC4xMi0uMjYsLjE4LS41MiwuMTgtLjc4LDAtLjMzLS4wNy0uNjItLjIyLS44OS0uMTUtLjI2LS4zNS0uNDctLjYtLjYyLS4yNi0uMTUtLjU1LS4yMy0uODgtLjIzcy0uNjUsLjA4LS45MSwuMjRjLS4yNywuMTYtLjQ3LC4zNy0uNjIsLjY0cy0uMjIsLjU1LS4yMiwuODZoLTEuMzdjMC0uNiwuMTMtMS4xMiwuNDEtMS41NywuMjctLjQ1LC42NC0uOCwxLjEyLTEuMDYsLjQ3LS4yNSwxLjAyLS4zOCwxLjYzLS4zOHMxLjEsLjEzLDEuNTYsLjM5Yy40NiwuMjYsLjgyLC42MiwxLjA5LDEuMDgsLjI3LC40NiwuNCwuOTgsLjQsMS41NiwwLC40Mi0uMDYsLjc4LS4xNywxLjA4LS4xMSwuMjktLjI4LC41Ny0uNSwuODJzLS41LC41Mi0uODMsLjgybC0zLjEsMi43Ny0uMTUtLjM4aDQuNzR2MS4yN2gtNi4yM1oiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTUwLDM0My44N2MyMi45MywwLDQxLjUyLTE4LjU5LDQxLjUyLTQxLjUycy0xOC41OS00MS41Mi00MS41Mi00MS41Mi00MS41MiwxOC41OS00MS41Miw0MS41MiwxOC41OSw0MS41Miw0MS41Miw0MS41MloiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTAuNTIsMzA2Ljk4Yy0uOTIsMC0xLjcxLS4yLTIuMzUtLjYtLjY1LS40LTEuMTQtLjk3LTEuNDktMS42OS0uMzQtLjcyLS41Mi0xLjU2LS41Mi0yLjUxcy4xNy0xLjc5LC41Mi0yLjUxYy4zNC0uNzIsLjg0LTEuMjgsMS40OS0xLjY5LC42NS0uNCwxLjQzLS42LDIuMzUtLjYsMS4wNiwwLDEuOTQsLjI3LDIuNjQsLjgxLC43LC41NCwxLjE4LDEuMjYsMS40NiwyLjE3bC0xLjM2LC4zN2MtLjE4LS42NC0uNS0xLjE1LS45Ni0xLjUyLS40Ni0uMzctMS4wNS0uNTUtMS43OC0uNTUtLjY1LDAtMS4yLC4xNS0xLjYzLC40NHMtLjc2LC43MS0uOTgsMS4yM2MtLjIyLC41My0uMzMsMS4xNS0uMzMsMS44NSwwLC43LC4xLDEuMzIsLjMyLDEuODUsLjIyLC41MywuNTUsLjk0LC45OSwxLjIzLC40NCwuMjksLjk4LC40NCwxLjYzLC40NCwuNzMsMCwxLjMyLS4xOCwxLjc4LS41NXMuNzgtLjg3LC45Ni0xLjUxbDEuMzYsLjM3Yy0uMjcsLjkxLS43NiwxLjYzLTEuNDYsMi4xNy0uNywuNTQtMS41OCwuODEtMi42NCwuODFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjU4LjYsMzA2Ljk2Yy0uNDYsMC0uODktLjA5LTEuMjktLjI2LS40LS4xNy0uNzUtLjQyLTEuMDQtLjc0cy0uNS0uNy0uNjQtMS4xM2wxLjI5LS4zNmMuMTIsLjQsLjM0LC43LC42NSwuOTEsLjMxLC4yMSwuNjUsLjMxLDEuMDIsLjMxLC4zNCwwLC42My0uMDgsLjg5LS4yNCwuMjYtLjE1LC40Ni0uMzYsLjYtLjYyLC4xNS0uMjYsLjIyLS41NiwuMjItLjkxLDAtLjUxLS4xNi0uOTMtLjQ4LTEuMjctLjMyLS4zMy0uNzMtLjUtMS4yNC0uNS0uMTUsMC0uMjksLjAyLS40NSwuMDYtLjE1LC4wNC0uMjksLjEtLjQzLC4xN2wtLjYzLTEuMDYsMy4yNS0yLjg3LC4xNCwuMzhoLTQuNDh2LTEuMjdoNS41NHYxLjI3bC0yLjcsMi42di0uNDRjLjU3LDAsMS4wNywuMTMsMS41LC4zOSwuNDMsLjI2LC43NiwuNjEsLjk5LDEuMDUsLjIzLC40NCwuMzUsLjk0LC4zNSwxLjQ4LDAsLjU5LS4xNCwxLjExLS40MSwxLjU3LS4yOCwuNDYtLjY0LC44Mi0xLjExLDEuMDhzLS45OCwuMzktMS41NiwuMzlaIi8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTI1NC4xMSwzNDMuODdjMjIuOTMsMCw0MS41Mi0xOC41OSw0MS41Mi00MS41MnMtMTguNTktNDEuNTItNDEuNTItNDEuNTItNDEuNTIsMTguNTktNDEuNTIsNDEuNTIsMTguNTksNDEuNTIsNDEuNTIsNDEuNTJaIi8+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDMuMjUsMzA2Ljk4Yy0uOTIsMC0xLjcxLS4yLTIuMzUtLjYtLjY1LS40LTEuMTQtLjk3LTEuNDktMS42OS0uMzQtLjcyLS41Mi0xLjU2LS41Mi0yLjUxcy4xNy0xLjc5LC41Mi0yLjUxYy4zNC0uNzIsLjg0LTEuMjgsMS40OS0xLjY5LC42NS0uNCwxLjQzLS42LDIuMzUtLjYsMS4wNiwwLDEuOTQsLjI3LDIuNjQsLjgxLC43LC41NCwxLjE4LDEuMjYsMS40NiwyLjE3bC0xLjM2LC4zN2MtLjE4LS42NC0uNS0xLjE1LS45Ni0xLjUyLS40Ni0uMzctMS4wNS0uNTUtMS43OC0uNTUtLjY1LDAtMS4yLC4xNS0xLjYzLC40NHMtLjc2LC43MS0uOTgsMS4yM2MtLjIyLC41My0uMzMsMS4xNS0uMzMsMS44NSwwLC43LC4xLDEuMzIsLjMyLDEuODUsLjIyLC41MywuNTUsLjk0LC45OSwxLjIzLC40NCwuMjksLjk4LC40NCwxLjYzLC40NCwuNzMsMCwxLjMyLS4xOCwxLjc4LS41NXMuNzgtLjg3LC45Ni0xLjUxbDEuMzYsLjM3Yy0uMjcsLjkxLS43NiwxLjYzLTEuNDYsMi4xNy0uNywuNTQtMS41OCwuODEtMi42NCwuODFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuMzYsMzA2Ljc5di03Ljc0bC0xLjczLDEuMDZ2LTEuNDlsMS43My0xLjA0aDEuMzZ2OS4yMmgtMS4zNloiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNDUuODksMzQzLjg3YzIyLjkzLDAsNDEuNTItMTguNTksNDEuNTItNDEuNTJzLTE4LjU5LTQxLjUyLTQxLjUyLTQxLjUyLTQxLjUyLDE4LjU5LTQxLjUyLDQxLjUyLDE4LjU5LDQxLjUyLDQxLjUyLDQxLjUyWiIvPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyNS4zMiwxNzkuNjF2LTMuODFsLTMuMTItNS40MWgxLjU2bDIuMjMsMy44NywyLjIzLTMuODdoMS41NmwtMy4xMiw1LjQxdjMuODFoLTEuMzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMyLjY4LDE3OS44Yy0uNjksMC0xLjI5LS4xNi0xLjgtLjQ3LS41MS0uMzEtLjktLjc0LTEuMTctMS4yOXMtLjQxLTEuMTgtLjQxLTEuOSwuMTQtMS4zNiwuNDItMS45Yy4yOC0uNTUsLjY4LS45NywxLjE4LTEuMjgsLjUxLS4zMSwxLjEtLjQ2LDEuNzgtLjQ2czEuMjksLjE2LDEuOCwuNDdjLjUxLC4zMSwuOSwuNzQsMS4xOCwxLjI5LC4yOCwuNTUsLjQyLDEuMTgsLjQyLDEuODlzLS4xNCwxLjM2LS40MiwxLjljLS4yOCwuNTUtLjY3LC45OC0xLjE4LDEuMjktLjUxLC4zMS0xLjExLC40Ni0xLjc5LC40NlptMC0xLjI2Yy42NiwwLDEuMTYtLjIyLDEuNDgtLjY3cy40OS0xLjAyLC40OS0xLjcyLS4xNy0xLjMtLjUtMS43M2MtLjMzLS40My0uODItLjY1LTEuNDgtLjY1LS40NSwwLS44MiwuMS0xLjExLC4zLS4yOSwuMi0uNTEsLjQ4LS42NSwuODQtLjE0LC4zNi0uMjEsLjc3LS4yMSwxLjI0LDAsLjczLC4xNywxLjMxLC41LDEuNzQsLjMzLC40NCwuODIsLjY1LDEuNDcsLjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0MC4wOCwxNzkuNzljLS40OCwwLS44OC0uMDgtMS4yLS4yMy0uMzItLjE1LS41OS0uMzYtLjc5LS42cy0uMzYtLjUyLS40Ni0uODJjLS4xMS0uMjktLjE4LS41OC0uMjItLjg2LS4wNC0uMjgtLjA2LS41My0uMDYtLjc0di0zLjg0aDEuMzZ2My40YzAsLjI3LC4wMiwuNTQsLjA3LC44M3MuMTMsLjU1LC4yNiwuNzljLjEzLC4yNCwuMywuNDQsLjUzLC41OXMuNTMsLjIyLC44OSwuMjJjLjI0LDAsLjQ3LS4wNCwuNjgtLjEyLC4yMS0uMDgsLjQtLjIxLC41Ni0uMzhzLjI5LS40MSwuMzgtLjY5Yy4wOS0uMjksLjE0LS42MywuMTQtMS4wNGwuODMsLjMxYzAsLjYzLS4xMiwxLjE4LS4zNSwxLjY2LS4yNCwuNDgtLjU3LC44NS0xLjAxLDEuMTJzLS45NywuNC0xLjU5LC40Wm0yLjI5LS4xOXYtMmgtLjE2di00LjkyaDEuMzV2Ni45MWgtMS4xOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDUuMzUsMTc5LjYxdi02LjkxaDEuMTl2MS42OGwtLjE3LS4yMmMuMDgtLjIyLC4yLS40MywuMzMtLjYxcy4yOS0uMzQsLjQ3LS40NmMuMTgtLjEzLC4zNy0uMjMsLjU5LS4zLC4yMi0uMDcsLjQ0LS4xMSwuNjYtLjEzcy40NCwwLC42NSwuMDR2MS4yNWMtLjIzLS4wNi0uNDgtLjA4LS43NS0uMDUtLjI3LC4wMy0uNTMsLjExLS43NiwuMjYtLjIyLC4xNC0uMzksLjMxLS41MiwuNTEtLjEzLC4yLS4yMiwuNDItLjI3LC42N3MtLjA4LC41LS4wOCwuNzh2My40OWgtMS4zNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTIuODYsMTc5LjYxdi05LjIyaDEuMjFsMy4zNCw2LjkzLDMuMzItNi45M2gxLjIydjkuMjFoLTEuMjd2LTYuM2wtMi45OCw2LjMxaC0uNjFsLTIuOTgtNi4zMXY2LjMxaC0xLjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2My44NywxNzkuNjF2LTkuMjJoMS4zNHY3Ljk2aDQuMTd2MS4yNmgtNS41MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNzMuODEsMTc5LjhjLS42NiwwLTEuMjYtLjExLTEuNzktLjM0LS41My0uMjMtLjk3LS41NS0xLjMxLS45OC0uMzQtLjQyLS41Ny0uOTMtLjY3LTEuNTFsMS40LS4yMWMuMTQsLjU2LC40NCwxLC44OCwxLjMyLC40NSwuMzEsLjk3LC40NywxLjU3LC40NywuMzcsMCwuNzEtLjA2LDEuMDItLjE4LC4zMS0uMTIsLjU2LS4yOSwuNzUtLjUxcy4yOC0uNDgsLjI4LS43OWMwLS4xNy0uMDMtLjMxLS4wOS0uNDQtLjA2LS4xMy0uMTQtLjI0LS4yNC0uMzQtLjEtLjEtLjIyLS4xOC0uMzctLjI1LS4xNC0uMDctLjMtLjEzLS40Ny0uMThsLTIuMzYtLjdjLS4yMy0uMDctLjQ3LS4xNi0uNy0uMjdzLS40Ni0uMjUtLjY2LS40M2MtLjItLjE4LS4zNi0uNC0uNDgtLjY2LS4xMi0uMjYtLjE5LS41OC0uMTktLjk2LDAtLjU3LC4xNS0xLjA1LC40NC0xLjQ0LC4yOS0uMzksLjY5LS42OSwxLjE5LS45LC41LS4yLDEuMDYtLjMsMS42OC0uMywuNjIsMCwxLjE4LC4xMiwxLjY3LC4zMywuNDksLjIxLC45LC41MiwxLjIzLC45MiwuMzMsLjQsLjU1LC44OCwuNjgsMS40NWwtMS40MywuMjRjLS4wNi0uMzUtLjItLjY0LS40MS0uODktLjIxLS4yNS0uNDctLjQ0LS43Ny0uNThzLS42My0uMi0uOTktLjIxYy0uMzQsMC0uNjUsLjA0LS45NCwuMTVzLS41MSwuMjctLjY4LC40N2MtLjE3LC4yLS4yNSwuNDMtLjI1LC42OXMuMDcsLjQ2LC4yMiwuNjIsLjMzLC4yOCwuNTUsLjM3Yy4yMiwuMDksLjQ0LC4xNywuNjYsLjIzbDEuNywuNDhjLjIxLC4wNiwuNDUsLjE0LC43MywuMjQsLjI3LC4xLC41MywuMjQsLjc5LC40MiwuMjUsLjE4LC40NiwuNDIsLjYzLC43MXMuMjUsLjY3LC4yNSwxLjEyLS4wOSwuODctLjI4LDEuMjNjLS4xOSwuMzUtLjQ0LC42NS0uNzcsLjg4LS4zMywuMjQtLjcsLjQxLTEuMTMsLjUzcy0uODgsLjE4LTEuMzUsLjE4WiIvPjwvZz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjEwOC40OCIgeT0iMTMzLjQ4IiB3aWR0aD0iODMuMDQiIGhlaWdodD0iODMuMDQiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDIsNTIuMDh2LTMuODFsLTMuMTItNS40MWgxLjU2bDIuMjMsMy44NywyLjIzLTMuODdoMS41NmwtMy4xMiw1LjQxdjMuODFoLTEuMzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQ5LjM2LDUyLjI3Yy0uNjksMC0xLjI5LS4xNi0xLjgtLjQ3LS41MS0uMzEtLjktLjc0LTEuMTctMS4yOXMtLjQxLTEuMTgtLjQxLTEuOSwuMTQtMS4zNiwuNDItMS45Yy4yOC0uNTUsLjY4LS45NywxLjE4LTEuMjgsLjUxLS4zMSwxLjEtLjQ2LDEuNzgtLjQ2czEuMjksLjE2LDEuOCwuNDdjLjUxLC4zMSwuOSwuNzQsMS4xOCwxLjI5LC4yOCwuNTUsLjQyLDEuMTgsLjQyLDEuODlzLS4xNCwxLjM2LS40MiwxLjljLS4yOCwuNTUtLjY3LC45OC0xLjE4LDEuMjktLjUxLC4zMS0xLjExLC40Ni0xLjc5LC40NlptMC0xLjI2Yy42NiwwLDEuMTYtLjIyLDEuNDgtLjY3cy40OS0xLjAyLC40OS0xLjcyLS4xNy0xLjMtLjUtMS43M2MtLjMzLS40My0uODItLjY1LTEuNDgtLjY1LS40NSwwLS44MiwuMS0xLjExLC4zLS4yOSwuMi0uNTEsLjQ4LS42NSwuODQtLjE0LC4zNi0uMjEsLjc3LS4yMSwxLjI0LDAsLjczLC4xNywxLjMxLC41LDEuNzQsLjMzLC40NCwuODIsLjY1LDEuNDcsLjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1Ni43Niw1Mi4yNmMtLjQ4LDAtLjg4LS4wOC0xLjItLjIzLS4zMi0uMTUtLjU5LS4zNi0uNzktLjZzLS4zNi0uNTItLjQ2LS44MmMtLjExLS4yOS0uMTgtLjU4LS4yMi0uODYtLjA0LS4yOC0uMDYtLjUzLS4wNi0uNzR2LTMuODRoMS4zNnYzLjRjMCwuMjcsLjAyLC41NCwuMDcsLjgzcy4xMywuNTUsLjI2LC43OWMuMTMsLjI0LC4zLC40NCwuNTMsLjU5cy41MywuMjIsLjg5LC4yMmMuMjQsMCwuNDctLjA0LC42OC0uMTIsLjIxLS4wOCwuNC0uMjEsLjU2LS4zOHMuMjktLjQxLC4zOC0uNjljLjA5LS4yOSwuMTQtLjYzLC4xNC0xLjA0bC44MywuMzFjMCwuNjMtLjEyLDEuMTgtLjM1LDEuNjYtLjI0LC40OC0uNTcsLjg1LTEuMDEsMS4xMnMtLjk3LC40LTEuNTksLjRabTIuMjktLjE5di0yaC0uMTZ2LTQuOTJoMS4zNXY2LjkxaC0xLjE5WiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNTAsODkuMTdjMjIuOTMsMCw0MS41Mi0xOC41OSw0MS41Mi00MS41MlMxNzIuOTMsNi4xMywxNTAsNi4xM3MtNDEuNTIsMTguNTktNDEuNTIsNDEuNTIsMTguNTksNDEuNTIsNDEuNTIsNDEuNTJaIi8+PGc+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTUwIiB5MT0iMjIzLjY2IiB4Mj0iMTUwIiB5Mj0iMjUzLjU0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE0Ny44MiAyMjUuMTQgMTUwIDIxNy4wMSAxNTIuMTggMjI1LjE0IDE0Ny44MiAyMjUuMTQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTQ3LjgyIDI1Mi4wNSAxNTAgMjYwLjE4IDE1Mi4xOCAyNTIuMDUgMTQ3LjgyIDI1Mi4wNSIvPjwvZz48Zz48bGluZSBjbGFzcz0iY2xzLTUiIHgxPSIxMTEuMDkiIHkxPSIyMjEuNDciIHgyPSI1My41NCIgeTI9IjI1Ni40MSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMDguNjggMjIwLjM4IDExNi43NiAyMTguMDIgMTEwLjk1IDIyNC4xIDEwOC42OCAyMjAuMzgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNTMuNjggMjUzLjc3IDQ3Ljg2IDI1OS44NSA1NS45NCAyNTcuNSA1My42OCAyNTMuNzciLz48L2c+PGc+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTg4LjkxIiB5MT0iMjIxLjQ3IiB4Mj0iMjQ2LjQ2IiB5Mj0iMjU2LjQxIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE4OS4wNSAyMjQuMSAxODMuMjMgMjE4LjAyIDE5MS4zMiAyMjAuMzggMTg5LjA1IDIyNC4xIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjI0NC4wNiAyNTcuNSAyNTIuMTQgMjU5Ljg2IDI0Ni4zMiAyNTMuNzcgMjQ0LjA2IDI1Ny41Ii8+PC9nPjwvc3ZnPg=="},1266:(L,M,j)=>{j.d(M,{Z:()=>u});const u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzBkMGUxMDt9LmNscy0yLC5jbHMtMywuY2xzLTR7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtMiwuY2xzLTMsLmNscy00LC5jbHMtNXtmaWxsOm5vbmU7fS5jbHMtMiwuY2xzLTV7c3Ryb2tlOiMwZDBlMTA7fS5jbHMtM3tzdHJva2U6IzkxOTE5ZDt9LmNscy00e3N0cm9rZTojZmY1MTJmO308L3N0eWxlPjwvZGVmcz48Zz48bGluZSBjbGFzcz0iY2xzLTUiIHgxPSIxNTAiIHkxPSI4OS4xNyIgeDI9IjE1MCIgeTI9IjEyNS45OSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNDcuODIgMTI0LjUxIDE1MCAxMzIuNjQgMTUyLjE4IDEyNC41MSAxNDcuODIgMTI0LjUxIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0Ni4zMSwzMDYuOThjLS45MiwwLTEuNzEtLjItMi4zNS0uNi0uNjUtLjQtMS4xNC0uOTctMS40OS0xLjY5LS4zNC0uNzItLjUyLTEuNTYtLjUyLTIuNTFzLjE3LTEuNzksLjUyLTIuNTFjLjM0LS43MiwuODQtMS4yOCwxLjQ5LTEuNjksLjY1LS40LDEuNDMtLjYsMi4zNS0uNiwxLjA2LDAsMS45NCwuMjcsMi42NCwuODEsLjcsLjU0LDEuMTgsMS4yNiwxLjQ2LDIuMTdsLTEuMzYsLjM3Yy0uMTgtLjY0LS41LTEuMTUtLjk2LTEuNTItLjQ2LS4zNy0xLjA1LS41NS0xLjc4LS41NS0uNjUsMC0xLjIsLjE1LTEuNjMsLjQ0cy0uNzYsLjcxLS45OCwxLjIzYy0uMjIsLjUzLS4zMywxLjE1LS4zMywxLjg1LDAsLjcsLjEsMS4zMiwuMzIsMS44NSwuMjIsLjUzLC41NSwuOTQsLjk5LDEuMjMsLjQ0LC4yOSwuOTgsLjQ0LDEuNjMsLjQ0LC43MywwLDEuMzItLjE4LDEuNzgtLjU1cy43OC0uODcsLjk2LTEuNTFsMS4zNiwuMzdjLS4yNywuOTEtLjc2LDEuNjMtMS40NiwyLjE3LS43LC41NC0xLjU4LC44MS0yLjY0LC44MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTEuNTYsMzA2Ljc4di0xLjE5czQuMDItMy42LDQuMDItMy42Yy4zMi0uMjksLjU0LS41NiwuNjYtLjgyLC4xMi0uMjYsLjE4LS41MiwuMTgtLjc4LDAtLjMzLS4wNy0uNjItLjIyLS44OS0uMTUtLjI2LS4zNS0uNDctLjYtLjYyLS4yNi0uMTUtLjU1LS4yMy0uODgtLjIzcy0uNjUsLjA4LS45MSwuMjRjLS4yNywuMTYtLjQ3LC4zNy0uNjIsLjY0cy0uMjIsLjU1LS4yMiwuODZoLTEuMzdjMC0uNiwuMTMtMS4xMiwuNDEtMS41NywuMjctLjQ1LC42NC0uOCwxLjEyLTEuMDYsLjQ3LS4yNSwxLjAyLS4zOCwxLjYzLS4zOHMxLjEsLjEzLDEuNTYsLjM5Yy40NiwuMjYsLjgyLC42MiwxLjA5LDEuMDgsLjI3LC40NiwuNCwuOTgsLjQsMS41NiwwLC40Mi0uMDYsLjc4LS4xNywxLjA4LS4xMSwuMjktLjI4LC41Ny0uNSwuODJzLS41LC41Mi0uODMsLjgybC0zLjEsMi43Ny0uMTUtLjM4aDQuNzR2MS4yN2gtNi4yM1oiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTUwLDM0My44N2MyMi45MywwLDQxLjUyLTE4LjU5LDQxLjUyLTQxLjUycy0xOC41OS00MS41Mi00MS41Mi00MS41Mi00MS41MiwxOC41OS00MS41Miw0MS41MiwxOC41OSw0MS41Miw0MS41Miw0MS41MloiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTAuNTIsMzA2Ljk4Yy0uOTIsMC0xLjcxLS4yLTIuMzUtLjYtLjY1LS40LTEuMTQtLjk3LTEuNDktMS42OS0uMzQtLjcyLS41Mi0xLjU2LS41Mi0yLjUxcy4xNy0xLjc5LC41Mi0yLjUxYy4zNC0uNzIsLjg0LTEuMjgsMS40OS0xLjY5LC42NS0uNCwxLjQzLS42LDIuMzUtLjYsMS4wNiwwLDEuOTQsLjI3LDIuNjQsLjgxLC43LC41NCwxLjE4LDEuMjYsMS40NiwyLjE3bC0xLjM2LC4zN2MtLjE4LS42NC0uNS0xLjE1LS45Ni0xLjUyLS40Ni0uMzctMS4wNS0uNTUtMS43OC0uNTUtLjY1LDAtMS4yLC4xNS0xLjYzLC40NHMtLjc2LC43MS0uOTgsMS4yM2MtLjIyLC41My0uMzMsMS4xNS0uMzMsMS44NSwwLC43LC4xLDEuMzIsLjMyLDEuODUsLjIyLC41MywuNTUsLjk0LC45OSwxLjIzLC40NCwuMjksLjk4LC40NCwxLjYzLC40NCwuNzMsMCwxLjMyLS4xOCwxLjc4LS41NXMuNzgtLjg3LC45Ni0xLjUxbDEuMzYsLjM3Yy0uMjcsLjkxLS43NiwxLjYzLTEuNDYsMi4xNy0uNywuNTQtMS41OCwuODEtMi42NCwuODFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjU4LjYsMzA2Ljk2Yy0uNDYsMC0uODktLjA5LTEuMjktLjI2LS40LS4xNy0uNzUtLjQyLTEuMDQtLjc0cy0uNS0uNy0uNjQtMS4xM2wxLjI5LS4zNmMuMTIsLjQsLjM0LC43LC42NSwuOTEsLjMxLC4yMSwuNjUsLjMxLDEuMDIsLjMxLC4zNCwwLC42My0uMDgsLjg5LS4yNCwuMjYtLjE1LC40Ni0uMzYsLjYtLjYyLC4xNS0uMjYsLjIyLS41NiwuMjItLjkxLDAtLjUxLS4xNi0uOTMtLjQ4LTEuMjctLjMyLS4zMy0uNzMtLjUtMS4yNC0uNS0uMTUsMC0uMjksLjAyLS40NSwuMDYtLjE1LC4wNC0uMjksLjEtLjQzLC4xN2wtLjYzLTEuMDYsMy4yNS0yLjg3LC4xNCwuMzhoLTQuNDh2LTEuMjdoNS41NHYxLjI3bC0yLjcsMi42di0uNDRjLjU3LDAsMS4wNywuMTMsMS41LC4zOSwuNDMsLjI2LC43NiwuNjEsLjk5LDEuMDUsLjIzLC40NCwuMzUsLjk0LC4zNSwxLjQ4LDAsLjU5LS4xNCwxLjExLS40MSwxLjU3LS4yOCwuNDYtLjY0LC44Mi0xLjExLDEuMDhzLS45OCwuMzktMS41NiwuMzlaIi8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTI1NC4xMSwzNDMuODdjMjIuOTMsMCw0MS41Mi0xOC41OSw0MS41Mi00MS41MnMtMTguNTktNDEuNTItNDEuNTItNDEuNTItNDEuNTIsMTguNTktNDEuNTIsNDEuNTIsMTguNTksNDEuNTIsNDEuNTIsNDEuNTJaIi8+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDMuMjUsMzA2Ljk4Yy0uOTIsMC0xLjcxLS4yLTIuMzUtLjYtLjY1LS40LTEuMTQtLjk3LTEuNDktMS42OS0uMzQtLjcyLS41Mi0xLjU2LS41Mi0yLjUxcy4xNy0xLjc5LC41Mi0yLjUxYy4zNC0uNzIsLjg0LTEuMjgsMS40OS0xLjY5LC42NS0uNCwxLjQzLS42LDIuMzUtLjYsMS4wNiwwLDEuOTQsLjI3LDIuNjQsLjgxLC43LC41NCwxLjE4LDEuMjYsMS40NiwyLjE3bC0xLjM2LC4zN2MtLjE4LS42NC0uNS0xLjE1LS45Ni0xLjUyLS40Ni0uMzctMS4wNS0uNTUtMS43OC0uNTUtLjY1LDAtMS4yLC4xNS0xLjYzLC40NHMtLjc2LC43MS0uOTgsMS4yM2MtLjIyLC41My0uMzMsMS4xNS0uMzMsMS44NSwwLC43LC4xLDEuMzIsLjMyLDEuODUsLjIyLC41MywuNTUsLjk0LC45OSwxLjIzLC40NCwuMjksLjk4LC40NCwxLjYzLC40NCwuNzMsMCwxLjMyLS4xOCwxLjc4LS41NXMuNzgtLjg3LC45Ni0xLjUxbDEuMzYsLjM3Yy0uMjcsLjkxLS43NiwxLjYzLTEuNDYsMi4xNy0uNywuNTQtMS41OCwuODEtMi42NCwuODFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuMzYsMzA2Ljc5di03Ljc0bC0xLjczLDEuMDZ2LTEuNDlsMS43My0xLjA0aDEuMzZ2OS4yMmgtMS4zNloiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNDUuODksMzQzLjg3YzIyLjkzLDAsNDEuNTItMTguNTksNDEuNTItNDEuNTJzLTE4LjU5LTQxLjUyLTQxLjUyLTQxLjUyLTQxLjUyLDE4LjU5LTQxLjUyLDQxLjUyLDE4LjU5LDQxLjUyLDQxLjUyLDQxLjUyWiIvPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyNS4zMiwxNzkuNjF2LTMuODFsLTMuMTItNS40MWgxLjU2bDIuMjMsMy44NywyLjIzLTMuODdoMS41NmwtMy4xMiw1LjQxdjMuODFoLTEuMzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMyLjY4LDE3OS44Yy0uNjksMC0xLjI5LS4xNi0xLjgtLjQ3LS41MS0uMzEtLjktLjc0LTEuMTctMS4yOXMtLjQxLTEuMTgtLjQxLTEuOSwuMTQtMS4zNiwuNDItMS45Yy4yOC0uNTUsLjY4LS45NywxLjE4LTEuMjgsLjUxLS4zMSwxLjEtLjQ2LDEuNzgtLjQ2czEuMjksLjE2LDEuOCwuNDdjLjUxLC4zMSwuOSwuNzQsMS4xOCwxLjI5LC4yOCwuNTUsLjQyLDEuMTgsLjQyLDEuODlzLS4xNCwxLjM2LS40MiwxLjljLS4yOCwuNTUtLjY3LC45OC0xLjE4LDEuMjktLjUxLC4zMS0xLjExLC40Ni0xLjc5LC40NlptMC0xLjI2Yy42NiwwLDEuMTYtLjIyLDEuNDgtLjY3cy40OS0xLjAyLC40OS0xLjcyLS4xNy0xLjMtLjUtMS43M2MtLjMzLS40My0uODItLjY1LTEuNDgtLjY1LS40NSwwLS44MiwuMS0xLjExLC4zLS4yOSwuMi0uNTEsLjQ4LS42NSwuODQtLjE0LC4zNi0uMjEsLjc3LS4yMSwxLjI0LDAsLjczLC4xNywxLjMxLC41LDEuNzQsLjMzLC40NCwuODIsLjY1LDEuNDcsLjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0MC4wOCwxNzkuNzljLS40OCwwLS44OC0uMDgtMS4yLS4yMy0uMzItLjE1LS41OS0uMzYtLjc5LS42cy0uMzYtLjUyLS40Ni0uODJjLS4xMS0uMjktLjE4LS41OC0uMjItLjg2LS4wNC0uMjgtLjA2LS41My0uMDYtLjc0di0zLjg0aDEuMzZ2My40YzAsLjI3LC4wMiwuNTQsLjA3LC44M3MuMTMsLjU1LC4yNiwuNzljLjEzLC4yNCwuMywuNDQsLjUzLC41OXMuNTMsLjIyLC44OSwuMjJjLjI0LDAsLjQ3LS4wNCwuNjgtLjEyLC4yMS0uMDgsLjQtLjIxLC41Ni0uMzhzLjI5LS40MSwuMzgtLjY5Yy4wOS0uMjksLjE0LS42MywuMTQtMS4wNGwuODMsLjMxYzAsLjYzLS4xMiwxLjE4LS4zNSwxLjY2LS4yNCwuNDgtLjU3LC44NS0xLjAxLDEuMTJzLS45NywuNC0xLjU5LC40Wm0yLjI5LS4xOXYtMmgtLjE2di00LjkyaDEuMzV2Ni45MWgtMS4xOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDUuMzUsMTc5LjYxdi02LjkxaDEuMTl2MS42OGwtLjE3LS4yMmMuMDgtLjIyLC4yLS40MywuMzMtLjYxcy4yOS0uMzQsLjQ3LS40NmMuMTgtLjEzLC4zNy0uMjMsLjU5LS4zLC4yMi0uMDcsLjQ0LS4xMSwuNjYtLjEzcy40NCwwLC42NSwuMDR2MS4yNWMtLjIzLS4wNi0uNDgtLjA4LS43NS0uMDUtLjI3LC4wMy0uNTMsLjExLS43NiwuMjYtLjIyLC4xNC0uMzksLjMxLS41MiwuNTEtLjEzLC4yLS4yMiwuNDItLjI3LC42N3MtLjA4LC41LS4wOCwuNzh2My40OWgtMS4zNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTIuODYsMTc5LjYxdi05LjIyaDEuMjFsMy4zNCw2LjkzLDMuMzItNi45M2gxLjIydjkuMjFoLTEuMjd2LTYuM2wtMi45OCw2LjMxaC0uNjFsLTIuOTgtNi4zMXY2LjMxaC0xLjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2My44NywxNzkuNjF2LTkuMjJoMS4zNHY3Ljk2aDQuMTd2MS4yNmgtNS41MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNzMuODEsMTc5LjhjLS42NiwwLTEuMjYtLjExLTEuNzktLjM0LS41My0uMjMtLjk3LS41NS0xLjMxLS45OC0uMzQtLjQyLS41Ny0uOTMtLjY3LTEuNTFsMS40LS4yMWMuMTQsLjU2LC40NCwxLC44OCwxLjMyLC40NSwuMzEsLjk3LC40NywxLjU3LC40NywuMzcsMCwuNzEtLjA2LDEuMDItLjE4LC4zMS0uMTIsLjU2LS4yOSwuNzUtLjUxcy4yOC0uNDgsLjI4LS43OWMwLS4xNy0uMDMtLjMxLS4wOS0uNDQtLjA2LS4xMy0uMTQtLjI0LS4yNC0uMzQtLjEtLjEtLjIyLS4xOC0uMzctLjI1LS4xNC0uMDctLjMtLjEzLS40Ny0uMThsLTIuMzYtLjdjLS4yMy0uMDctLjQ3LS4xNi0uNy0uMjdzLS40Ni0uMjUtLjY2LS40M2MtLjItLjE4LS4zNi0uNC0uNDgtLjY2LS4xMi0uMjYtLjE5LS41OC0uMTktLjk2LDAtLjU3LC4xNS0xLjA1LC40NC0xLjQ0LC4yOS0uMzksLjY5LS42OSwxLjE5LS45LC41LS4yLDEuMDYtLjMsMS42OC0uMywuNjIsMCwxLjE4LC4xMiwxLjY3LC4zMywuNDksLjIxLC45LC41MiwxLjIzLC45MiwuMzMsLjQsLjU1LC44OCwuNjgsMS40NWwtMS40MywuMjRjLS4wNi0uMzUtLjItLjY0LS40MS0uODktLjIxLS4yNS0uNDctLjQ0LS43Ny0uNThzLS42My0uMi0uOTktLjIxYy0uMzQsMC0uNjUsLjA0LS45NCwuMTVzLS41MSwuMjctLjY4LC40N2MtLjE3LC4yLS4yNSwuNDMtLjI1LC42OXMuMDcsLjQ2LC4yMiwuNjIsLjMzLC4yOCwuNTUsLjM3Yy4yMiwuMDksLjQ0LC4xNywuNjYsLjIzbDEuNywuNDhjLjIxLC4wNiwuNDUsLjE0LC43MywuMjQsLjI3LC4xLC41MywuMjQsLjc5LC40MiwuMjUsLjE4LC40NiwuNDIsLjYzLC43MXMuMjUsLjY3LC4yNSwxLjEyLS4wOSwuODctLjI4LDEuMjNjLS4xOSwuMzUtLjQ0LC42NS0uNzcsLjg4LS4zMywuMjQtLjcsLjQxLTEuMTMsLjUzcy0uODgsLjE4LTEuMzUsLjE4WiIvPjwvZz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjEwOC40OCIgeT0iMTMzLjQ4IiB3aWR0aD0iODMuMDQiIGhlaWdodD0iODMuMDQiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDIsNTIuMDh2LTMuODFsLTMuMTItNS40MWgxLjU2bDIuMjMsMy44NywyLjIzLTMuODdoMS41NmwtMy4xMiw1LjQxdjMuODFoLTEuMzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQ5LjM2LDUyLjI3Yy0uNjksMC0xLjI5LS4xNi0xLjgtLjQ3LS41MS0uMzEtLjktLjc0LTEuMTctMS4yOXMtLjQxLTEuMTgtLjQxLTEuOSwuMTQtMS4zNiwuNDItMS45Yy4yOC0uNTUsLjY4LS45NywxLjE4LTEuMjgsLjUxLS4zMSwxLjEtLjQ2LDEuNzgtLjQ2czEuMjksLjE2LDEuOCwuNDdjLjUxLC4zMSwuOSwuNzQsMS4xOCwxLjI5LC4yOCwuNTUsLjQyLDEuMTgsLjQyLDEuODlzLS4xNCwxLjM2LS40MiwxLjljLS4yOCwuNTUtLjY3LC45OC0xLjE4LDEuMjktLjUxLC4zMS0xLjExLC40Ni0xLjc5LC40NlptMC0xLjI2Yy42NiwwLDEuMTYtLjIyLDEuNDgtLjY3cy40OS0xLjAyLC40OS0xLjcyLS4xNy0xLjMtLjUtMS43M2MtLjMzLS40My0uODItLjY1LTEuNDgtLjY1LS40NSwwLS44MiwuMS0xLjExLC4zLS4yOSwuMi0uNTEsLjQ4LS42NSwuODQtLjE0LC4zNi0uMjEsLjc3LS4yMSwxLjI0LDAsLjczLC4xNywxLjMxLC41LDEuNzQsLjMzLC40NCwuODIsLjY1LDEuNDcsLjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1Ni43Niw1Mi4yNmMtLjQ4LDAtLjg4LS4wOC0xLjItLjIzLS4zMi0uMTUtLjU5LS4zNi0uNzktLjZzLS4zNi0uNTItLjQ2LS44MmMtLjExLS4yOS0uMTgtLjU4LS4yMi0uODYtLjA0LS4yOC0uMDYtLjUzLS4wNi0uNzR2LTMuODRoMS4zNnYzLjRjMCwuMjcsLjAyLC41NCwuMDcsLjgzcy4xMywuNTUsLjI2LC43OWMuMTMsLjI0LC4zLC40NCwuNTMsLjU5cy41MywuMjIsLjg5LC4yMmMuMjQsMCwuNDctLjA0LC42OC0uMTIsLjIxLS4wOCwuNC0uMjEsLjU2LS4zOHMuMjktLjQxLC4zOC0uNjljLjA5LS4yOSwuMTQtLjYzLC4xNC0xLjA0bC44MywuMzFjMCwuNjMtLjEyLDEuMTgtLjM1LDEuNjYtLjI0LC40OC0uNTcsLjg1LTEuMDEsMS4xMnMtLjk3LC40LTEuNTksLjRabTIuMjktLjE5di0yaC0uMTZ2LTQuOTJoMS4zNXY2LjkxaC0xLjE5WiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNTAsODkuMTdjMjIuOTMsMCw0MS41Mi0xOC41OSw0MS41Mi00MS41MlMxNzIuOTMsNi4xMywxNTAsNi4xM3MtNDEuNTIsMTguNTktNDEuNTIsNDEuNTIsMTguNTksNDEuNTIsNDEuNTIsNDEuNTJaIi8+PGc+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTUwIiB5MT0iMjIzLjY2IiB4Mj0iMTUwIiB5Mj0iMjUzLjU0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE0Ny44MiAyMjUuMTQgMTUwIDIxNy4wMSAxNTIuMTggMjI1LjE0IDE0Ny44MiAyMjUuMTQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTQ3LjgyIDI1Mi4wNSAxNTAgMjYwLjE4IDE1Mi4xOCAyNTIuMDUgMTQ3LjgyIDI1Mi4wNSIvPjwvZz48Zz48bGluZSBjbGFzcz0iY2xzLTUiIHgxPSIxMTEuMDkiIHkxPSIyMjEuNDciIHgyPSI1My41NCIgeTI9IjI1Ni40MSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMDguNjggMjIwLjM4IDExNi43NiAyMTguMDIgMTEwLjk1IDIyNC4xIDEwOC42OCAyMjAuMzgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNTMuNjggMjUzLjc3IDQ3Ljg2IDI1OS44NSA1NS45NCAyNTcuNSA1My42OCAyNTMuNzciLz48L2c+PGc+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTg4LjkxIiB5MT0iMjIxLjQ3IiB4Mj0iMjQ2LjQ2IiB5Mj0iMjU2LjQxIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE4OS4wNSAyMjQuMSAxODMuMjMgMjE4LjAyIDE5MS4zMiAyMjAuMzggMTg5LjA1IDIyNC4xIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjI0NC4wNiAyNTcuNSAyNTIuMTQgMjU5Ljg2IDI0Ni4zMiAyNTMuNzcgMjQ0LjA2IDI1Ny41Ii8+PC9nPjwvc3ZnPg=="}}]);