"use client"

import { TimelineItem } from "@/components/timeline-item"
import { MotionWrapper } from "@/components/motion-wrapper"

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
    year: "2010",
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
  return (
    <section id="trayectoria" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nuestra Trayectoria
          </h2>
        </MotionWrapper>
        <div className="space-y-8 max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <MotionWrapper key={event.year} delay={index * 0.2}>
              <TimelineItem {...event} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

