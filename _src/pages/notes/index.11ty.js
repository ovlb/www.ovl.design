const capitaliser = require('../../../_filters/capitaliser')
const categoryPermalink = require('../../../_filters/category-permalink')
const { escapeHtml } = require('../../../_helper/archive-html')

class NotesIndex {
  data() {
    return {
      permalink: '/notes/',
      pageCSS: ['note'],
      title: 'Notes',
      hideBreadcrumb: true,
      pageTitle: 'Notes',
    }
  }

  render({ collections, categoryBase }) {
    const notes = [...(collections.notes || [])].sort((a, b) =>
      a.data.title.localeCompare(b.data.title),
    )

    const noteItems = notes
      .map(
        (note) =>
          `<li><h3 class="type-0"><a href="${escapeHtml(
            note.data.page.url,
          )}">${escapeHtml(note.data.title)}</a></h3></li>`,
      )
      .join('\n')

    const cats = (collections.noteCategories || [])
      .map(
        (c) =>
          `<li><a href="${escapeHtml(
            categoryPermalink(c, categoryBase),
          )}">${escapeHtml(capitaliser(c))}</a></li>`,
      )
      .join('\n')

    return `<main id="main" tabindex="-1" class="u-global-padding notes-content l-stack l-stack--vertical">
<header class="note-header"><h1 class="main-headline">Notes</h1></header>
<section><h2 class="sr-only">Notes</h2><ul role="list">${noteItems}</ul></section>
<section><h2 class="sub-headline">Categories</h2><ul class="inline-list" role="list">${cats}</ul></section>
</main>`
  }
}

module.exports = NotesIndex
