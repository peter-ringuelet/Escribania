"use client"

import { CheckCircle, Clock, MapPin, Users } from 'lucide-react'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Features() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  return (
    <section className="border-t border-[#231f20] bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { icon: CheckCircle, title: "Experiencia Comprobada", description: "Más de 50 años de trayectoria en servicios notariales" },
            { icon: Users, title: "Confianza", description: "Más de 80,000 clientes en nuestra trayectoria" },
            { icon: Clock, title: "Atención Personalizada", description: "Asesoramiento profesional y seguimiento de cada caso" },
            { icon: MapPin, title: "Ubicación Estratégica", description: "Fácil acceso desde Canning y zonas aledañas" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1
              }}
            >
              <div className="flex items-start space-x-4">
                <feature.icon className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold text-[#231f20]">{feature.title}</h3>
                  <p className="text-sm text-black">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

