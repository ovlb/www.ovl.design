const pluginMastodon = require('@inframanufaktur/eleventy-plugin-embed-mastodon')

const { MASTODON_TOKEN: token, BASE_URL } = process.env

module.exports = {
  plugin: pluginMastodon,
  pluginOptions: {
    baseOptions: {
      host: 'chaos.social',
      token,
    },
    imageOptions: {
      urlPath: `${BASE_URL}/img/`,
      outputDir: './dist/img/',
    },
  },
}
