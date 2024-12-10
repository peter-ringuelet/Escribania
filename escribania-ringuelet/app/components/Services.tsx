"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  Users,
  Home,
  Briefcase,
  FileSignature,
  Key,
  Shield,
  Edit3,
  Gift,
  ShieldCheck,
  Heart,
  Share2,
} from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  {
    title: "Fideicomisos",
    description: "Elaboración y asesoramiento de contratos de fideicomisos, incluyendo fideicomisos inmobiliarios y de administración.",
    icon: FileText
  },
  {
    title: "Planificación Sucesoria",
    description: "Asesoramiento integral para organizar la transmisión de bienes y evitar conflictos futuros.",
    icon: Users
  },
  {
    title: "Compraventa de Inmuebles",
    description: "Gestión completa de operaciones inmobiliarias, desde la reserva hasta la escritura pública.",
    icon: Home
  },
  {
    title: "Constitución de Sociedades",
    description: "Asesoramiento para elegir el tipo de sociedad adecuado y redacción de estatutos legales.",
    icon: Briefcase
  },
  {
    title: "Autorizaciones y Poderes",
    description: "Tramitación de autorizaciones de viaje para menores y poderes generales o específicos.",
    icon: Key
  },
  {
    title: "Certificaciones",
    description: "Certificación de firmas, copias, domicilios y documentos notariales en formato físico o digital.",
    icon: FileSignature
  },
  {
    title: "Protección de Vivienda",
    description: "Asesoramiento para inscribir tu vivienda en el Régimen de Protección de la Vivienda, resguardándola de embargos.",
    icon: Shield
  },
  {
    title: "Actas Notariales",
    description: "Documentación de hechos o situaciones específicas con valor probatorio mediante actas notariales.",
    icon: Edit3
  },
  {
    title: "Donaciones",
    description: "Gestión legal de donaciones de inmuebles para planificar tu patrimonio en vida.",
    icon: Gift
  },
  {
    title: "Autoprotección",
    description: "Asesoramiento para decidir el manejo de tus bienes y derechos si no podés hacerlo por vos mismo.",
    icon: ShieldCheck
  },
  {
    title: "Régimen Patrimonial del Matrimonio",
    description: "Asesoramiento en regímenes de comunidad o separación de bienes y en convenciones matrimoniales.",
    icon: Heart
  },
  {
    title: "Cesión de Derechos",
    description: "Tramitación de cesión de derechos posesorios y hereditarios de manera legal y transparente.",
    icon: Share2
  },
];


export function Services() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const transitionConfig = {
    duration: isMobile ? 0.15 : 0.3,
    baseDelay: isMobile ? 0.05 : 0.1,
    ease: [0.25, 0.1, 0.25, 1]
  };

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: transitionConfig.duration,
            ease: transitionConfig.ease
          }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#231f20]">
            Nuestros Servicios
          </h2>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: transitionConfig.duration,
                delay: transitionConfig.baseDelay + index * (isMobile ? 0.05 : 0.1),
                ease: transitionConfig.ease
              }}
            >
              <Card className="h-full flex flex-col bg-card border-muted shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2 text-black">
                    <service.icon className="h-5 w-5 text-secondary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

