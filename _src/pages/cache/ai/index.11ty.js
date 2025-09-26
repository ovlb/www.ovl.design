const startCase = require(`${process.cwd()}/_filters/start-case`)

module.exports = class CacheAiIndexPage {
  data() {
    return {
      permalink: '/cache/ai/',
      eleventyComputed: {
        meta: ({ meta }) => ({
          ...meta,
          description: 'fragments on ai/machine learning and society',
        }),
        title: (data) => `${data.headline} | Cache`,
      },
      headline: 'Artificial (Un)intelligence',
    }
  }

  getHost(url) {
    return new URL(url).host.replace('www.', '')
  }

  render({
    headline,
    meta,
    collections,
    aroundTheWebCategory,
    journalism,
    science,
    talks,
    podcasts,
  }) {
    const categories = [journalism, science, talks, podcasts].filter(
      (c) => c.data.length > 0,
    )
    const aroundTheWebIssues = collections.aroundTheWeb
      .filter((post) => post.data.tags.includes(aroundTheWebCategory))
      .reverse()

    const idList = categories
      .map(
        (collection) => `
        <li><a href="#${this.slug(collection.title)}" aria-label="${
          collection.title
        }">#${this.slug(collection.title)}</a></li>
      `,
      )
      .join('')

    const atwList = aroundTheWebIssues
      .map(
        (issue) =>
          `<li><a href="${issue.data.permalink}">${issue.data.page.fileSlug}</a></li>`,
      )
      .join('')

    const categoryBlocks = categories
      .map((collection) => {
        const items = collection.data
          .sort((a, b) =>
            (a.title || '')
              .toLowerCase()
              .localeCompare((b.title || '').toLowerCase()),
          )
          .map(
            (item) => `
            <li class="post-item post-list__item">
              <article style="--stack-space: 0.25rem">
                <h3 class="small-headline"><a href="${item.url}">${
                  item.title
                }</a></h3>
                <footer class="type-is-aside l-stack--wraps" style="--stack-space: var(--space-s)">
                  <span>${this.getHost(item.url)}</span>
                  <span>${(item.topics || [])
                    .sort((a, b) =>
                      a.toLowerCase().localeCompare(b.toLowerCase()),
                    )
                    .map((t) => startCase(t))
                    .join(', ')}</span>
                </footer>
              </article>
            </li>
          `,
          )
          .join('')

        return `
      <section id="${this.slug(collection.title)}" class="content-block">
        <h2 class="sub-headline">${collection.title}</h2>
        <ul class="post-list" style="--stack-space: var(--space-s)">
          ${items}
        </ul>
      </section>`
      })
      .join('')

    return `
<main id="main" class="cache-content" tabindex="-1">
  <header class="cache-content__header">
    <h1 class="main-headline">${headline}</h1>
    <p>${meta.description}</p>
    <nav aria-label="Collections">
      <ul class="id-list">${idList}</ul>
    </nav>
  </header>
  <section class="cache-content__content">
    <section class="content-block">
      <h2 class="sub-headline">Around the Web</h2>
      <ul class="post-list inline-list">${atwList}</ul>
    </section>
    ${categoryBlocks}
  </section>
</main>
    `.trim()
  }
}
