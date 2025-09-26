function hrefForCard(data, ctx) {
  if (data.external) return data.external.source
  if (typeof data.permalink === 'function')
    return data.permalink.bind(ctx)(data)
  return data.permalink
}

function renderArticleCard({ data, eyebrow = '', date = '', ctx }) {
  const isExternal = !!data.external
  const externalClass = isExternal ? ' -external' : ''
  const href = hrefForCard(data, ctx)
  const id = `title-${data.page?.fileSlug || ''}`
  const intro = data.displayIntro || data.intro || ''

  return `
<article class="article-card u-has-fleuron" aria-labelledby="${id}">
  <p class="type-is-aside">${eyebrow}</p>
  <h2 id="${id}" class="article-card__headline">
    <a href="${href}" class="article-card__link${externalClass}">${
      data.title
    }</a>
  </h2>
  <p class="article-card__date type-is-aside">${date}</p>
  <p>${intro}</p>
  ${
    data.series
      ? `<p class="type-small-caps">${data.series.name} No. ${data.series.issue}</p>`
      : ''
  }
  <p class="type-is-aside"></p>
</article>
  `.trim()
}

module.exports = { renderArticleCard }
