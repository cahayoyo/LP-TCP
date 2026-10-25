# Landing Page — PT. Tri Cipta Patriot

Astro 7 (SSR) on Node 24. Single landing page, no CMS, no database.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 7.4, `output: 'server'`, `@astrojs/node` standalone |
| Runtime | Node 24 LTS (`node:24-alpine`) |
| Language | TypeScript (including `astro.config.ts`) |
| Deploy | GitHub Actions → GHCR image → Dokploy (Docker source) |

## Structure

```
astro.config.ts       config (TypeScript)
src/data/site.ts      ALL hardcoded content: copy, services, projects, contact details
src/pages/index.astro main page
src/pages/api/health.ts  healthcheck for Dokploy
src/layouts/          Base layout
src/components/       Header, Footer, ProjectCard
src/styles/global.css single stylesheet, no CSS framework
Dockerfile            multi-stage build
```

## Local development

```bash
npm install
npm run dev               # http://localhost:4321
```

## Deployment

CI/CD chain: push to `main` → GitHub Actions builds the Docker image and
pushes it to `ghcr.io/<owner>/<repo>:latest` → workflow calls the Dokploy
redeploy webhook → the VPS pulls the new image and restarts the container.

One-time setup on the VPS (Dokploy):

1. Application → source **Docker** → image `ghcr.io/cahayoyo/lp-tcp:latest`.
2. Registry credentials only if the repository is private (classic PAT with
   `read:packages`).
3. Healthcheck path `/api/health`, port `4321`.
4. Domain under the Domains tab; Dokploy handles TLS (Let's Encrypt).
5. Copy the **redeploy** webhook URL (Advanced → Webhook) into the GitHub
   repo secret `DOKPLOY_WEBHOOK_URL`.

Build and run locally:

```bash
docker build -t lp-tcp .
docker run -p 4321:4321 lp-tcp
```

## Before go-live

- [ ] Set `site` in `astro.config.ts` (needed for canonical and OG tags)
- [ ] Replace the `#` placeholder social URLs in `src/data/site.ts`

## Known limitations

- The Docker image is roughly 436 MB because the runtime still needs the `astro` packages. It can be reduced later by bundling the server entry separately.
- Content is hardcoded. Editing copy requires a redeploy; a CMS would be needed otherwise.
