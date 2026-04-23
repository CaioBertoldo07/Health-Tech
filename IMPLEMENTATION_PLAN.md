# IMPLEMENTATION_PLAN

## 1. Visao geral do projeto

O objetivo e criar um site institucional moderno, responsivo e estatico para o laboratorio Health Tech da UEA, com foco em:

- Apresentar identidade institucional (marca, missao, linhas de pesquisa e infraestrutura).
- Dar visibilidade aos projetos e frentes de pesquisa.
- Exibir equipe de professores com informacoes organizadas e acesso ao Lattes.
- Oferecer um canal de contato claro para alunos, parceiros e comunidade.

O resultado esperado e um site rapido, facil de manter, com navegacao clara e visual profissional, sem necessidade de backend.

---

## 2. Stack tecnologica

### Vite

- Responsavel por scaffold, servidor de desenvolvimento rapido e build de producao otimizada.
- Sera usado para gerar bundle estatico final (pasta dist) para deploy em servicos como GitHub Pages, Netlify ou Vercel (modo estatico).

### React

- Base para composicao de interface por componentes reutilizaveis.
- Organizacao por paginas e secoes, com separacao entre camada de apresentacao (UI) e dados.

### Tailwind CSS

- Sistema utilitario para estilizar rapidamente mantendo consistencia visual.
- Criacao de tokens de design no tema (cores, fontes, espacamentos) para um Design System institucional.

### React Router DOM

- Gerenciamento das rotas de paginas do site: Home, Sobre, Projetos, Pesquisa, Equipe e Contato.
- Estrutura SPA com navegacao fluida e fallback para rotas inexistentes (pagina 404).

### Bibliotecas auxiliares recomendadas

- Embla Carousel React: carrossel leve, performatico e altamente customizavel.
- React Helmet Async: gerenciamento de title e meta tags por pagina (SEO basico).
- Lucide React: icones consistentes e leves.
- clsx + tailwind-merge: composicao e limpeza de classes Tailwind em componentes reutilizaveis.

---

## 3. Estrutura de pastas recomendada

Estrutura sugerida para um projeto Vite + React profissional:

```text
.
|- public/
|- src/
|  |- assets/
|  |  |- images/
|  |  |  |- laboratorio/
|  |  |  |- ambiente/
|  |  |  |- professores/
|  |  |  |- logo/
|  |- components/
|  |  |- common/
|  |  |- layout/
|  |  |- sections/
|  |- data/
|  |- hooks/
|  |- layouts/
|  |- pages/
|  |- routes/
|  |- utils/
|  |- styles/
|  |- App.jsx
|  |- main.jsx
|- IMPLEMENTATION_PLAN.md
```

Proposito de cada pasta:

- public/: arquivos estaticos que nao precisam passar pelo pipeline de import do React.
- src/assets/: imagens, logo e recursos visuais usados nas telas.
- src/components/common/: componentes genericos reutilizaveis (Button, SectionTitle, Card).
- src/components/layout/: componentes estruturais globais (Navbar, Footer, Container).
- src/components/sections/: blocos de pagina (HeroHome, ResearchHighlights, TeamPreview).
- src/data/: dados estaticos centralizados (professores, projetos, links institucionais).
- src/hooks/: hooks customizados (ex.: useScrollSpy, useCarouselAutoplay).
- src/layouts/: layouts de pagina (MainLayout com cabecalho/rodape).
- src/pages/: paginas mapeadas por rota.
- src/routes/: configuracao de rotas (RouterProvider ou BrowserRouter + Routes).
- src/utils/: funcoes utilitarias (formatacao, normalizacao de dados).
- src/styles/: estilos globais e configuracoes complementares.

---

## 4. Estrutura de paginas do site

### / -> Home

Objetivo:

- Apresentacao institucional inicial, proposta de valor do laboratorio e navegacao para demais secoes.

Secoes planejadas:

- Hero institucional com chamada principal.
- Destaques do laboratorio (pesquisa, inovacao, impacto).
- Carrossel de imagens das instalacoes.
- Preview da equipe.
- CTA para contato.

Componentes:

- Hero, Carousel, Section, FeatureCard, TeamPreview, CTASection.

### /sobre

Objetivo:

- Contar a historia, missao, visao e diferencais do laboratorio Health Tech.

Secoes planejadas:

