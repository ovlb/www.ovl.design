<template>
  <main id="main" tabindex="-1">
    <archive-header :title="displayCategory(category)">
      <template #sub>
        <p>
          This is an automatically generated archive of
          {{ posts.length }} randomly sorted posts, which are a subset of
          <a href="/everything/">everything</a>.
        </p>
      </template>
      <template #footer>
        <icon-link href="/everything/">
          <template #icon><folder-icon /></template>
          <template #content>Everything</template>
        </icon-link>
        <icon-link href="/">
          <template #icon><home-icon /></template>
          <template #content>Back home</template>
        </icon-link>
      </template>
    </archive-header>
    <ol class="article-list u-global-padding" role="list">
      <li v-for="post in posts" :key="post.data.dates.publish">
        <h3>
          <a :href="post.data.page.url">{{
            post.data.pageTitle || post.data.title
          }}</a>
        </h3>
      </li>
    </ol>
  </main>
</template>

<script>
import ArchiveHeader from '~components/archive/ArchiveHeader.vue'
import IconLink from '~components/core/IconLink.vue'
import FolderIcon from '~icons/FolderOutline.vue'
import HomeIcon from '~icons/HomeOutline.vue'

export default {
  components: {
    ArchiveHeader,
    IconLink,
    FolderIcon,
    HomeIcon,
  },

  data() {
    return {
      pagination: {
        data: 'collections.categories',
        size: 1,
        alias: 'category',
        addAllPagesToCollections: true,
      },
      pageCSS: 'text',
      eleventyComputed: {
        permalink: (data) =>
          this.categoryPermalink(data.category, data.categoryBase),
        pageTitle: (data) =>
          `${this.displayCategory(data.category)} | Everything`,
      },
    }
  },

  computed: {
    posts() {
      return this.collections.all
        .filter((post) => post.data.tags?.includes(this.category))
        .sort(() => {
          const sortA = Math.random()
          const sortB = Math.random()

          return sortA - sortB
        })
    },
  },
}
</script>

<style></style>
