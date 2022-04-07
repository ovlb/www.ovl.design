<template>
  <div aria-hidden="true" class="terminal-row__path">{{ terminalPath }}</div>
  <div aria-hidden="true" class="terminal-row__input">{{ command }}</div>
</template>

<script>
export default {
  props: {
    terminalPath: {
      type: String,
      required: true,
    },
    command: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
