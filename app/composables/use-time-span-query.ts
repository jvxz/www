import { useRouteQuery } from '@vueuse/router'

export function useTimeSpanQuery() {
  const span = useRouteQuery<TimeSpan>('span', 'today')

  onMounted(() => {
    if (!timeSpanOptions.includes(span.value)) {
      span.value = 'today'
    }
  })

  return {
    span,
  }
}
