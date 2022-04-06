<template>
  <header class="archive-header u-floral-heart-gradient">
    <h1 class="main-headline">{{ title }}</h1>
    <p class="t-content-2">
      <slot name="sub" />
    </p>
    <section class="archive-header__footer">
      <slot name="footer" />
    </section>
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
