# Landing Page - PT. Tri Cipta Patriot

Production landing page built for fast delivery of an image-heavy portfolio.

## Technology stack

| Layer | Technology |
|---|---|
| Framework | Astro 7.4 |
| Rendering | Prerendered homepage + standalone Node SSR endpoints |
| Runtime | Node 24 LTS on Alpine Linux |
| Language | TypeScript and Astro components |
| Styling | Plain CSS with design tokens; no CSS framework |
| Images | `astro:assets`, responsive `srcset`, WebP output |
| Documents | PDF.js, dynamically imported on demand |
| Container | Multi-stage Docker build, non-root runtime |
| Delivery | GitHub Actions → GHCR → Dokploy → Cloudflare |

## Technical highlights

- Homepage HTML and responsive images are generated at build time.
- CSS is inlined to remove a render-blocking stylesheet request.
- Hero media is prioritized; below-the-fold media is lazy-loaded.
- Google Maps and PDF.js load only after user interaction.
- No client UI framework or hydration runtime.
- Canonical metadata, Open Graph, Twitter cards, sitemap, and linked
  `Organization` + `WebSite` JSON-LD are included.
- `/api/health` returns an uncached `200 ok` for Dokploy health checks.

## Development

Requires Node `>=22.23.4`; Node 24 LTS matches production.

```bash
npm ci
npm run dev
```

Production check:

```bash
npm run build
npm start
curl http://localhost:4321/api/health
```

## Release flow

| Branch | Behavior |
|---|---|
| `development` | Default work branch; no deployment |
| `main` | Builds and pushes the Docker image, then triggers Dokploy |

Production image: `ghcr.io/cahayoyo/lp-tcp:latest`.
