/**
 * documento — máscara e validação de CNPJ/CPF.
 *
 * Usado no formulário de contato (front) e na função /api/lead (back), para que a mesma regra
 * valide nos dois lados antes de chegar ao Omie (erro no Omie conta para o bloqueio HTTP 425).
 *
 * - CPF: 11 dígitos → 000.000.000-00
 * - CNPJ: 14 posições → 00.000.000/0000-00. Suporta o CNPJ alfanumérico da Receita Federal
 *   (IN RFB 2.229/2024, emitido desde jul/2026): 12 primeiras posições em [0-9A-Z],
 *   2 dígitos verificadores numéricos. O DV usa o valor ASCII − 48 de cada caractere.
 * - O Omie guarda `cDoc` formatado (padrão das contas da Sydorak), por isso enviamos com máscara.
 */

const CPF_PESOS_1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
const CPF_PESOS_2 = [11, ...CPF_PESOS_1]
const CNPJ_PESOS_1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
const CNPJ_PESOS_2 = [6, ...CNPJ_PESOS_1]

/** Remove máscara e normaliza: só [0-9A-Z], caixa-alta, até 14 posições. */
export function limparDocumento(valor) {
  return String(valor ?? '')
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, '')
    .slice(0, 14)
}

/** Máscara progressiva: CPF enquanto couber (só dígitos, até 11), CNPJ a partir daí. */
export function formatarDocumento(valor) {
  const v = limparDocumento(valor)
  const ehCpf = v.length <= 11 && /^\d*$/.test(v)
  const partes = ehCpf
    ? [[0, 3], [3, 6, '.'], [6, 9, '.'], [9, 11, '-']]
    : [[0, 2], [2, 5, '.'], [5, 8, '.'], [8, 12, '/'], [12, 14, '-']]
  return partes
    .filter(([ini]) => v.length > ini)
    .map(([ini, fim, sep = '']) => sep + v.slice(ini, fim))
    .join('')
}

function digitoVerificador(base, pesos) {
  const soma = [...base].reduce((acc, ch, i) => acc + (ch.charCodeAt(0) - 48) * pesos[i], 0)
  const resto = soma % 11
  return resto < 2 ? 0 : 11 - resto
}

/**
 * Valida CNPJ (numérico ou alfanumérico) ou CPF pelo dígito verificador.
 * @returns {{ valido: boolean, tipo: 'CPF' | 'CNPJ' | null }}
 */
export function validarDocumento(valor) {
  const v = limparDocumento(valor)

  if (/^\d{11}$/.test(v)) {
    const valido =
      !/^(\d)\1{10}$/.test(v) &&
      digitoVerificador(v.slice(0, 9), CPF_PESOS_1) === Number(v[9]) &&
      digitoVerificador(v.slice(0, 10), CPF_PESOS_2) === Number(v[10])
    return { valido, tipo: 'CPF' }
  }

  if (/^[0-9A-Z]{12}\d{2}$/.test(v)) {
    const valido =
      !/^(\d)\1{13}$/.test(v) &&
      digitoVerificador(v.slice(0, 12), CNPJ_PESOS_1) === Number(v[12]) &&
      digitoVerificador(v.slice(0, 13), CNPJ_PESOS_2) === Number(v[13])
    return { valido, tipo: 'CNPJ' }
  }

  return { valido: false, tipo: null }
}

/** Mensagem para a validação nativa do navegador (setCustomValidity). Vazia = válido. */
export function mensagemDocumento(valor) {
  const v = limparDocumento(valor)
  if (!v) return ''
  if (v.length !== 11 && v.length !== 14) return 'Informe um CNPJ (14 caracteres) ou CPF (11 dígitos) completo.'
  return validarDocumento(v).valido ? '' : 'CNPJ ou CPF inválido. Confira os números digitados.'
}
