import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const sans = localFont({
  src: './Aspekta-Regular.woff2',
  variable: '--font-next-sans',
  display: 'swap',
})

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-next-mono',
  display: 'swap',
})
