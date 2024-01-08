import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import './globals.css'
import { ModalProvider } from '@/providers/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'mangaspot',
  description: 'The go to spot for tracking manga.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
      <ModalProvider>
      <Header/>
      {children}
      </ModalProvider>
      </body>
    </html>
    
  )
}
