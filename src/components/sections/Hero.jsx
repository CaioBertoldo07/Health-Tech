import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical } from 'lucide-react'
import logoAlt from '@/assets/images/logo/logo-alt.jpeg'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/20 via-transparent to-transparent pointer-events-none"
      />

      <div className="container-content relative py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/40 rounded-full px-4 py-1.5 text-accent-500 text-sm font-semibold mb-6">
              <FlaskConical size={15} />
              Laboratório de Tecnologia em Saúde
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Inovação e Pesquisa em{' '}
              <span className="text-accent-500">Saúde Digital</span>
            </h1>
            <p className="text-primary-100 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              O Health Tech UEA une tecnologia de ponta e pesquisa aplicada para transformar
              a saúde pública na Amazônia e além.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Ver Projetos <ArrowRight size={18} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-heading font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Conheça o Lab
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-accent-500/30 rounded-full blur-3xl" />
              <img
                src={logoAlt}
                alt="Logo Health Tech UEA"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
