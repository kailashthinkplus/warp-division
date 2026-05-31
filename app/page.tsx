import Hero from "@/src/modules/home/Hero/Hero"
import Stats from "@/src/modules/home/Stats/Stats"
import About from "@/src/modules/home/About/About"
import Services from "@/src/modules/home/Services/Services"
import WhyChoose from "@/src/modules/home/WhyChoose/WhyChoose"
import Testimonials from "@/src/modules/home/Testimonials/Testimonials"
import Partners from "@/src/modules/home/Partners/Partners"
import CTA from "@/src/modules/home/CTA/CTA"
import Footer from "@/src/modules/home/Footer/Footer"  
import Header from "@/src/components/layout/Header/Header"
import Gallery from "@/src/modules/home/Gallery/Gallery"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}