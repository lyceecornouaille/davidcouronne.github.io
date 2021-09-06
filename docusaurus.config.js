/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },
  title: 'NSI-SNT',
  tagline: 'Dinosaurs are cool',
  url: 'https://davidcouronne.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'davidcouronne', // Usually your GitHub org/user name.
  projectName: 'davidcouronne.github.io', // Usually your repo name.

  themeConfig: {
    hideableSidebar: true,
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
          docId: 'nsi-1ere/intro',
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
          docId: 'ressources/cartes',
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
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
}
