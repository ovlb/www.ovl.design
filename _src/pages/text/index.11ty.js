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

module.exports = class TextIndexPage {
  data() {
    return {
      permalink: '/text/',
      templateClass: 'tmpl-article-list',
      pageTitle: 'Text',
      title: 'Scribbles on digital paper',
      hideBreadcrumb: true,
      pageCSS: ['text'],
      eleventyComputed: {
        meta: (data) => ({
          ...data.meta,
          description: 'Mostly coherent.',
        }),
      },
    }
  }

  get postsList() {
    return (collection) =>
      [...collection]
        .filter((post) => post.data.skipInArchive !== true)
        .reverse()
  }

  render({ collections, meta }) {
    const posts = this.postsList(collections.publishedPosts)

    const header = renderArchiveHeader({
      title: 'Scribbles on digital paper',
      description: meta.description,
      footerHtml: `
<section class="l-stack l-stack--horizontal l-stack--wraps archive-header__icons" style="--stack-space: 0.5rem">
  ${renderIconLink({
    href: '/text/feed.xml',
    label: 'RSS Feed',
    icon: 'rss-box',
  })}
</section>
`.trim(),
    })

    const list = posts
      .map(({ data: post }) => {
        const eyebrow = ''
        const dateHtml = post.date
          ? `<span class="sr-only">Published in </span><time datetime="${dateToRfc3339(
              new Date(post.date),
            )}">${this.displayDate(post.date)}</time>`
          : ''
        return `
      <li>
        ${renderArticleCard({ data: post, eyebrow, date: dateHtml, ctx: this })}
      </li>`
      })
      .join('')

    return `
<main id="main" class="homepage-content" tabindex="-1">
  ${header}
  <ol class="article-list u-global-padding" role="list">
    ${list}
  </ol>
</main>
    `.trim()
  }
}
