<script lang="ts" setup>
defineOgImageComponent('Main', {
  description: 'My time I\'ve spent on programming, sourced from Wakapi',
  title: 'Time',
})

const isPending = ref(false)
</script>

<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-6">
      <div class="flex justify-between">
        <h1 class="font-mono text-3xl font-medium">
          time <span class="text-sm font-normal text-muted-foreground">est. Apr 13, 2025</span>
        </h1>
        <USpinner v-if="isPending" class="size-8 text-primary" />
      </div>
      <div class="flex items-center gap-2 -ml-1">
        <TimeSpanButton
          v-for="span in timeSpanOptions"
          :key="span"
          :span="span"
        />
      </div>
    </div>
    <TimeSpanInfo @is-pending="isPending = $event" />
    <p class="self-end text-sm font-normal text-muted-foreground">
      Data gathered from
      <NuxtLink
        href="https://wakapi.dev"
        target="_blank"
        class="text-primary underline"
      >
        Wakapi
      </NuxtLink>
    </p>
  </section>
</template>
