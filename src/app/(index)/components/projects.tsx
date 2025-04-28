import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'

function Projects() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="shrink-0 text-4xl font-bold">projects</h1>
      <MieruCard />
      <EsgistCard />
    </section>
  )
}

const MU_STACK = [
  {
    name: 'Next.js',
    icon: <span className="icon-[logos--nextjs-icon] size-4 dark:invert" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <span className="icon-[logos--tailwindcss-icon] size-4" />,
  },
]

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
        <div className="flex items-center gap-2">
          <TooltipProvider>
            {MU_STACK.map(tool => (
              <Tooltip key={tool.name}>
                <TooltipTrigger>
                  {tool.icon}
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={8}
                  className="px-2 py-0.5 text-xs"
                >
                  <p>{tool.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

        </div>
      </div>
      <p className="text-muted-foreground font-mono text-sm">
        creator and maintainer
      </p>
      <p>FOSS component framework based on shadcn/ui, offering an enhanced, opinionated developer experience and distinct design language</p>
    </Link>

  )
}

const EG_STACK = [
  {
    name: 'Node.js',
    icon: <span className="icon-[logos--nodejs-icon] size-4" />,
  },
  {
    name: 'Effect',
    icon: <span className="icon-[logos--effect-icon] size-4 dark:invert" />,
  },
]

function EsgistCard() {
  return (
    <Link
      href="https://www.npmjs.com/package/esgist"
      className="group space-y-2 hover:cursor-pointer"
      target="_blank"
    >
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-medium">
          esgist
          {' '}
          <span className="icon-[ph--arrow-square-out] slide-out-to-left text-xl opacity-0 duration-100 group-hover:animate-in group-hover:fade-in-0 group-hover:slide-in-from-left-30 group-hover:opacity-100" />
        </h1>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            {EG_STACK.map(tool => (
              <Tooltip key={tool.name}>
                <TooltipTrigger>
                  {tool.icon}
                </TooltipTrigger>
                <TooltipContent
                  sideOffset={8}
                  className="px-2 py-0.5 text-xs"
                >
                  <p>{tool.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

        </div>
      </div>
      <p className="text-muted-foreground font-mono text-sm">
        creator and maintainer
      </p>
      <p>easily create eslint configs from github gists, right in your terminal</p>

    </Link>
  )
}

export { Projects }
