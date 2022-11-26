const paths = new Map([['text', 'notes']])

module.exports = class Redirects {
  data() {
    return {
      layout: null,
      permalink: '_redirects',
    }
  }

  createLegacyRedirects(collection, currentBase) {
    const { slugify } = this

    return collection
      .map((item) => {
        const { permalink, external } = item.data

        if (external) return ''

        const cleanedPermalink = permalink.replace(`/${currentBase}/`, '')

        const redirects = []

        if (item.data.oldTitles) {
          item.data.oldTitles.forEach((title) =>
            redirects.push(
              `/${currentBase}/${slugify(title)}/ ${permalink} 301`,
            ),
          )
        }

        if (paths.get(currentBase)) {
          redirects.push(
            `/${paths.get(currentBase)}/${cleanedPermalink} ${permalink} 301`,
          )
        }

        return redirects.join('\n')
      })
      .join('\n')
  }

  render({ collections }) {
    const { blog, notes } = collections

    return `
https://11ty.owlish.dev/* /:splat 301
https://reading.ovl.design/* https://www.ovl.design/around-the-web/ 301
/around-the-web/013/ /around-the-web/013-do-robots-eat-electric-salad/ 301
/around-the-web/014/ /around-the-web/014-just-go-aahh-hardcore/ 301
${this.createLegacyRedirects(blog, 'text')}
${this.createLegacyRedirects(notes, 'notes')}
`.trim()
  }
}
