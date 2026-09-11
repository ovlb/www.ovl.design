function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function cardHref(data: any) {
  if (data.external) return data.external.source
  if (typeof data.permalink === 'function') return data.permalink(data)
  return data.permalink
}

function articleCard(data: any, slots: any = {}) {
  const href = escapeHtml(cardHref(data) || '#')
  const title = escapeHtml(data.title || '')
  const intro = escapeHtml(data.displayIntro || data.intro || '')
  const eyebrow = slots.eyebrow
    ? `<p class="type-is-aside">${slots.eyebrow}</p>`
    : ''
  const date = slots.date
    ? `<p class="article-card__date type-is-aside">${slots.date}</p>`
    : ''
  const series = data.series
    ? `<p class="type-small-caps">${escapeHtml(
        data.series.name,
      )} No. ${escapeHtml(String(data.series.issue))}</p>`
    : ''
  const footer = slots.footer
    ? `<p class="type-is-aside">${slots.footer}</p>`
    : ''
  const extra = data.external ? ' -external' : ''

  return `<article class="article-card u-has-fleuron">${eyebrow}<h2 class="article-card__headline"><a href="${href}" class="article-card__link${extra}">${title}</a></h2>${date}<p>${intro}</p>${series}${footer}</article>`
}

function archiveHeader({ title, sub = '', footer = '' }: any) {
  return `<header class="archive-header u-floral-heart-gradient l-stack l-stack--vertical" style="--stack-space: var(--space-s); align-items: center"><h1 class="main-headline">${escapeHtml(
    title,
  )}</h1><p class="t-content-2">${sub}</p><section class="archive-header__footer">${footer}</section></header>`
}

function slugify(str = '') {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

import {
  mdiRssBox,
  mdiFolderOutline,
  mdiHomeOutline,
  mdiMailboxUp,
  mdiFinance,
} from '@mdi/js'

const ICONS = {
  rssBox: { className: 'rss-box-icon', path: mdiRssBox },
  folder: { className: 'folder-outline-icon', path: mdiFolderOutline },
  home: { className: 'home-outline-icon', path: mdiHomeOutline },
  mailboxUp: { className: 'mailbox-up-icon', path: mdiMailboxUp },
  finance: { className: 'finance-icon', path: mdiFinance },
}

function mdiIcon(name: any) {
  const icon = ICONS[name as keyof typeof ICONS]

  if (!icon) throw new Error(`Unknown icon: ${name}`)

  return `<span aria-hidden="true" class="material-design-icon ${icon.className}" role="img"><svg fill="currentColor" class="material-design-icon__svg" width="24" height="24" viewBox="0 0 24 24"><path d="${icon.path}"></path></svg></span>`
}

function iconLink({ href, label, icon, content }: any) {
  const labelAttr = label ? ` aria-label="${escapeHtml(label)}"` : ''

  return `<a href="${escapeHtml(
    href,
  )}"${labelAttr} class="icon-link l-stack l-stack--horizontal" style="--stack-space: 0.5rem">${mdiIcon(
    icon,
  )}<span>${content}</span></a>`
}

function iconStack(links: any) {
  return `<section class="archive-header__icons l-stack l-stack--horizontal l-stack--wraps">${links}</section>`
}

export {
  escapeHtml,
  articleCard,
  archiveHeader,
  slugify,
  cardHref,
  mdiIcon,
  iconLink,
  iconStack,
}
export default {
  escapeHtml,
  articleCard,
  archiveHeader,
  slugify,
  cardHref,
  mdiIcon,
  iconLink,
  iconStack,
}
