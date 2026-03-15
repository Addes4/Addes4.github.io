import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adrian Sohrabi',
  description:
    'Engineering Mathematics student at KTH Royal Institute of Technology',
  openGraph: {
    title: 'Adrian Sohrabi',
    description:
      'Engineering Mathematics student at KTH Royal Institute of Technology.',
    url: 'https://Addes4.github.io',
    siteName: 'Adrian',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
