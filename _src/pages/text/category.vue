<template>
  <main id="main" tabindex="-1">
    <archive-header :title="title">
      <template #sub>
        <p>
          This is an automatically generated archive of {{ posts.length }} blog
          posts.
        </p>
      </template>
      <template #footer>
        <icon-link href="/text/">
          <template #icon><folder-icon /></template>
          <template #content>All posts</template>
        </icon-link>
      </template>
    </archive-header>
    <ol class="article-list u-global-padding" role="list">
      <li v-for="{ data: post } in posts" :key="post.title">
        <article-card :data="post">
          <template v-if="post.date" #date>
            <span class="sr-only">Published in </span>
            <time :datetime="formattedDate(post.date)">
              {{ displayDate(post.date) }}
            </time>
          </template>
          <template v-if="post.external" #footer>
            Published: {{ post.external.medium }}
          </template>
        </article-card>
      </li>
    </ol>
  </main>
</template>

<script>
import ArchiveHeader from '~components/archive/ArchiveHeader.vue'
import ArticleCard from '~components/archive/ArticleCard.vue'
import IconLink from '~components/core/IconLink.vue'
import FolderIcon from '~icons/FolderOutline.vue'
import { dateToRfc3339 } from '@11ty/eleventy-plugin-rss'

export default {
  components: {
    ArchiveHeader,
    ArticleCard,
    IconLink,
    FolderIcon,
  },

  data() {
    return {
      pagination: {
        data: 'collections.blogCategories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      eleventyComputed: {
        permalink: (data) =>
          this.categoryPermalink(data.category, data.categoryBase),
        title: (data) => this.displayCategory(data.category),
        pageTitle: (data) => `${this.displayCategory(data.category)} | Text`,
      },
    }
  },

  computed: {
    posts() {
      return this.collections.blog
        .filter((post) => post.data.tags?.includes(this.category))
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
    },
  },

  methods: {
    formattedDate(date) {
      return dateToRfc3339(new Date(date))
    },
  },
}
</script>

<style></style>
