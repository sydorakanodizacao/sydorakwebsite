import Seo from '../components/layout/Seo'
import Hero from '../components/sections/Hero'
import heroServicosBg from '../assets/Hero-servicos.png'
import Stats from '../components/sections/Stats'
import WhatIsAnodization from '../components/sections/WhatIsAnodization'
import AnodizationVsPainting from '../components/sections/AnodizationVsPainting'
import ColorsAndFinishes from '../components/sections/ColorsAndFinishes'
import Applications from '../components/sections/Applications'
import OurProcess from '../components/sections/OurProcess'
import QualityStandards from '../components/sections/QualityStandards'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function Service() {
  return (
    <>
      <Seo
        title="Serviço | Sydorak Anodização"
        description="Anodização de alumínio com controle de processo e proteção eletroquímica avançada."
      />
      <main>
        <Hero
          backgroundImage={heroServicosBg}
          eyebrow="Serviço"
          highlightedText="Anodização de alumínio"
          highlightPosition="first"
          title="com controle de processo."
          description="Mais que acabamento. Proteção eletroquímica que transforma alumínio em solução durável, elegante e confiável para qualquer aplicação industrial, arquitetônica ou decorativa."
          buttonText="SOLICITAR ANÁLISE TÉCNICA"
          buttonTo="/contato"
          secondaryButtonText={null}
          highlightLineText={null}
          bottomText="Atendimento direto com especialista"
          showDesktopOverlay={false}
        />
        <Stats />
        <WhatIsAnodization />
        <AnodizationVsPainting />
        <OurProcess />
        <Applications />
        <QualityStandards />
        <ColorsAndFinishes />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