- Missao, visao e valores.
- Linha do tempo ou marcos.
- Infraestrutura e ambiente.

Componentes:

- PageHeader, Section, Timeline (opcional), ImageGrid.

### /projetos

Objetivo:

- Exibir projetos institucionais em andamento ou concluidos.

Secoes planejadas:

- Lista de projetos em cards.
- Filtros simples por categoria (opcional).

Componentes:

- ProjectCard, ProjectsGrid, SectionTitle.

### /pesquisa

Objetivo:

- Apresentar as areas de pesquisa e frentes tecnicas do laboratorio.

Secoes planejadas:

- Eixos de pesquisa.
- Metodologias e tecnologias aplicadas.
- Resultados esperados/impacto.

Componentes:

- ResearchAreaCard, Section, InfoBlock.

### /equipe

Objetivo:

- Destacar professores e papeis no laboratorio com acesso ao Lattes.

Secoes planejadas:

- Grade de professores.
- Bloco institucional de colaboracao (opcional).

Componentes:

- ProfessorCard, TeamGrid, ExternalLinkButton.

### /contato

Objetivo:

- Oferecer formas de contato e localizacao institucional.

Secoes planejadas:

- Informacoes de contato (email, telefone, endereco quando disponivel).
- Mapa/links externos e horarios (se aplicavel).

Componentes:

- ContactInfo, SocialLinks, ContactCTA.

---

## 5. Componentes reutilizaveis

- Navbar: navegacao principal, logo, menu desktop/mobile e destaque de rota ativa.
- Footer: creditos institucionais, links rapidos, contato resumido e direitos autorais.
- Hero: bloco de impacto inicial com titulo, subtitulo, CTA e imagem de destaque.
- Carousel: exibicao rotativa de imagens de laboratorio/instalacoes.
- Section: wrapper padrao de secao com espaco vertical e container consistente.
- SectionTitle: titulo + subtitulo de secoes para consistencia tipografica.
- Card: base visual para variacoes de conteudo (projeto, pesquisa, destaque).
- ProfessorCard: foto, nome, funcao e botao para Lattes.
- ProjectCard: resumo do projeto, categoria, status e links.
- PageHeader: cabecalho interno de cada pagina com titulo e descricao.
- CTASection: chamada final para engajamento (contato, parceria, participacao).

---

## 6. Integracao com os dados dos professores

Dados existentes identificados:

- Arquivos de texto em professores/lattes: Aurea.txt, Cuevas.txt, Diana.txt.
- Fotos em professores/photos: Aurea.jpeg, Cuevas.jpeg, Diana.jpeg.

Formato atual dos .txt:

- Linha 1: nome.
- Linha 2: funcao.
- Linha 4: URL do Lattes com prefixo textual.

Estrategia recomendada:

1. Padronizar os dados em um arquivo unico em src/data/professores.js (ou professores.json).
2. Extrair manualmente os dados dos .txt para uma estrutura tipada e previsivel:

- id
- nome
- funcao
- lattesUrl
- foto

3. Referenciar as imagens por import no modulo de dados.
4. Consumir esse modulo na pagina Equipe para renderizar os ProfessorCard.

Justificativa:

- Evita parser em runtime no frontend para arquivos .txt.
- Facilita manutencao, internacionalizacao e escalabilidade futura.
- Mantem separacao clara entre conteudo e apresentacao.

Opcao futura:

- Criar pequeno script de pre-processamento (build-time) que converte .txt para JSON automaticamente, caso o numero de professores cresca.

---

## 7. Uso das imagens do repositorio

Assets encontrados no repositorio:

- laboratorio/ambiente: fotos do ambiente.
- laboratorio/carrossel: fotos para slider de instalacoes.
- professores/photos: fotos dos professores.
- logo: duas versoes de logo.

Plano de organizacao dentro de src/assets/images:

- laboratorio/: imagens institucionais gerais.
- ambiente/: imagens de infraestrutura.
- professores/: retratos da equipe.
- logo/: versao principal e alternativa da marca.

Boas praticas para assets:

- Renomear arquivos para padrao sem espacos (ex.: laboratorio-01.jpeg).
- Manter dimensoes consistentes para cards e carrossel.
- Otimizar tamanho (compressao) para desempenho.
- Definir texto alternativo (alt) descritivo para acessibilidade e SEO.

---

## 8. Implementacao do carrossel

