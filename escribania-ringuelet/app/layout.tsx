import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/app/components/Footer'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Escribanía Ringuelet',
  description: 'Servicios notariales de excelencia en Canning, Buenos Aires',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

