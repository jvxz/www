'use client'
import { Button } from '@/components/ui/button'
import { useQueryState } from 'nuqs'

const tabs = [
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

export type TimeFilterOptions = (typeof tabs)[number]['value']

function FilterTabs() {
  const [filter, setFilter] = useQueryState('filter')

  return (
    <div className="flex gap-2">
      {tabs.map(tab => (
        <Button
          onClick={() => setFilter(tab.value === 'today' ? null : tab.value)}
          data-active={filter === tab.value || (filter === null && tab.value === 'today')}
          disabled={filter === tab.value || (filter === null && tab.value === 'today')}
          key={tab.value}
          className="group cursor-pointer data-[active=true]:bg-primary data-[active=true]:text-background"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}

export { FilterTabs }
