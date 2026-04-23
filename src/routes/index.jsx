import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Sobre from '@/pages/Sobre'
import Projetos from '@/pages/Projetos'
import Pesquisa from '@/pages/Pesquisa'
import Equipe from '@/pages/Equipe'
import Contato from '@/pages/Contato'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'projetos', element: <Projetos /> },
      { path: 'pesquisa', element: <Pesquisa /> },
      { path: 'equipe', element: <Equipe /> },
      { path: 'contato', element: <Contato /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
