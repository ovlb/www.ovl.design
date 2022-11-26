module.exports = {
  tags: ['notes'],
  layout: 'note',
  pageCSS: 'note',

  eleventyComputed: {
    permalink: function ({ title }) {
      return `/notes/${this.slugify(title)}/`
    },
  },
}
