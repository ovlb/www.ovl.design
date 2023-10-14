<template>
  <main id="main" class="homepage-content" tabindex="-1">
    <archive-header :title="title">
      <template #sub>
        {{ meta.description }}
      </template>
      <template #footer>
        <icon-link href="/text/feed.xml" aria-label="RSS Feed">
          <template #icon><rss-box-icon /></template>
          <template #content>RSS Feed</template>
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
import IconLink from '~components/core/IconLink.vue'
import RssBoxIcon from '~icons/RssBox.vue'
import ArticleCard from '~components/archive/ArticleCard.vue'

import { dateToRfc3339 } from '@11ty/eleventy-plugin-rss'

export default {
  components: {
    ArchiveHeader,
    IconLink,
    RssBoxIcon,
    ArticleCard,
  },

  data() {
    return {
      permalink: '/text/',
      templateClass: 'tmpl-article-list',
      pageTitle: 'Text',
      title: 'Scribbles on digital paper',
      hideBreadcrumb: true,
      eleventyComputed: {
        meta: function (data) {
          return {
            ...data.meta,
            description: 'Mostly coherent.',
          }
        },
      },
    }
  },

  computed: {
    posts() {
      return [...this.collections.publishedPosts]
        .filter((post) => {
          return post.data.skipInArchive !== true
        })
        .reverse()
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
