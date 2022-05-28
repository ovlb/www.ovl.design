<template>
  <section class="featured-stat">
    <b class="main-headline">{{ stat }}</b>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: {
    stat: {
      type: [String, Number],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.featured-stat {
  text-align: center;
}
</style>
