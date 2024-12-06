"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import Image from 'next/image'

const news = [
  {
    title: "Modificaciones introducidas por la Ley Impositiva 2024",
    description: "Principales cambios en impuestos como Sellos y Transmisión Gratuita de Bienes, incluyendo nuevas alícuotas y exenciones relacionadas con inmuebles y créditos hipotecarios.",
    date: "2024-01-02",
    pdf: "/news1.pdf",
    image: "/news.webp"
  },
  {
    title: "Actualización de montos y alícuotas en la actividad notarial",
    description: "Incluye los valores actualizados para impuestos como Sellos y Transmisión Gratuita de Bienes, además de los parámetros del Código de Oferta de Transferencia de Inmuebles (COTI) y disposiciones sobre prevención de lavado de activos.",
    date: "2024-07-31",
    pdf: "/news2.pdf",
    image: "/news2.webp"
  },
  {
    title: "Cuadro resumen de informes y registros para la Unidad de Información Financiera (UIF)",
    description: "Resumen de las obligaciones de presentación a la UIF, incluyendo informes de autoevaluación de riesgos, reportes de operaciones sospechosas, y reportes sistemáticos mensuales y anuales relacionados con la prevención del lavado de activos y financiación del terrorismo.",
    date: "2024-03-01",
    pdf: "/news3.pdf",
    image: "/news3.webp"
  },
  {
    title: "Cuadro sintético sobre encuadre impositivo de la transferencia onerosa de inmuebles",
    description: "Resumen de las implicancias fiscales para la transferencia de inmuebles según las leyes 27.430 y 27.743. Incluye cambios en el impuesto a las ganancias, derogación del impuesto a la transferencia de inmuebles y detalles sobre exenciones para ventas de casa-habitación.",
    date: "2024-07-08",
    pdf: "/news4.pdf",
    image: "/news4.webp"
  },
];


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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Noticias
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
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
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.8 + index * 0.4,
                      ease: "easeOut"
                    }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={90}
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwSzIrLisxKys4P1E/ODA0NEcyPl1FSV5WXl5gaGR0eXuElJyc/9v/2wBDARUXFx4aHh4kHB4kNyYrJjc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                      <CardHeader className="flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <CardTitle className="line-clamp-3 min-h-[5rem] text-lg">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-6 min-h-[8.5rem] text-sm">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= news.length - slidesToShow}
              className="bg-white/80 hover:bg-white shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
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

