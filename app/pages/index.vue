<script lang="ts" setup>
defineOgImageComponent('Main')

useSeoMeta({
  description: 'My biography',
  title: 'Home',
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <p>Hi there! I'm a 21-year-old <span class="font-medium text-blue-400">TypeScript</span> developer from northern Georgia, est. September 2024.</p>
    <p>
      I am currently working full-time on personal OSS projects, mostly specializing in full-stack web applications. I have a strong passion of discovering new technologies and concepts, specifically those that enhance quality of life. You can find my work <NuxtLink to="/work" aria-label="Work page">
        <ULink>here</ULink>
      </NuxtLink>!
    </p>
    <p>
      If you'd like to get in touch, feel free to contact me via email! <NuxtLink to="mailto:hi@jamie.to" aria-label="Email me">
        <ULink>hi@jamie.to</ULink>
      </NuxtLink>
    </p>
    <p>Thanks for stopping by! ✨</p>
    <div class="flex justify-between">
      <p>- Jamie</p>
      <div class="flex gap-2">
        <NuxtLink
          to="https://github.com/jvxz"
          target="_blank"
          aria-label="GitHub profile"
        >
          <UButton aria-label="GitHub profile">
            <Icon name="simple-icons:github" />
          </UButton>
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/jjac2004/"
          target="_blank"
          aria-label="LinkedIn profile"
        >
          <UButton aria-label="LinkedIn profile">
            <Icon name="simple-icons:linkedin" />
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
