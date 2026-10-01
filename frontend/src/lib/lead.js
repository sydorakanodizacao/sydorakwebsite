import { obterAtribuicao } from '../utils/atribuicao'

const ERRO_PADRAO =
  'Não foi possível enviar sua solicitação agora. Tente novamente em instantes ou fale com a gente pelo WhatsApp.'

/**
 * Envia o formulário de contato para a função /api/lead (que cria o lead no Omie).
 * Lança Error com mensagem pronta para exibir ao usuário quando o envio falha.
 */
export async function enviarLead(dados) {
  let res
  try {
    res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...dados, atribuicao: obterAtribuicao() }),
    })
  } catch {
    throw new Error(ERRO_PADRAO)
  }

  if (!res.ok) {
    let mensagem = ERRO_PADRAO
    try {
      const corpo = await res.json()
      if (typeof corpo?.erro === 'string') mensagem = corpo.erro
    } catch {
      /* resposta sem JSON — mantém a mensagem padrão */
    }
    throw new Error(mensagem)
  }
}
