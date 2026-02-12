import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter ({ subsets: ['latin'] })
const _jetBrains_mono = JetBrains_Mono ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Integrity PMS - Login',
  description: 'Integrity Property Management System Login',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
