/* eslint-disable ts/no-unnecessary-condition */
'use client'
import { Button } from '@/components/ui/button'
import { timeFilterTabs, useTimeFilterParams } from '@/hooks/use-time-filter-params'

function FilterTabs() {
  const { filter, setFilter } = useTimeFilterParams()

  return (
    <section className="flex gap-2 mb-8">
      {timeFilterTabs.map(tab => (
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
    </section>
  )
}

export { FilterTabs }
