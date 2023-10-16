<template>
  <article class="article-card u-has-fleuron" :aria-labelledby="`title-${id}`">
    <p class="type-is-aside"><slot name="eyebrow" /></p>
    <h2 :id="`title-${id}`" class="article-card__headline">
      <a :href="href" class="article-card__link" :class="extraClasses">
        {{ data.title }}
      </a>
    </h2>
    <p class="article-card__date type-is-aside"><slot name="date" /></p>
    <p>{{ data.displayIntro || data.intro }}</p>
    <p v-if="data.series" class="type-small-caps">
      {{ data.series.name }} No. {{ data.series.issue }}
    </p>
    <p class="type-is-aside"><slot name="footer" /></p>
  </article>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id: uuidv4(),
    }
  },

  computed: {
    href() {
      if (this.data.external) {
        return this.data.external.source
      }

      if (typeof this.data.permalink === 'function') {
        return this.data.permalink.bind(this)(this.data)
      }

      return this.data.permalink
    },

    extraClasses() {
      return {
        '-external': !!this.data.external,
      }
    },
  },
}
</script>

<style></style>
