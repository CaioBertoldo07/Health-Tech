import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Clock, ExternalLink, Send } from 'lucide-react'
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
    linha1: 'Universidade do Estado do Amazonas',
    linha2: 'Manaus – AM, Brasil',
  },
  {
    icon: Clock,
    titulo: 'Horário de Funcionamento',
    linha1: 'Segunda a Sexta',
    linha2: '8h às 17h',
  },
]

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato – Health Tech UEA</title>
        <meta
          name="description"
          content="Entre em contato com o laboratório Health Tech UEA. E-mail, endereço e redes institucionais disponíveis."
        />
        <meta property="og:title" content="Contato – Health Tech UEA" />
        <meta property="og:description" content="Canais de contato do laboratório Health Tech UEA." />
      </Helmet>

      <PageHeader
        title="Contato"
        description="Fale conosco para dúvidas, parcerias, oportunidades de pesquisa ou visitas ao laboratório."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Como nos Encontrar"
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
                Acesso Institucional
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
                Envie uma Mensagem
              </h2>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = `mailto:healthtech@uea.edu.br?subject=${encodeURIComponent(
                  e.target.assunto.value,
                )}&body=${encodeURIComponent(e.target.mensagem.value)}`
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
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
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                Enviar Mensagem
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">
              O formulário abrirá seu cliente de e-mail padrão.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
