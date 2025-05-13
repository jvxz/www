import { getWakaTime } from '../actions/get-waka-time'
import { publicProcedure, router } from './server'

export const appRouter = router({
  hello: publicProcedure.query(() => getWakaTime()),
})

export type AppRouter = typeof appRouter
