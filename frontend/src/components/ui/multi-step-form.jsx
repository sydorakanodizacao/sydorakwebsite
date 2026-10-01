import { useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { formatarDocumento, mensagemDocumento } from '../../utils/documento'
import { SERVICOS_CONTATO } from '../../data/servicos-contato'
import Label from './label'
import Input from './input'
import Textarea from './textarea'
import Select from './select'
import Button from './button'

/**
 * MultiStepForm — formulário de contato orquestrado em duas etapas.
 * 
 * DESIGN.md:
 * - Segmented Control (Tabs): fundo bg-surface/p-1, tab ativa bg-canvas com sombra leve e text-secondary, tab inativa text-muted.
 * - Card do Formulário: fundo bg-canvas, borda border-hairline, cantos rounded-[10px], padding p-6.
 * - Inputs: Label (text-body-sm font-semibold text-ink) + Input/Textarea/Select (bg-canvas, border-hairline, focus-visible:ring-primary).
 * - CNPJ/CPF: máscara progressiva + dígito verificador (utils/documento). O erro usa a validação
 *   nativa do navegador, como os demais campos — estado de erro visual ainda é Known Gap no DESIGN.md.
 * - `onSubmit` pode ser assíncrono: a tela de sucesso só aparece se ele resolver; se lançar,
 *   a mensagem do erro é exibida acima do botão. Sem `onSubmit` (ex.: /design-system), só exibe o sucesso.
 * - `website` é honeypot anti-robô: invisível para pessoas, descartado pela /api/lead se preenchido.
 */
const FORM_INICIAL = {
  nome: '',
  empresa: '',
  whatsapp: '',
  email: '',
  documento: '',
  servico: SERVICOS_CONTATO[0],
  mensagem: '',
  website: '',
}

export default function MultiStepForm({ onSubmit, className, ...props }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erroEnvio, setErroEnvio] = useState('')
  const [formData, setFormData] = useState(FORM_INICIAL)

  // Reaplica a mensagem de validade sempre que o valor muda ou o campo é remontado (troca de etapa)
  const documentoRef = useRef(null)
  const erroDocumento = mensagemDocumento(formData.documento)
  useEffect(() => {
    documentoRef.current?.setCustomValidity(erroDocumento)
  }, [erroDocumento, currentStep])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'documento' ? formatarDocumento(value) : value,
    }))
  }

  const handleNext = (e) => {
    e.preventDefault()
    // Validação simples
    if (currentStep === 1) {
      setCurrentStep(2)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (enviando) return
    setEnviando(true)
    setErroEnvio('')
    try {
      if (onSubmit) await onSubmit(formData)
      setIsSubmitted(true)
    } catch (erro) {
      setErroEnvio(erro?.message || 'Não foi possível enviar agora. Tente novamente em instantes.')
    } finally {
      setEnviando(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        className={cn(
          'bg-canvas border border-hairline rounded-[10px] p-8 flex flex-col items-center text-center gap-4 w-full select-none',
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0 size-[48px] rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A] mb-2 animate-pulse">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h4 className="text-h4-card text-ink font-bold">
          Mensagem Enviada!
        </h4>
        <p className="text-body text-muted leading-relaxed max-w-md">
          Obrigado, <span className="text-ink font-semibold">{formData.nome}</span>. Recebemos sua solicitação e nossa equipe comercial vai retornar em breve pelo WhatsApp ou pelo e-mail <span className="text-ink font-semibold">{formData.email}</span>.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false)
            setCurrentStep(1)
            setErroEnvio('')
            setFormData(FORM_INICIAL)
          }}
          className="mt-2 text-body-sm font-semibold text-secondary hover:underline transition-all duration-300 cursor-pointer"
        >
          Enviar nova mensagem
        </button>
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col gap-2.5 w-full', className)} {...props}>
      {/* Segmented Control / Tabs Header */}
      <div className="bg-surface p-1 rounded-[10px] flex gap-0 w-full select-none">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className={cn(
            'flex-1 text-center py-1.5 text-sm font-medium rounded-[10px] transition-all duration-300 cursor-pointer',
            currentStep === 1
              ? 'bg-canvas text-secondary shadow-[0_1px_2px_rgba(1,16,37,0.05)]'
              : 'text-muted hover:text-ink'
          )}
        >
          Etapa 1
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          disabled={currentStep === 1}
          className={cn(
            'flex-1 text-center py-1.5 text-sm font-medium rounded-[10px] transition-all duration-300',
            currentStep === 2
              ? 'bg-canvas text-secondary shadow-[0_1px_2px_rgba(1,16,37,0.05)] cursor-pointer'
              : 'text-muted cursor-not-allowed opacity-60'
          )}
        >
          Etapa 2
        </button>
      </div>

      {/* Form Container Card */}
      <form
        onSubmit={currentStep === 1 ? handleNext : handleSubmit}
        className="bg-canvas border border-hairline rounded-[10px] flex flex-col w-full"
      >
        {/* Honeypot anti-robô — fora da tela, fora do tab e escondido de leitores de tela */}
        <div aria-hidden="true" className="sr-only">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col gap-4">
          {currentStep === 1 ? (
            <>
              {/* Etapa 1 Fields */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="empresa">Nome da empresa:</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa LTDA"
                  maxLength={100}
                  autoComplete="organization"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">Nome completo:</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Pedro Duarte"
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="whatsapp">Telefone / WhatsApp:</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(DD) 9 XXXX-XXXX"
                  maxLength={20}
                  autoComplete="tel"
                  pattern="(?:\D*\d){10,13}\D*"
                  title="Informe o telefone com DDD, ex.: (41) 99999-9999"
                  required
                />
              </div>
            </>
          ) : (
            <>
              {/* Etapa 2 Fields */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nome@gmail.com"
                  maxLength={200}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="documento">CNPJ/CPF:</Label>
                <Input
                  ref={documentoRef}
                  id="documento"
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  autoComplete="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  aria-invalid={Boolean(erroDocumento) || undefined}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="servico">Tipo de serviço:</Label>
                <Select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                >
                  {SERVICOS_CONTATO.map((servico) => (
                    <option key={servico} value={servico}>
                      {servico}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva aqui sua mensagem"
                  maxLength={2000}
                  required
                />
              </div>
            </>
          )}
        </div>

        {/* Erro de envio — texto em token `destructive` (estado de erro visual é Known Gap no DESIGN.md) */}
        {erroEnvio && currentStep === 2 && (
          <p role="alert" className="px-6 pb-4 text-body-sm text-destructive">
            {erroEnvio}
          </p>
        )}

        {/* Footer Action Area */}
        <div className="px-6 pb-6 pt-0 flex w-full">
          <Button
            type="submit"
            variant="primary"
            icon={!enviando}
            disabled={enviando}
            aria-busy={enviando || undefined}
            className="w-full justify-center"
          >
            {currentStep === 1 ? 'Próximo' : enviando ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </form>
    </div>
  )
}
