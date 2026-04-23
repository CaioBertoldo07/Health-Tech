import { Link } from 'react-router-dom'
import { Mail, MapPin, ExternalLink, Linkedin } from 'lucide-react'
import logoPrincipal from '@/assets/images/logo/logo-principal.jpeg'

const quickLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/pesquisa', label: 'Pesquisa' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/contato', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-graphite text-gray-300">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoPrincipal}
                alt="Logo Health Tech UEA"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-white text-lg">
                Health Tech <span className="text-accent-500">UEA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Laboratório de Tecnologia em Saúde da Universidade do Estado do Amazonas.
              Pesquisa, inovação e impacto na saúde pública amazônica.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent-500" />
                <span>healthtech@uea.edu.br</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-500" />
                <span>Universidade do Estado do Amazonas – Manaus, AM</span>
              </li>
              <li>
                <a
                  href="https://uea.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent-500 hover:text-accent-600 transition-colors"
                >
                  uea.edu.br <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/health-tech-uea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent-500 hover:text-accent-600 transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {year} Health Tech UEA – Universidade do Estado do Amazonas. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
