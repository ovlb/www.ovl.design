const Image = require('@11ty/eleventy-img')

module.exports = {
  tags: ['blog'],
  layout: 'post',
  pageCSS: ['text-detail', 'text-page'],
  templateClass: 'tmpl-single-post',

  eleventyComputed: {
    permalink: function ({ title, external, permalink }) {
      if (external) {
        return false
      }

      if (permalink) {
        return permalink
      }

      return `/text/${this.slugify(title.trim())}/`
    },

    meta: async function ({ site, meta, displayIntro: description, image }) {
      const metaData = { ...meta, ogType: 'article' }

      if (image) {
        let stats = await Image(`_src/assets/img/blog/open-graph/${image.og}`, {
          widths: [1478],
          formats: ['jpg'],
          sharpJpegOptions: {
            quality: 100,
          },
          urlPath: '/img/',
          outputDir: './dist/img/',
          filenameFormat: function (id, src, number, format) {
            const originalName = image.og.split('.')[0]

            return `${originalName}.${format}`
          },
        })

        metaData.image = {
          src: `${site.baseURL}${stats.jpeg[0].url}`,
          alt: image.alt,
        }
      }

      if (description) {
        metaData.description = description
      }

      return metaData
    },

    displayIntro: ({ intro, subtitle }) => intro || subtitle || false,

    categoriesString: function ({ tags }) {
      const categories = tags && tags.filter((tag) => tag.startsWith('cat:'))

      if (!categories || !categories.length) {
        return ''
      }

      return `${this.capitaliser(categories[0])} — `
    },
  },
}
