<template>
  <header class="mt-24 flex items-center gap-2 border-black text-black">
    <p class="font-bold tracking-widest text-primary select-none">
      (•◡•)
    </p>
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
