Guia de deploy (Português)

Opções recomendadas: Vercel (grátis e simples para Next.js).

1) Criar repositório Git e subir para GitHub

  git init
  git add -A
  git commit -m "Initial commit"
  gh repo create <seu-usuario>/<seu-repo> --public --source=. --remote=origin
  git push -u origin main

2) Deploy automático via Vercel (recomendado)

- Acesse https://vercel.com e crie uma conta (ou entre com GitHub).
- Conecte o repositório GitHub ao Vercel (Import Project → selecione o repositório).
- Configure o framework (Vercel detecta Next.js automaticamente).
- Opcional: defina variáveis de ambiente no painel do projeto Vercel.

3) Deploy via GitHub Actions (arquivo já incluído)

- O workflow `.github/workflows/vercel-deploy.yml` faz build e chama a action do Vercel.
- Para funcionar, adicione os segredos no GitHub repo: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
  - `VERCEL_TOKEN`: crie em https://vercel.com/account/tokens (Personal Token).
  - `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`: pegue na URL do seu projeto Vercel ou em Project Settings → General → IDs.

Após configurar os segredos, cada push na branch `main` acionará o workflow e publicará no Vercel.

4) Deploy manual via Vercel CLI (alternativa)

  npm i -g vercel
  vercel login
  vercel --prod

  Manual (detalhado):

  - Instale o CLI do Vercel globalmente:

    npm i -g vercel

  - Faça login:

    vercel login

  - Primeiro deploy (irá guiar pela criação do projeto):

    vercel

    - Quando perguntado, escolha o escopo (pessoal ou org).
    - Para o diretório, confirme `.` (o root do projeto).
    - Para o framework, confirme `Next.js` se solicitado.
    - Quando questionar sobre linking a um projeto existente, responda `no` para criar novo (ou `yes` para linkar).

  - Deploy de produção:

    vercel --prod

  - Definir variáveis de ambiente via CLI (exemplo):

    vercel env add VARIABLE_NAME production

    Siga as instruções para inserir o valor e escolher o ambiente (production/preview/development).

  - Dicas:
    - Se já existir um projeto no Vercel, pegue `VERCEL_PROJECT_ID` e `VERCEL_ORG_ID` em Project Settings → General.
    - Para automações (CI), gere um `VERCEL_TOKEN` em https://vercel.com/account/tokens.


5) Alternativa: Netlify

- Você pode usar Netlify conectando o repositório ou usando o Netlify CLI. Para Next.js, use a integração oficial (Netlify Next.js plugin).

Se quiser, posso:
- criar o repositório no GitHub (preciso de permissão e token),
- configurar o deploy automático no Vercel (precisa de token),
- ou ajustar o workflow para Netlify/Render conforme preferir.
