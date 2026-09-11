import Webmentions from 'eleventy-plugin-webmentions'

const { WEBMENTIONS_TOKEN: token } = process.env

export default {
  plugin: Webmentions,
  pluginOptions: {
    domain: 'www.ovl.design',
    token,
  },
}
