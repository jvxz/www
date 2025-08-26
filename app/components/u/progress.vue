<script lang="ts" setup>
defineProps<{
  percentage: number
}>()
</script>

<template>
  <div class="relative h-3 w-full rounded-full bg-primary/25 overflow-hidden">
    <div class="absolute top-0 left-0 h-full rounded-full bg-primary transition-all duration-150" :style="{ width: `${percentage}%` }" />
  </div>
</template>
