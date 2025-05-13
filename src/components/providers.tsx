import { TRPCReactProvider } from '@/lib/trpc/client'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <NuqsAdapter>
        {children}
      </NuqsAdapter>
    </TRPCReactProvider>
  )
}

export { Providers }
