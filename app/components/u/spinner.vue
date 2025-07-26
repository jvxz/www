<script lang="ts" setup>
import { cx } from 'cva'

withDefaults(defineProps<{
  size?: string
  classes?: string
}>(), {
  classes: '',
  size: '24',
})
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="cx('animate-spin duration-500', classes)"
  ><g fill="currentColor"><path
    fill-rule="evenodd"
    d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
    clip-rule="evenodd"
    opacity=".2"
  /><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z" /></g></svg>
</template>
