"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileDown, ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'

const news = [
  { 
    title: "Cambios en la ley de alquileres", 
    description: "Análisis de las recientes modificaciones a la ley de alquileres y su impacto en propietarios e inquilinos.", 
    date: "2023-11-15",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pdf: "/example.pdf",
    image: "/placeholder.svg?height=200&width=400"
  },
  { 
    title: "Guía para la sucesión de bienes", 
    description: "Pasos a seguir para iniciar y llevar a cabo un proceso sucesorio en Argentina.", 
    date: "2023-10-22",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pdf: null,
    image: "/placeholder.svg?height=200&width=400"
  },
  { 
    title: "Ventajas de constituir una SAS", 
    description: "Beneficios y consideraciones al formar una Sociedad por Acciones Simplificada en Argentina.", 
    date: "2023-09-30",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    pdf: "/example2.pdf",
    image: "/placeholder.svg?height=200&width=400"
  },
  { 
    title: "Nuevas regulaciones para escrituras digitales", 
    description: "Implementación de tecnología blockchain en el proceso de escrituración.", 
    date: "2023-12-05",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    pdf: null,
    image: "/placeholder.svg?height=200&width=400"
  },
  { 
    title: "Impacto de la inflación en contratos a largo plazo", 
    description: "Cómo proteger acuerdos comerciales en un contexto económico volátil.", 
    date: "2023-11-28",
    content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    pdf: "/example3.pdf",
    image: "/placeholder.svg?height=200&width=400"
  },
  { 
    title: "Reformas en el Código Civil y Comercial", 
    description: "Resumen de las principales modificaciones y su aplicación práctica.", 
    date: "2023-10-10",
    content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    pdf: null,
    image: "/placeholder.svg?height=200&width=400"
  }
]

export function News() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (news.length - slidesToShow + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (news.length - slidesToShow + 1)) % (news.length - slidesToShow + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="noticias" className="py-16 md:py-24 bg-gray-50">
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
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {news.map((item, index) => (
                <div key={index} className={`flex-shrink-0 px-2 ${
                  slidesToShow === 3 ? 'w-1/3' : 
                  slidesToShow === 2 ? 'w-1/2' : 
                  'w-full'
                }`}>
                  <Card className="h-full flex flex-col overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between">
                      <p className="text-sm mb-4 line-clamp-3">{item.description}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">Ver más</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{item.title}</DialogTitle>
                            <DialogDescription className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.date}
                              <Clock className="w-4 h-4 ml-4 mr-1" />
                              5 min de lectura
                            </DialogDescription>
                          </DialogHeader>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={600}
                            height={300}
                            className="object-cover w-full h-64 rounded-md my-4"
                          />
                          <ScrollArea className="h-[200px] w-full pr-4">
                            <p className="text-gray-700 leading-relaxed">{item.content}</p>
                          </ScrollArea>
                          <DialogFooter className="mt-4">
                            {item.pdf && (
                              <a 
                                href={item.pdf} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center text-primary hover:underline"
                              >
                                <FileDown className="mr-2" />
                                Descargar PDF
                              </a>
                            )}
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
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

