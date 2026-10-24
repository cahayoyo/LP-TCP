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
