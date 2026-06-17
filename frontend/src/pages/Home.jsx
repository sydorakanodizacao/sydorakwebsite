import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import Differentiators from '../components/sections/Differentiators'
import ServicesGrid from '../components/sections/ServicesGrid'
import AboutSummary from '../components/sections/AboutSummary'
import Applications from '../components/sections/Applications'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Stats />
      <Differentiators />
      <ServicesGrid />
      <Applications />
      <AboutSummary />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
