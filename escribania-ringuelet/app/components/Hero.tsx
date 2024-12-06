"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[100dvh] md:h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col justify-center md:justify-start md:pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder2.webp"
            alt="Escribanía Ringuelet"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            loading="eager"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-black"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center h-full py-20 sm:py-32 md:py-40"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Servicios Notariales de{" "}
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="text-primary"
            >
              Excelencia
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="mx-auto max-w-[700px] text-white md:text-xl text-center mt-6"
          >
            Registro Notarial N°1 de Ezeiza. Más de medio siglo brindando seguridad jurídica y confianza a nuestros clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col gap-4 min-[400px]:flex-row mt-8"
          >
            <Button size="lg" className="btn-primary" onClick={() => document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' })}>
              Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-secondary hover:text-secondary-foreground" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
              Conocer Servicios
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

