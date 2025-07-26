<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-6">
      <h1 class="font-mono text-3xl font-medium">
        time <span class="text-sm font-normal text-muted-foreground">est. Apr 13, 2025</span>
      </h1>
      <div class="flex items-center gap-1">
        <TimeSpanButton span="today" />
        <TimeSpanButton span="yesterday" />
        <TimeSpanButton span="7_days" />
        <TimeSpanButton span="30_days" />
        <TimeSpanButton span="all_time" />
      </div>
    </div>
    <TimeSpanInfo />
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
