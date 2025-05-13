'use client'
import type { Variants } from 'motion/react'
import { Skeleton } from '@/components/ui/skeleton'
import { useTimeFilterParams } from '@/hooks/use-time-filter-params'
import { useWakatime } from '@/hooks/use-wakatime'
import { formatDuration } from '@/lib/utils'
import * as Progress from '@radix-ui/react-progress'
import { AnimatePresence, motion } from 'motion/react'

const MAX_ITEMS = 4

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
    <article className="prose flex flex-col gap-8">
      <section className="flex justify-between">
        <div className="h-28">
          <h3 className="text-muted-foreground">total</h3>
          <AnimatePresence mode="wait">
            <motion.h1
              className="h-8"
              key={data.total_seconds}
              {...motionProps}
            >
              {formatDuration(data.total_seconds)}
            </motion.h1>
          </AnimatePresence>
        </div>

        {filter !== 'yesterday' && filter !== 'today' && data.daily_average && (
          <div className="h-28">
            <h3 className="text-muted-foreground text-right">average</h3>
            <AnimatePresence mode="wait">
              <motion.h1
                className="h-8"
                key={data.daily_average}
                {...motionProps}
              >
                {formatDuration(data.daily_average)}
              </motion.h1>
            </AnimatePresence>
          </div>
        )}
      </section>

      <section>
        <h3 className="text-muted-foreground ">languages</h3>
        {data.languages
          .filter(language => language.name !== 'unknown')
          .slice(0, MAX_ITEMS)
          .map(language => (
            <div
              className="mb-8"
              key={language.name}
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="!mb-2 h-6 font-mono">{language.name}</p>
                <p className="!mb-2 h-6 font-mono">{language.percent}%</p>
              </div>
              <PercentDisplay progress={language.percent} />
            </div>
          ))}
      </section>

      <section>
        <h3 className="text-muted-foreground ">projects</h3>
        {data.projects
          .filter(language => language.name !== 'unknown')
          .slice(0, MAX_ITEMS)
          .map(language => (
            <div
              className="mb-8"
              key={language.name}
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="!mb-2 h-6 font-mono">{language.name}</p>
                <p className="!mb-2 h-6 font-mono">{language.percent}%</p>
              </div>
              <PercentDisplay progress={language.percent} />
            </div>
          ))}
      </section>
    </article>
  )
}

function PercentDisplay({
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
    <article className="prose flex flex-col gap-8">
      <section className="flex justify-between">
        <div className="h-28">
          <h3 className="text-muted-foreground">total</h3>
          <AnimatePresence mode="wait">
            <Skeleton
              className="h-8"
            />
          </AnimatePresence>
        </div>

        {filter !== 'yesterday' && filter !== 'today' &&  (
          <div className="h-28">
            <h3 className="text-muted-foreground text-right">average</h3>
            <AnimatePresence mode="wait">
              <Skeleton
                className="h-8"
              />
            </AnimatePresence>
          </div>
        )}
      </section>

      <section>
        <h3 className="text-muted-foreground ">languages</h3>
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
              <PercentDisplay progress={0} />
            </div>
          ))}
      </section>

      <section>
        <h3 className="text-muted-foreground ">projects</h3>
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
            <PercentDisplay progress={0} />
          </div>
        ))}
      </section>
    </article>
  )
}

export { FilteredContent, FilteredContentFallback }
