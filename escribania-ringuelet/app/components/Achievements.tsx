"use client"

import { motion } from "framer-motion"
import { AchievementCard } from "@/components/achievement-card"
import { Users, Award, BookOpen, Heart } from 'lucide-react'

const achievements = [
  {
    icon: Users,
    title: "Confianza",
    description: "Más de 10,000 clientes satisfechos en nuestra trayectoria"
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
  return (
    <section id="logros" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Nuestros Logros
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} {...achievement} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

