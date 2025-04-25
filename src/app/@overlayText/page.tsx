import { unstable_ViewTransition as ViewTransition } from 'react'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <ViewTransition

      name="overlay-text"
    >
      <div className="text-primary fixed right-0 bottom-0 z-50 -translate-y-12 font-mono text-[300px] font-medium tracking-tighter opacity-2 select-none [text-box:_trim-both_cap_alphabetic]">
        {slug ?? 'profile'}
      </div>
    </ViewTransition>
  )
}

