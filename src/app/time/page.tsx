import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { FilterTabs } from './components/filter-tabs'
import { FilteredContent, FilteredContentFallback } from './components/filtered-content'

export const metadata: Metadata = {
  title: 'Time',
  description: 'Jamie\'s time spent coding!',
  icons: {
    icon: 'https://github.com/jvxz.png',
  },
}

export default function Page() {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="font-mono text-2xl">time</h1>
      <FilterTabs />
      <Suspense fallback={<FilteredContentFallback />}>
        <FilteredContent />
      </Suspense>
      <p className="text-muted-foreground text-right text-sm">
        Data collected from
        {' '}
        <Link
          href="https://wakatime.com"
          target="_blank"
          className="text-primary underline"
        >
          WakaTime
        </Link>
        .
      </p>
    </article>

  )
}

