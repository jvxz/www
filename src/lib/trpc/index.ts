import type { TimeFilterOption } from '../actions/get-waka-time'
import { type } from 'arktype'
import { getWakatime, timeFilterOptions } from '../actions/get-waka-time'
import { publicProcedure, router } from './server'

export const appRouter = router({
  getWakatime: publicProcedure
    .input(type({
      filter: type.valueOf(timeFilterOptions),
    }))
    .query(({ input }) => getWakatime(input.filter as TimeFilterOption)),
})

export type AppRouter = typeof appRouter
