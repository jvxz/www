'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useTimeFilterParams } from '@/hooks/use-time-filter-params'
import { useWakatime } from '@/hooks/use-wakatime'
import { d } from '@/lib/utils'
import * as Progress from '@radix-ui/react-progress'

function FilteredContent() {
  const { filter } = useTimeFilterParams()
  const { data } = useWakatime(filter)

  return (
    <article className="prose">
      <h3 className="text-muted-foreground !mb-4">total</h3>
      <h1 className="!mb-12 h-10">
        {d({
          second: data.total_seconds,
        }).format('h[h] m[m]')}
      </h1>
      <h3 className="text-muted-foreground !mb-6">languages</h3>
      {data.languages
        .filter(language => language.name !== 'unknown')
        .slice(0, 5)
        .map(language => (
          <div
            className="mb-8"
            key={language.name}
          >
            <div className="flex items-center justify-between">
              <p className="!mb-2 font-mono">{language.name}</p>
              <p className="!mb-2 font-mono">{language.percent}%</p>
            </div>
            <LanguageProgress progress={language.percent} />
          </div>
        ))}
    </article>
  )
}

function LanguageProgress({
  progress,
  ...props
}: Progress.ProgressProps & {
  progress: number
}) {
  return (
    <Progress.Root
      className="bg-muted relative h-3 w-full translate-z-0 overflow-hidden rounded-full"
      value={progress}
      {...props}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] bg-primary size-full transition-transform duration-300"
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress.Root>
  )
}

function FilteredContentFallback() {
  return (
    <article className="prose">
      <h3 className="text-muted-foreground !mb-4">total</h3>
      <Skeleton className="!mb-12 h-10 w-36" />
      <h3 className="text-muted-foreground !mb-6">languages</h3>
      {Array.from({
        length: 4,
      }).map((_, i) => (
        <div
          className="mb-8"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          <div className="mb-4 flex items-center justify-between">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-24" />
          </div>
          <LanguageProgress progress={0} />
        </div>
      ))}
    </article>
  )
}

export { FilteredContent, FilteredContentFallback }

