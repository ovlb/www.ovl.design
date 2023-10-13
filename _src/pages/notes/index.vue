<template>
  <the-stack
    is="main"
    id="main"
    tabindex="-1"
    class="u-global-padding notes-content"
  >
    <header class="note-header">
      <h1 class="main-headline">{{ title }}</h1>
    </header>
    <section>
      <h2 class="sr-only">Notes</h2>
      <ul role="list">
        <li v-for="note in notes" :key="note.id">
          <h3 class="type-0">
            <a :href="note.data.page.url">{{ note.data.title }}</a>
            <p></p>
          </h3>
        </li>
      </ul>
    </section>
    <section class="">
      <h2 class="sub-headline">Categories</h2>
      <ul class="inline-list" role="list">
        <li v-for="collection in collections.noteCategories" :key="collection">
          <a :href="categoryPermalink(collection, categoryBase)">
            {{ capitaliser(collection) }}</a
          >
        </li>
      </ul>
    </section>
  </the-stack>
</template>

<script>
import TheStack from '~components/core/TheStack.vue'

export default {
  components: {
    TheStack,
  },
  data() {
    return {
      permalink: '/notes/',
      pageCSS: ['note'],
      title: 'Notes',
      hideBreadcrumb: true,
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
