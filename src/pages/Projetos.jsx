import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageHeader from '@/components/common/PageHeader'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import ProjectCard from '@/components/common/ProjectCard'
import CTASection from '@/components/common/CTASection'
import projetos from '@/data/projetos'

const categorias = ['Todos', 'Inteligência Artificial', 'Engenharia de Software', 'Capacitações', 'Saúde Digital']

const capacitacoes = [
  {
    id: 'cap-ia',
    titulo: 'Inteligência Artificial',
    categoria: 'Capacitações',
    descricao:
      'Capacitação em fundamentos e aplicações práticas de inteligência artificial, com foco em soluções voltadas à saúde e ao bem-estar.',
    tecnologias: ['IA', 'Machine Learning', 'Python'],
  },
  {
    id: 'cap-vc',
    titulo: 'Visão Computacional',
    categoria: 'Capacitações',
    descricao:
      'Treinamento em técnicas de visão computacional para análise de imagens e vídeos, com aplicações em diagnóstico e monitoramento em saúde.',
    tecnologias: ['Computer Vision', 'OpenCV', 'Python'],
  },
  {
    id: 'cap-1',
    titulo: 'Capacitações nas Áreas Tecnológicas',
    categoria: 'Capacitações',
    descricao:
      'Formação em competências tecnológicas essenciais para estudantes e profissionais das áreas de saúde e engenharia.',
    tecnologias: ['Tecnologia', 'Formação', 'UEA'],
  },
  {
    id: 'cap-2',
    titulo: 'Programação',
    categoria: 'Capacitações',
    descricao:
      'Capacitação em lógica de programação e linguagens modernas voltadas ao desenvolvimento de soluções em saúde digital.',
    tecnologias: ['Python', 'JavaScript', 'Lógica'],
  },
  {
    id: 'cap-3',
    titulo: 'Desenvolvimento Android',
    categoria: 'Capacitações',
    descricao:
      'Treinamento no desenvolvimento de aplicativos móveis para a plataforma Android, com foco em aplicações de saúde.',
    tecnologias: ['Android', 'Kotlin', 'Mobile'],
  },
  {
    id: 'cap-4',
    titulo: 'Desenvolvimento em Wearables',
    categoria: 'Capacitações',
    descricao:
      'Capacitação para desenvolvimento de soluções em dispositivos vestíveis, integrando sensores e monitoramento contínuo de saúde.',
    tecnologias: ['Wearables', 'IoT', 'Sensores'],
  },
  {
    id: 'cap-5',
    titulo: 'Desenvolvimento Web',
    categoria: 'Capacitações',
    descricao:
      'Formação em tecnologias web modernas para criação de sistemas e interfaces voltadas à saúde digital.',
    tecnologias: ['React', 'Node.js', 'HTML/CSS'],
  },
  {
    id: 'cap-6',
    titulo: "Capacitações para Pessoas PCD's e Autistas",
    categoria: 'Capacitações',
    descricao:
      'Programa inclusivo de capacitação tecnológica voltado a pessoas com deficiência e do espectro autista, promovendo acessibilidade e diversidade.',
    tecnologias: ['Inclusão', 'Acessibilidade', 'PCD'],
  },
]

export default function Projetos() {
  const [filtro, setFiltro] = useState('Todos')

  const projetosFiltrados =
    filtro === 'Todos'
      ? projetos
      : filtro === 'Capacitações'
        ? capacitacoes
        : projetos.filter((p) => p.categoria === filtro)

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
