// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kushal Arya, Full-stack Cloud Developer",
  tagline:
    "Software engineer interested in personal growth and tech trends. Cloud-native and open-source enthusiast.",
  url: "https://kushalarya.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "kushalarya",
  projectName: "kushalarya.github.io",

  // customFields: {
  //   newsletter: {
  //     action:
  //       "https://dev.us14.list-manage.com/subscribe/post?u=4ed0fd1909674fddee53ac3e7&amp;id=dfdcae99f5&amp;f_id=004887e0f0",
  //     method: "post",
  //     emailFieldName: "EMAIL",
  //     firstNameFieldName: "FNAME",
  //     submitButtonName: "subscribe",
  //     tosURL: "https://mailchimp.com/legal/terms/",
  //     privacyPolicyURL: "https://www.intuit.com/privacy/statement/",
  //     serviceName: "Mailchimp",
  //   },
  // },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/kushalarya/kushalarya.github.io/tree/main/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Kushal Arya`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
        gtag: {
          trackingID: "G-HW9NWCXPZD",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo-small.png",
      metadata: [
        {
          name: "description",
          content:
            "I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",
        },
        {
          name: "keywords",
          content:
            "fullstack,frontend,backend,developer,engineer,go,golang,javascript,graphql,grpc,rest,kubernetes,devops,cloud,cloud-native,open-source,java,springboot,spring,angular",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        title: "KA",
        logo: {
          alt: "KA logo",
          src: "img/logo.png",
          srcDark: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          // { to: "/talks", label: "Talks", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email me",
                href: "mailto:kushalarya999@gmail.com",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/kushalarya",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/_kushalarya",
              },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About me",
                to: "/",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Talks",
                to: "/talks",
              },
            ],
          },
          {
            title: "Blog feed",
            items: [
              {
                label: "RSS",
                to: "/blog/rss.xml",
              },
              {
                label: "Atom",
                to: "/blog/atom.xml",
              },
              {
                label: "JSON",
                to: "/blog/feed.json",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kushal Arya.`,
      },
      algolia: {
        appId: "QAJPHG1NC0",
        apiKey: "d94a76598e20e7a3e71581221ba9a63c",
        indexName: "kushal_portfolio",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
