import capitaliser from '../../../_filters/capitaliser.ts'
import categoryPermalink from '../../../_filters/category-permalink.ts'
import { escapeHtml, archiveHeader } from '../../../_helper/archive-html.ts'

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
        permalink: (data: any) =>
          categoryPermalink(data.category, data.categoryBase),
        title: (data: any) => capitaliser(data.category),
        pageTitle: (data: any) =>
          `${capitaliser(data.category)} | Collections | Notes`,
      },
    }
  }

  render({ collections, category }: any) {
    const posts = (collections.notes || [])
      .filter((post: any) => post.data.tags.includes(category))
      .sort((a: any, b: any) => a.data.title.localeCompare(b.data.title))

    const items = posts
      .map(
        (post: any) =>
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

export default NotesCategory
