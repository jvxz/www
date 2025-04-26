import Link from 'next/link'

function Projects() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="shrink-0 text-4xl font-bold">projects</h1>
      <MieruCard />
      <JunbiCard />
    </section>
  )
}

function MieruCard() {
  return (
    <Link
      href="https://mieru.wisp.bio"
      className="group space-y-2 hover:cursor-pointer"
      target="_blank"
    >
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-medium">
          <span className="iconify icon-[mingcute--magic-1-line]" />
          {' '}
          mieru
          {' '}
          <span className="icon-[ph--arrow-square-out] slide-out-to-left text-xl opacity-0 duration-100 group-hover:animate-in group-hover:fade-in-0 group-hover:slide-in-from-left-30 group-hover:opacity-100" />
        </h1>
        <span className="text-muted-foreground font-mono text-sm">
          <span className="iconify icon-[mingcute--calendar-line] translate-y-0.75" />
          {' '}
          2025 ─ present
        </span>
      </div>
      <p className="text-muted-foreground font-mono text-sm">
        creator and maintainer
      </p>
      <p>FOSS component framework based on shadcn/ui, offering an enhanced, opinionated developer experience and distinct design language</p>
    </Link>

  )
}

function JunbiCard() {
  return (
    <Link
      href="https://www.npmjs.com/package/junbi"
      className="group space-y-2 hover:cursor-pointer"
      target="_blank"
    >
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-medium">
          junbi
          {' '}
          <span className="icon-[ph--arrow-square-out] slide-out-to-left text-xl opacity-0 duration-100 group-hover:animate-in group-hover:fade-in-0 group-hover:slide-in-from-left-30 group-hover:opacity-100" />
        </h1>
        <span className="text-muted-foreground font-mono text-sm">
          <span className="iconify icon-[mingcute--calendar-line] translate-y-0.75" />
          {' '}
          2025 ─ present
        </span>
      </div>
      <p className="text-muted-foreground font-mono text-sm">
        creator and maintainer
      </p>
      <p>all-in-one CLI for initiating typescript projects</p>
      <div className="flex items-center gap-2">
        <span className="icon-[logos--effect-icon]"></span>
      </div>
    </Link>
  )
}

export { Projects }
