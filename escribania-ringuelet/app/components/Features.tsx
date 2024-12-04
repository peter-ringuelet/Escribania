"use client"

import { CheckCircle, Clock, MapPin } from 'lucide-react'
import { motion } from "framer-motion"

export function Features() {
  return (
    <section className="border-t border-[#231f20] bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-secondary" />
            <div>
              <h3 className="font-semibold text-[#231f20]">Experiencia Comprobada</h3>
              <p className="text-sm text-black">
                Más de 50 años de trayectoria en servicios notariales
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-secondary" />
            <div>
              <h3 className="font-semibold text-[#231f20]">Atención Personalizada</h3>
              <p className="text-sm text-black">
                Asesoramiento profesional y seguimiento de cada caso
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-secondary" />
            <div>
              <h3 className="font-semibold text-[#231f20]">Ubicación Estratégica</h3>
              <p className="text-sm text-black">
                Fácil acceso desde Canning y zonas aledañas
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

