<template>
  <main id="main" tabindex="-1">
    <archive-header :title="displayCategory(category)">
      <template #sub>
        <p>
          This is an automatically generated archive of
          <a href="/notes/">notes</a>.
        </p>
      </template>
    </archive-header>
    <ol class="article-list u-global-padding" role="list">
      <li v-for="post in posts" :key="post.data.dates.publish">
        <h3>
          <a :href="post.data.page.url">{{ post.data.title }}</a>
        </h3>
      </li>
    </ol>
  </main>
</template>

<script>
import ArchiveHeader from '~components/archive/ArchiveHeader.vue'

export default {
  components: {
    ArchiveHeader,
  },

  data() {
    return {
      pagination: {
        data: 'collections.noteCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          this.categoryPermalink(data.category, data.categoryBase),
        title: (data) => `${this.displayCategory(data.category)} | Notes`,
      },
    }
  },

  computed: {
    posts() {
      return this.collections.notes
        .filter((post) => post.data.tags.includes(this.category))
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
    },
  },
}
</script>

<style></style>
