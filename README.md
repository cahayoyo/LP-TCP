# Landing Page — PT. Tri Cipta Patriot

Astro 7 (SSR) on Node 24 with a Postgres-backed contact form. Single landing page, no CMS.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 7.4, `output: 'server'`, `@astrojs/node` standalone |
| Runtime | Node 24 LTS (`node:24-alpine`) |
| Language | TypeScript (including `astro.config.ts`) |
| Database | PostgreSQL via `postgres` (postgres.js) |
| Deploy | Dockerfile on Dokploy |

## Structure

```
astro.config.ts       config (TypeScript)
db/schema.sql         table definition (also created at runtime)
src/data/site.ts      ALL hardcoded content: copy, services, projects, contact details
src/lib/contact.ts    validation + insert into Postgres
src/pages/index.astro main page and POST handler for the contact form
src/pages/api/health.ts  healthcheck for Dokploy
src/layouts/          Base layout
src/components/       Header, Footer
src/styles/global.css single stylesheet, no CSS framework
public/img/           project photos and illustrations
Dockerfile            multi-stage build
```

## Local development

```bash
cp .env.example .env      # set DATABASE_URL
npm install
npm run dev               # http://localhost:4321
```

A local Postgres is required. With Docker:

```bash
docker run -d --name tcp-pg \
  -e POSTGRES_PASSWORD=dev -e POSTGRES_DB=tcp \
  -p 5432:5432 postgres:17-alpine
# DATABASE_URL=postgres://postgres:dev@localhost:5432/tcp
```

The `contact_messages` table is created automatically on the first submission. To create it manually:

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

## Deploying on Dokploy

1. **Database**: Add Service → Database → PostgreSQL. Note the user, password and database name.
2. **Application**: point it at this repository, Build Type **Dockerfile**, exposed port **4321**.
3. Environment variables:
   ```
   DATABASE_URL=postgres://user:password@<postgres-service-name>:5432/<database>
   ```
   The Postgres service name is the hostname inside Dokploy's internal network. Never expose the database port publicly.
4. **Domain**: add it under the Domains tab; Dokploy handles TLS.
5. **Healthcheck path**: `/api/health`.

Build and run locally:

```bash
docker build -t lp-tcp .
docker run -p 4321:4321 -e DATABASE_URL=... lp-tcp
```

## Before go-live

- [ ] Replace the placeholder email, phone and address in `src/data/site.ts`
- [ ] Replace `public/img/proyek-1.svg` and the other illustrations with real photos, then update `image` / `alt` / `meta` in `site.ts`
- [ ] Set `site` in `astro.config.ts` once the domain is purchased (needed for canonical and OG tags)
- [ ] Replace the placeholder project copy in `site.ts`
- [ ] Add a sitemap integration after the domain is live

## Known limitations

- No rate limiting or captcha. Spam is only mitigated by a honeypot field (`website`). Add rate limiting if spam appears.
- No CSRF token. The form only accepts form-urlencoded POSTs on the same origin, which is low risk for a public form with no sensitive action.
- The Docker image is roughly 436 MB because the runtime still needs the `astro` packages. It can be reduced later by bundling the server entry separately.
- Content is hardcoded. Editing copy requires a redeploy; a CMS would be needed otherwise.
