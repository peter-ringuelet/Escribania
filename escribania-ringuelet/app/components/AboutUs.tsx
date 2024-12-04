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
        <div ref={ref} className="grid gap-8 md:grid-cols-2">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-3xl font-bold mb-4"
            >
              Quiénes Somos
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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

        <MotionWrapper className="mt-12" delay={0.4}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Nuestro Equipo</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.5} />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}

