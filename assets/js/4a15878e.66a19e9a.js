"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3087],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),k=l,d=p["".concat(s,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={sidebar_position:5},s="The Blockchain",c={unversionedId:"learn/minima/theblockchain",id:"learn/minima/theblockchain",title:"The Blockchain",description:"Overview",source:"@site/docs/learn/minima/theblockchain.md",sourceDirName:"learn/minima",slug:"/learn/minima/theblockchain",permalink:"/docs/learn/minima/theblockchain",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/theblockchain.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TxPoW Units & Blocks",permalink:"/docs/learn/minima/txpowunits"},next:{title:"Mining and Consensus",permalink:"/docs/learn/minima/miningconsensus"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"TxPoW Tree Node",id:"txpow-tree-node",level:2},{value:"TxPoW Tree",id:"txpow-tree",level:2},{value:"The Cascading Chain",id:"the-cascading-chain",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Super levels, growth &amp; weight",id:"super-levels-growth--weight",level:3},{value:"How super blocks are connected",id:"how-super-blocks-are-connected",level:3},{value:"Updating the cascade",id:"updating-the-cascade",level:3}],p={toc:u};function k(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-blockchain"},"The Blockchain"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Minima blockchain is structured to be compact and \u2018lightweight\u2019, it is therefore heavily pruned to meet this requirement. The chain itself is a TxPoW Tree containing TxBlocks."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"TxPoW Tree")," is the main blockchain consisting of the most recent TxBlocks."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Cascading chain")," is an unbroken chain of the headers of so called \u2018Super Blocks\u2019, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis and the root of the TxPoW Tree always remains connected to the tip of the Cascading chain."),(0,i.kt)("p",null,"Diagram: Cascading Chain + TxPoW tree (Blockchain)\n",(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(7531).Z+"#gh-light-mode-only",width:"1237",height:"683"}),(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(5064).Z+"#gh-dark-mode-only",width:"1237",height:"683"})),(0,i.kt)("h2",{id:"txpow-tree-node"},"TxPoW Tree Node"),(0,i.kt)("p",null,"If a TxPoW unit becomes a block (TxBlock), it will be added to the blockchain and become a node in the TxPoW tree. The TxPoW Tree Node provides the structure required to hold the TxBlock in the tree. "),(0,i.kt)("details",null,(0,i.kt)("summary",null," ",(0,i.kt)("strong",null," TxPoW tree node attributes ")," "),(0,i.kt)("p",null,"Every TxPoW Tree Node has the following attributes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TxBlock:")," A syncblock representing this node"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MMR Set:")," The MMR (with blocktime, entry number, and entries) can be constructed from the TxBlock"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Coins:")," Array of all The Coins - both spent and unspent"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RelevantMMRCoins:")," Array of MMR entry numbers for the Coins that are relevant to THIS USER ")),(0,i.kt)("h2",{id:"txpow-tree"},"TxPoW Tree"),(0,i.kt)("p",null,"The TxPoW tree is the main blockchain and has a ",(0,i.kt)("strong",{parentName:"p"},"root")," - the start of the chain, ",(0,i.kt)("strong",{parentName:"p"},"tip")," - end of the chain, ",(0,i.kt)("strong",{parentName:"p"},"blocks")," (tree nodes) and ",(0,i.kt)("strong",{parentName:"p"},"length")," (number of blocks).",(0,i.kt)("br",null),"\nThe root of the TxPoW tree meets the tip of the Cascade."),(0,i.kt)("p",null,"Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on."),(0,i.kt)("h2",{id:"the-cascading-chain"},"The Cascading Chain"),(0,i.kt)("p",null,"The Cascading Chain is a component of the Minima Protocol designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. "),(0,i.kt)("p",null,"By identifying multiple levels of difficulty over and above the required block difficulty, so-called \u2018Super Blocks\u2019 emerge which, by chance, provide orders of magnitude more PoW to the network than the typical (Level 0) block. The Cascading Chain uses \u2018Levels\u2019 to store these Super Blocks as a representation of the Proof-of-Work input into the network, allowing for heavy pruning of Level 0 blocks, without losing any PoW."),(0,i.kt)("p",null,"The Cascading Chain provides an objective proof of the current \u2018heaviest\u2019, and hence valid, chain."),(0,i.kt)("p",null,"Proof-of-Work is provided, in the form of electric energy, by all users running the Minima Protocol through the process of hashing. A users device must perform a, pre-determined, minimum amount of hashing each time a user:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mines their transaction before forwarding to peers"),(0,i.kt)("li",{parentName:"ol"},"Mines a \u2018Pulse\u2019 TxPoW before forwarding to peers")),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Cascading Chain consists of 32 levels (0-31), with a maximum of 128 blocks at each level."),(0,i.kt)("li",{parentName:"ol"},"The Cascading Chain grows logarithmically, as each level is twice as difficult to achieve as the previous level."),(0,i.kt)("li",{parentName:"ol"},"Over time, the cumulative sum of the PoW (the \u2018weight\u2019) recorded in the Cascading Chain will tend towards the weight of the chain that would have existed had no blocks been pruned."),(0,i.kt)("li",{parentName:"ol"},"The Cascading Chain is unbroken. Each block in the Cascade references its previous super parent block in the Cascade."),(0,i.kt)("li",{parentName:"ol"},"At 100 block intervals, the heaviest chain (consisting of all levels in the Cascade and the heaviest branch) is processed and the Cascading Chain is updated. ")),(0,i.kt)("details",null,(0,i.kt)("summary",null," ",(0,i.kt)("strong",null," Terminology ")," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Block Difficulty Target:")," A system set parameter influencing the average number of hashes required for the network to mine a block every 50 seconds (or as close to). The higher the difficulty, the more PoW (energy) required to mine a block."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cascade Levels:")," The Cascading Chain consists of 32 levels, where each level consists of blocks which, by chance, exceeded the block difficulty target of the previous level by a factor of 2.\ne.g. A block in level 3 of the Cascading Chain achieved twice the difficulty of a block in level 2."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Cascade:")," The chronological, unbroken chain of blocks consisting of a maximum of 128 blocks at each level. The block at the root of the Cascade (after Genesis) will be the block which satisfies both 1) the earliest timestamp and 2) the highest (most difficult) level.\nThe Cascade does not include the TxPoW tree and has no branches."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Super Block:")," Any block which achieves the difficulty required to take a position on the Cascade."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current level:")," The level representing how deep in the Cascading Chain a particular Super Block is currently positioned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Super Level:")," Also the Maximum Level. The level representing the furthest depth a Super Block could reach on the Cascade (determined at random by the difficulty level achieved during the process of mining the TxPoW unit)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Base Weight:")," A block\u2019s base weight is equal to its difficulty value. This is the average number of hashes that would be required to meet this Block\u2019s difficulty target.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Current Weight:")," The base weight multiplied by a factor dependant on the level in the Cascade the block is currently positioned in, such that Current Weight = Base weight * 2 ",(0,i.kt)("sup",null,"Current level no."),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Branch:")," The main chain (TxPoW Tree) starts at the tip of the Cascade and consists of the most recent 1024 blocks which have not yet been committed to the Cascade. If, due to network latency, two blocks with the same block number are found, there may be multiple branches off the main chain.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Diagram of the Cascading Chain at a point in time")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("em",{parentName:"p"},"this diagram illustrates a Cascade and Main chain with test parameters (only 2 blocks at each level). In practice there are a maximum of 128 blocks at each level.")),(0,i.kt)("p",null,"Diagram: Cascading Chain and Main chain "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(1385).Z+"#gh-light-mode-only",width:"1237",height:"1105"}),(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(7922).Z+"#gh-dark-mode-only",width:"1237",height:"1105"})),(0,i.kt)("details",null,(0,i.kt)("summary",null," ",(0,i.kt)("strong",null," printtree command output ")," "),(0,i.kt)("p",null,"The corresponding Cascading Chain to the image above, in the Minima Terminal. Actual output of ",(0,i.kt)("strong",{parentName:"p"},"printtree cascade:true")," (using Test parameters of 2 blocks at each level and a default weight of 1000)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    "command":"printtree", \n    "status":true, \n    "message":"Printed to stdout"\n}\nprinttree\n[5/7] 0x0000436C769OD35E6C42FD5FAD92AD86E3397F2FASAAD5DAD50AF6721F0962EB@ 2 weight:32000.00\n[4/5] 0x000184FC2C1674CA3F1822A74BDA265898428337867F9CEC17A30F10F90F886F@ 5 weight:16000.00 \n[4/9] 0x00001218A849EB1C092202O77563AE57125AF1A490444437157B450O5587E088@ 30 weight:16000.00 \n[3/4] 0x0003304740533814A703ASE06O79DA3EFED964Al79085144O3FBFE1ED389473E@ 70 weight:8000.000 \n[3/3] 0x000548332F9278833812CD8508760A8436188847F4FAO8BF5C3O19626F55872C@ 71 weight:8000.000 \n[2/5] 0x000144F2E92068E6EOCDD361A942CEAB9DD25AC9E0ADD3966O66ACF99FBCBO2E@ 73 weight:4000.000 \n[2/2] 0x000Al40O6O789CF6DA6652F7185FC99E0791E3FF423A028928DC34C4065O81DA@ 76 weight:4000.000 \n[1/2] 0x000O4O62539C98O51845207CBF486BFCF9EC1333700684A3A285FEE2EOBA3CFE@ 90 weight:2000.000 \n[1/1] 0x0019BCD30CDC83704188816388O36DA11C7ClE0BACSE72E62AD286736AD0E6SB@ 92 weight:2000.000 \n[0/1] 0x001880031AC428632321O43BE43FFF6988284A9108540877OAC418O2OO739101@ 95 weight:1000.000 \n[0/1] 0x001833219F9048291BDAC6634151788878499579C091DS7870Fl8AO87CS83A84@ 96 weight:1000.000\n----\n97 [0/1] 0x0018488783BFD4FA8F6AEADS8E7063857858E3023O951O0C51885867124F2F6O txns:0 weight:1000.000/16000.000\n--\x3e 98 [0/0] 0x0024C76EBC2FOFF381196O177E94B9DCCF0O72590A3E0A07O4CB958ABCS33FFC txns:0 weight:1000.000/15000.000 \n    --\x3e 99 [0/0] 0x003B8CF257AAFEA852ASECF329F07863EB7ED4C2AA0A1820EBBC11EEEAB271DD txns:0 weight:1000.000/14000.000\n        --\x3e 100 [0/0] 0x0038A2F83Al3O0EOF293A688281C42A0C94F13377F1958E9580863933EBOA089 txns:0 weight:1000.000/13000.000 \n            --\x3e 101 [0/0] 0x002CB758E57E6805E3432FDFAB45OFCFDE40A700BCB17COA8204FD3995989D02 txns:0 weight:1000.000/12000.000\n                --\x3e 102 [0/2] 0x00087C8559EE3571E3939DECD5774F82698618704F5149513265CC4C230AF21F txns:0 weight:1000.000/11000.000 \n                    --\x3e 103 [0/2] 0x0009FC18DE1881A20107288640A362828O814F310E026896338F0O87A13AEC3E txns:0 weight:1000.000/10000.000\n                        --\x3e 104 [0/2] 0x000CC2CA1224EFCF33EE158192468AF1F105C4CEA561EE146EA9206O880318O7 txns:0 weight:1000.000/9000.000 \n                            --\x3e 105 [0/0] 0x0024763333OEO6AA30AC7440F131583823E955F7F49ACC8468844FC590047656 txns:0 weight:1000.000/8000.000\n                                --\x3e 106 [0/0] 0x003E9FOC22C8F2CF3EEOC51AFAC8477E4C082OCC66C5800221688A9ED9A15F14 txns:0 weight:1000.000/7000.000 \n                                    --\x3e 107 [0/0] 0x002F36839O85OEB0C21E0F06A8863E27FC60554A7702O2688A06BD4C9EBB6448 txns:0 weight:1000.000/6000.000\n                                        --\x3e 108 [0/1] 0x00118C1FDE884615937AS68788456995F3781736015OO53C04A5204F113E7472 txns:0 weight:1000.000/5000.000\n                                            --\x3e 109 [0/0] 0x003CA183OO2013808BEOCS086O818702O7ClC44BFA035463A7SE99366FFS63EE txns:0 weight:1000.000/4000.000\n                                                --\x3e 110 [0/0] 0x0031562088O8A2CB774681A29C7OA08C5549677828E3OF2AA138B2A2C23FDA98 txns:0 weight:1000.000/3000.000\n                                                    --\x3e 111 [0/0] 0x0025OO5O3O20AE21OO1O83A7EAC2C3O18780376AFFO4373333E428452SEDD310 txns:0 weight:1000.000/2000.000    \n                                                        --\x3e 112 [0/1] 0x001088A86OFC123879BFC98484ESOE385748104A277E878E9C26DCD9AS3FSBE7 txns:0 weight:1000.000/1000.000\nCascade Weight :94000.000 \nChain Weight :16000.000 \nTotal Weight :110000.000\n')),(0,i.kt)("p",null,"In the minima terminal, a block in the ",(0,i.kt)("strong",{parentName:"p"},"Cascade")," (top section) has the following format:",(0,i.kt)("br",null)),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[L",(0,i.kt)("sub",null,"Curr")," , L",(0,i.kt)("sub",null,"max"),"]")," ",(0,i.kt)("em",{parentName:"li"},"TxPowID ",(0,i.kt)("strong",{parentName:"em"},"@")," blocknumber")," ",(0,i.kt)("strong",{parentName:"li"},"weight:")," ",(0,i.kt)("em",{parentName:"li"},"weight of block at L",(0,i.kt)("sub",null,"Curr")," ",(0,i.kt)("strong",{parentName:"em"},"@")," timestamp"))),(0,i.kt)("p",null,"Where:",(0,i.kt)("br",null)),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"L",(0,i.kt)("sub",null,"Curr"))," is the level in the Cascade that the Super Block is currently positioned i.e. its ",(0,i.kt)("strong",{parentName:"li"},"Current Level"),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"L",(0,i.kt)("sub",null,"max"))," is the maximum level in the Cascade that the Super Block can reach i.e. its ",(0,i.kt)("strong",{parentName:"li"},"Super Level")," ",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TxPowID:")," the hash of the Super Block",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"blocknumber:")," the number (height) of the Super Block",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"weight:")," The Super Block\u2019s weight at its current position i.e. its ",(0,i.kt)("strong",{parentName:"li"},"Current Weight"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[1/4] 0x0000001062CF82B7735998368D982BD0DAC6B158D596507F6A4FF46E40F946F0 @ 118598 weight:2.654886E+7 @ Tue Jan 25 23:18:32 GMT 2022")),(0,i.kt)("p",null,"Whereas a ",(0,i.kt)("strong",{parentName:"p"},"(level 0) block on the chain")," has the following format:",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"blocknumber")," ",(0,i.kt)("strong",{parentName:"p"},"[0 , L",(0,i.kt)("sub",null,"max"),"]")," TxPowID ",(0,i.kt)("strong",{parentName:"p"},"txns:")," number of txns in the block ",(0,i.kt)("strong",{parentName:"p"},"weight:")," ",(0,i.kt)("em",{parentName:"p"},"block weight at L",(0,i.kt)("sub",null,"0"),"/Total weight ",(0,i.kt)("strong",{parentName:"em"},"@")," timestamp"),(0,i.kt)("br",null)),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total weight")," is the sum of the weights of the current block and all its child blocks",(0,i.kt)("br",null))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"119839 [0/0] 0x0000012767305A327C2F1B4E8F729B64AACFEFA932443156604E7B6EC845BA3C txns:0 weight:1.412993E+7/1.412993E+7 @ Wed Jan 26 16:24:40 GMT 2022"))),(0,i.kt)("h3",{id:"super-levels-growth--weight"},"Super levels, growth & weight"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Difficulty levels in the Cascading chain")," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Level 0")," is the actual block difficulty. Set to 1 block every 50 seconds,",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 1")," is 2x harder than Level 0",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 2")," is 4x harder than Level 0",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 3")," is 8x harder than Level 0",(0,i.kt)("br",null),"\nup to Level 31\u2026",(0,i.kt)("br",null),"\nsuch that ",(0,i.kt)("strong",{parentName:"p"},"Level L is 2",(0,i.kt)("sup",null,"L")," harder than Level 0")),(0,i.kt)("p",null,"Given that each level in the Cascading Chain consists of blocks which are twice as difficult to find as blocks in the previous level, it gets exponentially harder to find a block as the levels increase. "),(0,i.kt)("p",null,"We can calculate the probabilities of finding a block of each level as follows:"),(0,i.kt)("p",null,"Let a block at level L be denoted as B",(0,i.kt)("sub",null,"L"),"(x) where L are the levels ","{","0,...,31} and x is the block number (height), then the probability of finding a block at each level is:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Level 0:")," P(B",(0,i.kt)("sub",null,"0"),"(x))  = 1/(2",(0,i.kt)("sup",null,"0"),") = 1",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 1:")," P(B",(0,i.kt)("sub",null,"1"),"(x)) = 1/(2",(0,i.kt)("sup",null,"1"),") = 1/2   i.e. the probability of finding a level 1 block is 1 in 2",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 2:")," P(B",(0,i.kt)("sub",null,"2"),"(x)) = 1/(2",(0,i.kt)("sup",null,"2"),") = 1/4   i.e. the probability of finding a level 2 block is 1 in 4",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 3:")," P(B",(0,i.kt)("sub",null,"3"),"(x)) = 1/(2",(0,i.kt)("sup",null,"3"),") = 1/8   i.e. the probability of finding a level 3 block is 1 in 8",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 4:")," P(B",(0,i.kt)("sub",null,"4"),"(x)) = 1/(2",(0,i.kt)("sup",null,"4"),") = 1/16   i.e. the probability of finding a level 4 block is 1 in 16",(0,i.kt)("br",null),"\nup to Level 31\u2026",(0,i.kt)("br",null),"\nsuch that ",(0,i.kt)("strong",{parentName:"p"},"Level L: P(B",(0,i.kt)("sub",null,"L"),"(x)) = 1/(2",(0,i.kt)("sup",null,"L"),")")," "),(0,i.kt)("p",null,"Probability of finding a block at each level, plotted on a linear chart: "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(1366).Z+"#gh-light-mode-only",width:"2012",height:"1104"}),(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(415).Z+"#gh-dark-mode-only",width:"2012",height:"1104"})),(0,i.kt)("p",null,"Probability of finding a block at each level, plotted on a (base 2) logarithmic chart: "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(9567).Z+"#gh-light-mode-only",width:"2012",height:"1104"}),(0,i.kt)("img",{loading:"lazy",alt:"The Blockchain",src:n(9335).Z+"#gh-dark-mode-only",width:"2012",height:"1104"})),(0,i.kt)("p",null,"Relating this to block times means that, on average, it would take the network twice as long to find a level L+1 Super Block compared to a level L Super Block. Therefore, on average, we would expect the amount of time taken to find a block to double with each incremental level.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Expected Super Block times:",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 0:")," every 50 seconds (set by the network block difficulty)",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 1:")," every 100 seconds (i.e. 50","*","2",(0,i.kt)("sup",null,"1")," or 50","*","2) (equivalent to finding 2 level 0 blocks)",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 2:")," every 200 seconds (i.e. 50","*","2",(0,i.kt)("sup",null,"2")," or 50","*","4) (equivalent to finding 4 level 0 blocks)",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 3:")," every 400 seconds (i.e. 50","*","2",(0,i.kt)("sup",null,"3")," or 50","*","8) (equivalent to finding 8 level 0 blocks)",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Level 4:")," every 800 seconds (i.e. 50","*","2",(0,i.kt)("sup",null,"4")," or 50","*","16) (equivalent to finding 16 level 0 blocks)",(0,i.kt)("br",null),"\nup to Level 31\u2026",(0,i.kt)("br",null),"\nsuch that the ",(0,i.kt)("strong",{parentName:"p"},"average time taken to find a Level L Super Block = 50","*","2",(0,i.kt)("sup",null,"L")," seconds.")),(0,i.kt)("p",null,"Hence, on average, ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"For Levels 0-31:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One Level L block would contribute the same difficulty (PoW) to the chain as 2",(0,i.kt)("sup",null,"L")," Level 0 blocks, e.g. One Level 4 Super Block provides the PoW of sixteen Level 0 blocks.",(0,i.kt)("br",null))),(0,i.kt)("p",null,"For Levels 0-30:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are half as many Level L+1 Super Blocks as Level L"),(0,i.kt)("li",{parentName:"ul"},"The sum of the difficulty of Level L+1 Super Blocks =The sum of the difficulty of Level L Super Blocks")),(0,i.kt)("h3",{id:"how-super-blocks-are-connected"},"How super blocks are connected"),(0,i.kt)("p",null,"In every block, there exists a header which contains a reference (hash) to a parent at every existing Super level in the Cascade."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," this header is created at the time the block is created and before it has been mined, therefore the maximum level of each new block is unknown when the references to its Super Parents are created."),(0,i.kt)("p",null,"Each new block in the chain ",(0,i.kt)("strong",{parentName:"p"},"B",(0,i.kt)("sub",null,"0"),"(n)")," ",(0,i.kt)("em",{parentName:"p"},"where n = latest block number")," contains a reference to the following set of blocks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Its previous block:")," B",(0,i.kt)("sub",null,"0"),"(n-1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Its set of Super Parents ","{","B",(0,i.kt)("sub",null,"s"),"(x",(0,i.kt)("sub",null,"max"),")}")," where ",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"li"},"x",(0,i.kt)("sub",null,"max"))," is the highest block number (most recent) at any Super level",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"li"},"s")," is the Super level of the block ",(0,i.kt)("strong",{parentName:"li"},"B(x",(0,i.kt)("sub",null,"max"),")"),(0,i.kt)("br",null))),(0,i.kt)("p",null,"In other words, when there are multiple blocks at any Super level L, a new block will only reference the most recent level L Super Parent in its header."),(0,i.kt)("p",null,"The resulting output is that all super blocks in the Cascade will have an immutable link to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Their immediate previous block in the Cascade"),(0,i.kt)("li",{parentName:"ol"},"Previous super blocks in the Cascade which have different maximum levels to their immediate previous super parent.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," ",(0,i.kt)("strong",null," Terminal output showing Super Parent references ")," "),(0,i.kt)("p",null,"Using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"txpow txpowid:insertTxPoWID"),", we can see the full details of the TxPoW including its Super Parents."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example showing 5 Super Parents of this block at levels 4, 11, 14, 16, 18 and the genesis block (cropped).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'txpow txpowid:Ox0000001062CF8287735998368D9828D0DAC6B158D596507F6A41F46E40F946F0 \n{ \n    "command":"txpow", \n    "params":{ \n        "txpowid":"Ox0000001062CF8287735998368D982BDODAC6B158D596507F6A4FF46E40F946F0" \n    }, \n    "status":true,\n    "response":{ \n        "txpowid":"Ox0000001062CF8287735998368D982BDODAC6B158D596507F6A4FF46E40F946F0",\n        "isblock":true,\n        "istransaction":false, \n        "superblock":4, \n        "size":553, \n        "header":{ \n            "block":"118598", \n            "blkdiff":"Ox01438D45457A6D43AC2268F797C34CEASCFE6AC11986A25821D63DE6806A", \n            "cascadelevels":32,\n            "superparents":[{ \n                "difficulty":4, \n                "count":5, \n                "parent":"Ox0000000F93468B23600B57E89C9C2090A37B8FAA032AE74C7C9992CB4E820249"\n            },\n            { \n                "difficulty":11, \n                "count":7, \n                "parent":"Ox0000000028270485D5F55ABEF34A05E4E4CC8ADC18E8B5C6D9235AD7A2C25AF9" \n            }, \n            {\n                "difficulty":14,\n                count":3,\n                "parent":"Ox00000000035747E54BDA4A1C8FBA709AAFD2488D81FCDOC91E5D14E0F54E459D" \n            },\n            { \n                "difficulty":16, \n                "count":2, \n                "parent":"Ox00000000015221E3EDB4A9829E8803FC38BD486908CE4E6D58FC6D869AC78D5D" \n            },\n            {\n                "difficulty":18, \n                "count":2, \n                "parent":"Ox000000000EBCC7F23E55ECAFB3DE7A1CAOC39SDED61909138734A2D69COBE6B79"\n            },\n            {\n                "difficulty":31, \n                "count":13, \n                "parent":"0x00"\n            }],\n            "magic":{ \n                "desiredmaxtxpow":"32000",\n                "desiredmaxtxn":"100",\n                "desiredmintxpowwork":"Ox4189374BC6A7EF9DB22DOE5604189374BC6A7EF9DB22DOE5604189374BC6A7", \n                "maxtxpow":"32000",\n                "maxtxn":"100",\n                "mintxpowwork":"Ox4189374BC6A7EF9DB22DOE5604189374BC6A7EF9DB22DOE5604189374BC6A7" \n            }, \n            "mmr":"Ox775AE23EF568860A616B0F72676F14127F45FA47C817CO39DOAD86C2C394C940",\n            "total":"1000000000",\n            "nonce":"0.00000000000000000000000000000000000000026881",\n            "timemilli":"1643152712051",\n            "date":"Tue Jan 25 23:18:32 GMT 2022" \n        }, \n        "hasbody":true, \n        "body":{ \n            "prng":"OxA22FCEF273268981308F81ED4CAD7FF7E806F62139630C5A4C252F38544448BD50",\n            "txndiff":"Ox068DB8BAC71003295E9E1B089A027525460AA64C2F8378442339COEBEDFA43",\n            "txn":{\n                "inputs":[], \n'))),(0,i.kt)("h3",{id:"updating-the-cascade"},"Updating the cascade"),(0,i.kt)("p",null,"Once the main chain (heaviest branch) reaches 1124 (1024 + 100) blocks in length, the cascading process begins."),(0,i.kt)("p",null,"The new Cascade will include a subset of blocks from the existing (previous) Cascade and all of the first 100 blocks from the main chain i.e. the 100 blocks closest to the tip of the existing Cascade. Once added to the Cascade, these first 100 blocks will be pruned from the main chain, leaving 1024 blocks unpruned."),(0,i.kt)("p",null,"The 101st block in the main chain will become the new root of the TxPoW Tree whose parent will be the tip of the new Cascade. "),(0,i.kt)("p",null,"Before these 100 blocks are pruned, the new root block\u2019s MMR Set is updated with entries for all the CoinProofs from these blocks for unspent coins that the node is tracking. Therefore CoinProofs are not lost once the blocks are pruned. "),(0,i.kt)("p",null,"The Cascading process is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Level 0:")," Working backwards through the first 100 blocks in the main chain, each block is checked to see if it meets the difficulty of a Level 0 block. By definition, all blocks are Level 0 so these 100 blocks are all added to Level 0 in the new Cascade. 28 Level 0 blocks from the previous Cascade will remain in Level 0 of the new Cascade, filling the 128 spaces at this level.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Level 1:")," After 128 blocks have been added to Level 0 of the Cascade, continuing to work backwards through the remaining Level 0 blocks in the previous Cascade, these will only be kept and added to Level 1 in the new Cascade if they meet the difficulty required to be a Level 1 Super Block or above, otherwise they are pruned.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Level 2:")," Once, and if, 128 Super Blocks have been added to Level 1, the next Super Blocks must meet the Level 2 difficulty to remain in the Cascade, otherwise they are pruned. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Level 3:")," Continuing to work backwards through Super Blocks the previous Cascade, the next 128 blocks added to the Cascade must meet the difficulty required for at least Level 3, otherwise they are pruned. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The process continues until all blocks in the chain have been processed."))),(0,i.kt)("p",null,"This results in a new Cascading Chain and the remaining (most recent) 1024 blocks kept, in full, on the main chain."),(0,i.kt)("p",null,"The weight of the Super Blocks on the Cascade are also recalculated as follows:"),(0,i.kt)("p",null,"A Super Block\u2019s Current Weight (CW) is its \u2018Base Weight\u2019 (BW) multiplied by a factor proportional to the current level the Super Block is positioned (irrespective of its maximum Super Level):"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CW of Super Blocks on Level 0")," = BW","*","2",(0,i.kt)("sup",null,"0")," ",(0,i.kt)("em",{parentName:"p"},"i.e.  Base weight","*","1"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"CW of Super Blocks on Level 1")," = BW","*","2",(0,i.kt)("sup",null,"1")," ",(0,i.kt)("em",{parentName:"p"},"i.e.  Base weight","*","2)"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"CW of Super Blocks on Level 2")," = BW","*","2",(0,i.kt)("sup",null,"2")," ",(0,i.kt)("em",{parentName:"p"},"i.e.  Base weight","*","4"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"CW of Super Blocks on Level 3")," = BW","*","2",(0,i.kt)("sup",null,"3")," ",(0,i.kt)("em",{parentName:"p"},"i.e.  Base weight","*","8"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"CW of Super Blocks on Level 4")," = BW","*","2",(0,i.kt)("sup",null,"4")," ",(0,i.kt)("em",{parentName:"p"},"i.e.  Base weight","*","16"),(0,i.kt)("br",null),"\nup to Level 31\u2026",(0,i.kt)("br",null),"\nsuch that ",(0,i.kt)("strong",{parentName:"p"},"CW(B",(0,i.kt)("sub",null,"L"),"(x)) = BW","*","2",(0,i.kt)("sup",null,"L")),", where L is the current level a Super Block is positioned on."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," if a block has a base weight of 1000, and it currently sits at Level 4, the block would weigh 1000*2",(0,i.kt)("sup",null,"4")," =16000"))}k.isMDXComponent=!0},415:function(e,t,n){t.Z=n.p+"assets/images/blockChart1Dm-6a2ccf676d19489df753f51cb757ba97.svg"},1366:function(e,t,n){t.Z=n.p+"assets/images/blockChart1Lm-2e317ff10aaf82482dcd1c323e0aa2f2.svg"},9335:function(e,t,n){t.Z=n.p+"assets/images/blockChart2Dm-725bcac89b46d7c98f49541620d889ea.svg"},9567:function(e,t,n){t.Z=n.p+"assets/images/blockChart2Lm-6e47762cb0d8de8e5ac604e6e6cda434.svg"},5064:function(e,t,n){t.Z=n.p+"assets/images/cascadingChain1Dm-6f0d3f57ae2fbd121a7b8cbc881b6319.svg"},7531:function(e,t,n){t.Z=n.p+"assets/images/cascadingChain1Lm-32f69f93dc25b040cbb65c58af097276.svg"},7922:function(e,t,n){t.Z=n.p+"assets/images/cascadingChain2Dm-021dd7e1fb7063212a0ae8f527436e97.svg"},1385:function(e,t,n){t.Z=n.p+"assets/images/cascadingChain2Lm-329e67d91774c22f3a1d87e633bd8b14.svg"}}]);