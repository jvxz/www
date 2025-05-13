import { useTRPC } from '@/lib/trpc/client'
import { useQuery } from '@tanstack/react-query'

function useWakatime() {
  const trpc = useTRPC()
  const { data, isLoading, error } = useQuery(trpc.hello.queryOptions())

  return {
    data,
    isLoading,
    error,
  }
}

export { useWakatime }
