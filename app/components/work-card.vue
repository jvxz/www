<template>
  <section class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-mono text-2xl font-medium">
        <slot name="title" />
      </h1>
      <slot name="links" />
    </div>
    <p class="text-sm text-muted-foreground">
      <slot name="subtitle" />
    </p>
    <div class="flex items-center justify-between">
      <p>
        <slot name="description" />
      </p>
      <div class="flex items-center gap-2 text-primary *:size-6 pr-1">
        <slot name="stack" />
      </div>
    </div>
  </section>
</template>
