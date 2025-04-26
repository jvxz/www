import { ThemeToggle } from '@/components/ui/theme-toggle'
import Link from 'next/link'

function Header() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <h1 className="shrink-0 text-4xl font-bold">jamie jacobs</h1>
        <hr className="border-border h-px w-full border" />
        <ThemeToggle />
      </div>
      <div className="space-y-2">
        <ul className="text-muted-foreground space-y-1 font-mono *:w-fit">
          <li className="flex gap-2">
            <span className="iconify icon-[ph--map-pin] translate-y-0.75" />
            blue ridge, georgia
          </li>
          <li>
            <Link
              className="flex cursor-pointer gap-2 hover:underline"
              href="mailto:jamie@wisp.bio"
            >
              <span className="iconify icon-[ph--envelope] translate-y-0.75" />
              jamie@wisp.bio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { Header }
