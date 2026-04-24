import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Clock, ExternalLink, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

const infoContato = [
  {
    icon: Mail,
    titulo: 'E-mail',
    linha1: 'healthtech@uea.edu.br',
    href: 'mailto:healthtech@uea.edu.br',
  },
  {
    icon: MapPin,
    titulo: 'Endereço',
    linha1: 'Escola Superior de Tecnologia (EST)',
    linha2: 'Universidade do Estado do Amazonas – Manaus, AM',
  },
  {
    icon: Clock,
    titulo: 'Horário de funcionamento',
    linha1: 'Segunda a sexta',
    linha2: '8h às 17h',
  },
]

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'myMEo72-PGFYnO55E',
}

async function enviarEmailJS({ nome, email, assunto, mensagem }) {
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
    throw new Error('Configuração do EmailJS incompleta')
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_CONFIG.serviceId,
      template_id: EMAILJS_CONFIG.templateId,
      user_id: EMAILJS_CONFIG.publicKey,
      template_params: {
        from_name: nome,
        name: nome,
        from_email: email,
        email,
        reply_to: email,
        subject: assunto,
        title: assunto,
        assunto,
        message: mensagem,
        mensagem,
        to_email: 'healthtech@uea.edu.br',
      },
    }),
  })
  if (!response.ok) {
    const detalhes = await response.text()
    throw new Error(`Falha no envio: ${detalhes}`)
  }
}

export default function Contato() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [erroDetalhe, setErroDetalhe] = useState('')
  const [campos, setCampos] = useState({ nome: '', email: '', assunto: '', mensagem: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCampos((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErroDetalhe('')
    try {
      await enviarEmailJS(campos)
      setStatus('success')
      setCampos({ nome: '', email: '', assunto: '', mensagem: '' })
    } catch (error) {
      setErroDetalhe(error instanceof Error ? error.message : 'Erro desconhecido no envio')
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contato – Health Tech UEA</title>
        <meta
          name="description"
          content="Entre em contato com o Health Tech Center – EST/UEA. E-mail, endereço e formulário disponíveis."
        />
        <meta property="og:title" content="Contato – Health Tech UEA" />
        <meta property="og:description" content="Canais de contato do Health Tech Center – EST/UEA." />
      </Helmet>

      <PageHeader
        title="Contato"
        description="Fale conosco para dúvidas, parcerias, oportunidades de pesquisa ou visitas ao laboratório."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Como nos encontrar"
              subtitle="Estamos disponíveis pelos canais abaixo."
            />
            <div className="space-y-6">
              {infoContato.map(({ icon: Icon, titulo, linha1, linha2, href }) => (
                <div key={titulo} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-accent-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-900 mb-0.5">{titulo}</h3>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-500 hover:text-accent-500 transition-colors text-sm"
                      >
                        {linha1}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm">{linha1}</p>
                    )}
                    {linha2 && <p className="text-gray-400 text-sm">{linha2}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="font-heading font-semibold text-primary-900 mb-4">
                Acesso institucional
              </h3>
              <a
                href="https://uea.edu.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary-500 font-semibold hover:text-accent-500 transition-colors"
              >
                Site oficial da UEA <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center">
                <Send className="text-accent-500" size={18} />
              </div>
              <h2 className="font-heading font-bold text-primary-900 text-xl">
                Envie uma mensagem
              </h2>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <CheckCircle className="text-green-500" size={48} />
                <p className="font-heading font-semibold text-primary-900 text-lg">
                  Mensagem enviada com sucesso!
                </p>
                <p className="text-gray-500 text-sm">
                  Entraremos em contato em breve pelo e-mail informado.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={campos.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={campos.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    id="assunto"
                    name="assunto"
                    type="text"
                    required
                    value={campos.assunto}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    value={campos.mensagem}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>
                      Não foi possível enviar a mensagem. {erroDetalhe || 'Tente novamente ou use o e-mail diretamente.'}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    'Enviar mensagem'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
