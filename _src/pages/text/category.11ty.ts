import {
  // @ts-ignore
  dateToRfc3339,
} from '@11ty/eleventy-plugin-rss'
import capitaliser from '../../../_filters/capitaliser.ts'
import categoryPermalink from '../../../_filters/category-permalink.ts'
import displayDate from '../../../_filters/display-date.ts'
import {
  escapeHtml,
  articleCard,
  archiveHeader,
  iconLink,
} from '../../../_helper/archive-html.ts'

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
        permalink: (data: any) =>
          categoryPermalink(data.category, data.categoryBase),
        title: (data: any) => capitaliser(data.category),
        pageTitle: (data: any) =>
          `${capitaliser(data.category)} | Collections | Text`,
      },
    }
  }

  render({ collections, category }: any) {
    const posts = (collections.blog || [])
      .filter((post: any) => post.data.tags?.includes(category))
      .sort((a: any, b: any) => a.data.title.localeCompare(b.data.title))

    const items = posts
      .map((post: any) => {
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
  } as any),
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

export default TextCategory
