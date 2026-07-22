import { Helmet } from 'react-helmet-async'

/**
 * Seo — Componente para gerenciar as meta tags e o título da página dinamicamente.
 *
 * @param {Object} props
 * @param {string} props.title - Título da página.
 * @param {string} [props.description] - Descrição da página.
 */
export default function Seo({ title, description }) {
  const defaultTitle = 'Sydorak Anodização'
  const fullTitle = title
    ? title.includes('Sydorak')
      ? title
      : `${title} | ${defaultTitle}`
    : defaultTitle

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}

export { Seo }

