<script lang="ts" setup>
const props = defineProps<{
  span: TimeSpan
}>()

const { span: querySpan } = useTimeSpanQuery()

function formattedSpan(span: TimeSpan) {
  switch (props.span) {
    case 'today':
      return 'Today'
    case 'yesterday':
      return 'Yesterday'
    case '7_days':
      return '7 days'
    case '30_days':
      return '30 days'
    case 'all_time':
      return 'All time'
    default:
      return span
  }
}
</script>

<template>
  <UButton :variant="querySpan === props.span ? 'active' : 'default'" @click="querySpan = props.span">
    {{ formattedSpan(props.span) }}
  </UButton>
</template>
