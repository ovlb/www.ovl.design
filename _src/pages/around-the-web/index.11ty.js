const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)
const { renderIconLink } = require(
  `${process.cwd()}/_helper/components/icon-link`,
)
const { renderArticleCard } = require(
  `${process.cwd()}/_helper/components/article-card`,
)

module.exports = class AtwIndexPage {
  data() {
    return {
      layout: undefined,
      permalink: '/around-the-web/',
      title: 'Around the Web',
      hideBreadcrumb: true,
      pageCSS: undefined,
      eleventyComputed: {
        meta: (data) => ({
          description:
            data.meta?.description ||
            data.intro ||
            'A digest of interesting links from – you might have guessed it – around the web.',
        }),
        pageTitle: () => 'Around the Web',
      },
    }
  }

  get sortedPosts() {
    return (posts) =>
      [...posts].sort((a, b) => {
        const aNum = parseInt(a.data.page.fileSlug)
        const bNum = parseInt(b.data.page.fileSlug)
        if (aNum < bNum) return 1
        if (aNum > bNum) return -1
        return 0
      })
  }

  postToCardItem({ data }) {
    let title
    if (!data.issueTitle) {
      const start = this.displayDate(data.parsedDates.start, 'short')
      const end = this.displayDate(data.parsedDates.publish, 'short')
      title = `${start}–${end}`
    }
    if (data.issueTitle) {
      title = data.issueTitle
    }
    return { ...data, title }
  }

  render({ collections, meta }) {
    const posts = this.sortedPosts(collections.aroundTheWeb)

    const links = [
      renderIconLink({
        href: '/around-the-web/feed.xml',
        label: 'RSS Feed',
        icon: 'rss-box',
      }),
      renderIconLink({
        href: 'https://buttondown.email/around-the-web',
        label: 'Newsletter',
        icon: 'mailbox-up',
      }),
      renderIconLink({
        href: '/around-the-web/statistics/',
        label: 'Statistics',
        icon: 'chart',
      }),
    ].join('')

    const header = renderArchiveHeader({
      title: 'Around the Web',
      description: meta?.description || '',
      footerHtml: `<section class="l-stack l-stack--horizontal l-stack--wraps archive-header__icons" style="--stack-space: 0.5rem">${links}</section>`,
    })

    return `
<main id="main" tabindex="-1">
  ${header}
  <ol class="article-list u-global-padding" role="list">
    ${posts
      .map((post) => {
        const card = this.postToCardItem(post)
        const eyebrow = `No.\u00A0${post.data.page.fileSlug}`
        return `
      <li>
        ${renderArticleCard({ data: card, eyebrow, date: '', ctx: this })}
      </li>`
      })
      .join('')}
  </ol>
</main>
    `.trim()
  }
}
