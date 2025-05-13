'use client'
import { useTimeFilterParams } from '@/hooks/use-time-filter-params'
import { useWakatime } from '@/hooks/use-wakatime'

function FilteredContent() {
  const { filter } = useTimeFilterParams()
  const { data } = useWakatime(filter)

  return (
    <div>
      {data?.total_seconds}
    </div>
  )
}

export { FilteredContent }

