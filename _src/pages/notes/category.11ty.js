const capitaliser = require('../../../_filters/capitaliser')
const categoryPermalink = require('../../../_filters/category-permalink')
const { escapeHtml, archiveHeader } = require('../../../_helper/archive-html')

class NotesCategory {
  data() {
    return {
      pagination: {
        data: 'collections.noteCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          categoryPermalink(data.category, data.categoryBase),
        title: (data) => capitaliser(data.category),
        pageTitle: (data) =>
          `${capitaliser(data.category)} | Collections | Notes`,
      },
    }
  }

  render({ collections, category }) {
    const posts = (collections.notes || [])
      .filter((post) => post.data.tags.includes(category))
      .sort((a, b) => a.data.title.localeCompare(b.data.title))

    const items = posts
      .map(
        (post) =>
          `<li><h3><a href="${escapeHtml(post.data.page.url)}">${escapeHtml(
            post.data.title,
          )}</a></h3></li>`,
      )
      .join('\n')

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: capitaliser(category),
  sub: `<p>This is an automatically generated archive of <a href="/notes/">notes</a>.</p>`,
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

module.exports = NotesCategory
