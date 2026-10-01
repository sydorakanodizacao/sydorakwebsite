/**
 * telefone — máscara progressiva de telefone brasileiro com DDD.
 *
 * - Celular (11 dígitos): (41) 99704-3705
 * - Fixo (10 dígitos):    (41) 3286-2028
 * - Colar "+55 41 99704-3705" remove o código do país (só quando passa de 11 dígitos,
 *   para não confundir com o DDD 55).
 *
 * A função /api/lead aceita o valor formatado e separa DDD e número para o Omie.
 */
export function formatarTelefone(valor) {
  let d = String(valor ?? '').replace(/\D/g, '')
  if (d.length > 11 && d.startsWith('55')) d = d.slice(2)
  d = d.slice(0, 11)

  if (!d) return ''
  if (d.length <= 2) return `(${d}`

  const ddd = d.slice(0, 2)
  const numero = d.slice(2)
  if (numero.length <= 4) return `(${ddd}) ${numero}`

  const corte = numero.length === 9 ? 5 : 4
  return `(${ddd}) ${numero.slice(0, corte)}-${numero.slice(corte)}`
}
