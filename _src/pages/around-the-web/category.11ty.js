const capitaliser = require('../../../_filters/capitaliser')
const categoryPermalink = require('../../../_filters/category-permalink')
const displayDate = require('../../../_filters/display-date')
const {
  escapeHtml,
  articleCard,
  archiveHeader,
} = require('../../../_helper/archive-html')

class AroundTheWebCategory {
  data() {
    return {
      pagination: {
        data: 'collections.atwCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          categoryPermalink(data.category, data.categoryBase),
        title: (data) => capitaliser(data.category),
        pageTitle: (data) =>
          `${capitaliser(data.category)} | Collections | Around the Web`,
      },
    }
  }

  render({ collections, category }) {
    const posts = (collections.aroundTheWeb || [])
      .filter((post) => post.data.tags.includes(category))
      .sort(
        (a, b) =>
          parseInt(b.data.page.fileSlug) - parseInt(a.data.page.fileSlug),
      )

    const items = posts
      .map((post) => {
        const start = displayDate(post.data.parsedDates.start, 'short')
        const end = displayDate(post.data.parsedDates.publish, 'short')
        let title = `${start}–${end}`
        if (post.data.issueTitle)
          title = `${post.data.issueTitle} (${start}–${end})`
        return `<li>${articleCard(
          { ...post.data, title },
          { eyebrow: `No.&nbsp;${escapeHtml(post.data.page.fileSlug)}` },
        )}</li>`
      })
      .join('\n')

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: capitaliser(category),
  sub: `<p>This is an automatically generated archive of <a href="/around-the-web/">Around the Web</a> posts.</p>`,
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

module.exports = AroundTheWebCategory
