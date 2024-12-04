"use client";

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prevState => ({ ...prevState, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Solicitud de consulta enviada:', formData);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Solicitud enviada",
          description: "Nos pondremos en contacto contigo para agendar tu consulta.",
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="consulta" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Solicitar Consulta
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <p className="mb-2">Avenida Castex 3489 Oficina 6, Canning - Ezeiza, Buenos Aires</p>
            <p className="mb-2">Teléfono: (011) 42958794 / 42325695</p>
            <p className="mb-4">Email: escribania@ringueletscatolini.com.ar</p>
            <h4 className="text-lg font-semibold mb-2">Horario de Atención</h4>
            <p className="mb-4">Lunes a Viernes de 9:00 a 17:00</p>
            <div className="h-64 md:h-80 relative rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.7407669770393!2d-58.50352548477072!3d-34.86483908039491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f3cae9e92f%3A0x7f891ca3f4f7f24a!2sAv.%20Mariano%20Castex%203489%2C%20B1802EZE%20Canning%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1659638015407!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            <Input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Select onValueChange={handleSelectChange} value={formData.service}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="escrituras">Escrituras</SelectItem>
                <SelectItem value="sucesiones">Sucesiones</SelectItem>
                <SelectItem value="compraventa">Compraventa de Inmuebles</SelectItem>
                <SelectItem value="sociedades">Constitución de Sociedades</SelectItem>
                <SelectItem value="poderes">Poderes</SelectItem>
                <SelectItem value="certificaciones">Certificaciones</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="message"
              placeholder="Describe brevemente tu consulta"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[200px]"
            />
            <Button type="submit" className="w-full">Enviar Consulta</Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

