const paths = new Map([['text', 'notes']])

export default class Redirects {
  data() {
    return {
      layout: null,
      permalink: '_redirects',
      eleventyExcludeFromCollections: true,
    }
  }

  createAtwRedirects(posts: any) {
    return posts
      .filter((post: any) => !!post.data.issueTitle)
      .map((post: any) => {
        return `/around-the-web/${post.data.page.fileSlug}/ ${post.data.permalink} 301`
      })
      .join('\n')
  }

  createLegacyRedirects(this: any, collection: any, currentBase: any) {
    const slugify = this.slugify.bind(this)

    return collection
      .map((item: any) => {
        const { permalink, external } = item.data

        if (external) return ''

        const cleanedPermalink = permalink.replace(`/${currentBase}/`, '')

        const redirects = []

        if (item.data.oldTitles) {
          item.data.oldTitles.forEach((title: any) =>
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

  render(this: any, { collections }: any) {
    const { blog, notes, aroundTheWeb } = collections

    return `
https://11ty.owlish.dev/* /:splat 301
https://reading.ovl.design/* https://www.ovl.design/around-the-web/ 301
/atw /around-the-web/ 301
${this.createLegacyRedirects(blog, 'text')}
${this.createLegacyRedirects(notes, 'notes')}
${this.createAtwRedirects(aroundTheWeb)}
`.trim()
  }
}
