import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Page() {
  return (
    <article className="prose">
      <section className="space-y-16">
        <WorkCard
          sourceUrl="https://github.com/jvxz/ezra"
          webUrl="https://ezra.wisp.bio"
        >
          <h1 className="font-mono">ezra</h1>
          <p className="text-muted-foreground text-sm">
            creator, maintainer
            <span className="font-bold">⋅</span>
            {' '}
            jan. 2025 ─ present
          </p>
          <p>Modern, fast, local-first time tracker for RaterHub workers.</p>
        </WorkCard>
        <WorkCard
          sourceUrl="https://github.com/jvxz/mieru"
          webUrl="https://mieru.wisp.bio"
        >
          <h1 className="font-mono">mieru</h1>
          <p className="text-muted-foreground text-sm">
            creator, maintainer
            <span className="font-bold">⋅</span>
            {' '}
            feb. 2025 ─ present
          </p>
          <p>
            Beautiful, opinionated fork of
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
            >shadcn/ui
            </Link>
            .
          </p>
        </WorkCard>
        <WorkCard
          sourceUrl="https://github.com/jvxz/esgist"
          webUrl="https://www.npmjs.com/package/esgist"
        >
          <h1 className="font-mono">esgist</h1>
          <p className="text-muted-foreground text-sm">
            creator, maintainer
            <span className="font-bold">⋅</span>
            {' '}
            apr. 2025 ─ present
          </p>
          <p>Easily convert your GitHub Gist to an ESLint config via a CLI.</p>
        </WorkCard>
      </section>
    </article>
  )
}

function WorkCard({ children, className, sourceUrl, webUrl }: { children: React.ReactNode, className?: string, sourceUrl: string, webUrl: string }) {
  return (
    <div className={cn('prose relative !space-y-2', className)}>
      {children}
      <div className="absolute right-0 bottom-0 my-1 flex items-center gap-2">

      </div>
      <div className="absolute top-0 right-0 my-1 flex items-center gap-2">
        <Button
          className="flex items-center gap-2"
          asChild
        >
          <Link
            className="!no-underline"
            href={webUrl}
            target="_blank"
          >
            Website
            <span className="iconify icon-[mingcute--globe-2-fill]"></span>
          </Link>
        </Button>
        <Button
          className="flex items-center gap-2"
          asChild
        >
          <Link
            className="!no-underline"
            href={sourceUrl}
            target="_blank"
          >
            Source
            <span className="iconify icon-[mingcute--github-fill]"></span>
          </Link>
        </Button>

      </div>
    </div>
  )
}
