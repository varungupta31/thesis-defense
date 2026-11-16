# Status

**Phase:** Media pass 1 done: paper figures and short videos wired into 22 slots. Next: Varun's calls on the open media decisions
**Updated:** 2026-11-15

## Phases

1. [x] Outline — Varun fills Role / Takeaway / Visual per slide
2. [x] Asset audit — list have/need in `assets.md`, decide what to make
2b. [ ] Content lock — v0 text in `deck/index.html`, media as written captions (in progress)
3. [ ] Style sampler — 3 slides × 2–3 directions, pick one
4. [~] Engine — v0 done: nav, hash links, progress bar, notes (N), overview (O), print to PDF, overflow flag. Still to do: reveals, presenter view
5. [ ] Build — section by section, review in browser
6. [ ] Rehearse — timing, mock Q&A, PDF backup

## Next

- Varun: read the deck (open `deck/index.html`, press O for overview), edit text in place, answer the `// 💬` comments.
- Then: media one at a time, replacing each `[Axx]` caption with the real thing.
- Agent: style sampler after content lock; compress videos, GIF→MP4 (ffmpeg needed on this Windows machine).
- Varun: fill `need` rows in `assets.md` (collaborator photos, CueCAN diagram source).

## Open questions

- `// 💬` comments in `deck/index.html`: S02 Subhashini photo, S42 summary (agent-written), S44 where Video-Index names VELOCITI, S45 equal-contribution mark, S46 artifact links, S47 juniors mapping (5 names, 4 descriptions).
- OTaT "bird green": no asset with the bird here; using #23874b as a placeholder. Need the logo or hex.
- 48 main slides for 45 min is over budget; flow notes from 2026-11-16 session suggest ~32.

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
| 2026-11-15 | Stack: single HTML file + `engine.js` + `style.css`, no build, no CDN | Opens by double-click offline; nothing to break on defense day |
| 2026-11-15 | Slide content as a markdown block inside `deck/index.html` | Varun edits text without touching code; `<script>` block works over file:// where fetch() would not |
| 2026-11-15 | Content source moves from `outline.md` to `deck/index.html` | One place to edit; outline kept as the original plan |
| 2026-11-15 | Media shown as `[Axx]` captions describing the intended visual | Lock content first, then build media one at a time |
| 2026-11-15 | v0 style is neutral placeholder | Real direction comes from the style sampler after content lock |
| 2026-11-16 | Chapter accents: CueCAn orange #d9650f, VELOCITI velo blue #2b6bef (from `velo_man.ico`), OTaT green #23874b (placeholder) | Varun's call; white page, only accents change. Intro and summary stay neutral slate |
| 2026-11-16 | Close: Summary, Publications, Artifacts, Thank you / Questions, credits roll (dark), IIIT logo card | Movie ending Varun asked for; credits roll moves to the logo card by itself |
| 2026-11-16 | Credits roles taken from the thesis acknowledgments, in his words | Inferred roles, no invented detail |
| 2026-11-16 | Palette: CueCAn purple #8240c4 (was orange), VELOCITI blue #2b6bef, OTaT olive #7f8726 (bird3.png #969a3e, darkened for text) | Orange + green read as the Indian tricolour |
| 2026-11-16 | Figures come from arXiv sources, rendered with PyMuPDF; videos re-encoded H.264 ≤1600w, no audio, via imageio-ffmpeg in a scratch venv | Paper-quality figures without screenshots; small files; no system installs |
| 2026-11-16 | Videos play only on the current slide | Smooth playback with ~15 videos in one page |
| 2026-11-16 | Title slide centred, name larger, logo bottom right, thin three-colour rule | Varun's request; the rule previews the three chapters |
