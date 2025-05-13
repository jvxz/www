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
      <h2>{data?.total_seconds}</h2>
      <h3>{data?.languages.map(language => language.name)}</h3>
      <h3>{data?.projects.map(project => project.name)}</h3>
    </div>
  )
}
