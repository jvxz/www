<script lang="ts" setup>
const { span } = useTimeSpanQuery()

const { data } = useFetch('/api/get-time', {
  query: {
    span,
  },
})

const start = computed(() => {
  return useDateFormat(data.value?.start ?? '', 'MMM DD, YYYY')
})

const total = computed(() => {
  if (!data.value) {
    return null
  }
  return data.value.human_readable_total.replace(' hrs', 'h').replace(' mins', 'm')
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4 font-mono">
      <p class="text-sm font-normal text-muted-foreground">
        total <span class="text-xs">(from {{ start }})</span>
      </p>
      <h2 v-if="data" class="text-2xl font-medium">
        {{ total }}
      </h2>
      <USkeleton v-else class="h-[43.14px] w-48" />
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
          <p v-if="data" class="text-sm font-medium">
            {{ language.name }}
          </p>
          <USkeleton v-else class="h-[23.77px] w-16" />
          <p v-if="data" class="text-sm">
            {{ language.percent }}%
          </p>
          <USkeleton v-else class="h-[23.77px] w-16" />
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
</template>
