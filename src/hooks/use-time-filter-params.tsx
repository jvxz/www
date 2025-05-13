import type { TimeFilterOption, timeFilterOptions } from '@/lib/actions/get-waka-time'
import { useQueryState } from 'nuqs'

export const timeFilterTabs: Array<{
  value: typeof timeFilterOptions[number]
  label: string
}> = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'yesterday',
    label: 'Yesterday',
  },
  {
    value: '7_days',
    label: '7 days',
  },
  {
    value: '30_days',
    label: '30 days',
  },
  {
    value: 'all_time',
    label: 'All time',
  },
] as const

function useTimeFilterParams() {
  const [filter, setFilter] = useQueryState<TimeFilterOption>('filter', {
    defaultValue: 'today',
    parse: value => value as TimeFilterOption,
  })

  return {
    filter,
    setFilter,
  }
}

export { useTimeFilterParams }
