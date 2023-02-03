const pluginMastodon = require('@inframanufaktur/eleventy-plugin-embed-mastodon')

const { MASTODON_TOKEN: token } = process.env

module.exports = {
  plugin: pluginMastodon,
  pluginOptions: {
    baseOptions: {
      host: 'chaos.social',
      token,
    },
    imageOptions: {
      outputDir: './dist/img/',
    },
  },
}
