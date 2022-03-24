<template>
  <header class="archive-header u-floral-heart-gradient">
    <h1 class="main-headline">{{ title }}</h1>
    <slot name="sub" />
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
