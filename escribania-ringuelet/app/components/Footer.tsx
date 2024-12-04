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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary">Escribanía Ringuelet</h3>
            <p className="text-sm">
              Registro Nº 1 del Distrito Notarial Ezeiza
              <br />
              Fundada en 1975
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary">Contacto</h3>
            <ul className="space-y-2 text-sm">
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
                <span className="text-sm">escribania@ringueletscatolini.com.ar</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">escribaniaringueletscatolini@gmail.com</span>
              </li>
              <li>
                <a href="https://www.instagram.com/escribania_ringueletscatolini/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center hover:text-primary">
                  <svg 
                    className="h-4 w-4 mr-2 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.668.014-4.948.072-4.914.222-6.717 2.025-6.94 6.94-.058 1.28-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.223 4.915 2.026 6.717 6.94 6.94 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.914-.223 6.717-2.025 6.94-6.94.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.223-4.915-2.026-6.717-6.94-6.94-.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @escribania_ringueletscatolini
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-3">
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
            <h3 className="text-base font-semibold mb-4 text-primary">Horario de Atención</h3>
            <p className="text-sm">
              Lunes a Viernes
              <br />
              10:00 - 16:00
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

