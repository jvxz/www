import { useQueryState } from 'nuqs'

export type TimeFilterOptions = Exclude<(typeof timeFilterTabs)[number]['value'], 'today'> | null

export const timeFilterTabs = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'yesterday',
    label: 'Yesterday',
  },
  {
    value: '7-days',
    label: '7 days',
  },
  {
    value: '30-days',
    label: '30 days',
  },
  {
    value: 'all-time',
    label: 'All time',
  },
] as const

function useTimeFilterParams() {
  const [filter, setFilter] = useQueryState<TimeFilterOptions>('filter', {
    defaultValue: null,
    parse: value => value as TimeFilterOptions,
  })

  return {
    filter,
    setFilter,
  }
}

export { useTimeFilterParams }
