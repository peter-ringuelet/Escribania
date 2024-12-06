"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Home, Briefcase, Scale, FileSignature } from 'lucide-react'
import { MotionWrapper } from "@/components/motion-wrapper"

const services = [
  {
    title: "Fideicomisos",
    description: "Elaboración y asesoramiento de contratos de fideicomisos, incluyendo fideicomisos inmobiliarios y de administración.",
    icon: "FileText"
  },
  {
    title: "Planificación Sucesoria",
    description: "Asesoramiento integral para organizar la transmisión de bienes y evitar conflictos futuros.",
    icon: "Users"
  },
  {
    title: "Compraventa de Inmuebles",
    description: "Gestión completa de operaciones inmobiliarias, desde la reserva hasta la escritura pública.",
    icon: "Home"
  },
  {
    title: "Constitución de Sociedades",
    description: "Asesoramiento para elegir el tipo de sociedad adecuado y redacción de estatutos legales.",
    icon: "Briefcase"
  },
  {
    title: "Autorizaciones y Poderes",
    description: "Tramitación de autorizaciones de viaje para menores y poderes generales o específicos.",
    icon: "Key"
  },
  {
    title: "Certificaciones",
    description: "Certificación de firmas, copias, domicilios y documentos notariales en formato físico o digital.",
    icon: "FileSignature"
  },
  {
    title: "Protección de Vivienda",
    description: "Asesoramiento para inscribir tu vivienda en el Régimen de Protección de la Vivienda, resguardándola de embargos.",
    icon: "Shield"
  },
  {
    title: "Actas Notariales",
    description: "Documentación de hechos o situaciones específicas con valor probatorio mediante actas notariales.",
    icon: "Edit3"
  },
  {
    title: "Donaciones",
    description: "Gestión legal de donaciones de inmuebles para planificar tu patrimonio en vida.",
    icon: "Gift"
  },
  {
    title: "Autoprotección",
    description: "Asesoramiento para decidir el manejo de tus bienes y derechos si no podés hacerlo por vos mismo.",
    icon: "ShieldCheck"
  },
  {
    title: "Régimen Patrimonial del Matrimonio",
    description: "Asesoramiento en regímenes de comunidad o separación de bienes y en convenciones matrimoniales.",
    icon: "Heart"
  },
  {
    title: "Cesión de Derechos",
    description: "Tramitación de cesión de derechos posesorios y hereditarios de manera legal y transparente.",
    icon: "Share"
  },
  {
    title: "Apostillas y Legalizaciones",
    description: "Gestión de apostillas de La Haya para garantizar la validez internacional de tus documentos.",
    icon: "Globe"
  }
];


export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-8 text-center text-[#231f20]">
            Nuestros Servicios
          </h2>
        </MotionWrapper>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col bg-card border-muted shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2 text-black">
                    <service.icon className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="line-clamp-1">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-black line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

