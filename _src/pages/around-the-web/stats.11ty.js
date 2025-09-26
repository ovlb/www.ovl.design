const { renderArchiveHeader } = require(
  `${process.cwd()}/_helper/components/archive-header`,
)
const { renderIconLink } = require(
  `${process.cwd()}/_helper/components/icon-link`,
)
const { textics } = require('textics')
const categoryPermalink = require(
  `${process.cwd()}/_filters/category-permalink`,
)

module.exports = class AtwStatsPage {
  data() {
    return {
      permalink: '/around-the-web/statistics/',
      pageTitle: 'Around the Numbers | Around the Web',
      eleventyComputed: {
        meta: ({ meta, site }) => ({
          ...meta,
          description: 'Statistics for Around the Web',
          image: {
            src: `${site.baseURL}/img/around-the-web/around-the-numbers.jpg`,
            alt: 'An image of actor Zach Galifianakis from The Hangover thinking hard as math equations fly by his head, similar to the Math Lady meme. The image is coloured in red. The word «Around the Numbers» are written on top.',
          },
        }),
      },
    }
  }

  get categories() {
    return (collections) => collections.atwCategories.length
  }

  get issues() {
    return (collections) => collections.aroundTheWeb.length
  }

  getIssueData(collections) {
    const posts = collections.aroundTheWeb
    const mostLinks = [...posts].sort(
      (a, b) => b.data.sources.count - a.data.sources.count,
    )[0]
    const mostUnique = [...posts].sort(
      (a, b) => b.data.sources.distinct - a.data.sources.distinct,
    )[0]

    return {
      mostLinks: {
        issue: mostLinks.fileSlug,
        link: `/around-the-web/${mostLinks.fileSlug}/`,
        count: mostLinks.data.sources.count,
      },
      mostUnique: {
        issue: mostUnique.fileSlug,
        link: `/around-the-web/${mostUnique.fileSlug}/`,
        count: mostUnique.data.sources.distinct,
      },
    }
  }

  getSourceData(collections) {
    const posts = collections.aroundTheWeb
    let countLinks = 0
    let allLinks = []
    let sources = new Set()

    for (const { data } of posts) {
      allLinks = [...allLinks, ...data.sources.links]
      countLinks = countLinks + data.sources.count
      sources = new Set([...sources, ...data.sources.sources])
    }

    return { allLinks, countLinks, sources, distinct: sources.size }
  }

  getTextData(collections) {
    const posts = collections.aroundTheWeb
    let totalWords = 0
    let totalChars = 0

    for (const post of posts) {
      const { words, chars } = textics(post.templateContent)
      totalWords += words
      totalChars += chars
    }

    return {
      totalWords: totalWords.toLocaleString('en-UK'),
      totalChars: totalChars.toLocaleString('en-UK'),
    }
  }

  getTopDomains(collections) {
    const { allLinks, sources } = this.getSourceData(collections)
    const links = new Set()
    for (const source of sources) {
      const matched = allLinks.filter((link) => {
        if (!link.href.startsWith('http')) return false
        return new URL(link.href).origin === source
      })
      links.add({ host: new URL(source).host, count: matched.length })
    }
    return [...links].sort((a, b) => b.count - a.count).slice(0, 15)
  }

  getTopCategories(collections, categoryBase) {
    const categories = collections.atwCategories
    const enriched = []
    for (const category of categories) {
      const posts = collections.aroundTheWeb.filter((post) =>
        post.data.tags.includes(category),
      )
      enriched.push({
        name: this.capitaliser(category),
        href: categoryPermalink(category, categoryBase),
        count: posts.length,
      })
    }
    return enriched.sort((a, b) => b.count - a.count).slice(0, 15)
  }

  render({ collections, categoryBase, meta }) {
    const header = renderArchiveHeader({
      title: 'Around the Numbers',
      description: meta.description,
      footerHtml: `
<section class="l-stack l-stack--horizontal l-stack--wraps archive-header__icons" style="--stack-space: 0.5rem">
  ${renderIconLink({
    href: '/around-the-web/',
    label: 'Archive',
    icon: 'folder-outline',
  })}
</section>
`.trim(),
    })

    const issueData = this.getIssueData(collections)
    const sourceData = this.getSourceData(collections)
    const textData = this.getTextData(collections)
    const topFifteenDomains = this.getTopDomains(collections)
    const topFifteenCategories = this.getTopCategories(
      collections,
      categoryBase,
    )

    const featureRows = [
      {
        id: 0,
        children: [
          { stat: this.issues(collections), text: 'Issues' },
          { stat: this.categories(collections), text: 'Categories' },
          { stat: sourceData.countLinks, text: 'Links' },
          { stat: sourceData.distinct, text: 'Domains' },
        ],
      },
      {
        id: 1,
        children: [
          { stat: issueData.mostLinks.count, text: 'Most Links in an Issue' },
          {
            stat: issueData.mostUnique.count,
            text: 'Most Sources in an Issue',
          },
        ],
      },
    ]

    const featureBlocks = featureRows
      .map((row) => {
        const stats = row.children
          .map(
            (c) => `
        <section class="featured-stat">
          <b class="main-headline">${c.stat}</b>
          <p>${c.text}</p>
        </section>`,
          )
          .join('')
        return `<section class="block-stats">${stats}</section>`
      })
      .join('')

    const domainsHtml = topFifteenDomains
      .map((d) => `<li>${d.host} (${d.count})</li>`)
      .join('')
    const categoriesHtml = topFifteenCategories
      .map((c) => `<li><a href="${c.href}">${c.name}</a> (${c.count})</li>`)
      .join('')

    return `
<main id="main" tabindex="-1">
  ${header}
  ${featureBlocks}
  <section class="block-stats">
    <p>In total, I wrote <b>${textData.totalWords}</b> words with <b>${textData.totalChars}</b> characters.</p>
  </section>
  <section class="block-stats">
    <section>
      <h2 class="sub-headline">Top Domains</h2>
      <ol>${domainsHtml}</ol>
    </section>
    <section>
      <h2 class="sub-headline">Top Categories</h2>
      <ol>${categoriesHtml}</ol>
    </section>
  </section>
</main>
    `.trim()
  }
}
