# Prompt para Claude Code - Implementacao do site institucional Health Tech UEA

Voce atuara como engenheiro frontend senior e implementara o site institucional estatico do laboratorio Health Tech da UEA, usando o planejamento do arquivo IMPLEMENTATION_PLAN.md como fonte de verdade.

## Objetivo

Implementar um site institucional moderno, responsivo, performatico e sem backend para apresentar:

- o laboratorio e sua identidade institucional
- projetos e frentes de pesquisa
- equipe de professores com link para Lattes
- canais de contato

Nao resuma, nao proponha apenas: implemente de fato o projeto completo no repositorio.

## Stack obrigatoria

- Vite
- React
- Tailwind CSS
- React Router DOM
- Site estatico (sem backend)

## Contexto do repositorio atual

Ja existem assets no repositorio:

- imagens do laboratorio
- imagens do ambiente
- imagens para carrossel
- logo do laboratorio
- fotos dos professores
- arquivos .txt dos professores (nome, funcao, Lattes)

Use esses assets reais na implementacao.

## Fonte de planejamento obrigatoria

Use como referencia principal o arquivo IMPLEMENTATION_PLAN.md e implemente aderente as 13 secoes descritas nele.

## Requisitos funcionais

Implemente as rotas:

- /
- /sobre
- /projetos
- /pesquisa
- /equipe
- /contato

Para cada rota:

- criar pagina React dedicada
- aplicar layout institucional consistente
- incluir secoes conforme o planejamento

## Requisitos de arquitetura

Criar estrutura de pastas profissional em src, incluindo:

- assets
- components
- data
- hooks
- layouts
- pages
- routes
- utils
- styles (se necessario)

Separar claramente:

- dados estaticos
- componentes de UI
- composicao de paginas

## Integracao dos dados de professores

Implementar estrategia robusta para os dados existentes em professores/lattes e professores/photos:

- criar fonte centralizada em src/data/professores.js (ou .json)
- mapear nome, funcao, link do Lattes e foto
- renderizar na pagina /equipe usando ProfessorCard

Evitar parsing runtime complexo de .txt no browser. Pode ser feito mapeamento manual inicial com base nos arquivos atuais.

## Assets e organizacao

- organizar imagens em src/assets/images por categoria
- padronizar nomes de arquivos para evitar espacos e inconsistencias
- usar imports locais no React
- garantir textos alternativos (alt) descritivos

## Carrossel

Implementar carrossel de instalacoes na Home usando biblioteca React adequada.

Preferencia:

- Embla Carousel React

Exigencias:

- navegacao por botoes anterior/proximo
- indicadores de slide
- comportamento responsivo
- acessibilidade minima (labels e navegacao por teclado)

## Design System

Aplicar design institucional moderno, com consistencia visual:

- configurar tokens no Tailwind (cores, tipografia, espacamento)
- evitar visual generico
- manter leitura e contraste bons
- criar componentes reutilizaveis para secoes e cards

## Responsividade

Implementar abordagem mobile-first com Tailwind:

- layout funcional em mobile, tablet e desktop
- navbar adaptativa (menu mobile)
- grids responsivos para equipe/projetos

## SEO basico

Implementar SEO on-page minimo:

- title por pagina
- meta description por pagina
- estrutura semantica correta (header/main/section/footer e hierarquia de headings)
- Open Graph basico

Pode usar react-helmet-async.

## Componentes reutilizaveis esperados

No minimo:

- Navbar
- Footer
- Hero
- Carousel
- Section
- SectionTitle
- Card base
- ProfessorCard
- ProjectCard
- PageHeader

## Qualidade e padrao de codigo

- manter codigo limpo e legivel
- evitar duplicacao
- manter responsabilidade unica por componente
- evitar arquivos monoliticos
- garantir nomenclatura consistente

## Entregaveis

Ao final, entregue:

1. Projeto Vite + React + Tailwind configurado e funcional
2. Rotas implementadas com React Router
3. Todas as paginas institucionais criadas
4. Dados de professores integrados com fotos e links Lattes
5. Carrossel funcional na Home
6. Layout responsivo completo
7. SEO basico aplicado
8. README atualizado com instrucoes de execucao e build

## Validacao obrigatoria antes de concluir

Execute e confirme:

1. instalacao de dependencias sem erro
2. build de producao sem erro
3. navegacao em todas as rotas sem tela quebrada
4. links dos professores funcionando
5. responsividade minima validada em mobile e desktop

## Forma de trabalho esperada

Siga este fluxo:

1. Inicializar/configurar stack
2. Estruturar pastas
3. Criar layout base
4. Criar componentes globais
5. Implementar paginas e rotas
6. Integrar dados reais e assets
7. Implementar carrossel
8. Ajustar responsividade
9. Aplicar SEO
10. Revisar, testar e finalizar

## Restricoes

- Nao criar backend
- Nao mudar a stack obrigatoria
- Nao ignorar o planejamento existente
- Nao parar no meio com apenas esqueleto

## Saida esperada do seu trabalho

Ao terminar, gere um resumo final objetivo contendo:

- estrutura de pastas criada
- bibliotecas adicionadas
- paginas implementadas
- componentes criados
- como os dados dos professores foram integrados
- resultado dos comandos de validacao (dev/build)
- observacoes finais de manutencao
