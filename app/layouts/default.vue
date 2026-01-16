<template>
  <div data-slot="layout" class="mx-auto max-w-3xl space-y-16 px-4">
    <AppHeader />
    <slot />
    <ClientOnly>
      <Background />
    </ClientOnly>
  </div>
</template>
