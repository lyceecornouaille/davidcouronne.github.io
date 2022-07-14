/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  title: 'NSI-SNT',
  tagline: 'Dinosaurs are cool',
  url: 'https://snt-nsi.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'davidcouronne', // Usually your GitHub org/user name.
  projectName: 'davidcouronne.github.io', // Usually your repo name.

  themeConfig: {
    //hideableSidebar: true,
    algolia: {
      // The application ID provided by Algolia
      appId: 'ZULXU84X16',

      // Public API key: it is safe to commit it
      apiKey: '15572b81f69b44f977c85d149ed79328',

      indexName: 'snt-nsi',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    prism: {
      // theme: require('prism-react-renderer/themes/nightOwlLight'),
      // darkTheme: require('prism-react-renderer/themes/dracula'),
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      hideOnScroll: true,
      title: 'NSI-SNT',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'snt/programme',
          position: 'left',
          label: 'SNT',
        },
        {
          type: 'doc',
          docId: '/category/outils-première-nsi',
          position: 'left',
          label: 'NSI 1ère',
        },
        {
          type: 'doc',
          docId: 'nsi-term/intro',
          position: 'left',
          label: 'NSI Term',
        },
        {
          type: 'doc',
          docId: 'divers/cartes',
          position: 'left',
          label: 'Ressources',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/DavidCouronne/davidcouronne.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'SNT',
              to: '/docs/snt/programme',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DavidCouronne/davidcouronne.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NSI-SNT, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DavidCouronne/davidcouronne.github.io/edit/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/DavidCouronne/davidcouronne.github.io/edit/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          blogSidebarTitle: 'Posts récents',
        },
        sitemap: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    // ... Your other plugins.
  ],
}
