const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)
const { renderIconLink } = require(
  `${process.cwd()}/_helper/components/icon-link`,
)
const categoryPermalink = require(
  `${process.cwd()}/_filters/category-permalink`,
)

module.exports = class EverythingIndexPage {
  data() {
    return {
      permalink: '/everything/',
      hideBreadcrumb: true,
      title: 'Everything',
      pageTitle: 'Everything',
    }
  }

  get things() {
    return (collection) =>
      [...collection]
        .filter((post) => !!post.data.external !== true)
        .sort(() => Math.random() - Math.random())
  }

  render({ collections }) {
    const allTheThings = this.things(collections.all)

    const header = renderArchiveHeader({
      title: 'Everything',
      description:
        'Welcome to chaos.<br />\nAll ' +
        allTheThings.length +
        ' pages of this website.<br />\nOrdered randomly on every build.',
      footerHtml: `
<section class="l-stack l-stack--horizontal l-stack--wraps archive-header__icons" style="--stack-space: 0.5rem">
  ${renderIconLink({
    href: '/',
    label: 'Take me back to order',
    icon: 'home-outline',
  })}
</section>
`.trim(),
    })

    const list = allTheThings
      .map((thing) => {
        const href = thing.permalink || thing.data.page.url
        const text = thing.data.pageTitle || thing.title || thing.data.title
        return `
      <li>
        <h2 class="type-0"><a href="${href}">${text}</a></h2>
      </li>`
      })
      .join('')

    const categories = collections.categories || []
    const categoriesHtml = categories
      .map(
        (category) => `
        <li>
          <a href="${categoryPermalink(
            category,
            '/everything',
          )}">${this.capitaliser(category)}</a>
        </li>`,
      )
      .join('')

    return `
<main id="main" tabindex="-1">
  ${header}
  <ul class="article-list main-grid-content t-center" role="list">
    ${list}
  </ul>
  <section class="main-grid-content">
    <h2 class="sub-headline">Collections</h2>
    <ul role="list" class="inline-list">
      ${categoriesHtml}
    </ul>
  </section>
</main>
    `.trim()
  }
}
