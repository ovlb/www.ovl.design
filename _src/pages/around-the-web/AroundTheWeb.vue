<template>
  <main id="main" tabindex="-1">
    <archive-header :title="title">
      <template #sub>
        <p>
          {{ meta.description }}
          <br />
          You can follow it using the
          <a href="/around-the-web/feed.xml">RSS feed</a> or by subscribing to
          the <a href="https://buttondown.email/around-the-web">newsletter</a>.
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
      title: 'Around the Web',
      permalink: '/around-the-web/',
    }
  },

  computed: {
    posts() {
      return [...this.collections.aroundTheWeb].reverse()
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
