<script lang="ts" setup>
defineOgImageComponent('Main', {
  description: 'The hardware and software I use',
  title: 'Uses',
})
</script>

<template>
  <section class="flex flex-col gap-16">
    <UsesCard>
      <template #title>
        hardware
      </template>
      <template #item>
        <li>
          <Icon name="mingcute:laptop-line" /> 2021 MacBook Pro 14"
        </li>
        <li>
          <Icon name="mingcute:mouse-line" /> Lemokey G2 8K
        </li>
        <li>
          <Icon name="mingcute:keyboard-line" /> Lucky 65% V2
        </li>
        <li>
          <Icon name="mingcute:monitor-line" /> Acer Nitro XV275U 27" 1440p
        </li>
      </template>
    </UsesCard>
    <UsesCard>
      <template #title>
        stack
      </template>
      <template #item>
        <li>
          <Icon name="simple-icons:typescript" /> TypeScript
        </li>
        <li>
          <Icon name="simple-icons:react" /> React
        </li>
        <li>
          <Icon name="simple-icons:vuedotjs" /> Vue
        </li>
        <li>
          <Icon name="simple-icons:nextdotjs" /> Next.js
        </li>
        <li>
          <Icon name="simple-icons:nuxt" /> Nuxt
        </li>
        <li>
          <Icon name="simple-icons:tailwindcss" /> Tailwind CSS
        </li>
        <li>
          <Icon name="simple-icons:reactquery" /> React Query
        </li>
        <li>
          <Icon name="custom:trpc" /> tRPC
        </li>
        <li>
          <Icon name="custom:motion" class="!size-5" /> motion <p class="text-xs text-muted-foreground">
            (Framer Motion)
          </p>
        </li>
        <li>
          <Icon name="simple-icons:drizzle" /> Drizzle
        </li>
        <li>
          <Icon name="custom:effect" class="!size-5" /> Effect
        </li>
      </template>
    </UsesCard>
    <UsesCard>
      <template #title>
        environment
      </template>
      <template #item>
        <li>
          <Icon name="majesticons:globe" /> Arc
        </li>
        <li>
          <Icon name="majesticons:code" /> Cursor
        </li>
        <li>
          <Icon name="majesticons:terminal-line" /> Ghostty
        </li>
        <li>
          <Icon name="majesticons:git-branch" /> Git
        </li>
        <li>
          <Icon name="majesticons:box-line" /> bun / pnpm
        </li>
      </template>
    </UsesCard>
  </section>
</template>
