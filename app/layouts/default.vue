<script lang="ts" setup>

</script>

<template>
  <div data-slot="layout" class="mx-auto max-w-screen-md space-y-16">
    <AppHeader />
    <slot />
    <ClientOnly>
      <Background />
    </ClientOnly>
  </div>
</template>
