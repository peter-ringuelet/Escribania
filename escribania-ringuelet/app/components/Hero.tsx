"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const transitionConfig = {
    duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 0.5,
    baseDelay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.1 : 0.15,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <section id="inicio" className="relative h-[100dvh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] flex items-center">
      <div className="container mx-auto px-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: transitionConfig.duration }}
          className="absolute inset-0 z-0"
        >
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
          <div className="absolute inset-0 bg-black opacity-50" />
        </motion.div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center h-full py-12 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: transitionConfig.duration }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Servicios Notariales de{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: transitionConfig.duration, delay: transitionConfig.baseDelay }}
              className="text-primary"
            >
              Excelencia
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: transitionConfig.duration, delay: transitionConfig.baseDelay + 0.1 }}
            className="mx-auto max-w-[700px] text-white md:text-xl text-center mt-6"
          >
            Registro Notarial N°1 de Ezeiza. Más de medio siglo brindando seguridad jurídica y confianza a nuestros clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: transitionConfig.duration, delay: transitionConfig.baseDelay + 0.2 }}
            className="flex flex-col gap-4 min-[400px]:flex-row mt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: transitionConfig.duration, delay: transitionConfig.baseDelay + 0.3 }}
            >
              <Button size="lg" className="btn-primary" onClick={() => document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' })}>
                Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: transitionConfig.duration, delay: transitionConfig.baseDelay + 0.4 }}
            >
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-secondary hover:text-secondary-foreground" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                Conocer Servicios
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

