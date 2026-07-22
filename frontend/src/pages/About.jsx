import Seo from '../components/layout/Seo'
import Hero from '../components/sections/Hero'
import heroSobrenosBg from '../assets/hero-sobrenos.png'
import Stats from '../components/sections/Stats'
import HistoryTimeline from '../components/sections/HistoryTimeline'
import BrandEvolution from '../components/sections/BrandEvolution'
import Sustainability from '../components/sections/Sustainability'
import FeaturedProject from '../components/sections/FeaturedProject'
import InvertedContentSection from '../components/sections/InvertedContentSection'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function About() {
  return (
    <>
      <Seo
        title="Sobre Nós | Sydorak Anodização"
        description="Quatro décadas de evolução e inovação no tratamento de superfícies de alumínio."
      />
      <main>
        <Hero
          backgroundImage={heroSobrenosBg}
          eyebrow="Sobre nós"
          title="Raízes profundas."
          highlightedText="Visão Moderna."
          description="Quatro décadas de evolução, inovação e compromisso nos trouxeram até aqui."
          buttonText="SOLICITAR ANÁLISE TÉCNICA"
          buttonTo="/contato"
          secondaryButtonText={null}
          highlightLineText={null}
          bottomText="Atendimento direto com especialista"
          showDesktopOverlay={false}
        />
        <Stats />
        <HistoryTimeline />
        <BrandEvolution />
        <Sustainability />
        <FeaturedProject />
        <InvertedContentSection />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
