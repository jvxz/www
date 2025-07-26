<script lang="ts" setup>
import { cx } from 'cva';

const props = defineProps<{
  class?: string
}>()

const classes = cx('animate-pulse rounded-full bg-muted', props.class)
</script>

<template>
  <div :class="classes" />
</template>
