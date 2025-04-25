import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <ViewTransition
        name="card"
      >
        <Card>After</Card>
      </ViewTransition>
      <Link
        className={buttonVariants()}
        href="/"
      >
        Go
      </Link>
    </div>
  )
}
