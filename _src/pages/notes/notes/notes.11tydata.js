const { getChanges } = require('../../../../_helper/git-history')

module.exports = {
  tags: ['notes'],
  layout: 'note',
  pageCSS: 'note',

  eleventyComputed: {
    permalink: function ({ title }) {
      return `/notes/${this.slugify(title)}/`
    },
    changes: async ({ page }) => await getChanges(page),
  },
}
