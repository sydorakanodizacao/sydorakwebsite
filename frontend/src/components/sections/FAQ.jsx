import { useState } from 'react'
import { motion } from 'motion/react'
import AccordionItem from '../ui/accordion-item'
import DashedLink from '../ui/dashed-link'

const faqData = [
  {
    title: "Qual é a diferença entre anodização e pintura?",
    description: "Anodização é um processo eletroquímico que cria uma camada de óxido integrada ao alumínio. Pintura é uma camada polimérica aplicada sobre a superfície. Anodização é durável, mantém o reflexo metálico e resiste melhor a ambientes severos. A pintura também tem sua durabilidade, apresenta ilimitadas opções de cores, mas sem o reflexo natural. Por isso a escolha depende da aplicação."
  },
  {
    title: "Vocês fazem pintura também?",
    description: "Não. Somos especialistas em anodização. Essa especialização é nossa força — 40 anos focados nesta expertise. Para pintura, recomendamos parceiros."
  },
  {
    title: "Quanto tempo leva o processo?",
    description: "Varia conforme volume e complexidade. Projetos padrão: 3-5 dias úteis após recebimento. Projetos grandes ou customizados podem levar 1-2 semanas. Consulte-nos com detalhes do seu projeto."
  },
  {
    title: "Qual é a vida útil de uma peça anodizada?",
    description: "Depende da camada aplicada e do ambiente onde ficará exposta. Em ambientes normais 20+ anos, já em ambientes com exposição severa (marítima/química) 5 a 10 anos desde que respeitadas as manutenções periódicas indicadas."
  },
  {
    title: "Posso anodizar peças já montadas ou acabadas?",
    description: "Depende. Peças desmontáveis: sim, sem problema. Peças soldadas ou parafusadas: sob análise técnica — consulte antes. Discutimos a viabilidade caso a caso."
  },
  {
    title: "Como escolher a cor certa?",
    description: "Oferecemos amostra física. Você toca, vê sob luz natural e artificial. Isso funciona porque anodização reflete luz real — não pixels de tela. Cores visuais em notebook/smartphone nem sempre correspondem ao resultado final."
  },
  {
    title: "Vocês trabalham com volumes pequenos ou é mínimo pedido?",
    description: "Trabalhamos de volumes pequenos a industriais. Peças únicas, protótipos, ou toneladas — todos são bem-vindos. Estrutura e processo variam de acordo com a programação."
  },
  {
    title: "Qual é o custo da anodização?",
    description: "Varia conforme tipo de material, tamanho, acabamento/cor, volume e complexidade. Avaliamos cada projeto individualmente. Fale conosco sobre o seu projeto."
  },
  {
    title: "Vocês trabalham com especificações técnicas customizadas?",
    description: "Sim. Projetos críticos exigem especificações próprias. Desenvolvemos procedimentos customizados, avaliamos e obtemos homologação. Nossa história comprova isso em projetos de alta exigência com homologação pelo Sistema Eletrobras (2016)."
  },
  {
    title: "Quando a anodização não é indicada?",
    description: "Em casos onde há necessidade de cores/texturas muito específicas fora do padrão metálico ou quando o projeto exige cobertura total da superfície, a pintura pode ser mais adequada. Avaliamos tecnicamente cada aplicação."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // Apenas a primeira aberta por padrão

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.description
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="w-full bg-canvas pt-0 pb-16 md:pb-24 overflow-hidden border-b border-hairline/20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px]">
          {/* Bloco de Títulos Centralizado */}
          <div className="flex flex-col items-center text-center mb-12">
            <DashedLink className="uppercase tracking-wider text-xs mb-4 pointer-events-none">
              FAQ
            </DashedLink>
            <h2 className="text-h2-section-mobile md:text-h2-section text-ink font-bold leading-tight">
              Perguntas Frequentes
            </h2>
          </div>

          {/* Lista de Accordions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="flex flex-col gap-4 max-w-4xl mx-auto w-full"
          >
            {faqData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  title={item.title}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  {item.description}
                </AccordionItem>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
