import { Nunito, Roboto_Mono } from 'next/font/google'

const sans = Nunito({
  subsets: ['latin'],
  variable: '--next-font-sans',
})

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--next-font-mono',
  weight: ['300', '400', '500', '700'],
})

export const font = {
  sans,
  mono,
}
