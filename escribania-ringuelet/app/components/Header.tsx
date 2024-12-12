"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Image from "next/image"

const sections = ["inicio", "servicios", "nosotros", "noticias", "consulta"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 64
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: sectionId === 'inicio' ? 0 : offsetPosition,
        behavior: "smooth"
      })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1d1d1f] text-white overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between relative">
        <button
          onClick={() => scrollToSection('inicio')}
          className="text-xl font-bold cursor-pointer"
        >
          <Image
            src="/logoR.png"
            alt="Escribanía Ringuelet Logo"
            width={150}
            height={40}
            priority
          />
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium hover:text-primary transition-colors ${activeSection === section ? "text-primary" : ""
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full h-[100dvh] bg-[#1d1d1f]/98 backdrop-blur-lg border-none animate-in slide-in-from-top duration-500 [&>button]:hidden p-0 gap-0"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />

            <div className="relative z-10">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <Image
                  src="/logoR.png"
                  alt="Escribanía Ringuelet Logo"
                  width={150}
                  height={40}
                  className="opacity-100"
                  priority
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-primary transition-all duration-300 hover:rotate-90 bg-transparent p-2 rounded-full"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center min-h-[calc(100dvh-120px)] gap-8 px-6">
                {sections.map((section, index) => (
                  <button
                    key={section}
                    onClick={() => {
                      const element = document.getElementById(section);
                      if (element) {
                        setIsOpen(false);
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                    className="relative w-full text-center group"
                    style={{
                      animation: `slideIn 0.5s ease-out forwards ${index * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    <span className="relative inline-block text-3xl font-light text-white group-hover:text-primary transition-all duration-300">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </span>
                  </button>
                ))}
              </nav>

              <div className="absolute bottom-8 left-0 w-full text-center">
                <div className="text-white/60 text-sm">
                  Escribanía Ringuelet © 2024
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

