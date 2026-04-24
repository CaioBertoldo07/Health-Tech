# Prompt para Claude Code - Implementar correcoes CE-CPC

Voce e um agente de implementacao trabalhando neste repositorio React + Vite.

## Missao

Aplicar correcoes de conteudo, padronizacao e pequenos ajustes estruturais solicitados pela coordenacao do laboratorio.

## Regras obrigatorias

1. Nao alterar arquitetura, rotas, estado global ou logica de navegacao.
2. Nao fazer redesign amplo; manter identidade visual e responsividade.
3. Modificar apenas componentes, paginas e arquivos de dados necessarios.
4. Preservar estilo existente do codigo.
5. Evitar mudancas fora do escopo.
6. Ao final, rodar build e corrigir apenas erros introduzidos pelas alteracoes.

## Escopo de correcoes

### 1) Aba Inicio

- Trocar texto institucional principal:
  De: Laboratorio de Tecnologia em Saude
  Para: Centro de Pesquisa e Inovacao em Computacao Aplicada a Saude Digital (Health Tech Center)

- Na secao Por que Health Tech:
  remover o termo diagnostico e substituir por sugestao ou triagem.

- Na secao Instalacoes:
  remover duplicata da foto da copa ou substituir por outra imagem do laboratorio.

- Na secao Nossa Equipe:
  ajustar exibicao da foto da Profa. Dra. Diana Maria Camara de Carvalho (proporcao, recorte, qualidade).

- No rodape:
  trocar nomenclatura para:
  Centro de Pesquisa e Inovacao em Computacao Aplicada a Saude Digital

- No rodape e contato, explicitar unidade:
  Escola Superior de Tecnologia (EST) - Universidade do Estado do Amazonas.

### 2) Aba Sobre

- Revisar a Linha do tempo para consistencia textual e historica.
- Nao inventar eventos novos; apenas ajustar redacao para coerencia, caso necessario.

### 3) Aba Projetos

- Projeto Sentinela:
  manter a estrutura atual, mas deixar o status facil de atualizar (em andamento, concluido, pausado) no arquivo de dados.
- Nao criar logica complexa; apenas garantir clareza de manutencao.

### 4) Aba Pesquisa

- Simplificar linguagem muito tecnica para termos mais acessiveis ao publico geral.
- Exemplo: reduzir jargoes como padroes de interoperabilidade sem perder o sentido.

### 5) Aba Equipe

- Adicionar titulacao antes dos nomes dos professores (ex.: Profa. Dra.).
- Adicionar bio para cada professor abaixo do nome.
- Inserir bio inicial da Profa. Aurea com este conteudo:
  Coordenadora do curso de Engenharia de Computacao da EST-UEA
  Coordenadora do NIPNE/EST-UEA
  Coordenadora geral do Health Tech Center

  Areas de atuacao:
  - Inteligencia Artificial
  - Sistemas de recomendacao
  - Classificacao
  - Desenvolvimento de software
  - Banco de dados
  - Engenharia de dados
  - IoT e wearables
  - Acessibilidade e interacao humano-computador

- Verificar e corrigir hiperlinks de curriculo Lattes quebrados.

### 6) Aba Contato

- Substituir acao principal baseada em mailto por formulario funcional de contato.
- Solucao recomendada: EmailJS (simples, sem backend novo).
- Implementar estados de UX:
  - enviando
  - sucesso
  - erro

- Garantir bloco de contato padrao nas paginas relevantes com:
  - Entre em contato conosco
  - Email
  - Localizacao
  - Formulario

### 7) Padronizacao global

- Aplicar regra de capitalizacao em titulos:
  sentence case (apenas primeira palavra com inicial maiuscula), por exemplo:
  Como nos encontrar

## Arquivos provaveis para editar

- src/pages/Home.jsx
- src/pages/Sobre.jsx
- src/pages/Projetos.jsx
- src/pages/Pesquisa.jsx
- src/pages/Equipe.jsx
- src/pages/Contato.jsx
- src/components/layout/Footer.jsx
- src/components/common/ProfessorCard.jsx
- src/components/common/SectionTitle.jsx
- src/components/sections/Carousel.jsx
- src/data/professores.js
- src/data/projetos.js
- src/data/pesquisa.js
- src/data/carouselImages.js

Edite apenas os necessarios.

## Sequencia de trabalho exigida

1. Mapear strings antigas e pontos de contato.
2. Aplicar correcoes textuais e padronizacao.
3. Corrigir imagens e cards da equipe.
4. Implementar formulario de contato funcional sem quebrar design.
5. Rodar build e validacao final.
6. Entregar resumo por arquivo alterado.

## Formato da entrega

Forneca:

1. Lista de arquivos alterados com objetivo de cada alteracao.
2. Resumo das decisoes tecnicas (especialmente formulario de contato).
3. Checklist de aceite cobrindo:
   - nomenclatura
   - padronizacao de titulos
   - contato funcional
   - links Lattes
   - responsividade
   - build sem erro

## Restricoes finais

- Nao remover conteudo relevante sem substituicao apropriada.
- Nao introduzir dependencias desnecessarias.
- Nao alterar comportamento de navegacao.
- Manter o projeto pronto para deploy apos a implementacao.
