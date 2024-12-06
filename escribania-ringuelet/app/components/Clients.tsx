"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const clients = [
  { name: "Banco Nación", logo: "/bancoNacion.png" },
  { name: "Banco Provincia", logo: "/bancoProvincia.png" },
  //{ name: "Santander", logo: "/santander.png" },
  //{ name: "Ternium Siderar", logo: "/ternium.png" },
  //{ name: "Conuar", logo: "/conuar.png" },
  { name: "Banco Hipotecario", logo: "/bancohipotecario.png" }
]

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="clientes" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Notarios de la Nómina de las siguientes entidades bancarias
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ 
                duration: 1,
                delay: 1 + index * 0.3,
                ease: "easeOut"
              }}
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


