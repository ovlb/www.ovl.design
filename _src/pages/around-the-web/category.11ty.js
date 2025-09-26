const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)
const { renderArticleCard } = require(
  `${process.cwd()}/_helper/components/article-card`,
)
const categoryPermalink = require(
  `${process.cwd()}/_filters/category-permalink`,
)
const capitaliser = require(`${process.cwd()}/_filters/capitaliser`)

module.exports = class AtwCategoryPage {
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

  get postsList() {
    return (collection, category) =>
      collection
        .filter((post) => post.data.tags.includes(category))
        .sort(
          (postA, postB) =>
            parseInt(postB.data.page.fileSlug) -
            parseInt(postA.data.page.fileSlug),
        )
  }

  postToCardItem(post) {
    const start = this.displayDate(post.data.parsedDates.start, 'short')
    const end = this.displayDate(post.data.parsedDates.publish, 'short')

    let title = `${start}–${end}`

    if (post.data.issueTitle) {
      title = `${post.data.issueTitle} (${start}–${end})`
    }

    return { ...post.data, title }
  }

  render({ collections, category }) {
    const posts = this.postsList(collections.aroundTheWeb, category)

    const header = renderArchiveHeader({
      title: capitaliser(category),
      description:
        'This is an automatically generated archive of <a href="/around-the-web/">Around the Web</a> posts.',
    })

    const list = posts
      .map((post) => {
        const card = this.postToCardItem(post)
        const eyebrow = `No.\u00A0${post.data.page.fileSlug}`
        return `
      <li>
        ${renderArticleCard({ data: card, eyebrow, date: '', ctx: this })}
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
