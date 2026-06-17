import { useState } from 'react'
import { cn } from '../../utils/cn'
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
 */
export default function MultiStepForm({ onSubmit, className, ...props }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    servico: 'Perfis Anodizados',
    mensagem: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = (e) => {
    e.preventDefault()
    // Validação simples
    if (currentStep === 1) {
      setCurrentStep(2)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (onSubmit) {
      onSubmit(formData)
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
          Obrigado, <span className="text-ink font-semibold">{formData.nome}</span>. Sua solicitação foi recebida e uma confirmação foi enviada para o e-mail <span className="text-ink font-semibold">{formData.email}</span>.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false)
            setCurrentStep(1)
            setFormData({
              nome: '',
              empresa: '',
              whatsapp: '',
              email: '',
              servico: 'Perfis Anodizados',
              mensagem: '',
            })
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
          className={cn(
            'flex-1 text-center py-1.5 text-sm font-medium rounded-[10px] transition-all duration-300 cursor-pointer',
            currentStep === 2
              ? 'bg-canvas text-secondary shadow-[0_1px_2px_rgba(1,16,37,0.05)]'
              : 'text-muted hover:text-ink'
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
        {/* Content Area */}
        <div className="p-6 flex flex-col gap-4">
          {currentStep === 1 ? (
            <>
              {/* Etapa 1 Fields */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">Nome completo:</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Pedro Duarte"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="empresa">Nome da empresa:</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa LTDA"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="whatsapp">Telefone / WhatsApp:</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(DD) 9 XXXX-XXXX"
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
                  <option value="Perfis Anodizados">Perfis Anodizados</option>
                  <option value="Anodização Técnica">Anodização Técnica</option>
                  <option value="Anodização Decorativa">Anodização Decorativa</option>
                  <option value="Jateamento / Tratamento Prévio">Jateamento / Tratamento Prévio</option>
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
                  required
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Action Area */}
        <div className="px-6 pb-6 pt-0 flex w-full">
          <Button
            type="submit"
            variant="primary"
            icon={true}
            className="w-full justify-center"
          >
            {currentStep === 1 ? 'Próximo' : 'Enviar'}
          </Button>
        </div>
      </form>
    </div>
  )
}
