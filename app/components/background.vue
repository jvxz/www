<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden">
    <BackgroundDot v-for="i in 8" :key="i" />
  </div>
</template>
