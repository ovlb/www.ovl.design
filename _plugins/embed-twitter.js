import pluginEmbedTweet from 'eleventy-plugin-embed-tweet'

export default {
  plugin: pluginEmbedTweet,
  pluginOptions: {
    cacheDirectory: 'tweets',
    autoEmbed: true,
    useInlineStyles: false,
  },
}
