<script lang="ts" setup>
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const props = withDefaults(defineProps<{
  size?: VariantProps<typeof button>['size']
  variant?: VariantProps<typeof button>['variant']
}>(), {
  size: 'default',
  variant: 'default',
})

const button = tv({
  base: 'flex h-8 cursor-pointer items-center gap-2 px-1',
  variants: {
    size: {
      default: 'h-8',
      icon: 'size-8',
    },
    variant: {
      active: 'bg-primary text-background',
      default: 'bg-transparent text-primary hover:bg-primary hover:text-background',
    },
  },
})
</script>

<template>
  <button
    :size="props.size"
    :class="button({
      size:
        props.size,
      variant:
        props.variant,
    })"
  >
    <slot />
  </button>
</template>
