import type { Metadata } from 'next'
import { Background } from '@/components/background'
import { LayoutHeader } from '@/components/layout/header'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'
import { ViewTransitions } from 'next-view-transitions'
import { font } from '../lib/config/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jamie Jacobs',
  description: 'Jamie\'s bio!',
  icons: {
    icon: 'https://github.com/jvxz.png',
  },
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('container mx-auto max-w-screen-md overflow-x-hidden antialiased', font.mono.variable, font.sans.variable)}>
        <ViewTransitions>
          <LayoutHeader />
          <Providers>
            <div className="page-transition animate-fancy-fade-in">{children}</div>
          </Providers>
        </ViewTransitions>
        <Background />
      </body>
    </html>
  )
}
