import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import Differentiators from '../components/sections/Differentiators'
import ServicesGrid from '../components/sections/ServicesGrid'
import AboutSummary from '../components/sections/AboutSummary'
import LatestPosts from '../components/sections/LatestPosts'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Stats />
      <Differentiators />
      <ServicesGrid />
      <AboutSummary />
      <LatestPosts />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
