const pluginEmbedTweet = require('eleventy-plugin-embed-tweet')

module.exports = {
  plugin: pluginEmbedTweet,
  pluginOptions: {
    cacheDirectory: 'tweets',
    autoEmbed: true,
  },
}
