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

export type TimeFilterOptionParam = Exclude<TimeFilterOption, 'today'> | null

function useTimeFilterParams() {
  const [filter, setFilter] = useQueryState<TimeFilterOptionParam>('filter', {
    defaultValue: null,
    parse: value => value as TimeFilterOptionParam,
  })

  return {
    filter,
    setFilter,
  }
}

export { useTimeFilterParams }
