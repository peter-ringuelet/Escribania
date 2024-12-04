"use client"

import Image from "next/image"
import { MotionWrapper } from "@/components/motion-wrapper"

const clients = [
  { name: "Banco Provincia", logo: "/bancoProvincia.png" },
  { name: "Banco Nación", logo: "/bancoNacion.png" },
  { name: "Santander", logo: "/santander.png" },
  { name: "Ternium Siderar", logo: "/ternium.png" },
  { name: "Conuar", logo: "/conuar.png" },
  { name: "Banco Hipotecario", logo: "/bancohipotecario.png" }
]

export function Clients() {
  return (
    <section id="clientes" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Empresas que Confían en Nosotros
          </h2>
        </MotionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <MotionWrapper key={client.name} delay={index * 0.1}>
              <div className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}


