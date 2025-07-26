<template>
  <header class="mt-24 flex items-center gap-2 border-black text-black">
    <NuxtLink
      :style="{
        pointerEvents: $route.path === '/' ? 'none' : 'auto',
      }"
      to="/"
    >
      <UButton class="font-bold tracking-widest text-primary select-none">
        (•◡•)
      </UButton>
    </NuxtLink>
    <div class="ml-auto" />
    <UButton :variant="$route.path === '/' ? 'active' : 'default'">
      <NuxtLink to="/">
        Profile
      </NuxtLink>
    </UButton>
    <UButton :variant="$route.path === '/work' ? 'active' : 'default'">
      <NuxtLink to="/work">
        Work
      </NuxtLink>
    </UButton>
    <UButton :variant="$route.path === '/uses' ? 'active' : 'default'">
      <NuxtLink to="/uses">
        Uses
      </NuxtLink>
    </UButton>
    <UButton :variant="$route.path === '/time' ? 'active' : 'default'">
      <NuxtLink to="/time">
        Time
      </NuxtLink>
    </UButton>
  </header>
</template>
