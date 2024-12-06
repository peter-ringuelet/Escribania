"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TeamMember } from "@/components/team-member"
import { MotionWrapper } from "@/components/motion-wrapper"
const teamMembers = [
  {
    name: "Andrés Ringuelet",
    role: "Fundador",
    image: "/iaia.jpg"
  },
  {
    name: "Andrés A. Ringuelet",
    role: "Escribano",
    image: "/papi.jpg"
  },
  {
    name: "Juan Luciano Scatolini",
    role: "Escribano",
    image: "/luciano.jpg"
  }
]

export function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Quiénes Somos
        </motion.h2>

        <div ref={ref} className="flex flex-col gap-8 md:grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="mb-4">
              Somos una escribanía con más de 50 años de trayectoria en la zona sur del Gran Buenos Aires.
              Fundada por el Escribano Andrés Ringuelet, quien estableció las bases de nuestra práctica
              profesional fundamentada en la excelencia y el compromiso con nuestros clientes.
            </p>
            <p className="mb-4">
              En la actualidad, continuamos su legado adaptándonos a los nuevos tiempos, incorporando
              tecnología y modernizando nuestros procesos, pero manteniendo siempre los valores que nos
              distinguen: profesionalismo, confianza y dedicación personalizada a cada caso.
            </p>
            <p>
              Nuestro equipo de profesionales altamente capacitados está comprometido con brindar
              soluciones eficientes y seguridad jurídica en cada trámite que realizamos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="relative h-64 md:h-auto"
          >
            <Image
              src="/aboutUs.webp"
              alt="Equipo de Escribanía Ringuelet"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
              className="object-cover rounded-lg"
              placeholder="blur"
              blurDataURL="..."
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Nuestro Equipo</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={1.6 + index * 0.3} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

