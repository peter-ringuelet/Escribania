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
      const headerOffset = 64 // altura del header
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

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
          <SheetContent side="right" className="bg-[#1d1d1f] text-white w-[200px] pt-12">
            <nav className="flex flex-col">
              {sections.map((section) => (
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
                  className="text-base font-medium hover:text-primary transition-colors py-4 text-left px-4 border-b border-gray-800"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

