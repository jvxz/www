'use client'
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

function ActiveLink({ dataActive = true, href, children }: { dataActive?: boolean, href: string, children: React.ReactNode }) {
  const path = usePathname()

  const isActive = useMemo(() => href === path, [path, href])

  return (
    <Button
      disabled={isActive}
      data-active={dataActive && isActive}
      asChild
      className="data-[active=true]:text-background data-[active=true]:bg-primary"
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
}

export { ActiveLink }