Biblioteca sugerida: Embla Carousel React.

Motivos:

- Leve e performatica.
- Excelente controle de customizacao visual (setas, paginacao, autoplay).
- Integracao simples com React e Tailwind.
- Menor overhead para um site institucional estatico.

Planejamento funcional:

- Fonte dos slides em src/data/carouselImages.js.
- Exibicao responsiva com imagens otimizadas.
- Controles: proximo/anterior + indicadores.
- Autoplay opcional com pausa no hover.
- Acessibilidade: navegacao por teclado e labels nos controles.

---

## 9. Design System

Direcao visual institucional sugerida:

- Estilo moderno, tecnologico e confiavel, com foco em saude e inovacao.

Paleta de cores (exemplo inicial para Tailwind theme):

- Primaria: azul petroleo (#0F4C5C).
- Secundaria: ciano medico (#2C7DA0).
- Acento: verde saude (#2A9D8F).
- Neutros: cinza grafite (#1F2937), cinza claro (#F3F4F6), branco (#FFFFFF).

Tipografia:

- Titulos: Sora ou Manrope (forte presenca institucional).
- Texto corrido: Source Sans 3 (legibilidade alta).

Regras de espacamento:

- Base 4px (escala Tailwind).
- Secoes com padding vertical amplo (py-16 a py-24 em desktop).
- Largura maxima de conteudo centralizada (max-w-7xl).

Elementos de interface:

- Cantos levemente arredondados.
- Sombra suave em cards.
- Contraste alto para leitura.
- Microinteracoes discretas em hover/focus.

---

## 10. Responsividade

Estrategia com Tailwind:

- Mobile-first por padrao.
- Breakpoints padrao:
	- sm: mobile grande.
	- md: tablet.
	- lg/xl: desktop.

Praticas recomendadas:

- Navbar com menu hamburguer no mobile.
- Grids fluidos:
	- Equipe e projetos: 1 coluna no mobile, 2 no tablet, 3+ no desktop.
- Tipografia escalonada por breakpoint.
- Imagens com object-cover e alturas ajustadas por contexto.
- Testes em resolucoes comuns: 360px, 768px, 1024px, 1440px.

---

## 11. SEO basico

Checklist institucional:

- Title unico por pagina com nome do laboratorio e da UEA.
- Meta description contextual por rota.
- Open Graph basico para compartilhamento.
- Estrutura semantica correta:
	- um h1 por pagina
	- hierarquia h2/h3 consistente
	- uso de main, section, article, footer.
- Alt text descritivo em todas as imagens.
- URL amigavel e nomenclatura clara das rotas.
- Favicon e manifest basico.

Ferramenta sugerida:

- React Helmet Async para gerenciar metadados por pagina.

---

## 12. Etapas de implementacao

Roadmap sugerido:

1. Inicializar projeto com Vite + React e configurar Tailwind CSS.
2. Configurar React Router e criar layout base (MainLayout).
3. Definir tema visual no Tailwind (cores, fontes, espacamentos).
4. Organizar estrutura de pastas e migrar assets para src/assets/images.
5. Criar componentes globais: Navbar, Footer, Section, SectionTitle.
6. Construir pagina Home com Hero, destaques e carrossel.
7. Implementar paginas Sobre, Projetos, Pesquisa, Equipe e Contato.
8. Estruturar src/data/professores.js usando os dados dos .txt e fotos.
9. Integrar grid da equipe com ProfessorCard e links para Lattes.
10. Ajustar responsividade completa em todas as paginas.
11. Aplicar SEO basico com React Helmet Async.
12. Revisao final de acessibilidade, performance e consistencia visual.
13. Gerar build de producao e preparar deploy estatico.

---

## 13. Boas praticas

- Separar claramente dados (src/data) de interface (src/components e src/pages).
- Preferir componentes pequenos, com responsabilidade unica.
- Reutilizar blocos visuais por meio de componentes base (Section, Card, PageHeader).
- Evitar duplicacao de estilos; centralizar tokens no Tailwind theme.
- Padronizar nomes de arquivos e pastas (kebab-case para assets, PascalCase para componentes).
- Manter rotas e conteudo desacoplados para facilitar expansao futura.
- Validar acessibilidade minima (focus visivel, contraste, alt text, navegacao por teclado).
- Manter checklist de revisao antes do deploy: performance, links, SEO e consistencia responsiva.

