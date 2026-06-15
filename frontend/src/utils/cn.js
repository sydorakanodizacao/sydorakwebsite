import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn — combina classes condicionais (clsx) e resolve conflitos de utilitários
 * Tailwind (tailwind-merge). Use em TODO componente que aceite `className`,
 * para que overrides do consumidor vençam os defaults sem duplicar utilitário.
 *
 * @param {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
