'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

function ActiveLink({ dataActive = true, href, children, className, ...props }: { dataActive?: boolean, href: string, children: React.ReactNode, className?: string } & React.ComponentProps<'a'>) {
  const path = usePathname()

  const isActive = useMemo(() => href === path, [path, href])

  return (
    <Button
      disabled={isActive}
      data-active={dataActive && isActive}
      asChild
      className={cn('data-[active=true]:text-background data-[active=true]:bg-primary', className)}
    >
      <Link
        className="!no-underline"
        href={href}
        {...props}
      >
        {children}
      </Link>
    </Button>
  )
}

export { ActiveLink }
