'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useTimeFilterParams } from '@/hooks/use-time-filter-params'
import { useWakatime } from '@/hooks/use-wakatime'
import { ContentPercentBar } from './content-percent-bar'

const MAX_ITEMS = 4

function ContentDataDisplay({ type }: { type: 'languages' | 'projects' }) {
  const { filter } = useTimeFilterParams()
  const { data } = useWakatime(filter)

  return (
    <section>
      <h3 className="text-muted-foreground">{type}</h3>
      {data[type]
        .filter(type => type.name !== 'unknown')
        .slice(0, MAX_ITEMS)
        .map(type => (
          <div
            className="mb-8"
            key={type.name}
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="!mb-2 h-6 font-mono">{type.name}</p>
              <p className="!mb-2 h-6 font-mono">{type.percent}%</p>
            </div>
            <ContentPercentBar progress={type.percent} />
          </div>
        ))}
    </section>
  )
}

function ContentDataFallback({ type }: { type: 'languages' | 'projects' }) {
  return (
    <section>
      <h3 className="text-muted-foreground">{type}</h3>
      {Array.from({
        length: MAX_ITEMS,
      }).map((_, i) => (
        <div
          className="mb-8"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          <div className="mb-2 flex items-center justify-between">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-6 w-24" />
          </div>
          <ContentPercentBar progress={0} />
        </div>
      ))}
    </section>
  )
}

export { ContentDataDisplay, ContentDataFallback }
