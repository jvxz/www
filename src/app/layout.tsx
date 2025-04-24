import type { Metadata } from 'next'
import { mono, sans } from '@/lib/font'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '~/index',
  description: 'jamie\'s personal website',
  icons: [{
    rel: 'icon',
    url: 'https://github.com/jvxz.png',
  }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} antialiased ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
