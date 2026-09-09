const { dateToRfc3339 } = require('@11ty/eleventy-plugin-rss')
const displayDate = require('../../../_filters/display-date')
const {
  escapeHtml,
  articleCard,
  archiveHeader,
  iconLink,
} = require('../../../_helper/archive-html')

class TextIndex {
  data() {
    return {
      permalink: '/text/',
      templateClass: 'tmpl-article-list',
      pageTitle: 'Text',
      title: 'Scribbles on digital paper',
      hideBreadcrumb: true,
      eleventyComputed: {
        meta: (data) => ({
          ...data.meta,
          description: 'Mostly coherent.',
        }),
      },
    }
  }

  render({ collections, meta }) {
    const posts = [...(collections.publishedPosts || [])]
      .filter((post) => post.data.skipInArchive !== true)
      .reverse()

    const items = posts
      .map((post) => {
        const date = post.data.date
          ? `<span class="sr-only">Published in </span><time datetime="${dateToRfc3339(
              new Date(post.data.date),
            )}">${displayDate(post.data.date)}</time>`
          : ''
        const footer = post.data.external
          ? `Published: ${escapeHtml(post.data.external.medium)}`
          : ''
        return `<li>${articleCard(post.data, { date, footer })}</li>`
      })
      .join('\n')

    return `<main id="main" class="homepage-content" tabindex="-1">
${archiveHeader({
  title: 'Scribbles on digital paper',
  sub: escapeHtml(meta?.description || 'Mostly coherent.'),
  footer: iconLink({
    href: '/text/feed.xml',
    label: 'RSS Feed',
    icon: 'rssBox',
    content: 'RSS Feed',
  }),
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

module.exports = TextIndex
