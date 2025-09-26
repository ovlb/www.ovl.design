const categoryPermalink = require(
  `${process.cwd()}/_filters/category-permalink`,
)

module.exports = class NotesIndexPage {
  data() {
    return {
      permalink: '/notes/',
      pageCSS: ['note'],
      title: 'Notes',
      hideBreadcrumb: true,
      pageTitle: 'Notes',
    }
  }

  get notesList() {
    return (collection) =>
      [...collection].sort((a, b) => a.data.title.localeCompare(b.data.title))
  }

  render({ collections, categoryBase }) {
    const notes = this.notesList(collections.notes)
    const categories = collections.noteCategories || []

    const notesHtml = notes
      .map(
        (note) => `
      <li>
        <h3 class="type-0">
          <a href="${note.data.page.url}">${note.data.title}</a>
          <p></p>
        </h3>
      </li>`,
      )
      .join('')

    const categoriesHtml = categories
      .map(
        (collection) => `
        <li>
          <a href="${categoryPermalink(
            collection,
            categoryBase,
          )}">${this.capitaliser(collection)}</a>
        </li>`,
      )
      .join('')

    return `
<main id="main" tabindex="-1" class="u-global-padding notes-content">
  <header class="note-header">
    <h1 class="main-headline">Notes</h1>
  </header>
  <section>
    <h2 class="sr-only">Notes</h2>
    <ul role="list">
      ${notesHtml}
    </ul>
  </section>
  <section class="">
    <h2 class="sub-headline">Categories</h2>
    <ul class="inline-list" role="list">
      ${categoriesHtml}
    </ul>
  </section>
</main>
    `.trim()
  }
}
