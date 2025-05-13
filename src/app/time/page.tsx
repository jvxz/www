'use client'
import { useTRPC } from '@/lib/trpc/client'
import { useQuery } from '@tanstack/react-query'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading time data...</div>}>
      <TimeContent />
    </Suspense>
  )
}

function TimeContent() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.hello.queryOptions())

  return (
    <div>
      <h1>{data?.username}</h1>
    </div>
  )
}
