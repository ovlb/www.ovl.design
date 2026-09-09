const { dateToRfc3339 } = require('@11ty/eleventy-plugin-rss')
const capitaliser = require('../../../_filters/capitaliser')
const categoryPermalink = require('../../../_filters/category-permalink')
const displayDate = require('../../../_filters/display-date')
const {
  escapeHtml,
  articleCard,
  archiveHeader,
  iconLink,
} = require('../../../_helper/archive-html')

class TextCategory {
  data() {
    return {
      pagination: {
        data: 'collections.blogCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          categoryPermalink(data.category, data.categoryBase),
        title: (data) => capitaliser(data.category),
        pageTitle: (data) =>
          `${capitaliser(data.category)} | Collections | Text`,
      },
    }
  }

  render({ collections, category }) {
    const posts = (collections.blog || [])
      .filter((post) => post.data.tags?.includes(category))
      .sort((a, b) => a.data.title.localeCompare(b.data.title))

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

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: capitaliser(category),
  sub: `<p>This is an automatically generated archive of ${posts.length} blog posts.</p>`,
  footer: iconLink({
    href: '/text/',
    icon: 'folder',
    content: 'All posts',
  }),
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

module.exports = TextCategory
