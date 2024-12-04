"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TeamMember } from "@/components/team-member"

const teamMembers = [
  {
    name: "Andrés Ringuelet",
    role: "Fundador",
    image: "/iaia.jpg"
  },
  {
    name: "Andrés A. Ringuelet",
    role: "Escribano Titular del Registro",
    image: "/papi.jpg"
  },
  {
    name: "Juan Luciano Scatolini",
    role: "Escribano Adscripto",
    image: "/luciano.jpg"
  }
]

export function AboutUs() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Quiénes Somos
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4">
              Fundada en la ciudad de Ezeiza en el año 1975, por el Notario don Andrés Ringuelet, nuestra escribanía fue la primera de la ciudad, habiéndose convertido en lugar de referencia para los vecinos y empresarios de la zona.
            </p>
            <p className="mb-4">
              Con más de 45 años de trayectoria, nos hemos ganado la confianza de la comunidad a través de nuestra responsabilidad, profesionalismo y atención personalizada.
            </p>
            <p>
              Hoy, bajo la dirección del Escribano Titular Andrés A. Ringuelet y con la incorporación de Juan Luciano Scatolini, continuamos ofreciendo servicios notariales de excelencia, combinando nuestra vasta experiencia con una constante actualización jurídica.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 md:h-auto"
          >
            <Image
              src="/aboutUs.webp"
              alt="Equipo de Escribanía Ringuelet"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Nuestro Equipo</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.2} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

