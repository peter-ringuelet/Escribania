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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const transitionConfig = {
    duration: isMobile ? 0.2 : 0.5,
    baseDelay: isMobile ? 0.05 : 0.15,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: transitionConfig.duration }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Quiénes Somos
        </motion.h2>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-4"
            >
              Somos una escribanía con más de 50 años de trayectoria en la zona sur del Gran Buenos Aires.
              Fundada por el Escribano Andrés Ringuelet, quien estableció las bases de nuestra práctica
              profesional fundamentada en la excelencia y el compromiso con nuestros clientes.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mb-4"
            >
              En la actualidad, continuamos su legado adaptándonos a los nuevos tiempos, incorporando
              tecnología y modernizando nuestros procesos, pero manteniendo siempre los valores que nos
              distinguen: profesionalismo, confianza y dedicación personalizada a cada caso.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Nuestro equipo de profesionales altamente capacitados está comprometido con brindar
              soluciones eficientes y seguridad jurídica en cada trámite que realizamos.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
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

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-2xl font-semibold mb-8 text-center mt-16"
        >
          Nuestro Equipo
        </motion.h3>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: isMobile ? 0.2 : 0.3, 
                delay: isMobile ? 0.3 + index * 0.05 : 0.6 + index * 0.1 
              }}
            >
              <TeamMember {...member} isMobile={isMobile} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

