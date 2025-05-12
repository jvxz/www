import { Nunito, Roboto_Mono } from 'next/font/google'

const sans = Nunito({
  subsets: ['latin'],
  variable: '--font-next-sans',
})

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-next-mono',
  weight: ['300', '400', '500', '700'],
})

export const font = {
  sans,
  mono,
}
