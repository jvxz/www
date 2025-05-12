import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

function Button({
  className,
  children,
  disabled = false,
  asChild = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  disabled?: boolean
  props?: React.ComponentProps<'button'>
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      disabled={disabled}
      className={cn(
        'text-primary px-1 py-0.5 select-none hover:bg-primary hover:text-background',
        disabled && 'pointer-events-none',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button }
