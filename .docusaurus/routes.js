
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','a87'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','d62'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d09'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','192'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','b2d'),
    routes: [
      {
        path: '/docs/about/history',
        component: ComponentCreator('/docs/about/history','c3e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/about/terminology',
        component: ComponentCreator('/docs/about/terminology','e0b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/about/vision',
        component: ComponentCreator('/docs/about/vision','5f9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/about/whatisminima',
        component: ComponentCreator('/docs/about/whatisminima','9e3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/about/whyminima',
        component: ComponentCreator('/docs/about/whyminima','9e6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/about/whyuseminima',
        component: ComponentCreator('/docs/about/whyuseminima','01a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ambassador',
        component: ComponentCreator('/docs/ambassador','969'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/acceptanceoftherisk',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/acceptanceoftherisk','a93'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/applicationoftheseterms',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/applicationoftheseterms','9aa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/changestotheseterms',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/changestotheseterms','4f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/compensation',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/compensation','31c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/conditionstoparticipateintheincentiveprogram',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/conditionstoparticipateintheincentiveprogram','a3d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/feedbackandcontactdetails',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/feedbackandcontactdetails','570'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/general',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/general','092'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/incentiveprogram',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/incentiveprogram','ff7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/indemnity',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/indemnity','781'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/intellectualpropertyrights',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/intellectualpropertyrights','f68'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/liability',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/liability','df9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/privacy',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/privacy','988'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/prohibitedpurpose',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/prohibitedpurpose','ead'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/taxes',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/taxes','93f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/termination',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/termination','ab9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/thirdpartysites',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/thirdpartysites','b6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/whoarewe',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/whoarewe','014'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/incentiveprogramtermsandconditions/youreligibility',
        component: ComponentCreator('/docs/incentiveprogramtermsandconditions/youreligibility','57b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/keypeople/hugofeiler',
        component: ComponentCreator('/docs/keypeople/hugofeiler','90c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/keypeople/jonmacdonald',
        component: ComponentCreator('/docs/keypeople/jonmacdonald','e32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/keypeople/paddycerri',
        component: ComponentCreator('/docs/keypeople/paddycerri','791'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/coreconcepts',
        component: ComponentCreator('/docs/learn/coreconcepts','406'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/mmrdatabase',
        component: ComponentCreator('/docs/learn/mmrdatabase','641'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/networkoverview',
        component: ComponentCreator('/docs/learn/networkoverview','d48'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/quantumsecurity',
        component: ComponentCreator('/docs/learn/quantumsecurity','57a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/smartcontracts',
        component: ComponentCreator('/docs/learn/smartcontracts','9ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/theblockchain',
        component: ComponentCreator('/docs/learn/theblockchain','7ed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/tokenscolouredcoins',
        component: ComponentCreator('/docs/learn/tokenscolouredcoins','6b9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/transactions',
        component: ComponentCreator('/docs/learn/transactions','2cc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/learn/txpowunits',
        component: ComponentCreator('/docs/learn/txpowunits','072'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimaincentiveprogram',
        component: ComponentCreator('/docs/minimaincentiveprogram','a40'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimainviteprogram',
        component: ComponentCreator('/docs/minimainviteprogram','8cc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimaprivacypolicy',
        component: ComponentCreator('/docs/minimaprivacypolicy','777'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimatermsandconditions',
        component: ComponentCreator('/docs/minimatermsandconditions','7d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/ acascadingchain',
        component: ComponentCreator('/docs/minimawhitepaper/ acascadingchain','b4e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/abstract',
        component: ComponentCreator('/docs/minimawhitepaper/abstract','e6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/blocksize',
        component: ComponentCreator('/docs/minimawhitepaper/blocksize','a84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/blockspeed',
        component: ComponentCreator('/docs/minimawhitepaper/blockspeed','d8f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/conclusion',
        component: ComponentCreator('/docs/minimawhitepaper/conclusion','612'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/consensusforksandimmutableprotocols',
        component: ComponentCreator('/docs/minimawhitepaper/consensusforksandimmutableprotocols','22d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/energy',
        component: ComponentCreator('/docs/minimawhitepaper/energy','d7f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/hashcashandburn',
        component: ComponentCreator('/docs/minimawhitepaper/hashcashandburn','a4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/introduction',
        component: ComponentCreator('/docs/minimawhitepaper/introduction','3f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/maxima',
        component: ComponentCreator('/docs/minimawhitepaper/maxima','4e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/powvsdistributedpow',
        component: ComponentCreator('/docs/minimawhitepaper/powvsdistributedpow','46b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/quantumsecure',
        component: ComponentCreator('/docs/minimawhitepaper/quantumsecure','944'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/smartcontractstokensandtransactions',
        component: ComponentCreator('/docs/minimawhitepaper/smartcontractstokensandtransactions','fe3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/specialthanksto',
        component: ComponentCreator('/docs/minimawhitepaper/specialthanksto','5ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/storagelessmmrutxo',
        component: ComponentCreator('/docs/minimawhitepaper/storagelessmmrutxo','4d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/thepulsenetwork',
        component: ComponentCreator('/docs/minimawhitepaper/thepulsenetwork','e69'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/minimawhitepaper/txpow',
        component: ComponentCreator('/docs/minimawhitepaper/txpow','dd7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/runanode/android_v9_and_up',
        component: ComponentCreator('/docs/runanode/android_v9_and_up','c0d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/runanode/get_started_in_3_steps',
        component: ComponentCreator('/docs/runanode/get_started_in_3_steps','ddc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/runanode/linux_desktop',
        component: ComponentCreator('/docs/runanode/linux_desktop','514'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/runanode/linux_vps',
        component: ComponentCreator('/docs/runanode/linux_vps','00d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/runanode/mac',
        component: ComponentCreator('/docs/runanode/mac','970'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/runanode/windows',
        component: ComponentCreator('/docs/runanode/windows','d70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tokendistribution',
        component: ComponentCreator('/docs/tokendistribution','9e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
