import { cn } from '@/utils/cn'

const statusColors = {
  'Em andamento': 'bg-accent-500/10 text-accent-500 border border-accent-500/30',
  Concluído: 'bg-primary-500/10 text-primary-600 border border-primary-500/30',
}

export default function ProjectCard({ projeto }) {
  const { titulo, categoria, status, descricao, tecnologias } = projeto

  return (
    <article className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
          {categoria}
        </span>
        <span
          className={cn(
            'text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap',
            statusColors[status] ?? 'bg-gray-100 text-gray-600',
          )}
        >
          {status}
        </span>
      </div>
      <h3 className="font-heading font-bold text-primary-900 text-xl mb-3 leading-snug">
        {titulo}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{descricao}</p>
      <div className="flex flex-wrap gap-2">
        {tecnologias.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-neutral-light text-gray-600 px-2.5 py-1 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
