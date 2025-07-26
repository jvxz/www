<script lang="ts" setup>
const { span } = useTimeSpanQuery()

const { data, status } = useFetch('/api/get-time', {
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
  <div v-if="data" class="flex flex-col gap-6">
    <div class="flex flex-col gap-4 font-mono">
      <div class="flex justify-between">
        <p class="text-sm font-normal text-muted-foreground">
          total <span class="text-xs">(from {{ start }})</span>
        </p>
        <USpinner v-if="status === 'pending'" class="size-4 text-primary" />
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
            {{ language.name }}
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
