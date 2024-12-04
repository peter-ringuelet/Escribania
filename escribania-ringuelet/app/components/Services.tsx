"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Home, Briefcase, Scale, FileSignature } from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  { title: "Fideicomisos", description: "Redacción y certificación de contratos de fideicomisos para diversos actos jurídicos.", icon: FileText },
  { title: "Planificación Sucesoria", description: "Asesoramiento y planificación integral para la transmisión de bienes y derechos.", icon: Users },
  { title: "Compraventa de Inmuebles", description: "Gestión integral de operaciones inmobiliarias, desde el boleto hasta la escritura.", icon: Home },
  { title: "Constitución de Sociedades", description: "Asesoramiento y redacción de estatutos para la formación de empresas.", icon: Briefcase },
  { title: "Poderes", description: "Elaboración de poderes generales y especiales para representación legal.", icon: Scale },
  { title: "Certificaciones Holográficas o Digitales", description: "Certificación de firmas, copias y diversos documentos legales en formato tradicional o digital.", icon: FileSignature }
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#231f20]"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-muted shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-black">
                    {<service.icon className="h-5 w-5 mr-2 text-secondary" />}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

