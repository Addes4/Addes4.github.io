import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Adrian Sohrabi',
  description:
    'Engineering Mathematics student at KTH Royal Institute of Technology — building at the intersection of math and software.',
  openGraph: {
    title: 'Adrian Sohrabi',
    description:
      'Engineering Mathematics student at KTH Royal Institute of Technology.',
    url: 'https://addes4.github.io',
    siteName: 'Adrian Sohrabi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
