"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TimelineItem } from "@/components/timeline-item"

const timelineEvents = [
  {
    year: "1975",
    title: "Fundación de la Escribanía",
    description: "Don Andrés Ringuelet funda la primera escribanía en la ciudad de Ezeiza."
  },
  {
    year: "1990",
    title: "Expansión de Servicios",
    description: "La escribanía amplía su gama de servicios para incluir asesoramiento en fideicomisos y contratos societarios."
  },
  {
    year: "2005",
    title: "Incorporación de Andrés A. Ringuelet",
    description: "Andrés A. Ringuelet se une al equipo, aportando nuevas perspectivas y conocimientos tanto en la actividad pública como privada."
  },
  {
    year: "2011",
    title: "Incorporación de Juan Luciano Scatolini",
    description: "Juan Luciano Scatolini se une al equipo, aportando perspectivas y conocimientos tanto en la actividad pública como privada."
  },
  {
    year: "2015",
    title: "Apertura en Canning",
    description: "Se establece la primera escribanía en la localidad de Canning, Ezeiza."
  },
  {
    year: "2020",
    title: "Digitalización de Servicios",
    description: "Implementación de sistemas digitales para mejorar la eficiencia y accesibilidad de los servicios notariales."
  }
]

export function Timeline() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" })

  return (
    <section 
      ref={sectionRef} 
      id="trayectoria" 
      className="py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Nuestra Trayectoria
        </motion.h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ 
                duration: 0.8,
                delay: 1.2 + index * 0.5
              }}
            >
              <TimelineItem {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

