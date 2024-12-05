"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Home, Briefcase, Scale, FileSignature } from 'lucide-react'
import { MotionWrapper } from "@/components/motion-wrapper"

const services = [
  { title: "Fideicomisos", description: "Elaboración y asesoramiento de contratos de fideicomisos para diversas relaciones jurídicas.", icon: FileText },
  { title: "Planificación Sucesoria", description: "Asesoramiento y planificación integral para la transmisión de bienes y derechos.", icon: Users },
  { title: "Compraventa de Inmuebles", description: "Gestión integral de operaciones inmobiliarias, desde el boleto hasta la escritura.", icon: Home },
  { title: "Constitución de Sociedades", description: "Asesoramiento y redacción de estatutos para la formación de empresas.", icon: Briefcase },
  { title: "Poderes y Autorizaciones de Viaje", description: "Elaboración de poderes generales y especiales y autorizaciones a menores para poder viajar.", icon: Scale },
  { title: "Certificaciones Holográficas o Digitales", description: "Certificación de firmas, copias y diversos documentos legales en formato tradicional o digital.", icon: FileSignature }
]

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

