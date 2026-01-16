<script lang="ts" setup>
defineOgImageComponent('Main')

useSeoMeta({
  description: 'My biography',
  title: 'Home',
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <p>Hi there! I'm a 21-year-old <span class="font-medium text-blue-400">TypeScript</span> developer from northern Georgia.</p>
    <p>
      I am currently working full-time on personal projects. I have a strong passion in design and am working to find my own aesthetic to incorporate into my projects. 
    </p>
    <p>
      If you'd like to get in touch, feel free to contact me via email: <NuxtLink to="mailto:hi@jamie.to" aria-label="Email me">
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
        <!-- <NuxtLink
        to="https://www.linkedin.com/in/jjac2004/"
          target="_blank"
          aria-label="LinkedIn profile"
        >
          <UButton aria-label="LinkedIn profile">
            <Icon name="simple-icons:linkedin" />
          </UButton>
        </NuxtLink> -->
        <NuxtLink
        to="https://bsky.app/profile/jamie.to"
          target="_blank"
          aria-label="Bluesky profile"
        >
          <UButton aria-label="Bluesky profile">
            <Icon name="simple-icons:bluesky" />
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
