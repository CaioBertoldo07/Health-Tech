import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageHeader from '@/components/common/PageHeader'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import ProjectCard from '@/components/common/ProjectCard'
import CTASection from '@/components/common/CTASection'
import projetos from '@/data/projetos'

const categorias = ['Todos', ...new Set(projetos.map((p) => p.categoria))]

export default function Projetos() {
  const [filtro, setFiltro] = useState('Todos')

  const projetosFiltrados =
    filtro === 'Todos' ? projetos : projetos.filter((p) => p.categoria === filtro)

  return (
    <>
      <Helmet>
        <title>Projetos – Health Tech UEA</title>
        <meta
          name="description"
          content="Conheça os projetos de pesquisa e desenvolvimento do laboratório Health Tech UEA em saúde digital, IA, IoT e engenharia de software."
        />
        <meta property="og:title" content="Projetos – Health Tech UEA" />
        <meta property="og:description" content="Projetos de pesquisa em tecnologia e saúde da UEA." />
      </Helmet>

      <PageHeader
        title="Projetos"
        description="Pesquisa e desenvolvimento aplicados à saúde digital, com impacto real na Amazônia e no Brasil."
      />

      <Section>
        <SectionTitle
          title="Nossos Projetos"
          subtitle="Iniciativas em andamento e concluídas pelo laboratório."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                filtro === cat
                  ? 'bg-primary-900 text-white'
                  : 'bg-neutral-light text-gray-600 hover:bg-primary-100 hover:text-primary-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosFiltrados.map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Tem um projeto em mente?"
        description="Estamos abertos a parcerias e colaborações com instituições, empresas e pesquisadores."
        buttonLabel="Fale Conosco"
      />
    </>
  )
}
