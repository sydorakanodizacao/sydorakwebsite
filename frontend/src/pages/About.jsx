import Seo from '../components/layout/Seo'
import Hero from '../components/sections/Hero'
import heroSobrenosBg from '../assets/WhatsApp Image 2026-08-24 at 08.30.42 (1).jpeg'
import Stats from '../components/sections/Stats'
import HistoryTimeline from '../components/sections/HistoryTimeline'
import BrandEvolution from '../components/sections/BrandEvolution'
import Sustainability from '../components/sections/Sustainability'
import FeaturedProjects from '../components/sections/FeaturedProjects'
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
          imagePosition="80% center"
          eyebrow="Sobre nós"
          title="Raízes profundas."
          highlightedText="Visão de futuro."
          description="Desde 1986, a Sydorak constrói sua história com um princípio simples: fazer bem-feito e honrar a confiança de cada cliente."
          buttonText="SOLICITAR ANÁLISE TÉCNICA"
          buttonTo="/contato"
          secondaryButtonText={null}
          highlightLineText="Quatro décadas transformando alumínio em confiança."
          bottomText="Atendimento direto com especialista"
          showDesktopOverlay={true}
          highlightBlock={true}
        />
        <Stats />
        <HistoryTimeline />
        <BrandEvolution />
        <Sustainability />
        <FeaturedProjects />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
