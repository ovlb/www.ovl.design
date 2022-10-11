const Webmentions = require('eleventy-plugin-webmentions')

const { WEBMENTIONS_TOKEN: token } = process.env

module.exports = {
  plugin: Webmentions,
  pluginOptions: {
    domain: 'www.ovl.design',
    token,
  },
}
