"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import Image from 'next/image'

const news = [
  { 
    title: "Cambios en la ley de alquileres", 
    description: "Análisis de las recientes modificaciones a la ley de alquileres y su impacto en propietarios e inquilinos.", 
    date: "2023-11-15",
    pdf: "/example.pdf",
    image: "/news.webp"
  },
  { 
    title: "Guía para la sucesión de bienes", 
    description: "Pasos a seguir para iniciar y llevar a cabo un proceso sucesorio en Argentina.", 
    date: "2023-10-22",
    pdf: "/example3.pdf",
    image: "/news2.webp"
  },
  { 
    title: "Ventajas de constituir una SAS", 
    description: "Beneficios y consideraciones al formar una Sociedad por Acciones Simplificada en Argentina.", 
    date: "2023-09-30",
    pdf: "/example2.pdf",
    image: "/news3.webp"
  },
  { 
    title: "Nuevas regulaciones para escrituras digitales", 
    description: "Implementación de tecnología blockchain en el proceso de escrituración.", 
    date: "2023-12-05",
    pdf: "/example3.pdf",
    image: "/news4.webp"
  },
  { 
    title: "Impacto de la inflación en contratos a largo plazo", 
    description: "Cómo proteger acuerdos comerciales en un contexto económico volátil.", 
    date: "2023-11-28",
    pdf: "/example3.pdf",
    image: "/news5.webp"
  },
  { 
    title: "Reformas en el Código Civil y Comercial", 
    description: "Resumen de las principales modificaciones y su aplicación práctica.", 
    date: "2023-10-10",
    pdf: "/example3.pdf",
    image: "/news7.webp"
  }
]

export function News() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setAnimatingIndex(currentIndex + slidesToShow)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (news.length - slidesToShow + 1))
  }

  const prevSlide = () => {
    setAnimatingIndex(currentIndex - 1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (news.length - slidesToShow + 1)) % (news.length - slidesToShow + 1))
  }

  const goToSlide = (index: number) => {
    setAnimatingIndex(index)
    setCurrentIndex(index)
  }

  return (
    <section id="noticias" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Noticias
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {news.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 ${
                    slidesToShow === 3 ? 'w-1/3' : 
                    slidesToShow === 2 ? 'w-1/2' : 
                    'w-full'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={
                      isInView || animatingIndex === index 
                        ? { opacity: 1, scale: 1, rotateY: 0 } 
                        : { opacity: 0, scale: 0.8, rotateY: 90 }
                    }
                    transition={{
                      duration: 1.4,
                      delay: isInView ? index * 0.45 : 0,
                      type: "spring",
                      stiffness: 70,
                      damping: 11
                    }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                            <FileDown className="mr-2 h-4 w-4" /> Descargar PDF
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2"
            onClick={prevSlide}
            aria-label="Noticia anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2"
            onClick={nextSlide}
            aria-label="Siguiente noticia"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: news.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la noticia ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

