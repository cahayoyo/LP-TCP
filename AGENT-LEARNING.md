# AGENT-LEARNING.md

Lessons from mistakes the AI agent made repeatedly in this repo, with the fixes.
When a similar problem appears again, check this file first. Append new entries at the bottom.

## 1. CSS `aspect-ratio` silently ignored on `astro:assets` `<Image>`

**Symptoms.**

- Every change to `aspect-ratio` (16/10 → 17/5 → 9/2 → 6/1) had no visible effect.
- The image rendered with the photo's intrinsic height instead: oval cards looked
  too tall / portrait, no matter what the stylesheet said.
- Multiple fix iterations were wasted chasing the ratio value before checking
  whether the rule was applied at all.

**Root cause.**

Astro's `<Image>` emits both `width` and `height` HTML attributes on the `<img>`
(e.g. `width="900" height="600"`). A CSS `width: 100%` overrides the width
attribute, but the `height` attribute stays active as a presentational hint.
`aspect-ratio` only computes height when height is `auto` — the attribute makes
height non-auto, so the rule is dead code:

```html
<!-- rendered -->
<img src="..." width="900" height="600" class="ipa-card__img" ...>
```

```css
/* broken: aspect-ratio ignored because height attr wins */
.ipa-card__img {
  width: 100%;
  aspect-ratio: 12 / 5;
}
```

**Fix.** Add `height: auto` so the attribute hint is overridden and
`aspect-ratio` takes over:

```css
.ipa-card__img {
  width: 100%;
  height: auto; /* required: astro:assets emits a height attr that beats aspect-ratio */
  aspect-ratio: 12 / 5;
  object-fit: cover;
}
```

**How to catch it fast.** Don't iterate blind on CSS values. When a visual size
bug resists two fixes, inspect the rendered HTML instead of guessing:

```bash
curl -s http://localhost:4321/ | grep -o '<img[^>]*class="ipa-card__img"[^>]*>'
```

**General rule.** With `astro:assets` `<Image>`, any `<img>` whose width is set
via CSS but whose height should come from CSS `aspect-ratio` also needs
`height: auto` in that same rule.

## 2. In-page PDF viewer gets hijacked by Internet Download Manager (IDM)

**Symptoms.**

- "Brosur TCP" button opened a dialog with an `<iframe src="...pdf">`; on the
  user's machine the modal stayed blank/white and the browser/IDM showed a
  download prompt instead of rendering.
- Directly opening the PDF URL in the address bar also forced a download.
- After disguising the URL (`/api/brosur`, no `.pdf`) and content-type
  (`application/octet-stream`), the fetch was still hijacked — DevTools
  Network tab showed `204 Intercepted by the IDM Advanced Integration`.

**Root cause.**

- IDM's "advanced browser integration" hooks the browser at the network level
  and sniffs **response bytes** (the `%PDF` magic at offset 0), not just the
  URL extension or `Content-Type`. Any response containing recognizable file
  magic gets canceled and redirected to IDM. Server-side header tricks cannot
  bypass it.
- Separately, browsers with "Download PDFs" enabled never render PDFs in
  iframes/embeds, so iframe-based PDF display is unreliable for an unknown
  audience anyway.

**Fix.**

1. Render the PDF ourselves with **PDF.js → `<canvas>`** (`pdfjs-dist`,
   bundled locally as a lazy chunk via `import('pdfjs-dist')`, worker URL via
   `?url` import — NOT from a CDN). No network PDF request a download manager
   can show a prompt for.
2. The 5 MB PDF is served by `src/pages/api/brosur.ts`, which **XOR-encodes**
   every byte (key `0x5a`) so the response contains no `%PDF` magic and IDM
   skips it. The client XOR-decodes the same way (XOR is symmetric) and passes
   the bytes to PDF.js as raw data: `getDocument({ data })` — pdf.js only
   needs bytes, not a `.pdf` URL or content-type.
3. Source of truth stays `public/pdf/brosur-tcp.pdf`; the endpoint reads it
   from `dist/client/` (runtime) or `public/` (dev).

**How to catch it fast.** When a fetch "fails" only on the user's machine,
ask for the DevTools Network entry instead of guessing headers: the status
line literally said `204 Intercepted by the IDM Advanced Integration` — a
hijack, not an HTTP error. Blank modal + download prompt on every variant of
URL/content-type means byte-level sniffing; mangle the bytes end-to-end.

**General rules.**

- Never display PDFs to end users via `<iframe>`/`<embed>` — browser PDF
  settings and download-manager extensions (IDM is common in Indonesia) turn
  them into download prompts. Use PDF.js canvas rendering.
- A download-manager-safe response must contain no recognizable file magic —
  transform the bytes server-side and decode client-side when the format
  parser (like pdf.js) accepts raw data.
