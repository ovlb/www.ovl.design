import { Feed } from 'feed'
import siteData from '../../_data/site.js'

const { baseURL } = siteData
import {
  absoluteUrl,
  convertHtmlToAbsoluteUrls,
  getNewestCollectionItemDate,
} from '@11ty/eleventy-plugin-rss'

export default class TextFeed {
  data() {
    return {
      layout: null,
      permalink: '/text/feed.xml',
      eleventyExcludeFromCollections: true,
      collection: 'blog',
      metadata: this.metadata,
    }
  }

  get feedURL() {
    return `${baseURL}${this.metadata.feedID}/feed.xml`
  }

  async enrichContent(post) {
    const parsed = await convertHtmlToAbsoluteUrls(
      await this.feedImages(this.fixCite(post.templateContent)),
      this.feedURL,
    )

    return parsed
  }

  get metadata() {
    return {
      title: 'ovl.design » text',
      subtitle: 'mostly coherent scribbles on digital paper',
      feedID: '/text',
    }
  }

  makeFeed(baseData, collection) {
    return new Feed({
      ...baseData,
      ...this.metadata,
      id: this.feedURL,
      description: this.metadata.subtitle,
      link: absoluteUrl(`${this.metadata.feedID}/`, baseURL),
      updated: getNewestCollectionItemDate(collection),
      feedLinks: {
        json: this.feedURL,
        atom: this.feedURL,
      },
    })
  }

  async render({ feed: feedData, collections, site }) {
    const { blog } = collections

    const feed = this.makeFeed(feedData, blog)

    for (const post of blog.reverse()) {
      let link = absoluteUrl(post.data.permalink, site.baseURL)

      if (post.data.external) {
        link = post.data.external.source
      }

      feed.addItem({
        title: post.data.title,
        link,
        id: link,
        date: new Date(post.data.date),
        description: post.data.displayIntro,
        image: post.data.meta.image.src,
        ...(post.templateContent && {
          content: await this.enrichContent(post),
        }),
      })
    }

    return feed.atom1()
  }
}
