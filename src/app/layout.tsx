import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
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
      {process.env.NODE_ENV === 'development' && (
        <head>
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        </head>
      )}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
