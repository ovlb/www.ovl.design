const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)
const { renderIconLink } = require(
  `${process.cwd()}/_helper/components/icon-link`,
)
const { renderArticleCard } = require(
  `${process.cwd()}/_helper/components/article-card`,
)
const { dateToRfc3339 } = require('@11ty/eleventy-plugin-rss')
const categoryPermalink = require(
  `${process.cwd()}/_filters/category-permalink`,
)
const capitaliser = require(`${process.cwd()}/_filters/capitaliser`)

module.exports = class TextCategoryPage {
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
      pageCSS: ['text'],
    }
  }

  get postsList() {
    return (collection, category) =>
      collection
        .filter((post) => post.data.tags?.includes(category))
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
  }

  render({ collections, category }) {
    const posts = this.postsList(collections.blog, category)

    const header = renderArchiveHeader({
      title: capitaliser(category),
      description: `This is an automatically generated archive of ${posts.length} blog posts.`,
      footerHtml: `
<section class="l-stack l-stack--horizontal l-stack--wraps archive-header__icons" style="--stack-space: 0.5rem">
  ${renderIconLink({
    href: '/text/',
    label: 'All posts',
    icon: 'folder-outline',
  })}
</section>
`.trim(),
    })

    const list = posts
      .map(({ data: post }) => {
        const dateHtml = post.date
          ? `<span class="sr-only">Published in </span><time datetime="${dateToRfc3339(
              new Date(post.date),
            )}">${this.displayDate(post.date)}</time>`
          : ''
        return `
      <li>
        ${renderArticleCard({
          data: post,
          eyebrow: '',
          date: dateHtml,
          ctx: this,
        })}
      </li>`
      })
      .join('')

    return `
<main id="main" tabindex="-1">
  ${header}
  <ol class="article-list u-global-padding" role="list">
    ${list}
  </ol>
</main>
    `.trim()
  }
}
