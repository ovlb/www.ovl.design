const { Feed } = require('feed')
const { baseURL } = require(`${process.cwd()}/_src/_data/site`)
const {
  absoluteUrl,
  convertHtmlToAbsoluteUrls,
  getNewestCollectionItemDate,
} = require('@11ty/eleventy-plugin-rss')

module.exports = class AtwFeed {
  data() {
    return {
      layout: null,
      permalink: '/around-the-web/feed.xml',
      eleventyExcludeFromCollections: true,
      collection: 'aroundTheWeb',
      metadata: this.metadata,
    }
  }

  get feedURL() {
    return `${baseURL}${this.metadata.feedID}/feed.xml`
  }

  get metadata() {
    return {
      title: 'ovl.design » around the web',
      subtitle: 'links from around the web',
      feedID: '/around-the-web',
    }
  }

  makeFeed(baseData, collection) {
    return new Feed({
      ...baseData,
      ...this.metadata,
      id: this.feedURL,
      link: absoluteUrl(`${this.metadata.feedID}/`, baseURL),
      updated: getNewestCollectionItemDate(collection),
      feedLinks: {
        json: this.feedURL,
        atom: this.feedURL,
      },
    })
  }

  async render({ feed: feedData, collections, site, css }) {
    const { aroundTheWeb } = collections

    const feed = this.makeFeed(feedData, aroundTheWeb)

    for (const post of aroundTheWeb.reverse()) {
      const link = absoluteUrl(post.data.permalink, site.baseURL)

      feed.addItem({
        title: post.data.title,
        link,
        id: link,
        date: post.data.parsedDates.publish,
        description: post.data.intro,
        content: `
          ${css.newsletter.parsed}
          ${await convertHtmlToAbsoluteUrls(
            await this.feedImages(this.fixCite(post.templateContent)),
            this.feedURL,
          )}`,
        image: post.data.meta.image.src,
      })
    }

    return feed.atom1()
  }
}
