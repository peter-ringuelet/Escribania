"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const clients = [
  { name: "Banco Nación", logo: "/bancoNacion.png" },
  { name: "Banco Provincia", logo: "/bancoProvincia.png" },
  //{ name: "Santander", logo: "/santander.png" },
  //{ name: "Ternium Siderar", logo: "/ternium.png" },
  //{ name: "Conuar", logo: "/conuar.png" },
  { name: "Banco Hipotecario", logo: "/bancohipotecario.png" }
]

export function Clients() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const transitionConfig = {
    duration: isMobile ? 0.3 : 0.5,
    baseDelay: isMobile ? 0.1 : 0.15,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <section id="clientes" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Notarios de la Nómina de las siguientes entidades bancarias
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: transitionConfig.duration,
                delay: transitionConfig.baseDelay + index * (isMobile ? 0.1 : 0.2),
                ease: transitionConfig.ease
              }}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={100}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


