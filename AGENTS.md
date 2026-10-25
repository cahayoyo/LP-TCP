# AGENTS.md — LP-TCP

Landing page for PT. Tri Cipta Patriot (Water Treatment Plant Specialist).
Astro 7 SSR (`output: 'server'`, `@astrojs/node` standalone) on Node 24 LTS. Single page, content hardcoded — no CMS, no database.

## Branch workflow

- Default work branch is `development`. Commit and push there first.
- `main` is production. Only merge/push to `main` when the user explicitly asks to deploy.
- CI (GitHub Actions) builds the Docker image only on pushes to `main` and triggers the Dokploy redeploy webhook — pushes to `development` never build or deploy anything.

## Hard rules

- Never commit or push without an explicit instruction from the user. The user commits on demand.
- Commit messages in English, Conventional Commits (`feat:`, `fix:`, `chore:`).
- Site copy and data live in `src/data/site.ts` — edit copy there. Exception: hero copy is inline in `index.astro`.
- Site text in Indonesian; code comments in Indonesian, one line, only for the "why"; code identifiers and docs in English.

## Conventions

- Styling: plain CSS in `src/styles/global.css`, design tokens in `:root`, no CSS framework. Icons: inline stroke SVGs, no icon library.
- Images: responsive images are enabled globally (`image.layout = 'constrained'` in `astro.config.ts`) — never disable it; it is what keeps mobile payload small. Image staging folder `assets-in/` (gitignored). Production images go to `src/assets/` and render through `astro:assets` `<Image>`; unoptimized files (favicons, misc) in `public/`. Import assets in code, never hard-code `/src/...` URLs.
- Key breakpoints: 992px (hero switches mobile/tablet layout), 640px, 480px.

## Verify after changes

1. `npm run build` must pass.
2. `/api/health` returns `ok` (used as the Dokploy healthcheck path).

## Deployment

Push to `main` → GitHub Actions builds and pushes `ghcr.io/cahayoyo/lp-tcp:latest` to GHCR → workflow calls the Dokploy redeploy webhook (repo secret `DOKPLOY_WEBHOOK_URL`) → VPS pulls and restarts. Domain: `triciptapatriot.com`, behind Cloudflare (SSL mode Full strict).

## Gotchas

- Astro 7 requires Node >= 22.23.4. Dokploy's Nixpacks defaults to Node 18 — always deploy via the prebuilt Docker image, never Nixpacks.
- The runtime image keeps the `astro` packages, so it is ~436 MB — expected, do not "optimize" it away without a plan.
- A long-running `npm run dev` can serve stale CSS after many HMR updates. If edits stop appearing, restart the dev server before debugging anything else.
- Background processes the user may rely on between turns: the local dev server on port 4321 — leave it running unless asked.
