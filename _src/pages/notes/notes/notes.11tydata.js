import { getChanges } from '../../../../_helper/git-history.js'

export default {
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
