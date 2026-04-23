import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada – Health Tech UEA</title>
      </Helmet>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <span className="font-heading font-extrabold text-8xl text-primary-900/10 select-none">
          404
        </span>
        <h1 className="font-heading font-bold text-primary-900 text-3xl -mt-4 mb-3">
          Página não encontrada
        </h1>
        <p className="text-gray-500 mb-8 max-w-sm">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft size={16} /> Voltar ao Início
        </Link>
      </div>
    </>
  )
}
