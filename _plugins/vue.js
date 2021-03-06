const path = require('path')
const eleventyVue = require('@11ty/eleventy-plugin-vue')
const alias = require('@rollup/plugin-alias')

module.exports = {
  plugin: eleventyVue,
  pluginOptions: {
    rollupOptions: {
      external: [
        'markdown-it',
        'markdown-it-attrs',
        'markdown-it-anchor',
        'markdown-it-prism',
        'markdown-it-footnote',
        'markdown-it-abbr',
        'markdown-it-attribution',
        'markdown-it-container',
      ],
      plugins: [
        alias({
          entries: [
            {
              find: '~cwd',
              replacement: path.resolve(process.cwd()),
            },
            {
              find: '~components',
              replacement: path.join(
                process.cwd(),
                '_src/_includes/components',
              ),
            },
            {
              find: '~icons',
              replacement: path.join(
                process.cwd(),
                'node_modules/vue-material-design-icons',
              ),
            },
          ],
        }),
      ],
    },
  },
}
