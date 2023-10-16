const { getChanges } = require('../../../../_helper/git-history')

module.exports = {
  tags: ['notes'],
  layout: 'note',
  ['override:pageCSS']: ['note', 'text-page'],

  eleventyComputed: {
    permalink: function ({ title }) {
      return `/notes/${this.slugify(title)}/`
    },
    changes: async ({ page }) => await getChanges(page),
  },
}
