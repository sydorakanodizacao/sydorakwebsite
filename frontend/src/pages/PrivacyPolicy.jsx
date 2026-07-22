import LegalLayout from '../components/layout/LegalLayout'
import Seo from '../components/layout/Seo'
import { companyData } from '../data/legal-texts'

export default function PrivacyPolicy() {
  return (
    <LegalLayout>
      <Seo
        title={`Política de Privacidade | ${companyData.razaoSocial}`}
        description="Conheça a nossa Política de Privacidade e Entenda como tratamos os seus dados pessoais em conformidade com a LGPD."
      />

      <div className="border-b border-hairline pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted">Última atualização: {companyData.lastUpdated}</p>
      </div>

      <div className="space-y-6 text-body">
        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">1. Informações Gerais</h2>
          <p className="text-muted leading-relaxed">
            A empresa <strong className="text-ink">{companyData.razaoSocial}</strong>, inscrita no CNPJ sob o nº <strong className="text-ink">{companyData.cnpj}</strong>, com sede em <strong className="text-ink">{companyData.address}</strong>, valoriza a privacidade dos seus usuários e criou esta Política de Privacidade em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">2. Coleta de Dados Pessoais</h2>
          <p className="text-muted leading-relaxed mb-3">
            Coletamos informações pessoais que você nos fornece diretamente ao utilizar nossos formulários de contato e orçamento:
          </p>
          <ul className="list-disc pl-6 text-muted space-y-1">
            <li>Nome completo;</li>
            <li>Nome da empresa / Razão Social;</li>
            <li>Telefone / WhatsApp;</li>
            <li>Endereço de e-mail;</li>
            <li>Especificações do projeto ou mensagem enviada.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">3. Finalidade do Tratamento</h2>
          <p className="text-muted leading-relaxed mb-3">
            Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:
          </p>
          <ul className="list-disc pl-6 text-muted space-y-1">
            <li>Atendimento a solicitações de orçamento e consultas técnicas;</li>
            <li>Contato direto via telefone, WhatsApp ou e-mail sobre nossos serviços de tratamento de superfície;</li>
            <li>Cumprimento de obrigações legais e regulatórias.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">4. Compartilhamento de Dados</h2>
          <p className="text-muted leading-relaxed">
            A <strong className="text-ink">{companyData.razaoSocial}</strong> não vende nem comercializa dados pessoais com terceiros. Seus dados só serão compartilhados quando estritamente necessário para o cumprimento de obrigações legais ou judiciais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">5. Seus Direitos (LGPD)</h2>
          <p className="text-muted leading-relaxed mb-3">
            Como titular dos dados, você possui os seguintes direitos resguardados pela LGPD:
          </p>
          <ul className="list-disc pl-6 text-muted space-y-1">
            <li>Confirmação da existência de tratamento e acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Eliminação dos dados pessoais tratados com o seu consentimento;</li>
            <li>Revogação do consentimento a qualquer momento.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">6. Contato do Encarregado (DPO)</h2>
          <p className="text-muted leading-relaxed">
            Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail:{' '}
            <a href={`mailto:${companyData.emails[0]}`} className="text-secondary font-medium hover:underline">
              {companyData.emails[0]}
            </a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
