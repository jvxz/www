import type { TimeFilterOption } from '@/lib/actions/get-waka-time'
import { useTRPC } from '@/lib/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'

function useWakatime(filter: TimeFilterOption) {
  const trpc = useTRPC()
  const { data, isLoading, error } = useSuspenseQuery(trpc.getWakatime.queryOptions({
    filter,
  }))

  return {
    data,
    isLoading,
    error,
  }
}

export { useWakatime }
