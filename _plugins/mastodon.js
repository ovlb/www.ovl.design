import pluginMastodon from '@inframanufaktur/eleventy-plugin-embed-mastodon'

const { MASTODON_TOKEN: token } = process.env

export default {
  plugin: pluginMastodon,
  pluginOptions: {
    baseOptions: {
      host: 'chaos.social',
      token,
    },
    imageOptions: {
      urlPath: `/img/`,
      outputDir: `./dist/img/`,
    },
  },
}
