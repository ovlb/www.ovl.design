module.exports = {
  tags: ['blog'],
  markdownTemplateEngine: 'md',
  layout: 'post',
  pageCSS: 'textDetail',
  templateClass: 'tmpl-single-post',

  eleventyComputed: {
    permalink: function ({ title, external, permalink }) {
      if (external) {
        return false
      }

      if (permalink) {
        return permalink
      }

      return `/text/${this.slugify(title)}/`
    },

    displayIntro: ({ intro, subtitle }) => intro || subtitle || false,

    categoriesString: function ({ tags }) {
      const categories = tags && tags.filter((tag) => tag.startsWith('cat:'))

      if (!categories || !categories.length) {
        return ''
      }

      return `${this.displayCategory(categories[0])} — `
    },
  },
}
