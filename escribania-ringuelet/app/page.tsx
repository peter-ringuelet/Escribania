import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { AboutUs } from './components/AboutUs'
import { Timeline } from './components/Timeline'
import { Achievements } from './components/Achievements'
import { Clients } from './components/Clients'
import { News } from './components/News'
import { ContactForm } from './components/ContactForm'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <AboutUs />
      <Timeline />
      <Clients />
      <News />
      <ContactForm />
      <WhatsAppButton />
    </>
  )
}

