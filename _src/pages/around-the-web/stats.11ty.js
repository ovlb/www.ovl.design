import texticsPkg from 'textics'

const { textics } = texticsPkg
import capitaliser from '../../../_filters/capitaliser.js'
import categoryPermalink from '../../../_filters/category-permalink.js'
import {
  escapeHtml,
  archiveHeader,
  iconLink,
} from '../../../_helper/archive-html.js'

class AroundTheWebStats {
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

  render({ collections, meta, categoryBase }) {
    const atw = collections.aroundTheWeb || []
    const atwCats = collections.atwCategories || []

    let countLinks = 0
    let allLinks = []
    let sources = new Set()
    for (const { data } of atw) {
      allLinks = [...allLinks, ...(data.sources?.links || [])]
      countLinks += data.sources?.count || 0
      sources = new Set([...sources, ...(data.sources?.sources || [])])
    }

    let totalWords = 0
    let totalChars = 0
    for (const post of atw) {
      const { words, chars } = textics(post.templateContent || '')
      totalWords += words
      totalChars += chars
    }

    const issues = atw.length
    const categories = atwCats.length

    const mostLinks = [...atw].sort(
      (a, b) => b.data.sources.count - a.data.sources.count,
    )[0]
    const mostUnique = [...atw].sort(
      (a, b) => b.data.sources.distinct - a.data.sources.distinct,
    )[0]

    const domainCounts = []
    for (const source of sources) {
      const matched = allLinks.filter((link) => {
        if (!link.href.startsWith('http')) return false
        return new URL(link.href).origin === source
      })
      domainCounts.push({ host: new URL(source).host, count: matched.length })
    }
    const topDomains = domainCounts
      .sort((a, b) => b.count - a.count)
      .slice(0, 15)

    const enrichedCats = atwCats.map((category) => ({
      name: capitaliser(category),
      href: categoryPermalink(category, categoryBase),
      count: atw.filter((post) => post.data.tags.includes(category)).length,
    }))
    const topCats = enrichedCats.sort((a, b) => b.count - a.count).slice(0, 15)

    const stat = (n, t) =>
      `<section class="featured-stat"><b class="main-headline">${n}</b><p>${t}</p></section>`

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: 'Around the Numbers',
  sub: escapeHtml(meta?.description || ''),
  footer: iconLink({
    href: '/around-the-web/',
    label: 'Around the Web Archive',
    icon: 'folder',
    content: 'Archive',
  }),
})}
<section class="block-stats">${stat(issues, 'Issues')}${stat(
      categories,
      'Categories',
    )}${stat(countLinks, 'Links')}${stat(sources.size, 'Domains')}</section>
<section class="block-stats">${stat(
      mostLinks?.data.sources.count ?? 0,
      'Most Links in an Issue',
    )}${stat(
      mostUnique?.data.sources.distinct ?? 0,
      'Most Sources in an Issue',
    )}</section>
<section class="block-stats"><p>In total, I wrote <b>${totalWords.toLocaleString(
      'en-UK',
    )}</b> words with <b>${totalChars.toLocaleString(
      'en-UK',
    )}</b> characters.</p></section>
<section class="block-stats">
<section><h2 class="sub-headline">Top Domains</h2><ol>${topDomains
      .map((d) => `<li>${escapeHtml(d.host)} (${d.count})</li>`)
      .join('\n')}</ol></section>
<section><h2 class="sub-headline">Top Categories</h2><ol>${topCats
      .map(
        (c) =>
          `<li><a href="${escapeHtml(c.href)}">${escapeHtml(c.name)}</a> (${
            c.count
          })</li>`,
      )
      .join('\n')}</ol></section>
</section>
</main>`
  }
}

export default AroundTheWebStats
