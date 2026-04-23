import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Faça parte do Health Tech UEA',
  description = 'Entre em contato para conhecer oportunidades de pesquisa, parcerias institucionais ou colaboração em projetos.',
  buttonLabel = 'Entre em Contato',
  buttonTo = '/contato',
}) {
  return (
    <section className="bg-primary-900 text-white py-16 lg:py-20">
      <div className="container-content text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <Link
          to={buttonTo}
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold px-8 py-4 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
