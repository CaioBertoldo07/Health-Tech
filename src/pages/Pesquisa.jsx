import { Helmet } from 'react-helmet-async'
import { Brain, Activity, Code, Stethoscope, BarChart2, Shield } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import CTASection from '@/components/common/CTASection'
import areasDesPesquisa from '@/data/pesquisa'

const iconeMap = { Brain, Activity, Code, Stethoscope, BarChart2, Shield }

export default function Pesquisa() {
  return (
    <>
      <Helmet>
        <title>Pesquisa – Health Tech UEA</title>
        <meta
          name="description"
          content="Linhas de pesquisa do Health Tech UEA: IA em Saúde, IoT médica, Engenharia de Software, Telemedicina, Ciência de Dados e Segurança."
        />
        <meta property="og:title" content="Pesquisa – Health Tech UEA" />
        <meta property="og:description" content="Frentes de pesquisa em tecnologia e saúde digital da UEA." />
      </Helmet>

      <PageHeader
        title="Linhas de Pesquisa"
        description="Exploramos as fronteiras da tecnologia para criar soluções que impactam a saúde humana."
      />

      <Section>
        <SectionTitle
          title="Áreas de Pesquisa"
          subtitle="Nosso laboratório atua em seis eixos temáticos interconectados."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasDesPesquisa.map(({ id, titulo, icone, descricao, tecnologias }) => {
            const Icon = iconeMap[icone] ?? Brain
            return (
              <article
                key={id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-primary-900" size={22} />
                </div>
                <h2 className="font-heading font-bold text-primary-900 text-lg mb-3 leading-snug">
                  {titulo}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{descricao}</p>
                <div className="flex flex-wrap gap-2">
                  {tecnologias.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-neutral-light text-gray-600 px-2.5 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </Section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Metodologia e Impacto"
                subtitle="Como transformamos pesquisa em soluções reais para a saúde."
                light
              />
              <div className="space-y-4">
                {[
                  {
                    titulo: 'Pesquisa Aplicada',
                    desc: 'Desenvolvemos protótipos e produtos testados em contextos reais de saúde.',
                  },
                  {
                    titulo: 'Parcerias Institucionais',
                    desc: 'Colaboramos com hospitais, secretarias de saúde e outros laboratórios.',
                  },
                  {
                    titulo: 'Publicações e Transferência',
                    desc: 'Publicamos em periódicos e conferências nacionais e internacionais.',
                  },
                ].map(({ titulo, desc }) => (
                  <div key={titulo} className="flex gap-4">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-white mb-1">{titulo}</h3>
                      <p className="text-primary-100 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { valor: '6', label: 'Áreas de Pesquisa' },
                { valor: '4', label: 'Projetos' },
                { valor: '3', label: 'Professores' },
              ].map(({ valor, label }) => (
                <div key={label} className="bg-white/10 rounded-xl p-6 text-center">
                  <span className="font-heading font-extrabold text-4xl text-accent-500">
                    {valor}
                  </span>
                  <p className="text-primary-100 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Interesse em colaborar?"
        description="Pesquisadores, estudantes e parceiros são bem-vindos para projetos de pesquisa conjuntos."
        buttonLabel="Entre em Contato"
      />
    </>
  )
}
