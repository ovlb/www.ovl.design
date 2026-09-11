import startCase from '../../../../_filters/start-case.ts'
import { escapeHtml, slugify } from '../../../../_helper/archive-html.ts'

function getHost(url: any) {
  return new URL(url).host.replace('www.', '')
}

class AiCache {
  data() {
    return {
      headline: 'Artificial (Un)intelligence',
      permalink: '/cache/ai/',
      pageCSS: ['cache'],
      eleventyComputed: {
        meta: ({ meta }: any) => ({
          ...meta,
          description: 'fragments on ai/machine learning and society',
        }),
        title: (data: any) => `${data.headline} | Cache`,
      },
    }
  }

  render(data: any) {
    const {
      collections,
      journalism,
      science,
      talks,
      podcasts,
      aroundTheWebCategory,
    } = data

    const postCollections = [journalism, science, talks, podcasts].filter(
      (c: any) => c?.data.length > 0,
    )

    const aroundTheWebIssues = (collections.aroundTheWeb || [])
      .filter((post: any) => post.data.tags.includes(aroundTheWebCategory))
      .reverse()

    const nav = postCollections
      .map(
        (c: any) =>
          `<li><a href="#${slugify(c.title)}" aria-label="${escapeHtml(
            c.title,
          )}">#${slugify(c.title)}</a></li>`,
      )
      .join('\n')

    const issueList = aroundTheWebIssues
      .map(
        (issue: any) =>
          `<li><a href="${escapeHtml(issue.data.permalink)}">${escapeHtml(
            issue.data.page.fileSlug,
          )}</a></li>`,
      )
      .join('\n')

    const blocks = postCollections
      .map((collection: any) => {
        const items = collection.data
          .map((item: any) => {
            const topics = (item.topics || [])
              .sort((a: any, b: any) =>
                a.toLowerCase().localeCompare(b.toLowerCase()),
              )
              .map((t: any) => startCase(t))
              .join(', ')
            return `<li class="post-item post-list__item"><article class="l-stack l-stack--vertical" style="--stack-space: 0.25rem">
<h3 class="small-headline"><a href="${escapeHtml(item.url)}">${escapeHtml(
              item.title,
            )}</a></h3>
<footer class="type-is-aside l-stack l-stack--horizontal l-stack--wraps"><span>${escapeHtml(
              getHost(item.url),
            )}</span><span style="--stack-space: var(--space-s)">${escapeHtml(
              topics,
            )}</span></footer>
</article></li>`
          })
          .join('\n')
        return `<section id="${slugify(
          collection.title,
        )}" class="content-block"><h2 class="sub-headline">${escapeHtml(
          collection.title,
        )}</h2><ul class="post-list l-stack l-stack--vertical" style="--stack-space: var(--space-s)">${items}</ul></section>`
      })
      .join('\n')

    return `<main id="main" class="cache-content" tabindex="-1">
<header class="cache-content__header"><h1 class="main-headline">${escapeHtml(
      data.headline,
    )}</h1><p>${escapeHtml(
      data.meta?.description || '',
    )}</p><nav aria-label="Collections"><ul class="id-list">${nav}</ul></nav></header>
<section class="cache-content__content">
<section class="content-block"><h2 class="sub-headline">Around the Web</h2><ul class="post-list inline-list">${issueList}</ul></section>
${blocks}
</section>
</main>`
  }
}

export default AiCache
