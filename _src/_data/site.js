require('dotenv').config()
const path = require('path')

const { version } = require(path.join(process.cwd(), 'package.json'))

module.exports = {
  locale: 'en',
  title: 'ovl',
  description: 'code & design',
  version,
  buildTime: new Date(),
  author: {
    name: 'Oscar',
    email: 'o@ovl.design',
  },
  baseURL: process.env.BASE_URL || 'https://www.ovl.design',
  navItems: [
    { url: '/', text: 'Home', exact: true },
    { url: '/code/', text: 'Code' },
    { url: '/text/', text: 'Text' },
    { url: 'https://talks.ovl.design/', text: 'Talks' },
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
  meta: {
    image: {
      src: 'https://images.ctfassets.net/0qq78o7muy2j/41AVLQd3q0oEaQKwcW0Ck2/1adc1e0fc0c7525b4f25b45570847396/ovl-og-image-generic.png',
      alt: 'An owl sitting on a branch. The letters o v l are added in the top right corner.',
      width: 2240,
      height: 1260,
    },
    ogType: 'blog',
    ogImageType: 'image/png',
    site_name: 'www.ovl.design',
    description:
      'Hi, I am Oscar. I write code and design for web and print. And this is my website.',
  },
}
