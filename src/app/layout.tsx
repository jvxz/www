import type { Metadata } from 'next'
import { LayoutHeader } from '@/components/layout/header'
import { cn } from '@/lib/utils'
import { ViewTransitions } from 'next-view-transitions'
import { font } from '../lib/config/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'jamie',
  description: 'jamie\'s bio!',
  icons: {
    icon: 'https://github.com/jvxz.png',
  },
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={cn('container mx-auto max-w-screen-md', font.mono.variable, font.sans.variable)}>
          <LayoutHeader />
          <div className="page-transition">{children}</div>
        </body>
      </html>
    </ViewTransitions>
  )
}
