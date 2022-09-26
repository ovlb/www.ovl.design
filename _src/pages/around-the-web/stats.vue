<template>
  <main id="main" tabindex="-1">
    <archive-header title="Around the Numbers">
      <template #sub>{{ meta.description }}</template>
      <template #footer>
        <icon-link href="/around-the-web/" aria-label="Around the Web Archive">
          <template #icon><folder-icon /></template>
          <template #content>Archive</template>
        </icon-link>
      </template>
    </archive-header>
    <section
      v-for="{ children, id } in featureRows"
      :key="id"
      class="block-stats"
    >
      <featured-stat
        v-for="child in children"
        :key="child.text"
        :stat="child.stat"
        :text="child.text"
      />
    </section>
    <section class="block-stats">
      <p>
        In total, I wrote <b>{{ textData.totalWords }}</b> words with
        <b>{{ textData.totalChars }}</b> characters.
      </p>
    </section>
    <section class="block-stats">
      <section>
        <h2 class="sub-headline">Top Domains</h2>
        <ol>
          <li v-for="domain in topFifteenDomains" :key="domain.origin">
            {{ domain.host }} ({{ domain.count }})
          </li>
        </ol>
      </section>
      <section>
        <h2 class="sub-headline">Top Categories</h2>
        <ol>
          <li v-for="category in topFifteenCategories" :key="category.name">
            <a :href="category.href">{{ category.name }}</a> ({{
              category.count
            }})
          </li>
        </ol>
      </section>
    </section>
  </main>
</template>

<script>
import ArchiveHeader from '~components/archive/ArchiveHeader.vue'
import FeaturedStat from '~components/stats/FeaturedStat.vue'
import IconLink from '~components/core/IconLink.vue'
import FolderIcon from '~icons/FolderOutline.vue'

import { textics } from 'textics'

export default {
  components: {
    ArchiveHeader,
    FeaturedStat,
    IconLink,
    FolderIcon,
  },
  data() {
    return {
      permalink: '/around-the-web/statistics/',
      title: 'Around the Numbers | Around the Web',
      eleventyComputed: {
        meta: function ({ meta, site }) {
          return {
            ...meta,
            description: 'Statistics for Around the Web',
            image: {
              src: `${site.baseURL}/img/around-the-web/around-the-numbers.jpg`,
              alt: 'An image of actor Zach Galifianakis from The Hangover thinking hard as math equations fly by his head, similar to the Math Lady meme. The image is coloured in red. The word «Around the Numbers» are written on top.',
            },
          }
        },
      },
    }
  },

  computed: {
    categories() {
      return this.collections.atwCategories.length
    },

    issues() {
      return this.collections.aroundTheWeb.length
    },

    issueData() {
      const posts = this.collections.aroundTheWeb

      const mostLinks = [...posts].sort(
        (a, b) => b.data.sources.count - a.data.sources.count,
      )[0]
      const mostUnique = [...posts].sort(
        (a, b) => b.data.sources.distinct - a.data.sources.distinct,
      )[0]

      return {
        mostLinks: {
          issue: mostLinks.fileSlug,
          link: `/around-the-web/${mostLinks.fileSlug}/`,
          count: mostLinks.data.sources.count,
        },
        mostUnique: {
          issue: mostUnique.fileSlug,
          link: `/around-the-web/${mostUnique.fileSlug}/`,
          count: mostUnique.data.sources.distinct,
        },
      }
    },

    sourceData() {
      const posts = this.collections.aroundTheWeb
      let countLinks = 0
      let allLinks = []
      let sources = new Set()

      for (const { data } of posts) {
        allLinks = [...allLinks, ...data.sources.links]
        countLinks = countLinks + data.sources.count
        sources = new Set([...sources, ...data.sources.sources])
      }

      return { allLinks, countLinks, sources, distinct: sources.size }
    },

    textData() {
      const posts = this.collections.aroundTheWeb
      let totalWords = 0
      let totalChars = 0

      for (const post of posts) {
        const { words, chars } = textics(post.templateContent)

        totalWords += words
        totalChars += chars
      }

      return {
        totalWords: totalWords.toLocaleString('en-UK'),
        totalChars: totalChars.toLocaleString('en-UK'),
      }
    },

    topFifteenDomains() {
      const { allLinks, sources } = this.sourceData
      let links = new Set()

      for (const source of sources) {
        const matched = allLinks.filter((link) => {
          // remove internal links
          if (!link.href.startsWith('http')) {
            return false
          }

          return new URL(link.href).origin === source
        })

        links.add({ host: new URL(source).host, count: matched.length })
      }

      return [...links].sort((a, b) => b.count - a.count).slice(0, 15)
    },

    topFifteenCategories() {
      const categories = this.collections.atwCategories
      const enriched = []

      for (const category of categories) {
        const posts = this.collections.aroundTheWeb.filter((post) =>
          post.data.tags.includes(category),
        )

        enriched.push({
          name: this.displayCategory(category),
          href: this.categoryPermalink(category, this.categoryBase),
          count: posts.length,
        })
      }

      return enriched.sort((a, b) => b.count - a.count).slice(0, 15)
    },

    featureRows() {
      return [
        {
          id: 0,
          children: [
            {
              stat: this.issues,
              text: 'Issues',
            },
            {
              stat: this.categories,
              text: 'Categories',
            },
            {
              stat: this.sourceData.countLinks,
              text: 'Links',
            },
            {
              stat: this.sourceData.distinct,
              text: 'Domains',
            },
          ],
        },
        {
          id: 1,
          children: [
            {
              stat: this.issueData.mostLinks.count,
              text: 'Most Links in an Issue',
            },
            {
              stat: this.issueData.mostUnique.count,
              text: 'Most Sources in an Issue',
            },
          ],
        },
      ]
    },
  },

  methods: {
    getPostMedian(posts, sourceKey) {
      if (posts.length === 0) throw new Error('No inputs')

      posts.sort(function (a, b) {
        return a.data.sources[sourceKey] - b.data.sources[sourceKey]
      })

      const half = Math.floor(posts.length / 2)

      if (posts.length % 2) return posts[half]

      return (posts[half - 1] + posts[half]) / 2.0
    },
  },
}
</script>

<style>
.block-stats {
  display: flex;
  flex-flow: row wrap;
  gap: var(--padding-base);
  justify-content: space-evenly;
  padding: var(--padding-base);
}

li::marker {
  font-variant-numeric: oldstyle-nums;
}
</style>
