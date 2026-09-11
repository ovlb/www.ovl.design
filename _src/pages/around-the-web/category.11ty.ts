import capitaliser from '../../../_filters/capitaliser.ts'
import categoryPermalink from '../../../_filters/category-permalink.ts'
import displayDate from '../../../_filters/display-date.ts'
import {
  escapeHtml,
  articleCard,
  archiveHeader,
} from '../../../_helper/archive-html.ts'

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
        permalink: (data: any) =>
          categoryPermalink(data.category, data.categoryBase),
        title: (data: any) => capitaliser(data.category),
        pageTitle: (data: any) =>
          `${capitaliser(data.category)} | Collections | Around the Web`,
      },
    }
  }

  render({ collections, category }: any) {
    const posts = (collections.aroundTheWeb || [])
      .filter((post: any) => post.data.tags.includes(category))
      .sort(
        (a: any, b: any) =>
          parseInt(b.data.page.fileSlug) - parseInt(a.data.page.fileSlug),
      )

    const items = posts
      .map((post: any) => {
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

export default AroundTheWebCategory
