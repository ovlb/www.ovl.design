<template>
  <component
    :is="tagName"
    :class="`l-stack--${flows}`"
    class="l-stack"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'TheStack',
  props: {
    tagName: {
      type: String,
      default: 'div',
    },
    flows: {
      type: String,
      default: 'vertical',
      validator: (flow) => flow === 'vertical' || flow === 'horizontal',
    },
  },
}
</script>

<style>
.l-stack {
  --stack-space: 1.5rem;
  --flex-direction: row;

  display: flex;
  flex-direction: var(--flex-direction);
}

.l-stack--horizontal {
  align-items: center;
}

.l-stack--horizontal > * + * {
  margin-left: var(--stack-space);
}

.l-stack--vertical {
  --flex-direction: column;
}

.l-stack--vertical > * + * {
  margin-top: var(--stack-space);
  margin-bottom: 0 !important;
}

.l-stack--narrow {
  --stack-space: 0.5rem;
}
</style>
