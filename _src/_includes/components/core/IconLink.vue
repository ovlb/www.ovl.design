<template>
  <a class="icon-link">
    <slot name="icon" />
    <slot name="content" />
  </a>
</template>

<script>
export default {}
</script>

<style>
.icon-link {
  align-content: center;
  display: inline-flex;
  font-weight: bold;
  text-decoration: none;
  padding: 0.25em;
}

.icon-link:hover {
  text-decoration: underline;
}

.icon-link .material-design-icon {
  margin-right: 0.5rem;
}
</style>
