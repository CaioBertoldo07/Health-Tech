import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Brain, Activity, Code, Users, ArrowRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import Carousel from '@/components/sections/Carousel'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'
import CTASection from '@/components/common/CTASection'
import ProfessorCard from '@/components/common/ProfessorCard'
import professores from '@/data/professores'

const destaques = [
  {
    icon: Brain,
    titulo: 'Pesquisa de ponta',
    descricao:
      'Desenvolvemos pesquisa aplicada em Inteligência Artificial, Engenharia de Software e tecnologias emergentes, gerando conhecimento que fundamenta soluções inovadoras e a formação qualificada em tecnologia.',
  },
  {
    icon: Activity,
    titulo: 'Impacto regional',
    descricao:
      'Desenvolvemos soluções tecnológicas alinhadas às necessidades da Amazônia, promovendo inclusão, acesso à tecnologia e desenvolvimento sustentável em diferentes setores.',
  },
  {
    icon: Code,
    titulo: 'Inovação aplicada',
    descricao:
      'Transformamos conhecimento em soluções reais, desenvolvendo sistemas, aplicações e plataformas tecnológicas com potencial de aplicação em diferentes setores.',
  },
  {
    icon: Users,
    titulo: 'Equipe multidisciplinar',
    descricao:
      'Reunimos especialistas em computação, engenharia, saúde e áreas aplicadas, integrando desenvolvimento tecnológico e formação de talentos em um ambiente colaborativo e inovador.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Health Tech UEA – Centro de Pesquisa e Inovação em Computação Aplicada à Saúde Digital</title>
        <meta
          name="description"
          content="Centro de Pesquisa e Inovação em Computação Aplicada à Saúde Digital da Escola Superior de Tecnologia (EST) – UEA. Pesquisa em IA, IoT, telemedicina e saúde digital."
        />
        <meta property="og:title" content="Health Tech UEA" />
        <meta
          property="og:description"
          content="Pesquisa e inovação em saúde digital na Amazônia."
        />
      </Helmet>

      <Hero />

      <Section>
        <SectionTitle
          title="Por que o Health Tech?"
          subtitle="Porque transformamos pesquisa em soluções tecnológicas, conectando Inteligência Artificial, engenharia de software e desenvolvimento de aplicações multiplataforma às demandas reais de diferentes setores. Além disso, formamos talentos e promovemos inclusão por meio da tecnologia."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destaques.map(({ icon: Icon, titulo, descricao }) => (
            <div
              key={titulo}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="text-accent-500" size={24} />
              </div>
              <h3 className="font-heading font-bold text-primary-900 text-lg mb-2">{titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16 bg-neutral-light">
        <div className="container-content">
          <SectionTitle
            title="Instalações"
            subtitle="Conheça o ambiente de pesquisa e inovação do laboratório."
            centered
          />
          <Carousel />
        </div>
      </section>

      <Section>
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            title="Nossa equipe"
            subtitle="Professores e pesquisadores dedicados à tecnologia em saúde."
          />
          <Link
            to="/equipe"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
          >
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professores.map((prof) => (
            <ProfessorCard key={prof.id} professor={prof} />
          ))}
        </div>
        <div className="mt-8 sm:hidden text-center">
          <Link
            to="/equipe"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600"
          >
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
