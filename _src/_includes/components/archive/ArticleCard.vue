<template>
  <article class="article-card" aria-labelledby="title-{{ id }}">
    <p class="type-is-aside"><slot name="eyebrow" /></p>
    <h2 id="title-{{ id }}" class="article-card__headline">
      <a :href="data.permalink" class="article-card__link">
        {{ data.title }}
      </a>
    </h2>
    <p>{{ data.intro }}</p>
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
