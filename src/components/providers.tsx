import { TRPCReactProvider } from '@/lib/trpc/client'
import { Analytics } from '@vercel/analytics/react'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <NuqsAdapter>
        {children}
        <Analytics basePath="/monitor" />
      </NuqsAdapter>
    </TRPCReactProvider>
  )
}

export { Providers }
