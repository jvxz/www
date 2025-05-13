'use client'
import type { Variants } from 'motion/react'
import { Skeleton } from '@/components/ui/skeleton'
import { useTimeFilterParams } from '@/hooks/use-time-filter-params'
import { useWakatime } from '@/hooks/use-wakatime'
import { formatDuration } from '@/lib/utils'
import * as Progress from '@radix-ui/react-progress'
import { AnimatePresence, motion } from 'motion/react'

const variants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 8,
  },
} as Variants

const motionProps = {
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  transition: {
    duration: 0.125,
    ease: [0.76, 0, 0.24, 1],
  },
}

function FilteredContent() {
  const { filter } = useTimeFilterParams()
  const { data } = useWakatime(filter)

  return (
    <article className="prose">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-muted-foreground !mb-4">total</h3>
          <AnimatePresence mode="wait">
            <motion.h1
              className="!mb-12 h-10"
              key={data.total_seconds}
              {...motionProps}
            >
              {formatDuration(data.total_seconds)}
            </motion.h1>
          </AnimatePresence>
        </div>

        {filter !== 'yesterday' && filter !== 'today' && data.daily_average && (
          <div className="space-y-2">
            <h3 className="text-muted-foreground !mb-4 text-right">average</h3>
            <AnimatePresence mode="wait">
              <motion.h1
                className="!mb-12 h-10"
                key={data.daily_average}
                {...motionProps}
              >
                {formatDuration(data.daily_average)}
              </motion.h1>
            </AnimatePresence>
          </div>
        )}
      </div>

      <h3 className="text-muted-foreground !mb-6">languages</h3>
      {data.languages
        .filter(language => language.name !== 'unknown')
        .slice(0, 5)
        .map(language => (
          <div
            className="mb-8"
            key={language.name}
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="!mb-2 h-6 font-mono">{language.name}</p>
              <p className="!mb-2 h-6 font-mono">{language.percent}%</p>
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
        className="ease-[cubic-bezier(0.76, 0, 0.24, 1)] bg-primary size-full transition-transform duration-250"
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress.Root>
  )
}

function FilteredContentFallback() {
  const { filter } = useTimeFilterParams()

  return (
    <article className="prose">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-muted-foreground !mb-4">total</h3>
          <AnimatePresence mode="wait">
            <Skeleton className="!mb-12 h-10 w-36" />
          </AnimatePresence>
        </div>

        {filter !== 'yesterday' && filter !== 'today' && (
          <div className="space-y-2">
            <h3 className="text-muted-foreground !mb-4 text-right">average</h3>
            <AnimatePresence mode="wait">
              <Skeleton className="!mb-12 h-10 w-36" />
            </AnimatePresence>
          </div>
        )}
      </div>

      <h3 className="text-muted-foreground !mb-6">languages</h3>
      {Array.from({
        length: 5,
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
