import { Helmet } from 'react-helmet-async'
import { Target, Eye, Lightbulb, CheckCircle } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import CTASection from '@/components/common/CTASection'

import amb1 from '@/assets/images/ambiente/ambiente-01.jpeg'
import amb2 from '@/assets/images/ambiente/ambiente-02.jpeg'
import amb3 from '@/assets/images/ambiente/ambiente-03.jpeg'
import amb4 from '@/assets/images/ambiente/ambiente-04.jpeg'

const valores = [
  'Rigor científico e excelência na pesquisa',
  'Impacto social e relevância para a saúde pública',
  'Colaboração interdisciplinar e trabalho em equipe',
  'Ética no uso de dados e tecnologia',
  'Inovação responsável e sustentabilidade',
  'Inclusão e acessibilidade nas soluções desenvolvidas',
]

const marcos = [
  { ano: '2019', evento: 'Fundação do Health Tech Center na EST-UEA' },
  { ano: '2020', evento: 'Primeiros projetos de pesquisa em telemedicina e IoT médica' },
  { ano: '2021', evento: 'Parceria com a Secretaria de Saúde do Amazonas' },
  { ano: '2022', evento: 'Publicações internacionais em IA aplicada à saúde' },
  { ano: '2023', evento: 'Expansão da infraestrutura e integração de novos pesquisadores' },
  { ano: '2024', evento: 'Novos projetos em inclusão digital, segurança pública e gestão institucional' },
]

export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre – Health Tech UEA</title>
        <meta
          name="description"
          content="Conheça a missão, visão, valores e história do laboratório Health Tech da Universidade do Estado do Amazonas."
        />
        <meta property="og:title" content="Sobre – Health Tech UEA" />
        <meta
          property="og:description"
          content="Missão, visão, valores e trajetória do laboratório Health Tech UEA."
        />
      </Helmet>

      <PageHeader
        title="Sobre o Laboratório"
        description="Conheça a história, missão e os princípios que guiam o Health Tech UEA."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-primary-900">
            <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="text-primary-900" size={24} />
            </div>
            <h2 className="font-heading font-bold text-primary-900 text-xl mb-3">Missão</h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Desenvolver pesquisa científica e tecnológica de excelência em saúde digital,
              contribuindo para a melhoria da qualidade de vida da população amazônica por meio
              de soluções inovadoras, éticas e acessíveis.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-secondary-500">
            <div className="w-12 h-12 bg-secondary-500/10 rounded-xl flex items-center justify-center mb-4">
              <Eye className="text-secondary-500" size={24} />
            </div>
            <h2 className="font-heading font-bold text-primary-900 text-xl mb-3">Visão</h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Ser referência nacional em pesquisa e desenvolvimento de tecnologias em saúde,
              reconhecido pela excelência científica, impacto social e contribuição para a
              transformação digital do sistema de saúde brasileiro.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-accent-500">
            <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="text-accent-500" size={24} />
            </div>
            <h2 className="font-heading font-bold text-primary-900 text-xl mb-3">Valores</h2>
            <ul className="space-y-2">
              {valores.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-gray-500">
                  <CheckCircle size={14} className="mt-0.5 shrink-0 text-accent-500" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="py-16 bg-neutral-light">
        <div className="container-content">
          <SectionTitle title="Linha do tempo" subtitle="Os marcos que definiram nossa trajetória." />
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-8">
              {marcos.map(({ ano, evento }, idx) => (
                <div
                  key={ano}
                  className={`relative flex items-start gap-6 lg:gap-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="lg:w-1/2 pl-10 lg:pl-0 lg:pr-10 lg:text-right">
                    {idx % 2 === 0 && (
                      <div className="bg-white rounded-xl shadow p-4">
                        <span className="font-heading font-bold text-accent-500 text-lg">{ano}</span>
                        <p className="text-gray-600 text-sm mt-1">{evento}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-accent-500 rounded-full border-2 border-white shadow -translate-x-1/2 mt-4" />
                  <div className="lg:w-1/2 pl-10 lg:pl-10">
                    {idx % 2 !== 0 && (
                      <div className="bg-white rounded-xl shadow p-4">
                        <span className="font-heading font-bold text-accent-500 text-lg">{ano}</span>
                        <p className="text-gray-600 text-sm mt-1">{evento}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle
          title="Infraestrutura e ambiente"
          subtitle="Espaços projetados para pesquisa, colaboração e inovação."
          centered
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[amb1, amb2, amb3, amb4].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-square">
              <img
                src={img}
                alt={`Ambiente do laboratório Health Tech UEA – imagem ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Quer conhecer o laboratório?" />
    </>
  )
}
