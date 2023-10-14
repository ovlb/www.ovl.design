<template>
  <main id="main" tabindex="-1">
    <archive-header :title="capitaliser(category)">
      <template #sub>
        <p>
          This is an automatically generated archive of
          <a href="/around-the-web/">Around the Web</a> posts.
        </p>
      </template>
    </archive-header>
    <ol class="article-list u-global-padding" role="list">
      <li v-for="post in posts" :key="post.data.dates.publish">
        <article-card :data="postToCardItem(post)">
          <template #eyebrow>No.&nbsp;{{ post.data.page.fileSlug }}</template>
        </article-card>
      </li>
    </ol>
  </main>
</template>

<script>
import ArchiveHeader from '~components/archive/ArchiveHeader.vue'
import ArticleCard from '~components/archive/ArticleCard.vue'

export default {
  components: {
    ArchiveHeader,
    ArticleCard,
  },

  data() {
    return {
      pagination: {
        data: 'collections.atwCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          this.categoryPermalink(data.category, data.categoryBase),
        title: (data) => this.capitaliser(data.category),
        pageTitle: (data) =>
          `${this.capitaliser(data.category)} | Collections | Around the Web`,
      },
    }
  },

  computed: {
    posts() {
      return this.collections.aroundTheWeb
        .filter((post) => post.data.tags.includes(this.category))
        .reverse()
    },
  },

  methods: {
    postToCardItem(post) {
      return {
        ...post.data,
        title: `${this.displayDate(
          post.data.parsedDates.start,
          'short',
        )}–${this.displayDate(post.data.parsedDates.publish, 'short')}`,
      }
    },
  },
}
</script>

<style></style>
