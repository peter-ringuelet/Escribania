"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder2.webp"
          alt="Escribanía Ringuelet"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32 lg:py-52 xl:py-52"
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Servicios Notariales de{" "}
          <span className="text-primary">Excelencia</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-white md:text-xl">
          Más de 45 años brindando seguridad jurídica y confianza a nuestros clientes.
          Primer registro notarial de Ezeiza.
        </p>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button size="lg" className="btn-primary" onClick={() => document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-secondary hover:text-secondary-foreground" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
            Conocer Servicios
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

