"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Empresas que Confían en Nosotros
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


