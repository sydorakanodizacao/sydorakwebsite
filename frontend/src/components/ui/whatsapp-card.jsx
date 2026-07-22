import { cn } from '../../utils/cn'

/**
 * WhatsappCard — Card de contato rápido pelo WhatsApp.
 * 
 * DESIGN.md:
 * - Normal: fundo bg-canvas, divisores border-y border-hairline, título text-ink, CTA text-[#23B33A].
 * - Hover: título transiciona para o verde do WhatsApp (#23B33A), CTA e seta transicionam para verde escuro (#096512).
 * - Ícone: SVG nativo extraído do Figma (sem Lucide).
 * 
 * @param {Object} props
 * @param {string} props.title - Título do card.
 * @param {string} props.description - Descrição do card.
 * @param {string} props.linkText - Texto do link do CTA.
 * @param {string} props.href - URL de redirecionamento.
 * @param {string} [props.className] - Classes customizadas adicionais.
 */
export default function WhatsappCard({ title, description, linkText, href = '#', className, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col gap-8 py-8 w-full border-y border-hairline bg-canvas transition-all duration-300 select-none cursor-pointer',
        className
      )}
      {...props}
    >
      <div className="flex gap-4 items-start w-full">
        {/* Ícone do WhatsApp (Esquerda) */}
        <div className="flex-shrink-0 size-[24px] mt-0.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 20.2022 20.2928"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              id="path400-6-0"
              d="M0 20.2928L1.42708 15.0822C0.546908 13.5574 0.0838356 11.8274 0.0844003 10.0551C0.086656 4.51071 4.59869 0 10.1433 0C12.8339 0.00131243 15.3594 1.04841 17.2588 2.94912C19.1576 4.84982 20.2032 7.37618 20.2022 10.0632C20.1998 15.6073 15.687 20.1188 10.1433 20.1188C10.1429 20.1188 10.1437 20.1188 10.1433 20.1188H10.139C8.45568 20.1181 6.80158 19.6958 5.3323 18.8946L0 20.2928Z"
              fill="white"
            />
            <path
              id="path15"
              d="M10.147 1.69849C5.53528 1.69849 1.7849 5.4475 1.7832 10.0556C1.78252 11.6347 2.22444 13.1728 3.06129 14.5036L3.26023 14.8197L2.41543 17.9037L5.57974 17.074L5.88529 17.2551C7.16863 18.0168 8.63998 18.4195 10.1405 18.4203H10.1437C14.7518 18.4203 18.5022 14.6709 18.5041 10.0624C18.5049 7.82918 17.6362 5.72915 16.0576 4.14947C14.4791 2.56978 12.3802 1.69943 10.147 1.69849Z"
              fill="url(#paint0_linear_whatsapp)"
            />
            <path
              id="path418-6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.62942 5.85135C7.44103 5.43292 7.24284 5.42445 7.06386 5.4171C6.91729 5.41088 6.74962 5.41126 6.58214 5.41126C6.41447 5.41126 6.14224 5.47418 5.91202 5.72569C5.68162 5.97719 5.03223 6.58514 5.03223 7.82176C5.03223 9.05838 5.93294 10.2532 6.05841 10.421C6.18407 10.5887 7.79709 13.2074 10.3519 14.2147C12.4749 15.0519 12.9069 14.8854 13.3679 14.8436C13.8287 14.8017 14.8549 14.2356 15.0642 13.6488C15.2737 13.0619 15.2737 12.5591 15.2109 12.454C15.148 12.3491 14.9805 12.2863 14.729 12.1607C14.4777 12.035 13.242 11.4269 13.0116 11.343C12.7812 11.2592 12.6138 11.2174 12.4461 11.4689C12.2786 11.7204 11.7973 12.2863 11.6505 12.454C11.5039 12.6218 11.3574 12.6428 11.1058 12.5171C10.8545 12.3911 10.045 12.126 9.08476 11.2697C8.33759 10.6036 7.83326 9.78087 7.6865 9.52936C7.53993 9.27785 7.67087 9.14183 7.7969 9.01655C7.90975 8.90389 8.04822 8.72303 8.17407 8.57628C8.29935 8.42952 8.34136 8.32477 8.42501 8.15729C8.50884 7.98943 8.46702 7.84267 8.4041 7.71701C8.34136 7.59135 7.85286 6.34833 7.62942 5.85135"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_whatsapp"
                x1="9.97343"
                y1="2.70197"
                x2="10.0582"
                y2="16.9917"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#57D163" />
                <stop offset="1" stopColor="#23B33A" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Conteúdo do Card (Direita) */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h4 className="text-h4-card text-ink group-hover:text-[#23B33A] transition-colors duration-300 font-bold">
            {title}
          </h4>
          {description && (
            <p className="text-body text-muted mt-2 mb-4 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Link */}
          <div className="inline-flex items-center gap-2 text-body-sm font-medium transition-all duration-300">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(-19.64deg, #78B5E3 12.77%, #0E55A9 55.17%, #08418B 97.58%)' }}
            >
              {linkText}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 size-4 text-[#0E55A9] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                id="Vector"
                d="M11 11V5H5M11 5L5 11"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
}
