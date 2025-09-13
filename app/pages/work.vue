<script lang="ts" setup>
defineOgImageComponent('Main', {
  description: 'My work',
  title: 'Work',
})
</script>

<template>
  <div class="flex flex-col gap-16">
    <WorkCard>
      <template #title>
        reskin
      </template>
      <template #links>
        <NuxtLink to="https://github.com/jvxz/reskin" target="_blank">
          <UButton>
            <Icon name="simple-icons:github" class="-translate-y-px" />
            Source
          </UButton>
        </NuxtLink>
        <NuxtLink to="https://reskin.im" target="_blank">
          <UButton>
            <Icon name="tabler:link" class="-translate-y-px" />
            Website
          </UButton>
        </NuxtLink>
      </template>
      <template #subtitle>
        creator, maintainer ⋅ jul. 2025 ─ present
      </template>
      <template #description>
        Advanced Minecraft skin management
      </template>
      <template #stack>
        <Icon title="Next.js" name="simple-icons:nextdotjs" />
        <Icon title="Drizzle" name="simple-icons:drizzle" />
        <Icon title="Three.js" name="custom:three" />
        <Icon title="Microsoft" name="simple-icons:microsoft" />
      </template>
    </WorkCard>
    <WorkCard>
      <template #title>
        otio
      </template>
      <template #subtitle>
        creator, maintainer ⋅ jun. 2025 ─ present
      </template>
      <template #description>
        Elegant inactivity timeout for your development servers
      </template>
      <template #links>
        <NuxtLink to="https://github.com/jvxz/otio" target="_blank">
          <UButton>
            <Icon name="simple-icons:github" class="-translate-y-0.5" />
            Source
          </UButton>
        </NuxtLink>
        <NuxtLink to="https://www.npmjs.com/package/otio" target="_blank">
          <UButton>
            <Icon name="simple-icons:npm" class="-translate-y-px" />
            npm
          </UButton>
        </NuxtLink>
      </template>
      <template #stack>
        <Icon title="Zod" name="simple-icons:nodedotjs" />
        <Icon title="Zod" name="simple-icons:zod" />
        <Icon title="Effect" name="custom:effect" />
      </template>
    </WorkCard>
    <WorkCard>
      <template #title>
        esgist
      </template>
      <template #subtitle>
        creator, maintainer ⋅ apr. 2025 ─ present
      </template>
      <template #description>
        Generate an ESLint config from a GitHub Gist
      </template>
      <template #links>
        <NuxtLink to="https://github.com/jvxz/esgist" target="_blank">
          <UButton>
            <Icon name="simple-icons:github" class="-translate-y-0.5" />
            Source
          </UButton>
        </NuxtLink>
        <NuxtLink to="https://www.npmjs.com/package/esgist" target="_blank">
          <UButton>
            <Icon name="simple-icons:npm" class="-translate-y-px" />
            npm
          </UButton>
        </NuxtLink>
      </template>
      <template #stack>
        <Icon title="Zod" name="simple-icons:nodedotjs" />
        <Icon title="Zod" name="simple-icons:vitest" />
        <Icon title="Effect" name="custom:effect" />
      </template>
    </WorkCard>
  </div>
</template>
