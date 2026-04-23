# Prompt para Claude Code — Projetos reais e LinkedIn

Voce realizara duas tarefas cirurgicas no repositorio: substituir os projetos ficticios pelos projetos reais do Health Tech UEA e adicionar o link do LinkedIn com icone no Footer.

Nao altere nada alem do que esta descrito aqui.

---

## Tarefa 1 — Substituir projetos em `src/data/projetos.js`

O arquivo atual `src/data/projetos.js` contem 6 projetos de exemplo ficticio. Substitua o conteudo completo do array pelo array abaixo com os 4 projetos reais do laboratorio:

```js
const projetos = [
  {
    id: 1,
    titulo: "CPA — Comissão Própria de Avaliação",
    categoria: "Engenharia de Software",
    status: "Em andamento",
    descricao:
      "Sistema para gestão de autoavaliação institucional (CPA), com autenticação integrada ao ecossistema UEA/Lyceum, criação de avaliações, aplicação por perfil e consolidação de respostas.",
    tecnologias: ["React", "Node.js", "PostgreSQL", "Lyceum API"],
  },
  {
    id: 2,
    titulo: "Dialog — Monitoramento Glicêmico",
    categoria: "Saúde Digital",
    status: "Em andamento",
    descricao:
      "Projeto financiado pela Samsung com foco no desenvolvimento de pesquisas na área de monitoramento de índices glicêmicos, voltado para o enfrentamento do diabetes no Brasil.",
    tecnologias: ["IoT", "Python", "React Native", "Samsung"],
  },
  {
    id: 3,
    titulo: "ProjuriUEA — Gestão de Processos Jurídicos",
    categoria: "Engenharia de Software",
    status: "Em andamento",
    descricao:
      "Sistema voltado para a melhoria da eficiência e organização na gestão de informações e prazos de processos judiciais e administrativos da procuradoria da UEA.",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 4,
    titulo: "Sentinela — Segurança Pública com IA",
    categoria: "Inteligência Artificial",
    status: "Em andamento",
    descricao:
      "Desenvolvido com investimentos da Cal-Comp via Lei de Informática, o Sentinela utiliza inteligência artificial para reconhecimento facial e identificação de placas de veículos, com foco em soluções para a segurança pública.",
    tecnologias: ["Python", "Computer Vision", "IA", "Cal-Comp"],
  },
];

export default projetos;
```

Reescreva o arquivo `src/data/projetos.js` com exatamente esse conteudo.

---

## Tarefa 2 — Adicionar icone e link do LinkedIn no Footer

O arquivo a editar e `src/components/layout/Footer.jsx`.

### 2a. Importar o icone Linkedin do lucide-react

Localize a linha de import dos icones do lucide-react:

```js
import { Mail, MapPin, ExternalLink } from "lucide-react";
```

Adicione `Linkedin` na mesma importacao:

```js
import { Mail, MapPin, ExternalLink, Linkedin } from "lucide-react";
```

### 2b. Adicionar o item de LinkedIn na lista de contatos

No bloco da coluna "Contato" do Footer, logo apos o item do link `uea.edu.br`, adicione mais um item `<li>` com o link do LinkedIn:

```jsx
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
```

Insira esse item imediatamente apos o `<li>` que contem o link `uea.edu.br`. Nao remova nenhum item existente.

---

## Validacao esperada

Apos as edicoes:

1. Confirme que `src/data/projetos.js` exporta exatamente 4 projetos reais.
2. Confirme que o Footer renderiza o link do LinkedIn com o icone `Linkedin` do lucide-react.
3. Execute `npm run build` e confirme que nao ha erros de compilacao.
4. Confirme que a pagina `/projetos` lista os 4 projetos reais (sem projetos ficticios).

---

## Restricoes

- Nao altere nenhum outro arquivo alem dos dois descritos acima.
- Nao altere o componente `ProjectCard`, a pagina `Projetos.jsx` nem o sistema de filtros.
- Nao mude a estrutura de dados do objeto de projeto (mantenha os campos: id, titulo, categoria, status, descricao, tecnologias).
