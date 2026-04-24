import { ExternalLink } from 'lucide-react'

export default function ProfessorCard({ professor }) {
  const { nome, funcao, bio, lattesUrl, foto, objectPosition } = professor

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="aspect-square overflow-hidden bg-primary-50">
        <img
          src={foto}
          alt={`Foto de ${nome}`}
          className={`w-full h-full object-cover ${objectPosition ?? 'object-top'}`}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-primary-900 text-lg leading-snug mb-1">
          {nome}
        </h3>
        <p className="text-accent-500 font-medium text-sm mb-3">{funcao}</p>
        {bio && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 whitespace-pre-line">{bio}</p>
        )}
        <div className="mt-auto">
          <a
            href={lattesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-accent-500 transition-colors"
            aria-label={`Currículo Lattes de ${nome}`}
          >
            Currículo Lattes <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}
