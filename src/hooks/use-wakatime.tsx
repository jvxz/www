import type { TimeFilterOptionParam } from './use-time-filter-params'
import { useTRPC } from '@/lib/trpc/client'
import { useQuery } from '@tanstack/react-query'

function useWakatime(filter: TimeFilterOptionParam) {
  const trpc = useTRPC()
  const { data, isLoading, error } = useQuery(trpc.getWakatime.queryOptions({
    filter: filter ?? 'today',
  }))

  return {
    data,
    isLoading,
    error,
  }
}

export { useWakatime }
