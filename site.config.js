module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'a985ee88c1d94ff28107cf36402af3bb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'My Personal Blog',
  domain: 'nguyenhuutien.com',
  author: 'Huu-Tien Nguyen',

  // open graph metadata (optional)
  description: 'I am a Front-End Developer based in Vietnam 🇻🇳',
  socialImageTitle: 'My Personal Blog',
  socialImageSubtitle: "Hey 👋, I'm Huu-Tien Nguyen",

  // social usernames (optional)
  twitter: 'hxutixnnn',
  github: 'hxutixnnn',
  linkedin: 'hxutixnnn',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '👨🏻‍💻',
  defaultPageCover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'hxutixnnn/nguyenhuutien.com',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/sua-loi-dang-nhap-facebook': '018b7c4c67da476f807cddd48909f6fd'
  }
}
