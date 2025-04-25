import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const sans = localFont({
  src: './UncutSans-Regular.woff2',
  variable: '--font-uncut-sans',
  display: 'swap',
})

export const mono = localFont({
  src: './ServerMono-Regular.woff2',
  variable: '--font-server-mono',
  display: 'swap',
})

