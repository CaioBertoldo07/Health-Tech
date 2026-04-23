# Health Tech UEA – Site Institucional

Site institucional estático do Laboratório de Tecnologia em Saúde da Universidade do Estado do Amazonas (UEA).

## Stack

- **Vite** + **React 18**
- **Tailwind CSS** (Design System institucional)
- **React Router DOM** (SPA com 6 rotas)
- **Embla Carousel** (carrossel de instalações)
- **React Helmet Async** (SEO por página)
- **Lucide React** (ícones)

## Rotas

| Rota | Página |
|------|--------|
| `/` | Início |
| `/sobre` | Sobre o Laboratório |
| `/projetos` | Projetos |
| `/pesquisa` | Linhas de Pesquisa |
| `/equipe` | Equipe |
| `/contato` | Contato |

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

## Build de Produção

```bash
npm run build
```

Os arquivos otimizados são gerados em `dist/`. Para pré-visualizar:

```bash
npm run preview
```

## Deploy

O site é 100% estático. O conteúdo da pasta `dist/` pode ser hospedado em:

- **GitHub Pages** — configure `base` no `vite.config.js` se necessário
- **Netlify** — arraste `dist/` ou conecte o repositório
- **Vercel** — conecte o repositório (detecta Vite automaticamente)

## Estrutura do Projeto

```
src/
├── assets/images/        # Imagens organizadas por categoria
│   ├── ambiente/
│   ├── carrossel/
│   ├── logo/
│   └── professores/
├── components/
│   ├── common/           # Componentes reutilizáveis (Card, Button, etc.)
│   ├── layout/           # Navbar, Footer
│   └── sections/         # Hero, Carousel
├── data/                 # Dados estáticos (professores, projetos, pesquisa)
├── layouts/              # MainLayout
├── pages/                # Uma página por rota
├── routes/               # Configuração do React Router
├── styles/               # CSS global e fontes
└── utils/                # Utilitários (cn)
```

## Manutenção

- **Adicionar professor:** edite `src/data/professores.js` e adicione a foto em `src/assets/images/professores/`.
- **Adicionar projeto:** edite `src/data/projetos.js`.
- **Adicionar área de pesquisa:** edite `src/data/pesquisa.js`.
- **Atualizar carrossel:** substitua ou adicione imagens em `src/assets/images/carrossel/` e atualize `src/data/carouselImages.js`.
