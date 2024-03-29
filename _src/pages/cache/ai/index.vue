<template>
  <main id="main" class="cache-content" tabindex="-1">
    <header class="cache-content__header">
      <h1 class="main-headline">{{ headline }}</h1>
      <p>{{ meta.description }}</p>
      <nav aria-label="Collections">
        <ul class="id-list">
          <li
            v-for="collection in postCollections"
            :key="slug(collection.title)"
          >
            <a
              :href="`#${slug(collection.title)}`"
              :aria-label="collection.title"
              >{{ `#${slug(collection.title)}` }}</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <section class="cache-content__content">
      <section class="content-block">
        <h2 class="sub-headline">Around the Web</h2>
        <ul class="post-list inline-list">
          <li
            v-for="issue in aroundTheWebIssues"
            :key="issue.data.dates.publish"
          >
            <a :href="issue.data.permalink">{{ issue.data.page.fileSlug }}</a>
          </li>
        </ul>
      </section>
      <section
        v-for="collection in postCollections"
        :id="slug(collection.title)"
        :key="slug(collection.title)"
        class="content-block"
      >
        <h2 class="sub-headline">{{ collection.title }}</h2>
        <the-stack
          tag-name="ul"
          class="post-list"
          style="--stack-space: var(--space-s)"
        >
          <li
            v-for="item in collection.data"
            :key="slug(item.title)"
            class="post-item post-list__item"
          >
            <the-stack tag-name="article" style="--stack-space: 0.25rem">
              <h3 class="small-headline">
                <a :href="item.url">{{ item.title }}</a>
              </h3>
              <the-stack
                tag-name="footer"
                flows="horizontal"
                class="type-is-aside l-stack--wraps"
              >
                <span>{{ getHost(item.url) }}</span>
                <span style="--stack-space: var(--space-s)">
                  {{
                    item.topics
                      ?.sort((a, b) =>
                        a.toLowerCase().localeCompare(b.toLowerCase()),
                      )
                      .map((topic) => startCase(topic))
                      .join(', ')
                  }}
                </span>
              </the-stack>
            </the-stack>
          </li>
        </the-stack>
      </section>
    </section>
  </main>
</template>

<script>
import TheStack from '~components/core/TheStack.vue'

export default {
  components: {
    TheStack,
  },
  data() {
    return {
      headline: 'Artificial (Un)intelligence',
      permalink: '/cache/ai/',
      eleventyComputed: {
        meta: ({ meta }) => ({
          ...meta,
          description: 'fragments on ai/machine learning and society',
        }),
        title: (data) => `${data.headline} | Cache`,
      },
    }
  },

  computed: {
    postCollections() {
      return [this.journalism, this.science, this.talks, this.podcasts].filter(
        (c) => c.data.length > 0,
      )
    },

    aroundTheWebIssues() {
      return this.collections.aroundTheWeb
        .filter((post) => post.data.tags.includes(this.aroundTheWebCategory))
        .reverse()
    },
  },

  methods: {
    getHost(url) {
      return new URL(url).host.replace('www.', '')
    },
  },
}
</script>

<style>
.cache-content .main-headline {
  font-family: var(--fonts-mono);
  font-size: var(--step-2);
}

.cache-content .sub-headline,
.cache-content .small-headline {
  font-family: var(--fonts-main);
  font-size: var(--step-0);
}

.cache-content .sub-headline {
  margin-left: 0;
}

.cache-content .small-headline {
  font-style: italic;
}

.cache-content .type-is-aside {
  font-family: var(--fonts-mono);
}

.cache-content {
  padding: var(--padding-base);
  padding-top: calc(2 * var(--padding-base));
  display: grid;
  gap: var(--padding-base);
}

@media (min-width: 1000px) {
  .cache-content {
    grid-template-columns: 25% 1fr;
  }
}

.cache-content__header {
  font-family: var(--fonts-mono);
}

.content-block + .content-block {
  margin-top: calc(2 * var(--padding-base));
}

.id-list {
  background-color: var(--clr-bg);
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
}

.id-list li a {
  color: var(--clr-fg);
  font-size: var(--step--1);
}
</style>
