/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  sntSidebar: [{ type: 'autogenerated', dirName: 'snt' }],
  nsi1ereSidebar: [
    'nsi-1ere/intro',
    {
      type: 'category',
      label: 'Représentation des nombres',
      items: [{ type: 'autogenerated', dirName: 'nsi-1ere/representation' }],
    },
  ],
  nsitermSidebar: [{ type: 'autogenerated', dirName: 'nsi-term' }],
  ressourcesSidebar: [{ type: 'autogenerated', dirName: 'divers' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}
