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
  title: 'Escribanía Ringuelet Scatolini',
  description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
  keywords: 'escribanía, notaría, escribano, notario, canning, ezeiza, buenos aires',
  openGraph: {
    title: 'Escribanía Ringuelet Scatolini',
    description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
    url: 'https://ringueletscatolini.com.ar',
    siteName: 'Escribanía Ringuelet Scatolini',
    images: [
      {
        url: 'https://ringueletscatolini.com.ar/logo2.png',
        width: 249,
        height: 314,
        alt: 'Logo Escribanía Ringuelet Scatolini',
        type: 'image/png',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escribanía Ringuelet Scatolini',
    description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
    images: ['https://ringueletscatolini.com.ar/logo2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/logo-112x112.png',
        sizes: '112x112',
        type: 'image/png',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
