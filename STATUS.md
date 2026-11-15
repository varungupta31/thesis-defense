# Status

**Phase:** 2 — Asset audit done (`assets.md`); next: style sampler
**Updated:** 2026-11-15

## Phases

1. [x] Outline — Varun fills Role / Takeaway / Visual per slide
2. [x] Asset audit — list have/need in `assets.md`, decide what to make
3. [ ] Style sampler — 3 slides × 2–3 directions, pick one
4. [ ] Engine — nav, reveals, notes, grid, PDF export
5. [ ] Build — section by section, review in browser
6. [ ] Rehearse — timing, mock Q&A, PDF backup

## Next

- Varun: fill `need` rows in `assets.md` (collaborator photos, CueCAN diagram source, table numbers). Check Ch3 'GradCAM' and Tasks VSR vs MixedSignals.
- Agent: style sampler; compress videos, GIF→MP4 (needs `brew reinstall ffmpeg`).

## Open questions

- Stack: single-file HTML (recommended) vs React+Vite vs reveal.js?

## Ideas (parked)

- Animated architecture diagrams: SVG redraw + GSAP, keypress-stepped (reversible). Limit to 2–4 key diagrams.
- Image → patches → encoder sequence: grid draws, tiles split, fly into token row, pos-emb fade, into encoder, output out.
- Stop-motion feel: patches assembling "like art" (staggered, slightly jittery tile arrival) to add life. Varun likes this.
- Agent can build proof-of-concept of patch animation with placeholder image when asked.

## Decisions

| Date | Decision | Why |
|---|---|---|
| 2026-11-15 | Outline in Markdown, not Sheets | Git-diffable, any agent reads it locally, no connector needed |
| 2026-11-15 | Media via Git LFS | GIFs/videos bloat normal git history |
| 2026-11-15 | Repo is public, thesis PDF + all media included | Varun's call: git = copy mechanism to office laptop |
