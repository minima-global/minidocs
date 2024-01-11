// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Minima Documentation",
  tagline: "Power to the people",
  url: "https://docs.minima.global/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "minima-global", // Usually your GitHub org/user name.
  projectName: "minidocs", // Usually your repo name.

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/minima-global/minidocs",
        },
        gtag: {
          trackingID: 'G-BKE0W3LK7F',
        },
        googleAnalytics: {
          trackingID: 'G-BKE0W3LK7F',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/minima-global/minidocs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [
    // String format.
    'https://docusaurus.io/script.js',
    // Object format.
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.5/web3.min.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/minima_docs.png',
      navbar: {
        title: "Minima Docs",
        logo: {
          alt: "Minima",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          // { to: "docs/about/vision", 
          //   label: "Vision", 
          //   position: "left" 
          // },
          {
            to: "docs/runanode/get_started",
            label: "Run a Node",
            position: "left",
          },
          {
            to: "docs/userguides",
            label: "User Guides",
            position: "left",
          },
          {
            to: "docs/learn/ataglance",
            label: "Learn",
            position: "left",
          },
          {
            to: "docs/buildonminima/buildintro",
            label: "Build",
            position: "left",
          },
          {
            to: "docs/about/tokendistribution/",
            label: "Tokenomics",
            position: "left",
          },
          {
            href: "https://www.minima.global/our-community",
            label: "Community",
            position: "right",
          },
          {
            href: "https://github.com/minima-global",
            label: "GitHub",
            position: "right",
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            // title: "Docs",
            items: [
              {
                html: `
                  <a href="https://www.minima.global/" class="footer__logo" target="_blank" rel="noreferrer noopener">
                    <img src="https://docs.minima.global/img/minima_logo.svg" alt="Minima Global" />
                  </a>
                  <p>
                  The evolution will not be centralized<br />Become part of it
                  </p>
                `,
              },
              {
                label: "Terms & conditions",
                to: "docs/terms/minimatermsandconditions/",
              },
              {
                label: "Privacy policy",
                to: "docs/terms/minimaprivacypolicy/",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Run a node",
                href: "/docs/runanode/get_started",
              },
              {
                label: "Blog",
                href: "https://www.minima.global/blog",
              },
              {
                label: "News",
                href: "https://www.minima.global/news",
              },
              {
                label: "Newsletter",
                href: "http://newsletter.minima.global/",
              },
              {
                label: "MiniDapps",
                href: "https://www.minima.global/minidapps",
              },
              {
                label: "Media kit",
                href: "https://www.minima.global/media-kit",
              },
              {
                label: "Merchandise",
                href: "https://merch.minima.global/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/minima",
              },
              {
                label: "Telegram",
                href: "https://t.me/Minima_Global",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Minima_Global",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ",
              },
              {
                label: "CoinMarketCap",
                href: "https://coinmarketcap.com/currencies/minima-global/",
              },
              {
                label: "CoinGecko",
                href: "https://www.coingecko.com/en/coins/minima",
              },
            ],
          },
        ],
        copyright: `All rights reserved Minima GmbH © ${new Date().getFullYear()}`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
