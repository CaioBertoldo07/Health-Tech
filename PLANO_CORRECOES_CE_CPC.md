# Plano de implementacao - Correcoes CE-CPC

## Objetivo

Aplicar correcoes de conteudo, padronizacao visual e pequenos ajustes estruturais no site institucional, sem alterar arquitetura, navegacao, identidade visual ou responsividade.

## Escopo

- Ajustes textuais na Home, Pesquisa, Footer e Contato.
- Correcao de consistencia de capitalizacao de titulos.
- Ajustes de imagens (duplicata de instalacoes e foto da Profa. Diana).
- Atualizacao da pagina Equipe (titulos, bios e links Lattes).
- Unificacao do padrao visual da secao de contato.
- Substituicao de fluxo mailto por formulario funcional de envio.

## Fora de escopo

- Refatoracao de arquitetura.
- Mudanca de stack.
- Mudanca de rotas.
- Mudancas grandes de design.

## Fase 1 - Conteudo e padronizacao

Arquivos-alvo provaveis:

- src/pages/Home.jsx
- src/components/layout/Footer.jsx
- src/pages/Pesquisa.jsx
- src/pages/Contato.jsx
- src/components/common/SectionTitle.jsx (se a regra de capitalizacao estiver centralizada)
- src/data/pesquisa.js

Tarefas:

1. Trocar nome antigo do laboratorio por:
   Centro de Pesquisa e Inovacao em Computacao Aplicada a Saude Digital (Health Tech Center)
   Onde solicitado no inicio.
2. No rodape, usar:
   Centro de Pesquisa e Inovacao em Computacao Aplicada a Saude Digital
3. Remover termo diagnostico da secao Por que Health Tech e substituir por sugestao ou triagem.
4. Simplificar textos tecnicos na aba Pesquisa para linguagem acessivel.
5. Padronizar capitalizacao de titulos para sentence case:
   Apenas a primeira palavra com inicial maiuscula (ex.: Como nos encontrar).

Criterio de aceite:

- Nenhum texto com a nomenclatura antiga nas areas afetadas.
- Nenhum uso do termo diagnostico na proposta de valor.
- Titulos consistentes no padrao definido.

## Fase 2 - Ajustes visuais

Arquivos-alvo provaveis:

- src/data/carouselImages.js
- src/components/sections/Carousel.jsx
- src/assets/images/ambiente/\*
- src/assets/images/professores/\*
- src/components/common/ProfessorCard.jsx

Tarefas:

1. Remover ou substituir foto duplicada da copa na secao Instalacoes.
2. Ajustar exibicao da foto da Profa. Dra. Diana (proporcao, crop ou resolucao), sem distorcer.

Criterio de aceite:

- Nao existe duplicidade visual evidente da copa.
- Foto da Profa. Diana sem deformacao e com enquadramento consistente.

## Fase 3 - Equipe

Arquivos-alvo provaveis:

- src/pages/Equipe.jsx
- src/components/common/ProfessorCard.jsx
- src/data/professores.js
- src/professores/lattes/\*.txt (se usados como fonte)

Tarefas:

1. Inserir titulacao antes dos nomes dos professores (ex.: Profa. Dra.).
2. Adicionar bio para cada professor abaixo do nome.
3. Inserir bio inicial completa da Profa. Aurea com cargos e areas de atuacao.
4. Validar e corrigir links de curriculo Lattes quebrados.

Criterio de aceite:

- Todos os professores com nome titulado e bio visivel.
- Link Lattes funcional para cada card.

## Fase 4 - Contato

Arquivos-alvo provaveis:

- src/pages/Contato.jsx
- src/components/common/CTASection.jsx (se reutilizado)
- src/components/layout/Footer.jsx
- src/pages/Home.jsx (se houver bloco de contato)

Tarefas:

1. Incluir unidade completa:
   Escola Superior de Tecnologia (EST) - Universidade do Estado do Amazonas.
2. Substituir mailto por formulario funcional.
3. Padronizar layout de contato entre as paginas com:
   - Entre em contato conosco
   - Email
   - Localizacao
   - Formulario

Criterio de aceite:

- Nao ha acao principal de contato baseada apenas em mailto.
- Layout de contato consistente nas telas em que aparece.

## Implementacao recomendada de formulario

Opcao A (rapida): FormSubmit.
Opcao B (boa UX sem backend): EmailJS.
Opcao C (controle total): endpoint proprio com Nodemailer.

Recomendacao:

- Implementar EmailJS por simplicidade, sem alterar arquitetura.
- Usar variaveis de ambiente para chaves.
- Exibir feedback de envio: carregando, sucesso e erro.

## Estrategia de commit

1. chore(content): padronizacao textual e nomenclatura institucional
2. fix(ui): ajustes de instalacoes e imagem da professora
3. feat(team): titulacao, bios e links lattes
4. feat(contact): formulario funcional e padrao visual unificado

## Validacao final

- Build local sem erros.
- Navegacao entre rotas intacta.
- Responsividade validada em mobile e desktop.
- Revisao visual rapida por pagina: Inicio, Sobre, Projetos, Pesquisa, Equipe, Contato.
- Conferencia final de ortografia e capitalizacao.
