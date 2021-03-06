module.exports = {
  locale: 'en',
  title: 'ovl',
  description: 'code & design',
  author: {
    name: 'Oscar',
    email: 'o@ovl.design',
  },
  baseURL: process.env.BASE_URL || 'https://www.ovl.design',
  navItems: [
    { url: '/', title: 'Home', exact: true },
    { url: '/code/', title: 'Code' },
    { url: '/text/', title: 'Text' },
    { url: 'https://talks.ovl.design/', title: 'Talks' },
  ],
  socialNavItems: [
    { title: 'GitHub', url: 'https://github.com/ovlb' },
    { title: 'Twitter', url: 'https://twitter.com/_ovlb', rel: 'me' },
  ],
  metaImage:
    'https://images.ctfassets.net/0qq78o7muy2j/41AVLQd3q0oEaQKwcW0Ck2/1adc1e0fc0c7525b4f25b45570847396/ovl-og-image-generic.png',
  strings: {
    skip_to_content: 'Skip to main content',
  },
}
