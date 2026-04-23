import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import logoPrincipal from '@/assets/images/logo/logo-principal.jpeg'

const navLinks = [
  { to: '/', label: 'Início', exact: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/pesquisa', label: 'Pesquisa' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary-900 shadow-lg' : 'bg-primary-900/95 backdrop-blur-sm',
      )}
    >
      <div className="container-content flex items-center justify-between h-16">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={logoPrincipal}
            alt="Logo Health Tech UEA"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-heading font-bold text-white text-lg leading-tight">
            Health Tech <span className="text-accent-500">UEA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-100 hover:bg-primary-700 hover:text-white',
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden bg-primary-900 border-t border-primary-700 px-4 pb-4"
          aria-label="Navegação mobile"
        >
          {navLinks.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  'block py-3 px-4 rounded-md text-sm font-medium transition-colors mt-1',
                  isActive
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-100 hover:bg-primary-700 hover:text-white',
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
