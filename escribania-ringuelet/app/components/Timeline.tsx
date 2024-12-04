"use client"

import { motion } from "framer-motion"
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
    description: "Andrés A. Ringuelet se une al equipo, aportando nuevas perspectivas y conocimientos."
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
  return (
    <section id="trayectoria" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Nuestra Trayectoria
        </motion.h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} {...event} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

