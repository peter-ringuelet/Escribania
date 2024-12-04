import { Header } from './components/Header'
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
import { Footer } from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Services />
      <AboutUs />
      <Timeline />
      <Achievements />
      <Clients />
      <News />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </>
  )
}

