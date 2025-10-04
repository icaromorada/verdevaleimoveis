# Verde Vale Imóveis — Local development

Instruções rápidas para instalar e rodar o projeto localmente.

Requisitos: Node.js (>=18), npm.

Instalação

```powershell
npm install
```

Se houver conflito de peer deps (conflito com `@getmocha/vite-plugins` e Vite), use:

```powershell
npm install --legacy-peer-deps
```

Checagem rápida (TypeScript + build + wrangler dry-run):

```powershell
npm run check
```

Rodar em desenvolvimento:

```powershell
npm run dev
```

Correções recomendadas

- Rode `npm audit` e `npm audit fix` para corrigir vulnerabilidades.
- Substitua os stubs de tipos do worker por @cloudflare/workers-types quando integrar com produção.
## Verde Vale Imóveis

This app was created using https://getmocha.com.
Need help or want to join the community? Join our [Discord](https://discord.gg/shDEGBSe2d).

To run the devserver:
```
npm install
npm run dev
```
