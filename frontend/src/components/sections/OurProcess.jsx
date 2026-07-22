import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import Button from '../ui/button'
import ProcessCard from '../ui/process-card'
import CarouselNav from '../ui/carousel-nav'

const processSteps = [
  {
    step: 'Etapa 1',
    title: 'Recebimento & Inspeção',
    description:
      'Peças chegam à planta. Nossa equipe inspeciona dimensões, defeitos superficiais e conformidade. Aqui avaliamos seu perfil antes do processo iniciar.',
  },
  {
    step: 'Etapa 2',
    title: 'Limpeza e Preparação de Superfície',
    description:
      'Removemos óleos, óxidos naturais e contaminantes através de banhos químicos. Superfície perfeita = resultado anódico perfeito.',
  },
  {
    step: 'Etapa 3',
    title: 'Anodização',
    description: 'Peças imersas em banho eletrolítico. Aplicamos voltagem e amperagem específicas, criando a camada anódica. Parâmetros variam conforme tipo de anodização desejado (fosco/tons de bronze e preto).',
  },
  {
    step: 'Etapa 4',
    title: 'Banho de Selagem',
    description:
      'Para todas as peças anodizadas, essa etapa fecha os poros da camada de óxido, aumentando resistência à corrosão e durabilidade.',
  },
  {
    step: 'Etapa 5',
    title: 'Secagem e Inspeção Final',
    description:
      'Peças secas. Realizamos a medição da camada (medida por anodômetro), uniformidade, ausência de defeitos. Tudo deve estar perfeito antes de sair da planta.',
  },
  {
    step: 'Etapa 6',
    title: 'Embalagem & Expedição',
    description:
      'Peças embaladas de acordo com a aplicação de cada perfil. Documentação técnica (certificados, especificações) acompanha o envio. Pronto para sua obra ou produção.',
  },
]

// Triplicamos a lista para permitir loop infinito fluido e sem saltos visíveis
const extendedSteps = [...processSteps, ...processSteps, ...processSteps]
const TOTAL_SINGLE = processSteps.length
const START_INDEX = TOTAL_SINGLE // Começa no segundo bloco (índice 6)

/**
 * OurProcess — Seção "Nosso Processo" (Página de Serviço).
 * 
 * Figma Node: 24116:870
 * Design System:
 * - Esquerda: Kicker DashedLink "Passo a Passo", Título H2 "Nosso processo".
 * - Direita/Topo: Botão CTA "SOLICITAR ANÁLISE TÉCNICA" e botões circulares CarouselNav.
 * - Carrossel: 3 cards no desktop, 1 no mobile, autoplay contínuo com pausa no hover (desktop)
 *   e navegação touch/drag para mobile.
 */
export default function OurProcess() {
  const [currentIndex, setCurrentIndex] = useState(START_INDEX)
  const [isDesktop, setIsDesktop] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [enableTransition, setEnableTransition] = useState(true)

  const containerRef = useRef(null)

  // Medição responsiva da largura do container
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
      setIsDesktop(window.innerWidth >= 1024)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleNext = useCallback(() => {
    setEnableTransition(true)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  const handlePrev = useCallback(() => {
    setEnableTransition(true)
    setCurrentIndex((prev) => prev - 1)
  }, [])

  // Efeito para manter o loop infinito sem pulo perceptível ao ultrapassar as bordas
  const handleAnimationComplete = () => {
    if (currentIndex >= TOTAL_SINGLE * 2) {
      setEnableTransition(false)
      setCurrentIndex((prev) => prev - TOTAL_SINGLE)
    } else if (currentIndex < TOTAL_SINGLE) {
      setEnableTransition(false)
      setCurrentIndex((prev) => prev + TOTAL_SINGLE)
    }
  }

  // Cálculo da largura de cada card e do deslocamento
  const visibleCards = isDesktop ? 3 : 1
  const cardGap = isDesktop ? 24 : 16
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCards - 1) * cardGap) / visibleCards
      : 300
  const offset = currentIndex * (cardWidth + cardGap)

  return (
    <section className="w-full bg-canvas py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-2">
            <DashedLink className="uppercase tracking-wider text-xs">
              Passo a Passo
            </DashedLink>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight leading-tight">
              Nosso processo
            </h2>
          </div>

          {/* Ações / Navegação */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <CarouselNav
              onPrev={handlePrev}
              onNext={handleNext}
              className="mr-2"
            />
            <Button
              variant="primary"
              icon={true}
              to="/contato"
              className="tracking-wide hidden sm:inline-flex"
            >
              SOLICITAR ANÁLISE TÉCNICA
            </Button>
          </div>
        </div>

        {/* Container do Carrossel */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="flex"
            style={{ gap: `${cardGap}px` }}
            animate={{ x: -offset }}
            transition={
              enableTransition
                ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) {
                handleNext()
              } else if (info.offset.x > 50) {
                handlePrev()
              }
            }}
          >
            {extendedSteps.map((item, index) => (
              <div
                key={index}
                className="shrink-0 flex-none"
                style={{ width: `${cardWidth}px` }}
              >
                <ProcessCard
                  step={item.step}
                  title={item.title}
                  description={item.description}
                  className="h-full min-h-[230px] border-l-4 hover:border-primary hover:shadow-md bg-white border-neutral-200/80"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Botão CTA no Mobile */}
        <div className="flex sm:hidden justify-center mt-2">
          <Button variant="primary" icon={true} to="/contato" className="w-full justify-center">
            SOLICITAR ANÁLISE TÉCNICA
          </Button>
        </div>
      </div>
    </section>
  )
}
