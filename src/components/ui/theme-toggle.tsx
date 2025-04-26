'use client'
import { useTheme } from 'next-themes'
import { Button } from './button'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      size="icon"
      variant="outline"
    >
      <span
        data-theme={resolvedTheme}
        className="iconify data-[theme=dark]:icon-[ph--moon-stars] data-[theme=light]:icon-[ph--sun]"
      />
    </Button>
  )
}

export { ThemeToggle }

