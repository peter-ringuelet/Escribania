"use client"

import { motion, useInView } from "framer-motion"
import { AchievementCard } from "@/components/achievement-card"
import { Users, Award, BookOpen, Heart } from 'lucide-react'
import { useRef } from "react"

const achievements = [
  {
    icon: Users,
    title: "Confianza",
    description: "Más de 80,000 clientes en nuestra trayectoria"
  },
  {
    icon: Award,
    title: "Reconocimientos",
    description: "Múltiples premios por excelencia en servicios notariales"
  },
  {
    icon: BookOpen,
    title: "Experiencia",
    description: "Más de 45 años de experiencia en el campo notarial"
  },
  {
    icon: Heart,
    title: "Comunidad",
    description: "Participación activa en proyectos comunitarios y educativos"
  }
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="logros" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Nuestros Logros
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.25,
                ease: "easeOut"
              }}
            >
              <AchievementCard {...achievement} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

