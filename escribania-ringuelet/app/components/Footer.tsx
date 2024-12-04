"use client"

import { MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Escribanía Ringuelet</h3>
            <p className="text-sm">
              Registro Nº 1 del Distrito Notarial Ezeiza
              <br />
              Fundada en 1975
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Avenida Castex 3489 Oficina 6, Canning
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                (011) 42958794 / 42325695
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                escribania@ringueletscatolini.com.ar
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-primary">
                  Nuestros Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('noticias')} className="hover:text-primary">
                  Noticias
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('consulta')} className="hover:text-primary">
                  Solicitar Consulta
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Horario de Atención</h3>
            <p className="text-sm">
              Lunes a Viernes
              <br />
              9:00 - 17:00
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#231f20] text-center text-sm">
          <p>© {new Date().getFullYear()} Escribanía Ringuelet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

