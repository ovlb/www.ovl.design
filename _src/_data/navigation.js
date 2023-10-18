module.exports = {
  main: [
    { permalink: '/', title: 'Home', exact: true },
    { permalink: '/text/', title: 'Text' },
    {
      title: 'Around the Web',
      permalink: '/around-the-web/',
    },
    { permalink: '/code/', title: 'Code' },
  ],
  secondary: [
    { permalink: '/now/', title: 'Now' },
    {
      title: 'Notes',
      permalink: '/notes/',
    },
    { permalink: 'https://talks.ovl.design/', title: 'Talks' },
    {
      title: 'Everything',
      permalink: '/everything/',
    },
    {
      title: 'Imprint',
      permalink: '/imprint/',
    },
    {
      title: 'Colophon',
      permalink: '/colophon/',
    },
  ],
  social: [
    { title: 'GitHub', url: 'https://github.com/ovlb', rel: 'me' },
    {
      title: 'Mastodon',
      url: 'https://chaos.social/@o',
      rel: 'me',
      logo: '/assets/img/mastodon_gradient.svg',
    },
  ],
  rss: [
    { permalink: '/text/feed.xml', title: 'Blog' },
    { permalink: '/around-the-web/feed.xml', title: 'Around the Web' },
  ],
}
