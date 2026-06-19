import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import EquipmentRentals from '../components/EquipmentRentals'
import PerfectFor from '../components/PerfectFor'
import AdditionalServices from '../components/AdditionalServices'
import ServiceArea from '../components/ServiceArea'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <EquipmentRentals />
      <PerfectFor />
      <AdditionalServices />
      <ServiceArea />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
