const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)
const { renderIconLink } = require(
  `${process.cwd()}/_helper/components/icon-link`,
)
const categoryPermalink = require(
  `${process.cwd()}/_filters/category-permalink`,
)
const capitaliser = require(`${process.cwd()}/_filters/capitaliser`)

module.exports = class EverythingCategoryPage {
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
      pageCSS: ['text'],
    }
  }

  get postsList() {
    return (collection, category) =>
      collection
        .filter((post) => post.data.tags?.includes(category))
        .sort(() => Math.random() - Math.random())
  }

  render({ collections, category }) {
    const posts = this.postsList(collections.all, category)

    const header = renderArchiveHeader({
      title: capitaliser(category),
      description: `This is an automatically generated archive of ${posts.length} randomly sorted posts, which are a subset of <a href="/everything/">everything</a>.`,
      footerHtml: `
<section class="l-stack l-stack--horizontal l-stack--wraps archive-header__icons" style="--stack-space: 0.5rem">
  ${renderIconLink({
    href: '/everything/',
    label: 'Everything',
    icon: 'folder-outline',
  })}
  ${renderIconLink({ href: '/', label: 'Back home', icon: 'home-outline' })}
</section>
`.trim(),
    })

    const list = posts
      .filter((post) => !!post.data.external !== true)
      .map((post) => {
        const title = post.data.pageTitle || post.data.title
        return `
      <li>
        <h2>
          <a href="${post.data.page.url}">${title}</a>
        </h2>
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
