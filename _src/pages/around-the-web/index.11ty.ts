import displayDate from '../../../_filters/display-date.ts'
import {
  escapeHtml,
  articleCard,
  archiveHeader,
  iconLink,
  iconStack,
} from '../../../_helper/archive-html.ts'

function postToCardItem(post: any, displayDateFn: any) {
  let title
  if (!post.data.issueTitle) {
    const start = displayDateFn(post.data.parsedDates.start, 'short')
    const end = displayDateFn(post.data.parsedDates.publish, 'short')
    title = `${start}–${end}`
  } else {
    title = post.data.issueTitle
  }
  return { ...post.data, title }
}

class AroundTheWebIndex {
  data() {
    return {
      title: 'Around the Web',
      hideBreadcrumb: true,
      permalink: '/around-the-web/',
    }
  }

  render({ collections, meta }: any) {
    const posts = [...(collections.aroundTheWeb || [])].sort((a, b) => {
      if (parseInt(a.data.page.fileSlug) < parseInt(b.data.page.fileSlug))
        return 1
      return -1
    })

    const items = posts
      .map((post) => {
        const card = articleCard(postToCardItem(post, displayDate), {
          eyebrow: `No.&nbsp;${escapeHtml(post.data.page.fileSlug)}`,
        })
        return `<li>${card}</li>`
      })
      .join('\n')

    return `<main id="main" tabindex="-1">
${archiveHeader({
  title: 'Around the Web',
  sub: escapeHtml(meta?.description || ''),
  footer: iconStack(
    [
      iconLink({
        href: '/around-the-web/feed.xml',
        label: 'RSS Feed',
        icon: 'rssBox',
        content: 'RSS Feed',
      }),
      iconLink({
        href: 'https://buttondown.email/around-the-web',
        label: 'Newsletter',
        icon: 'mailboxUp',
        content: 'Newsletter',
      }),
      iconLink({
        href: '/around-the-web/statistics/',
        label: 'Statistics',
        icon: 'finance',
        content: 'Statistics',
      }),
    ].join(''),
  ),
})}
<ol class="article-list u-global-padding" role="list">${items}</ol>
</main>`
  }
}

export default AroundTheWebIndex
