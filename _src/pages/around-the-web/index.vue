<template>
  <main id="main" tabindex="-1">
    <archive-header :title="title">
      <template #sub>
        {{ meta.description }}
      </template>
      <template #footer>
        <the-stack
          tag-name="section"
          flows="horizontal"
          class="archive-header__icons"
          :wraps="true"
        >
          <icon-link href="/around-the-web/feed.xml" aria-label="RSS Feed">
            <template #icon><rss-box-icon /></template>
            <template #content>RSS Feed</template>
          </icon-link>
          <icon-link
            href="https://buttondown.email/around-the-web"
            aria-label="Newsletter"
          >
            <template #icon><mailbox-up-icon /></template>
            <template #content>Newsletter</template>
          </icon-link>
          <icon-link href="/around-the-web/statistics/" aria-label="Statistics">
            <template #icon><chart-icon /></template>
            <template #content>Statistics</template>
          </icon-link>
        </the-stack>
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
import TheStack from '~components/core/TheStack.vue'
import IconLink from '~components/core/IconLink.vue'
import RssBoxIcon from '~icons/RssBox.vue'
import MailboxUpIcon from '~icons/MailboxUp.vue'
import ChartIcon from '~icons/Finance.vue'

export default {
  components: {
    ArchiveHeader,
    ArticleCard,
    TheStack,
    IconLink,
    RssBoxIcon,
    MailboxUpIcon,
    ChartIcon,
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
