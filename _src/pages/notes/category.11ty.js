const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)

module.exports = class NotesCategoryPage {
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
          require(`${process.cwd()}/_filters/category-permalink`)(
            data.category,
            data.categoryBase,
          ),
        title: (data) =>
          require(`${process.cwd()}/_filters/capitaliser`)(data.category),
        pageTitle: (data) =>
          `${require(`${process.cwd()}/_filters/capitaliser`)(
            data.category,
          )} | Collections | Notes`,
      },
      pageCSS: ['text'],
    }
  }

  get postsList() {
    return (collection, category) =>
      collection
        .filter((post) => post.data.tags.includes(category))
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
  }

  render({ collections, category }) {
    const posts = this.postsList(collections.notes, category)

    const header = renderArchiveHeader({
      title: require(`${process.cwd()}/_filters/capitaliser`)(category),
      description: `This is an automatically generated archive of <a href="/notes/">notes</a>.`,
      footerHtml: '',
    })

    const list = posts
      .map((post) => {
        return `
      <li>
        <h3>
          <a href="${post.data.page.url}">${post.data.title}</a>
        </h3>
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
