# lp_decodev

Landing page / frontend em Vue 3 com Vite e Tailwind CSS 4.

## Tecnologias

| Área | Stack |
|------|--------|
| Framework | [Vue 3](https://vuejs.org/) |
| Build | [Vite 6](https://vite.dev/) |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| Estado | [Pinia](https://pinia.vuejs.org/) |
| Rotas | [Vue Router 4](https://router.vuejs.org/) |
| i18n | [Vue I18n](https://vue-i18n.intlify.dev/) |
| HTTP | [Axios](https://axios-http.com/) |
| Animações | [AOS](https://michalsnik.github.io/aos/) |
| Qualidade | ESLint 9, Prettier, Husky, lint-staged |

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (vem com o Node)

## Como rodar

Na raiz do projeto:

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Sobe o servidor de desenvolvimento (modo `dev`). O script também executa `lint:fix` antes.

Para usar o modo `prod` no Vite (útil para testar variáveis de ambiente de produção):

```bash
npm run dev:prod
```

### Build e preview

```bash
npm run build
npm run preview
```

`preview` serve a pasta `dist` gerada pelo build.

### Lint

```bash
npm run lint
npm run lint:fix
```

## Variáveis de ambiente

O Vite carrega arquivos `.env`, `.env.local`, `.env.[mode]` e `.env.[mode].local` conforme o modo (`dev` ou `prod`).

Variáveis usadas no `vite.config.js` (prefixo `VITE_` expõe ao cliente quando necessário):

| Variável | Descrição |
|----------|-----------|
| `VITE_FANPAGE_API_URL` | URL da API da fanpage |
| `VITE_API_BASE_ENV` | Ambiente base da API |

Crie, por exemplo, `.env.dev` e `.env.prod` na raiz com os valores adequados para o seu ambiente.
