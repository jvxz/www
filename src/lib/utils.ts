import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
import { twMerge } from 'tailwind-merge'

dayjs.extend(objectSupport)

export const d = dayjs

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
