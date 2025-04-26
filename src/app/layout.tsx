import type { Metadata } from 'next'
import { Noise } from '@/components/noise'
import { Providers } from '@/components/providers'
import { mono, sans } from '@/lib/font'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '~/',
  description: 'jamie\'s personal website',
  icons: [{
    rel: 'icon',
    url: 'https://github.com/jvxz.png',
  }],
}

export default function RootLayout({ children, overlayText }: Readonly<{ children: React.ReactNode, overlayText: React.ReactNode }>) {
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
      <body className="font-sans">
        <Providers>
          {children}
          {overlayText}
        </Providers>
        <Noise />
      </body>
    </html>
  )
}
