import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="container mx-auto my-32 max-w-screen-md space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="shrink-0 text-4xl font-bold">jamie jacobs</h1>
          <hr className="border-border h-px w-full border" />
          <div className="flex items-center gap-4">
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
                'px-0 font-mono',
              )}
              href="/resources"
            >~/resources
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
                'px-0 font-mono',
              )}
              href="/use"
            >~/use
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <ul className="text-muted-foreground space-y-1 font-mono *:w-fit">
            <li className="flex gap-2">
              <span className="iconify icon-[ph--map-pin] translate-y-0.5" />
              blue ridge, georgia
            </li>
            <li className="flex cursor-pointer gap-2 hover:underline">
              <span className="iconify icon-[ph--envelope] translate-y-0.5" />
              jamie@wisp.bio
            </li>
          </ul>
        </div>
      </div>
      <p className="text-lg">
        hi there! i'm a 20 y/o self-taught typescript developer from north georgia. i currently work on passion projects relating to
        {' '}
        <span className="font-bold">ui</span>
        {' '}
        and
        {' '}
        <span className="font-bold">developer experience</span>
        {' '}
        full-time. i have a strong passion of discovering new technologies and concepts, specifically those that enhance ease of use. while i'm not programming, i enjoy spending my time studying art and traveling.
      </p>
    </div>
  )
}
