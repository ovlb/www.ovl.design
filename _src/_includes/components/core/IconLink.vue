<template>
  <the-stack
    tag-name="a"
    flows="horizontal"
    class="icon-link"
    style="--stack-space: 0.5rem"
  >
    <slot name="icon" />
    <span><slot name="content" /></span>
  </the-stack>
</template>

<script>
import TheStack from '~components/core/TheStack.vue'
export default {
  components: {
    TheStack,
  },
}
</script>

<style>
.icon-link {
  align-content: center;
  display: inline-flex;
  font-weight: bold;
  text-decoration: none;
  padding: 0.25em;
  white-space: nowrap;
}

.icon-link:hover {
  text-decoration: underline;
}

.icon-link .material-design-icon {
  display: contents;
}
</style>
