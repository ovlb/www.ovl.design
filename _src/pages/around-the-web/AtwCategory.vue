<template>
  <archive-header :title="title">
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
        title: (data) => this.displayCategory(data.category),
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
        title: `${this.displayDate(
          post.data.parsedDates.start,
          'short',
        )}–${this.displayDate(post.data.parsedDates.publish, 'short')}`,
        permalink: post.data.permalink,
        intro: post.data.intro,
      }
    },
  },
}
</script>

<style></style>
