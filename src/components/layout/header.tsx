import { HeaderLink } from '../header/link'

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
  {
    label: 'Time',
    href: '/time',
  },
]

function LayoutHeader() {
  return (
    <header className="my-16 flex items-center justify-between">
      <div className="text-primary font-bold tracking-widest select-none">
        <HeaderLink
          dataActive={false}
          href="/"
        >
          (•◡•)
        </HeaderLink>
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
