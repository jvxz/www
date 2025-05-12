import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

function Button({
  className,
  children,
  asChild = false,
  ...props
}: {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  props?: React.ComponentProps<'button'>
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(
        'text-primary px-1 py-0.5 select-none hover:bg-primary hover:text-background',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button }
