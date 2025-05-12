'use client'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

function HeaderLink({ href, children }: { href: string, children: React.ReactNode }) {
  const path = usePathname()

  return (
    <Button
      data-active={path === href}
      asChild
      className="data-[active=true]:text-background data-[active=true]:bg-primary"
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
}

export { HeaderLink }
