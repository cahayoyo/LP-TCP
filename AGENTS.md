# AGENTS.md — LP-TCP

Landing page for PT. Tri Cipta Patriot (Water Treatment Plant Specialist).
Astro 7 SSR (`output: 'server'`, `@astrojs/node` standalone) on Node 24 LTS, contact form persisted to PostgreSQL. Single page, content hardcoded — no CMS.

Setup, local dev, Dokploy deploy steps, and known limitations: `README.md`.

## Hard rules

- Never commit or push without an explicit instruction from the user. The user commits on demand.
- Commit messages in English, Conventional Commits (`feat:`, `fix:`, `chore:`).
- Site copy and data live in `src/data/site.ts` — edit copy there. Exception: hero copy is inline in `index.astro`.
- Site text in Indonesian; code comments in Indonesian, one line, only for the "why"; code identifiers and docs in English.

## Conventions

- Secrets through `astro:env` (schema in `astro.config.ts`, consumed via `import { DATABASE_URL } from 'astro:env/server'`). Do not read app config from `process.env` — Astro dev does not load `.env` into it.
- Styling: plain CSS in `src/styles/global.css`, design tokens in `:root`, no CSS framework. Icons: inline stroke SVGs, no icon library.
- Image staging folder `assets-in/` (gitignored). Production images go to `src/assets/` and render through `astro:assets` `<Image>`; unoptimized files (favicons, misc) in `public/`. Import assets in code, never hard-code `/src/...` URLs.
- The `contact_messages` table is created at runtime by `ensureSchema()` in `src/lib/contact.ts`; `db/schema.sql` is its mirror. Change both together.
- Form protections: server-side validation + honeypot field `website` (filled honeypot = silently accepted, nothing stored). No CSRF token, no rate limit yet.
- Key breakpoints: 992px (hero switches mobile/tablet layout), 640px, 480px.

## Verify after changes

1. `npm run build` must pass.
2. When form/DB code changed: local Postgres runs in container `tcp-pg` (host port 55432; 5432 is taken by another container on this machine). `.env` already points there. Then:
   ```bash
   curl -X POST http://localhost:4321/ \
     --data-urlencode "name=Test" \
     --data-urlencode "email=test@example.com" \
     --data-urlencode "message=pesan minimal sepuluh karakter"
   ```
   Expect `303` redirect to `/?terkirim=1#kontak` and a new row in `contact_messages`
   (`docker exec tcp-pg psql -U postgres -d tcp -c "select * from contact_messages;"`).
   Invalid email → `303` to `/?gagal=1#kontak`.
3. `/api/health` returns `ok` (used as Dokploy healthcheck path).

## Gotchas

- Astro 7 requires Node >= 22.23.4. Dokploy's Nixpacks defaults to Node 18 — always deploy via the `Dockerfile` build type, never Nixpacks.
- The runtime image keeps the `astro` packages, so it is ~436 MB — expected, do not "optimize" it away without a plan.
- A long-running `npm run dev` can serve stale CSS after many HMR updates. If edits stop appearing, restart the dev server before debugging anything else.
- The local Postgres container `tcp-pg` and the dev server are background processes the user may rely on between turns — leave them running unless asked.
