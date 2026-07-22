import LegalLayout from '../components/layout/LegalLayout'
import Seo from '../components/layout/Seo'
import { companyData } from '../data/legal-texts'

export default function TermsOfUse() {
  return (
    <LegalLayout>
      <Seo
        title={`Termos de Uso | ${companyData.razaoSocial}`}
        description="Termos e condições de uso do site oficial da Sydorak Anodização."
      />

      <div className="border-b border-hairline pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-2">
          Termos de Uso
        </h1>
        <p className="text-sm text-muted">Última atualização: {companyData.lastUpdated}</p>
      </div>

      <div className="space-y-6 text-body">
        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">1. Aceitação dos Termos</h2>
          <p className="text-muted leading-relaxed">
            Ao acessar e utilizar o site da <strong className="text-ink">{companyData.razaoSocial}</strong> (CNPJ: <strong className="text-ink">{companyData.cnpj}</strong>), você concorda expressamente em cumprir e respeitar os presentes Termos de Uso e todas as leis e regulamentos aplicáveis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">2. Propriedade Intelectual</h2>
          <p className="text-muted leading-relaxed">
            Todo o conteúdo presente neste site, incluindo textos, marcas, logotipos, imagens, gráficos, design e códigos, é de propriedade exclusiva da <strong className="text-ink">{companyData.razaoSocial}</strong> ou licenciado para ela, sendo protegido pelas leis de propriedade intelectual vigentes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">3. Uso Permitido</h2>
          <p className="text-muted leading-relaxed mb-3">
            O usuário se compromete a utilizar o site exclusivamente para fins legítimos, sendo vedado:
          </p>
          <ul className="list-disc pl-6 text-muted space-y-1">
            <li>Utilizar qualquer conteúdo para fins comerciais não autorizados;</li>
            <li>Introduzir vírus, malwares ou qualquer elemento prejudicial aos sistemas;</li>
            <li>Tentar acessar áreas restritas ou dados de terceiros sem permissão.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">4. Isenção e Limitação de Responsabilidade</h2>
          <p className="text-muted leading-relaxed">
            Esforçamo-nos para manter as informações do site atualizadas e precisas, porém a <strong className="text-ink">{companyData.razaoSocial}</strong> não se responsabiliza por eventuais indisponibilidades temporárias do site ou incorreções nos conteúdos demonstrativos de serviços e produtos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">5. Alterações nos Termos</h2>
          <p className="text-muted leading-relaxed">
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos a consulta periódica desta página para manter-se ciente de quaisquer atualizações.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mb-3">6. Legislação Aplicável</h2>
          <p className="text-muted leading-relaxed">
            Estes termos são regidos pelas leis da República Federativa do Brasil, ficando eleito o Foro da Comarca de Curitiba - PR para dirimir quaisquer dúvidas ou litígios decorrentes destes termos.
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}
