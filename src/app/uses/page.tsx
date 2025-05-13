import type { Metadata } from 'next'
import { Icon } from '@/components/ui/icon'

export const metadata: Metadata = {
  title: 'Uses',
  description: 'What Jamie uses!',
  icons: {
    icon: 'https://github.com/jvxz.png',
  },
}

export default function Page() {
  return (
    <article className="prose space-y-16">
      <section>
        <h1>hardware</h1>
        <ul>
          <li>
            <span className="iconify icon-[mingcute--laptop-line]" />
            2021 MacBook Pro 14"
          </li>
          <li>
            <span className="iconify icon-[mingcute--mouse-line]" />
            Lemokey G2 8K
          </li>
          <li>
            <span className="iconify icon-[mingcute--keyboard-line]" />
            Lucky 65% V2
          </li>
          <li>
            <span className="iconify icon-[mingcute--monitor-line]" />
            Acer Nitro XV275U 27" 1440p
          </li>
        </ul>
      </section>
      <section>
        <h1>stack</h1>
        <ul>
          <li>
            <Icon.TypeScript />
            TypeScript
          </li>
          <li>
            <Icon.React />
            React
          </li>
          <li>
            <Icon.Nextjs />
            Next.js
          </li>
          <li>
            <Icon.TailwindCSS />
            Tailwind
          </li>
          <li>
            <Icon.TRPC />
            tRPC
          </li>
          <li>
            <Icon.ReactQuery />
            React Query
          </li>
          <li>
            <Icon.Effect />
            Effect
          </li>
        </ul>
      </section>
      <section>
        <h1>environment</h1>
        <ul>
          <li>
            <span className="iconify icon-[mingcute--globe-2-line]" />
            Arc
          </li>
          <li>
            <span className="iconify icon-[mingcute--code-line]" />
            Cursor
          </li>
          <li>
            <span className="iconify icon-[mingcute--terminal-line]" />
            Ghostty
          </li>
          <li>
            <span className="iconify icon-[mingcute--git-branch-line]" />
            git
          </li>
          <li>
            <span className="iconify icon-[mingcute--package-2-line]" />
            bun / pnpm
          </li>
        </ul>
      </section>
    </article>
  )
}
