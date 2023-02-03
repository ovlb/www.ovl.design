const { parseHTML } = require('linkedom')

module.exports = {
  layout: 'digest',
  tags: ['aroundTheWeb'],
  pageCSS: 'aroundTheWeb',
  eleventyComputed: {
    meta: function (data) {
      return {
        description: data.intro,
        image: {
          src: `${data.site.baseURL}/img/around-the-web/${data.page.fileSlug}-og.jpg`,
          alt: 'A library in Prague. The ceiling is decorated with magnificent frescoes. The shelfes are old, you can smell the history contained in these books, it oozes from the picture. Written on top are the words «Around the web».',
        },
        ogType: 'article',
        ogImageType: 'image/jpg',
      }
    },
    parsedDates: function (data) {
      return {
        start: new Date(data.dates.start),
        publish: this.setPublishDate(new Date(data.dates.publish)),
      }
    },
    pageTitle: function (data) {
      const { start, publish } = data.parsedDates

      if (start && publish) {
        let title = `${this.displayDate(start, 'short')}–${this.displayDate(
          publish,
          'short',
        )}`

        if (data.issueTitle) {
          title = data.issueTitle
        }

        return `${title} | Around the Web`.trim()
      }
    },
    title: ({ issueTitle }) => issueTitle || 'Around the Web',
    permalink: function (data) {
      if (data.issueTitle) {
        return `/around-the-web/${data.page.fileSlug}-${this.slugify(
          data.issueTitle,
        )}/`
      }

      return `/around-the-web/${data.page.fileSlug}/`
    },
    sources: async function (data) {
      if (!data.page) return

      const rendered = await this.renderFile(data.page.inputPath)

      const { document } = parseHTML(rendered)
      const allLinks = document.querySelectorAll('a')
      const sources = new Set()

      for (const link of allLinks) {
        // as i dont link to gopher anything without http is most likely a link to my own page
        if (!link.href.startsWith('http')) {
          sources.add(data.site.baseURL)

          continue
        }

        sources.add(new URL(link.href).origin)
      }

      return {
        links: [...allLinks],
        count: allLinks.length,
        sources,
        distinct: sources.size,
      }
    },
  },
}
