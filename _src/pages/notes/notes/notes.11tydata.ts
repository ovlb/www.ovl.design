import { getChanges } from '../../../../_helper/git-history.ts'

export default {
  tags: ['notes'],
  layout: 'note',
  ['override:pageCSS']: ['note', 'text-page'],

  eleventyComputed: {
    permalink: function (this: any, { title }: any) {
      return `/notes/${this.slugify(title)}/`
    },
    changes: async ({ page }: any) => await getChanges(page),
  },
}
