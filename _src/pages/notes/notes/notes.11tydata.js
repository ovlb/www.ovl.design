module.exports = {
  tags: ['notes'],
  layout: 'note',
  pageCSS: 'note',

  permalink: function (data) {
    return `/notes/${this.slugify(data.title)}/`
  },

  eleventyComputed: {
    displayTitle: function ({ title }) {
      return title
    },
  },
}
