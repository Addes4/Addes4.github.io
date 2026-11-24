import type { Metadata } from 'next'
import { Newsreader } from 'next/font/google'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-serif',
})

const description =
  'Engineering Mathematics student at KTH and visiting student researcher at Karolinska Institutet.'

export const metadata: Metadata = {
  title: 'Adrian Sohrabi',
  description,
  openGraph: {
    title: 'Adrian Sohrabi',
    description,
    url: 'https://Addes4.github.io',
    siteName: 'Adrian Sohrabi',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  )
}
