import { ActiveLink } from '../active-link'

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
        <ActiveLink
          dataActive={false}
          href="/"
        >
          <span className="font-bold">(•◡•)</span>
        </ActiveLink>
      </div>
      <ul className="flex items-center gap-2">
        {routes.map(route => (
          <li key={route.href}>
            <ActiveLink href={route.href}>
              {route.label}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

export { LayoutHeader }
