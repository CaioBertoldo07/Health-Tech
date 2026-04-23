# Prompt para Claude Code — Formulário de contato real com Web3Forms

Voce integrara o formulario de contato da pagina `src/pages/Contato.jsx` com o servico **Web3Forms** para que as mensagens sejam enviadas de verdade por e-mail, sem necessidade de backend.

Nao altere nenhum outro arquivo alem dos descritos abaixo.

---

## Por que Web3Forms

- Gratuito, sem necessidade de cadastro para testar
- Funciona 100% em sites estaticos (Vite/React sem backend)
- Nao redireciona o usuario para outra pagina apos o envio
- Suporta envio via `fetch` com JSON

---

## Passo 1 — Obter a Access Key

O Web3Forms exige uma access key vinculada ao e-mail de destino.

1. Acesse https://web3forms.com
2. Digite o e-mail `healthtech@uea.edu.br` e clique em "Create Access Key"
3. A access key sera enviada para esse e-mail
4. Copie a access key recebida

Guarde a access key. Ela sera usada no passo seguinte.

---

## Passo 2 — Criar variavel de ambiente

Crie (ou edite) o arquivo `.env` na raiz do projeto e adicione:

```
VITE_WEB3FORMS_KEY=SUA_ACCESS_KEY_AQUI
```

Substitua `SUA_ACCESS_KEY_AQUI` pela access key obtida no Passo 1.

Verifique se `.env` esta listado no `.gitignore`. Se nao estiver, adicione a linha `.env` ao `.gitignore` para nao expor a chave no repositorio.

---

## Passo 3 — Reescrever o formulario em `src/pages/Contato.jsx`

Substitua toda a implementacao atual do `<form>` (que usa `window.location.href = mailto:...`) pela implementacao abaixo, que usa `fetch` para a API do Web3Forms.

### Campos que devem existir no formulario (ja existem, mantenha os mesmos)

- nome (text, required)
- email (email, required)
- assunto (text, required)
- mensagem (textarea, required)

### Logica de estado a adicionar

No topo do componente `Contato`, adicione os seguintes estados com `useState`:

```js
const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
```

### Handler `onSubmit` a substituir

Substitua o `onSubmit` atual por este:

```js
async (e) => {
  e.preventDefault();
  setStatus("loading");

  const formData = {
    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
    name: e.target.nome.value,
    email: e.target.email.value,
    subject: e.target.assunto.value,
    message: e.target.mensagem.value,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};
```

### Botao de envio — substituir pelo bloco abaixo

```jsx
<button
  type="submit"
  disabled={status === "loading"}
  className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
>
  {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
</button>
```

### Feedback abaixo do botao — substituir o `<p>` atual pelo bloco abaixo

```jsx
{
  status === "success" && (
    <p className="text-sm text-green-600 text-center mt-3 font-medium">
      Mensagem enviada com sucesso! Retornaremos em breve.
    </p>
  );
}
{
  status === "error" && (
    <p className="text-sm text-red-500 text-center mt-3 font-medium">
      Erro ao enviar. Tente novamente ou use o e-mail healthtech@uea.edu.br
    </p>
  );
}
{
  status === "idle" && (
    <p className="text-xs text-gray-400 mt-3 text-center">
      Sua mensagem sera enviada diretamente para nossa equipe.
    </p>
  );
}
```

---

## Validacao esperada

1. Confirme que `.env` foi criado com a variavel `VITE_WEB3FORMS_KEY`
2. Confirme que `.env` esta no `.gitignore`
3. Execute `npm run dev` e acesse `/contato`
4. Preencha o formulario e envie — o status deve mudar para "Enviando..." e depois "Mensagem enviada com sucesso!"
5. Confirme que o e-mail chegou em `healthtech@uea.edu.br`
6. Execute `npm run build` sem erros

---

## Restricoes

- Nao altere o visual/layout do formulario nem os campos existentes
- Nao instale nenhuma biblioteca nova (Web3Forms nao precisa de pacote npm)
- Nao altere nenhum outro arquivo alem de `src/pages/Contato.jsx`, `.env` e `.gitignore`
