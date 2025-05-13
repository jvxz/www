import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import objectSupport from 'dayjs/plugin/objectSupport'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

dayjs.extend(objectSupport)
dayjs.extend(duration)
const d = dayjs

export function formatDuration(seconds: number) {
  const dur = d.duration(seconds, 'seconds')

  const days = dur.days()
  const hours = dur.hours() + (24 * days)
  const minutes = dur.minutes()

  return d.duration({
    days,
    hours,
    minutes,
  }).format('H[h] m[m]')
}
