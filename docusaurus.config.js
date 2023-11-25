const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

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
      {
        docs: {
          routeBasePath: "/notebook",
        },
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
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    metadata: [
      {
        name: "description",
        content:
          "I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",
      },
      {
        name: "keywords",
        content:
          "fullstack, frontend, backend, developer, engineer, go, golang, javascript, graphql, grpc, rest, kubernetes, devops, cloud, cloud-native, open-source, java, springboot, spring, angular, kushal, kushalarya, arya ",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
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
        { to: "/notebook", label: "📓 Notebook", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Kushal Arya. Built with Docusaurus.`,
    },
    algolia: {
      appId: "MUQTV2ZP2D",
      apiKey: "1ea65ba8e8ef780838e2eb69fe48200d",
      indexName: "kushalarya",
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
