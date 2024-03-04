"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4169],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):N(N({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},i=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),i=d(n),u=r,g=i["".concat(p,".").concat(u)]||i[u]||k[u]||l;return n?a.createElement(g,N(N({ref:e},o),{},{components:n})):a.createElement(g,N({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,N=new Array(l);N[0]=i;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,N[1]=m;for(var d=2;d<l;d++)N[d]=n[d];return a.createElement.apply(null,N)}return a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},7142:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),N=["components"],m={sidebar_position:5},p="KISS VM",d={unversionedId:"buildonminima/contracts/kissvm",id:"buildonminima/contracts/kissvm",title:"KISS VM",description:"Here is a breakdown of the simple and complete KISSVM language.",source:"@site/docs/buildonminima/contracts/kissvm.md",sourceDirName:"buildonminima/contracts",slug:"/buildonminima/contracts/kissvm",permalink:"/docs/buildonminima/contracts/kissvm",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/contracts/kissvm.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Token/NFT scripts",permalink:"/docs/buildonminima/contracts/tokenscripts"},next:{title:"Start a Testnet",permalink:"/docs/buildonminima/txntutorial/start"}},o={},k=[{value:"Grammar",id:"grammar",level:2},{value:"Globals",id:"globals",level:2},{value:"Functions",id:"functions",level:2}],i={toc:k};function u(t){var e=t.components,n=(0,r.Z)(t,N);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kiss-vm"},"KISS VM"),(0,l.kt)("p",null,"Here is a breakdown of the simple and complete KISSVM language."),(0,l.kt)("h2",{id:"grammar"},"Grammar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Grammar"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ADDRESS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ADDRESS ( BLOCK )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"BLOCK"),(0,l.kt)("td",{parentName:"tr",align:"left"},"STATEMENT_1 STATEMENT_2 ... STATEMENT_n")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"STATEMENT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"LET VARIABLE = EXPRESSION ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," LET ( EXPRESSION_1 EXPRESSION_2 ... EXPRESSION_n ) = EXPRESSION ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," IF EXPRESSION THEN BLOCK ","[ELSEIF EXPRESSION THEN BLOCK]","* ","[ELSE BLOCK]"," ENDIF ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," WHILE EXPRESSION DO BLOCK ENDWHILE ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," EXEC EXPRESSION ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"MAST EXPRESSION ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"ASSERT EXPRESSION ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"RETURN EXPRESSION")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"EXPRESSION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"RELATION")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"RELATION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"LOGIC AND LOGIC  ",(0,l.kt)("strong",{parentName:"td"},"|"),"  LOGIC OR LOGIC  ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," LOGIC XOR LOGIC  ",(0,l.kt)("strong",{parentName:"td"},"|"),"  LOGIC NAND LOGIC ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," LOGIC NOR LOGIC  ",(0,l.kt)("strong",{parentName:"td"},"|")," LOGIC NXOR LOGIC ",(0,l.kt)("strong",{parentName:"td"},"|")," LOGIC",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"LOGIC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OPERATION EQ OPERATION  ",(0,l.kt)("strong",{parentName:"td"},"|")," OPERATION NEQ OPERATION  ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"OPERATION GT OPERATION  ",(0,l.kt)("strong",{parentName:"td"},"|")," OPERATION GTE OPERATION  ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"OPERATION LT OPERATION  ",(0,l.kt)("strong",{parentName:"td"},"|")," OPERATION LTE OPERATION  ",(0,l.kt)("strong",{parentName:"td"},"|")," OPERATION")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"OPERATION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ADDSUB & ADDSUB ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"ADDSUB ","|"," ADDSUB ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," ADDSUB ^ ADDSUB ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," ADDSUB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ADDSUB"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MULDIV + MULDIV ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," MULDIV - MULDIV ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," MULDIV % MULDIV ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," MULDIV ","<","<"," MULDIV ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," MULDIV >> MULDIV ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"MULDIV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MULDIV"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PRIME * PRIME ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," PRIME / PRIME ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"PRIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PRIME"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NOT PRIME ",(0,l.kt)("strong",{parentName:"td"},"|"),"  ",(0,l.kt)("br",null),"NEG PRIME ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," ~PRIME ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," BASEUNIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"BASEUNIT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"VARIABLE ",(0,l.kt)("strong",{parentName:"td"},"|")," VALUE ",(0,l.kt)("strong",{parentName:"td"},"|")," -NUMBER ",(0,l.kt)("strong",{parentName:"td"},"|")," GLOBAL ",(0,l.kt)("strong",{parentName:"td"},"|")," FUNCTION ",(0,l.kt)("strong",{parentName:"td"},"|")," ( EXPRESSION )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"VARIABLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[a-z]","+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"VALUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NUMBER ",(0,l.kt)("strong",{parentName:"td"},"|")," HEX ",(0,l.kt)("strong",{parentName:"td"},"|")," STRING ",(0,l.kt)("strong",{parentName:"td"},"|")," BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NUMBER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"^","[0-9]","+(","\\",".","[0-9]","+)?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"HEX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0x","[0-9a-fA-F]","+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[UTF8_String]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TRUE ",(0,l.kt)("strong",{parentName:"td"},"|")," FALSE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NOT FALSE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GLOBAL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"@BLOCK ",(0,l.kt)("strong",{parentName:"td"},"|")," @BLOCKMILLI ",(0,l.kt)("strong",{parentName:"td"},"|")," @CREATED ",(0,l.kt)("strong",{parentName:"td"},"|")," @COINAGE ",(0,l.kt)("strong",{parentName:"td"},"|")," @INPUT ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," @AMOUNT ",(0,l.kt)("strong",{parentName:"td"},"|")," @ADDRESS ",(0,l.kt)("strong",{parentName:"td"},"|")," @TOKENID ",(0,l.kt)("strong",{parentName:"td"},"|")," @COINID ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," @SCRIPT ",(0,l.kt)("strong",{parentName:"td"},"|")," @TOTIN ",(0,l.kt)("strong",{parentName:"td"},"|")," @TOTOUT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"FUNCTION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FUNC ( EXPRESSION_1 EXPRESSION_2 .. EXPRESSION_n )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"FUNC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CONCAT ",(0,l.kt)("strong",{parentName:"td"},"|")," LEN ",(0,l.kt)("strong",{parentName:"td"},"|")," REV ",(0,l.kt)("strong",{parentName:"td"},"|")," SUBSET ",(0,l.kt)("strong",{parentName:"td"},"|")," GET ",(0,l.kt)("strong",{parentName:"td"},"|")," EXISTS ",(0,l.kt)("strong",{parentName:"td"},"|")," OVERWRITE ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," REPLACE ",(0,l.kt)("strong",{parentName:"td"},"|")," SUBSTR ",(0,l.kt)("strong",{parentName:"td"},"|")," ADDRESS ",(0,l.kt)("strong",{parentName:"td"},"|")," SETLEN ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," BOOL ",(0,l.kt)("strong",{parentName:"td"},"|")," HEX ",(0,l.kt)("strong",{parentName:"td"},"|")," NUMBER ",(0,l.kt)("strong",{parentName:"td"},"|")," STRING ",(0,l.kt)("strong",{parentName:"td"},"|")," UTF8 ",(0,l.kt)("strong",{parentName:"td"},"|")," ASCII ",(0,l.kt)("strong",{parentName:"td"},"|"),"   ",(0,l.kt)("br",null)," ABS ",(0,l.kt)("strong",{parentName:"td"},"|")," CEIL ",(0,l.kt)("strong",{parentName:"td"},"|")," FLOOR ",(0,l.kt)("strong",{parentName:"td"},"|")," MIN ",(0,l.kt)("strong",{parentName:"td"},"|")," MAX ",(0,l.kt)("strong",{parentName:"td"},"|")," INC ",(0,l.kt)("strong",{parentName:"td"},"|")," DEC ",(0,l.kt)("strong",{parentName:"td"},"|")," SIGDIG ",(0,l.kt)("strong",{parentName:"td"},"|")," POW ",(0,l.kt)("strong",{parentName:"td"},"|")," SQRT ",(0,l.kt)("strong",{parentName:"td"},"|"),(0,l.kt)("br",null)," BITSET ",(0,l.kt)("strong",{parentName:"td"},"|")," BITGET ",(0,l.kt)("strong",{parentName:"td"},"|")," BITCOUNT ",(0,l.kt)("strong",{parentName:"td"},"|")," PROOF ",(0,l.kt)("strong",{parentName:"td"},"|")," SHA2 ",(0,l.kt)("strong",{parentName:"td"},"|")," SHA3 ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," SIGNEDBY ",(0,l.kt)("strong",{parentName:"td"},"|")," MULTISIG ",(0,l.kt)("strong",{parentName:"td"},"|")," CHECKSIG ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"  FUNCTION ",(0,l.kt)("strong",{parentName:"td"},"|")," SUMINPUT ",(0,l.kt)("strong",{parentName:"td"},"|")," SUMOUTPUT ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," GETOUTADDR ",(0,l.kt)("strong",{parentName:"td"},"|")," GETOUTAMT ",(0,l.kt)("strong",{parentName:"td"},"|")," GETOUTTOK ",(0,l.kt)("strong",{parentName:"td"},"|")," GETOUTKEEPSTATE ",(0,l.kt)("strong",{parentName:"td"},"|")," VERIFYOUT ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null),"  GETINADDR ",(0,l.kt)("strong",{parentName:"td"},"|")," GETINAMT ",(0,l.kt)("strong",{parentName:"td"},"|")," GETINTOK ",(0,l.kt)("strong",{parentName:"td"},"|")," GETINID ",(0,l.kt)("strong",{parentName:"td"},"|")," VERIFYIN ",(0,l.kt)("strong",{parentName:"td"},"|")," ",(0,l.kt)("br",null)," STATE ",(0,l.kt)("strong",{parentName:"td"},"|")," PREVSTATE ",(0,l.kt)("strong",{parentName:"td"},"|")," SAMESTATE")))),(0,l.kt)("h2",{id:"globals"},"Globals"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Global"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@BLOCK"),(0,l.kt)("td",{parentName:"tr",align:null},"the current block number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@BLOCKMILLI"),(0,l.kt)("td",{parentName:"tr",align:null},"the current block time in milliseconds since Jan 1 1970")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@CREATED"),(0,l.kt)("td",{parentName:"tr",align:null},"the block this coin was created in")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@COINAGE"),(0,l.kt)("td",{parentName:"tr",align:null},"the difference in @BLOCK and @CREATED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@INPUT"),(0,l.kt)("td",{parentName:"tr",align:null},"Input index of a coin used in the transaction. First input coin has an index of 0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@COINID"),(0,l.kt)("td",{parentName:"tr",align:null},"the coinid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@AMOUNT"),(0,l.kt)("td",{parentName:"tr",align:null},"the amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@ADDRESS"),(0,l.kt)("td",{parentName:"tr",align:null},"the address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@TOKENID"),(0,l.kt)("td",{parentName:"tr",align:null},"the tokenid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@SCRIPT"),(0,l.kt)("td",{parentName:"tr",align:null},"the script of this coin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@TOTIN"),(0,l.kt)("td",{parentName:"tr",align:null},"the total number of input coins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@TOTOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"the total number of output coins")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONCAT ( HEX_1 HEX_2 ... HEX_n )"),(0,l.kt)("td",{parentName:"tr",align:null},"Concatenate the HEX values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LEN ( HEX ","|"," SCRIPT )"),(0,l.kt)("td",{parentName:"tr",align:null},"Length of the data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REV ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Reverse the data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBSET ( HEX NUMBER NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the HEX subset of the data - start - length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OVERWRITE ( HEX NUMBER HEX NUMBER NUMBER)"),(0,l.kt)("td",{parentName:"tr",align:null},"Copy bytes from the first HEX and pos to the second HEX and pos, length the last NUMBER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET (NUMBER NUMBER .. NUMBER)"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the array value set with LET ( EXPRESSION EXPRESSION .. EXPRESSION )1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXISTS ( NUMBER NUMBER .. NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Does the array value exists")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADDRESS ( STRING )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the address of the script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPLACE ( STRING STRING STRING)"),(0,l.kt)("td",{parentName:"tr",align:null},"Replace in 1st string all occurrence of 2nd string with 3rd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBSTR ( NUMBER NUMBER STRING )"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the substring")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CLEAN ( STRING )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return a CLEAN version of the script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UTF8 ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert the HEX value to a UTF8 string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ASCII ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert the HEX value to an ASCII string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOL ( VALUE )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert to TRUE or FALSE value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEX ( SCRIPT )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert SCRIPT to HEX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert HEX to NUMBER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert a HEX value to SCRIPT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABS ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert SCRIPT to HEX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the absolute value of a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CEIL ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the number rounded up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOOR ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the number rounded down")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIN ( NUMBER NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the minimum value of the 2 numbers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAX ( NUMBER NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the maximum value of the 2 numbers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INC ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Increment a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEC ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Decrement a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POW ( NUMBER NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the power of N of a number. N must be a whole number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGDIG ( NUMBER NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the significant digits of the number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BITSET ( HEX NUMBER BOOLEAN )"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the value of the BIT at that Position to 0 or 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BITGET ( HEX NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the BOOLEAN value of the bit at the position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BITCOUNT ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Count the number of bits set in a HEX value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PROOF ( HEX HEX HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Check the data, mmr proof, and root match. Same as mmrproof on Minima.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KECCAK ( HEX ","|"," STRING )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the KECCAK value of the HEX value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHA2 ( HEX ","|"," STRING )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the SHA2 value of the HEX value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHA3 ( HEX ","|"," STRING )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the SHA3 value of the HEX value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGNEDBY ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the transaction is signed by this public key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MULTISIG ( NUMBER HEX1 HEX2 .. HEXn )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the transaction is signed by N of the public keys")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHECKSIG ( HEX HEX HEX)"),(0,l.kt)("td",{parentName:"tr",align:null},"Check public key, data and signature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETOUTADDR ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the HEX address of the specified output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETOUTAMT ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the amount of the specified output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETOUTTOK ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the token id of the specified output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETOUTKEEPSTATE ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Is the output keeping the state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VERIFYOUT ( NUMBER HEX NUMBER HEX BOOL )"),(0,l.kt)("td",{parentName:"tr",align:null},"Verify the output has the specified address, amount, tokenid and keepstate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETINADDR ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the HEX address of the specified input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETINAMT ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the amount of the specified input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GETINTOK ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the token id of the specified input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VERIFYIN ( NUMBER HEX NUMBER HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Verify the input has the specified address, amount and tokenid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATE ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the state value for the given number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PREVSTATE ( NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return the state value stored in the coin MMR data - when the coin was created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAMESTATE ( NUMBER NUMBER )"),(0,l.kt)("td",{parentName:"tr",align:null},"Return TRUE if the previous state and current state are the same for the start and end positions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUMINPUTS ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Sum the input values of this token type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUMOUTPUTS ( HEX )"),(0,l.kt)("td",{parentName:"tr",align:null},"Sum the output values of this token type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FUNCTION ( STRING VALUE1 VALUE2.. VALUEn )"),(0,l.kt)("td",{parentName:"tr",align:null},"Generic Function. Run the script after replacing $1, $2.. $n in the script with the provided parameters and use the variable 'returnvalue' as the returned result.")))))}u.isMDXComponent=!0}}]);