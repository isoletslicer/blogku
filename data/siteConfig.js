module.exports = {
  siteTitle: 'Hardaya S. Blog',
  siteDescription: 'Blog Homepage',
  authorName: 'RED',
  twitterUsername: '',
  authorAvatar: 'EF_Sieghart_Face_02.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Former Research Assistant equipped Causal Inference Machine Learning & Back-End Development Skills. Skilled in Python, Javascript / Typescript, R.

  `,
  siteUrl: 'https://isoletslicer.github.io/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/blogku', // Note: it must *not* have a trailing slash.
  siteCover: 'siegrage.jpg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'Blog Homepage',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog Homepage',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Follow Me',
      links: [
        {
          label: 'Linkedin',
          url: 'https://linkedin.com/in/hardayas',
          rel: 'external'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/isoletslicer',
          rel: 'external'
        },
      ],
    },
  ],
}
