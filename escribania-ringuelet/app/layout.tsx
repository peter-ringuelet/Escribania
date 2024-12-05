import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'  
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Escribanía Ringuelet',
  description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
  icons: {
    icon: '/logoR.png',
  },
  manifest: '/manifest.json',
  themeColor: '#1d1d1f',
  openGraph: {
    title: 'Escribanía Ringuelet',
    description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
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
