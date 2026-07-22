import LegalLayout from '../components/layout/LegalLayout'
import Seo from '../components/layout/Seo'
import { companyData } from '../data/legal-texts'
import { Link } from 'react-router-dom'

export default function CookiePolicy() {
  return (
    <LegalLayout>
      <Seo
        title={`Política de Cookies | ${companyData.razaoSocial}`}
        description="Saiba como a Sydorak Anodização utiliza cookies para melhorar sua experiência de navegação em nosso site."
      />

      <div className="border-b border-hairline pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
          Política de Cookies
        </h1>
        <p className="text-sm text-muted">Última atualização: {companyData.lastUpdated}</p>
      </div>

      <div className="space-y-6 text-body">
        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">1. O que são Cookies?</h2>
          <p className="text-muted leading-relaxed">
            Cookies são pequenos arquivos de texto armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, além de fornecer informações aos proprietários do site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">2. Como Utilizamos os Cookies</h2>
          <p className="text-muted leading-relaxed mb-3">
            A <strong className="text-ink">{companyData.razaoSocial}</strong> utiliza cookies para melhorar a usabilidade do site, lembrar suas preferências de navegação e registrar seu consentimento de privacidade conforme exigido pela LGPD.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">3. Tipos de Cookies Utilizados</h2>
          <div className="space-y-4 text-muted">
            <div>
              <h3 className="text-lg font-medium text-ink mb-1">a) Cookies Estritamente Necessários</h3>
              <p className="leading-relaxed">
                Essenciais para o funcionamento básico do site (ex: navegação segura, memorização do aceite do Cookie Banner via chave <code>sydorak_cookie_consent</code> no seu navegador).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-ink mb-1">b) Cookies de Desempenho e Analíticos</h3>
              <p className="leading-relaxed">
                Ajudam-nos a entender como os visitantes interagem com o site, coletando informações anônimas de tráfego para aprimorarmos continuamente nossa plataforma.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">4. Como Gerenciar ou Desativar Cookies</h2>
          <p className="text-muted leading-relaxed mb-3">
            Você pode alterar as configurações do seu navegador a qualquer momento para bloquear ou alertá-lo sobre o uso de cookies. No entanto, desativar cookies necessários pode afetar o funcionamento de algumas áreas do site.
          </p>
          <p className="text-muted leading-relaxed">
            Para saber como gerenciar cookies nos principais navegadores, consulte as páginas de suporte do Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">5. Mais Informações</h2>
          <p className="text-muted leading-relaxed">
            Para obter mais detalhes sobre como tratamos seus dados pessoais, consulte a nossa{' '}
            <Link to="/privacidade" className="text-secondary font-medium hover:underline">
              Política de Privacidade
            </Link>{' '}
            ou entre em contato através do e-mail:{' '}
            <a href={`mailto:${companyData.emails[0]}`} className="text-secondary font-medium hover:underline">
              {companyData.emails[0]}
            </a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
