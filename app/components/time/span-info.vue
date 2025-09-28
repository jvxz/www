<script lang="ts" setup>
const emit = defineEmits<{
  isPending: [boolean]
}>()

const nuxtApp = useNuxtApp()
const { span } = useTimeSpanQuery()

const { data, pending } = useFetch('/api/get-time', {
  deep: false,
  getCachedData(key) {
    return nuxtApp.payload.data?.[key] || nuxtApp.static?.data?.[key] || undefined
  },
  query: {
    span,
  },
})

watch(pending, value => emit('isPending', value))

const start = computed(() => {
  return useDateFormat(data.value?.start ?? '', 'MMM DD, YYYY')
})

const total = computed(() => data.value?.human_readable_total.replace(' hrs', 'h').replace(' mins', 'm'))

function formatLanguageName(name: string) {
  return name
    .replace('Typescript', 'TypeScript')
    .replace('Javascript', 'JavaScript')
    .replace('Json', 'JSON')
}
</script>

<template>
  <div v-if="data" class="flex flex-col gap-6">
    <div class="flex flex-col gap-4 font-mono">
      <div class="flex justify-between">
        <p class="text-sm font-normal text-muted-foreground">
          total <span class="text-xs">(from {{ start }})</span>
        </p>
      </div>
      <h2 class="text-2xl font-medium">
        {{ total }}
      </h2>
    </div>
    <div class="flex flex-col gap-4 font-mono">
      <p class="text-sm font-normal text-muted-foreground">
        languages
      </p>
      <div
        v-for="(language, index) in data?.languages.slice(0, 4)"
        :key="index"
        class="flex flex-col gap-2"
      >
        <div class="flex justify-between">
          <p class="text-sm font-medium">
            {{ formatLanguageName(language.name) }}
          </p>
          <p class="text-sm">
            {{ language.percent }}%
          </p>
        </div>
        <UProgress :percentage="language.percent" />
      </div>
    </div>
    <div class="flex flex-col gap-4 font-mono">
      <p class="text-sm font-normal text-muted-foreground">
        projects
      </p>
      <div
        v-for="(project, index) in data?.projects.slice(0, 4)"
        :key="index"
        class="flex flex-col gap-2"
      >
        <div class="flex justify-between">
          <p class="text-sm font-medium">
            {{ project.name }}
          </p>
          <p class="text-sm">
            {{ project.percent }}%
          </p>
        </div>
        <UProgress :percentage="project.percent" />
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col gap-6">
    <div class="flex flex-col gap-4 font-mono">
      <p class="text-sm font-normal text-muted-foreground">
        total <USkeleton class="inline h-[18px] w-16" />
      </p>
      <h2 class="text-2xl font-medium">
        <USkeleton class="h-[43.14px] w-48" />
      </h2>
    </div>
    <div class="flex flex-col gap-4 font-mono">
      <p class="text-sm font-normal text-muted-foreground">
        languages
      </p>
      <div
        v-for="(_, index) in Array(4).fill(null)"
        :key="index"
        class="flex flex-col gap-2"
      >
        <div class="flex justify-between">
          <p class="text-sm font-medium">
            <USkeleton class="h-[23.77px] w-16" />
          </p>
          <p class="text-sm">
            <USkeleton class="h-[23.77px] w-16" />
          </p>
        </div>
        <USkeleton class="h-[10.31px] w-full" />
      </div>
    </div>
    <div class="flex flex-col gap-4 font-mono">
      <p class="text-sm font-normal text-muted-foreground">
        projects
      </p>
      <div
        v-for="(_, index) in Array(4).fill(null)"
        :key="index"
        class="flex flex-col gap-2"
      >
        <div class="flex justify-between">
          <p class="text-sm font-medium">
            <USkeleton class="h-[23.77px] w-16" />
          </p>
          <p class="text-sm">
            <USkeleton class="h-[23.77px] w-16" />
          </p>
        </div>
        <USkeleton class="h-[10.31px] w-full" />
      </div>
    </div>
  </div>
</template>
