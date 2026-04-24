import { Helmet } from 'react-helmet-async'
import { Users } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import ProfessorCard from '@/components/common/ProfessorCard'
import CTASection from '@/components/common/CTASection'
import professores from '@/data/professores'

export default function Equipe() {
  return (
    <>
      <Helmet>
        <title>Equipe – Health Tech UEA</title>
        <meta
          name="description"
          content="Conheça os professores e pesquisadores do laboratório Health Tech da UEA e acesse seus currículos Lattes."
        />
        <meta property="og:title" content="Equipe – Health Tech UEA" />
        <meta property="og:description" content="Professores e pesquisadores do Health Tech UEA." />
      </Helmet>

      <PageHeader
        title="Nossa Equipe"
        description="Professores e pesquisadores comprometidos com a excelência em pesquisa e inovação em saúde digital."
      />

      <Section>
        <SectionTitle
          title="Professores"
          subtitle="Nosso time multidisciplinar combina expertise em tecnologia e saúde para projetos de alto impacto."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professores.map((prof) => (
            <ProfessorCard key={prof.id} professor={prof} />
          ))}
        </div>
      </Section>

      <section className="py-16 bg-neutral-light">
        <div className="container-content">
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary-900" size={32} />
            </div>
            <h2 className="font-heading font-bold text-primary-900 text-2xl mb-3">
              Faça parte da equipe
            </h2>
            <p className="text-gray-500 mb-6">
              Estudantes de graduação e pós-graduação interessados em pesquisa em saúde digital
              podem entrar em contato para oportunidades de iniciação científica e projetos de
              extensão.
            </p>
            <a
              href="mailto:healthtech@uea.edu.br"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Colaboração institucional"
        buttonLabel="Ver canais de contato"
        buttonTo="/contato"
      />
    </>
  )
}
