// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Minima Documentation",
        logo: {
          alt: "Minima",
          src: "img/logo.svg",
        },
        items: [
          { to: "docs/about/vision", 
            label: "Vision", 
            position: "left" },
          {
            to: "docs/learn/networkoverview",
            label: "Learn",
            position: "left",
          },
          {
            to: "docs/runanode/get_started_in_3_steps",
            label: "Run a node",
            position: "left",
          },
          {
            to: "docs/minimaincentiveprogram",
            label: "Incentive Program",
            position: "left",
          },
          {
            to: "docs/buildonminima/startaprivatenode",
            label: "Build",
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
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "docs/about/vision",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/minima",
              },
              {
                label: "Telegram",
                href: "https://t.me/Minima_Global",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Minima_Global",
              },
            ],
          },
          {
            title: "Devs",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/minima-global",
              },
            ],
          },
        ],
        copyright: `All rights reserved Minima Ltd © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
