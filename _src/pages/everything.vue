<template>
  <main id="main" tabindex="-1">
    <archive-header title="Everything">
      <template #sub>
        <p>
          Welcome to chaos.<br />
          Every page of this website.<br />
          Ordered randomly on every build.
        </p>
      </template>
      <template #footer>
        <the-stack
          tag-name="section"
          flows="horizontal"
          class="archive-header__icons"
          :wraps="true"
        >
          <icon-link href="/">
            <template #icon><home-icon /></template>
            <template #content>Take me back to order</template>
          </icon-link>
        </the-stack>
      </template>
    </archive-header>
    <ul class="article-list u-global-padding t-center" role="list">
      <li v-for="thing in allTheThings" :key="thing">
        <h2 class="small-headline">
          <a :href="thing.permalink || thing.data.page.url">{{
            thing.data.title
          }}</a>
        </h2>
      </li>
    </ul>
  </main>
</template>

<script>
import ArchiveHeader from '~components/archive/ArchiveHeader.vue'
import HomeIcon from '~icons/Home.vue'
import TheStack from '~components/core/TheStack.vue'
import IconLink from '~components/core/IconLink.vue'

export default {
  components: {
    ArchiveHeader,
    TheStack,
    IconLink,
    HomeIcon,
  },

  data() {
    return {
      permalink: '/everything/',
      title: 'Everything',
      pageCSS: 'text',
    }
  },

  computed: {
    allTheThings() {
      return [...this.collections.all].sort((a, b) => {
        const sortA = Math.random() || a
        const sortB = Math.random() || b

        return sortA - sortB
      })
    },
  },
}
</script>

<style></style>
