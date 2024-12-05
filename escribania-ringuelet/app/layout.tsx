import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'  
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#1d1d1f',
}

export const metadata: Metadata = {
  title: 'Escribanía Ringuelet',
  description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
  icons: {
    icon: [
      {
        url: '/logo.png',
        sizes: '517x483',
        type: 'image/png',
      }
    ],
    shortcut: '/logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Escribanía Ringuelet',
    description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
    url: 'https://ringueletscatolini.com.ar',
    siteName: 'Escribanía Ringuelet',
    locale: 'es_AR',
    type: 'website',
    images: [{
      url: 'https://ringueletscatolini.com.ar/logo.png',
      width: 517,
      height: 483,
      alt: 'Logo Escribanía Ringuelet'
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
