'use client'
import type { Variants } from 'motion/react'
import { Skeleton } from '@/components/ui/skeleton'
import { useTimeFilterParams } from '@/hooks/use-time-filter-params'
import { useWakatime } from '@/hooks/use-wakatime'
import { formatDuration } from '@/lib/utils'
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

function ContentTimeDisplay() {
  const { filter } = useTimeFilterParams()
  const { data } = useWakatime(filter)

  return (
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
  )
}

function ContentTimeDisplayFallback() {
  const { filter } = useTimeFilterParams()

  return (
    <section className="flex justify-between">
      <div className="h-28">
        <h3 className="text-muted-foreground">total</h3>
        <AnimatePresence mode="wait">
          <Skeleton
            className="h-8"
          />
        </AnimatePresence>
      </div>

      {filter !== 'yesterday' && filter !== 'today' && (
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
  )
}

export { ContentTimeDisplay, ContentTimeDisplayFallback }
