import { Link } from 'next-view-transitions'
import { HeaderLink } from '../header/link'
import { Button } from '../ui/button'

export const routes = [
  {
    label: 'Profile',
    href: '/',
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Uses',
    href: '/uses',
  },

]

function LayoutHeader() {
  return (
    <header className="my-16 flex items-center justify-between">
      <div className="text-primary font-bold tracking-widest select-none">
        <Button asChild>
          <Link href="/">(•◡•)</Link>
        </Button>
      </div>
      <ul className="flex items-center gap-2">
        {routes.map(route => (
          <li key={route.href}>
            <HeaderLink href={route.href}>
              {route.label}
            </HeaderLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

export { LayoutHeader }
