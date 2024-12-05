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
        url: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Escribanía Ringuelet',
    description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
    url: 'https://ringueletscatolini.com.ar',
    siteName: 'Escribanía Ringuelet',
    locale: 'es_AR',
    type: 'website',
    images: ['/logoR.png'],
  },
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
