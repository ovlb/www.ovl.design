import capitaliser from '../../../_filters/capitaliser.ts'
import categoryPermalink from '../../../_filters/category-permalink.ts'
import {
  escapeHtml,
  archiveHeader,
  iconLink,
  iconStack,
} from '../../../_helper/archive-html.ts'

class EverythingIndex {
  data() {
    return {
      permalink: '/everything/',
      hideBreadcrumb: true,
      title: 'Everything',
      pageTitle: 'Everything',
    }
  }

  render({ collections }: any) {
    const all = [...(collections.all || [])]
      .filter((post) => post.data.external !== true)
      .sort(() => Math.random() - 0.5)

    const items = all
      .map((thing: any) => {
        const href = escapeHtml(
          thing.data.permalink || thing.data.page.url || '#',
        )
        const label = escapeHtml(thing.data.pageTitle || thing.data.title || '')
        return `<li><h2 class="type-0"><a href="${href}">${label}</a></h2></li>`
      })
      .join('\n')

    const cats = (collections.categories || [])
      .map(
        (c: any) =>
          `<li><a href="${escapeHtml(
            categoryPermalink(c, '/everything'),
          )}">${escapeHtml(capitaliser(c))}</a></li>`,
      )
      .join('\n')

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: 'Everything',
  sub: `<p>Welcome to chaos.<br />All ${all.length} pages of this website.<br />Ordered randomly on every build.</p>`,
  footer: iconStack(
    iconLink({
      href: '/',
      icon: 'home',
      content: 'Take me back to order',
    } as any),
  ),
})}
<ul class="article-list main-grid-content t-center" role="list">${items}</ul>
<section class="main-grid-content"><h2 class="sub-headline">Collections</h2><ul role="list" class="inline-list">${cats}</ul></section>
</main>`
  }
}

export default EverythingIndex
