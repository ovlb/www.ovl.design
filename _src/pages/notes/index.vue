<template>
  <main id="main" tabindex="-1" class="u-global-padding">
    <header class="note-header">
      <h1>{{ title }}</h1>
    </header>
    <section>
      <h2>Notes</h2>
      <ul role="list">
        <li v-for="note in notes" :key="note.id">
          <h3>
            <a :href="note.data.page.url">{{ note.data.title }}</a>
            <p></p>
          </h3>
        </li>
      </ul>
    </section>
    <section>
      <h2>Categories</h2>
      <ul role="list">
        <li v-for="collection in collections.noteCategories" :key="collection">
          <a :href="categoryPermalink(collection, categoryBase)">
            {{ displayCategory(collection) }}</a
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      permalink: '/notes/',
      pageCSS: 'note',
      title: 'Notes',
      pageTitle: 'Notes',
    }
  },
  computed: {
    notes() {
      return [...this.collections.notes].sort((a, b) =>
        a.data.title.localeCompare(b.data.title),
      )
    },
  },
}
</script>
