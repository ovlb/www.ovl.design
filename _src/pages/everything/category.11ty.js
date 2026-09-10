import capitaliser from '../../../_filters/capitaliser.js'
import categoryPermalink from '../../../_filters/category-permalink.js'
import {
  escapeHtml,
  archiveHeader,
  iconLink,
} from '../../../_helper/archive-html.js'

class EverythingCategory {
  data() {
    return {
      pagination: {
        data: 'collections.categories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          categoryPermalink(data.category, data.categoryBase),
        pageTitle: (data) => `${capitaliser(data.category)} | Everything`,
      },
    }
  }

  render({ collections, category }) {
    const posts = (collections.all || [])
      .filter((post) => post.data.tags?.includes(category))
      .sort(() => Math.random() - 0.5)
      .filter((post) => post.data.external !== true)

    const items = posts
      .map(
        (post) =>
          `<li><h2><a href="${escapeHtml(post.data.page.url)}">${escapeHtml(
            post.data.pageTitle || post.data.title,
          )}</a></h2></li>`,
      )
      .join('\n')

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: capitaliser(category),
  sub: `<p>This is an automatically generated archive of ${posts.length} randomly sorted posts, which are a subset of <a href="/everything/">everything</a>.</p>`,
  footer: [
    iconLink({
      href: '/everything/',
      icon: 'folder',
      content: 'Everything',
    }),
    iconLink({
      href: '/',
      icon: 'home',
      content: 'Back home',
    }),
  ].join(''),
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

export default EverythingCategory
