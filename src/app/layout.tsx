import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mangaspot',
  description: 'The go to spot for reading manga.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
      <Navbar/>
      {children}
        
      </body>
    </html>
  )
}
