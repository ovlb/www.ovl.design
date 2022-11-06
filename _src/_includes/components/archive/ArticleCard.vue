<template>
  <article class="article-card" :aria-labelledby="`title-${id}`">
    <p class="type-is-aside"><slot name="eyebrow" /></p>
    <h2 :id="`title-${id}`" class="article-card__headline">
      <a
        :href="data.permalink || data.external.source"
        class="article-card__link"
      >
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
}
</script>

<style></style>
