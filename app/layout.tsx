import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Florian Dumont — Conception créative',
  description:
    "Conception créative, vidéo, photo & motion design. De l'idée à l'image.",
  openGraph: {
    title: 'Florian Dumont',
    description: "Conception créative, vidéo, photo & motion design.",
    url: 'https://weareutopian.com',
    siteName: 'weareutopian.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={montserrat.variable} suppressHydrationWarning>
      <body style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
