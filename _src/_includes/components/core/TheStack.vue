<template>
  <component :is="tagName" :class="classes" class="l-stack" v-bind="$attrs">
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
    wraps: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        [`l-stack--${this.flows}`]: true,
        ['l-stack--wraps']: this.wraps,
      }
    },
  },
}
</script>

<style>
.l-stack {
  --stack-space-default: 1.5rem;
  --flex-direction: row;

  display: flex;
  flex-direction: var(--flex-direction);
}

.l-stack--wraps {
  flex-wrap: wrap;
}

.l-stack--horizontal {
  align-items: center;
}

.l-stack--horizontal > * + * {
  margin-left: var(--stack-space, var(--stack-space-default));
}

.l-stack--vertical {
  --flex-direction: column;
}

.l-stack--vertical > * {
  margin-bottom: 0 !important;
}

.l-stack--vertical > * + * {
  margin-top: var(--stack-space, var(--stack-space-default));
  margin-bottom: 0 !important;
}

.l-stack--narrow {
  --stack-space: 0.5rem;
}
</style>
