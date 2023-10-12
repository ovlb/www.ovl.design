<template>
  <the-stack
    tag-name="header"
    flows="vertical"
    class="archive-header u-floral-heart-gradient"
    style="--stack-space: var(--space-s); align-items: center"
  >
    <h1 class="main-headline">{{ title }}</h1>
    <p class="t-content-2">
      <slot name="sub" />
    </p>
    <section class="archive-header__footer">
      <slot name="footer" />
    </section>
  </the-stack>
</template>

<script>
import TheStack from '~components/core/TheStack.vue'

export default {
  components: {
    TheStack,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
