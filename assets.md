# Asset Tracker

> Every figure, GIF, video, diagram the deck uses. One row each.
> Files: `assets/have/` (existing) · `assets/made/` (created for deck) · `assets/refs/` (inspiration, not shipped).

**Status:** `have` (usable as-is) · `fix` (needs crop/compress/convert/redraw) · `need` (must make) · `idea`
**Maker:** `V` (Varun) · `C` (Claude/agent) · `V+C`

## General

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A01 | Title, end card (S01, S48) | IIIT logo | have | — | `have/iiit-logo.jpg` | 1846×923 JPG, wired up. SVG/transparent PNG would be cleaner |
| A02 | Meet et al. (S02) | Collaborator photos (8, circular) | fix | V | `have/people/*` | 7 of 8 in and wired up. Missing: Subhashini Venugopalan |
| A03 | Intro | CNN specialist → billion-scale generalist timeline | need | C | — | Build as animated HTML timeline |
| A04 | Intro (3 works) | Key GIF per chapter | fix | C | reuse A10, A20, A31 | Loop side by side |

## Ch 2 — CueCAN / MTSVD

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A10 | MTSVD banner | Missing-signs video | fix | C | `have/CueCAN/MissingTS_VideoICRA.mp4` | 17 MB. Trim to key segment + compress |
| A11 | Problem | Key road-safety stats | need | V | — | Numbers + source; C renders as count-up |
| A12 | Prior works | Dataset comparison table | need | V+C | — | From paper; rebuild as HTML table |
| A13 | MTSVD | Collection details + stats | need | V | — | Numbers; C designs |
| A14 | CueCAN | Architecture diagram | need | C | thesis Fig. 2.4 | **Animate candidate.** No PPT source exists: redraw as SVG from the thesis figure |
| A15 | Results | GradCAM examples | need | V | — | |
| A16 | Results | Tables | need | V+C | — | HTML tables, highlight our row |
| A17 | Problem (S09) | Same kind of curve with and without its sign | need | V | — | Two dashcam frames from MTSVD |
| A18 | Training (S15) | Pipeline strip: sign, inpainted, encoder, decoder, mask | need | C | — | Build as HTML/SVG |
| A19 | MTSVD (S13) | Annotated frames with attribute tags | fix | C | thesis Fig. 2.3 | Extract from PDF or re-render |

## Ch 3 — VELOCITI

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A20 | VELOCITI banner | All-tests video | fix | C | `have/VELOCITI/all_tests_banner.mp4` | 37 MB. Compress to ~5–8 MB |
| A21 | Tests | Per-test GIFs ×7 | have | — | `have/VELOCITI/{action_adv,action_bind,action_mod,agent_bind,agent_iden,chrono,coref}.gif` | 2.6–3.9 MB each. Convert to MP4/WebM (~10× smaller) |
| A22 | Problem | Compositionality explainer GIF | idea | — | maybe A21 coref | |
| A23 | Prior works | Benchmark comparison table | need | V+C | — | HTML table |
| A24 | VELOCITI | Test hierarchy / difficulty diagram | need | V+C | — | Animate candidate |
| A25 | Metrics | Traditional vs StrictVLE | need | V+C | — | Animate candidate (pairwise → strict) |
| A26 | Results / analysis | Tables, CoT, frame-rate, human eval plots | need | V | — | Numbers → interactive charts |
| A27 | — | `velo_man.ico` | have | — | `have/VELOCITI/velo_man.ico` | Mascot? Use as chapter icon |
| A28 | Metric (S26) | Entailment-score scatter per model | need | V+C | thesis Fig. 3.3 | Interactive scatter needs raw scores |
| A29 | Validation (S31) | OV-72B pass / Classic-only / fail examples | fix | C | thesis Figs. 3.6–3.8 | One card each |

## Ch 4 — OTaT

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A30 | Problem | Motivation GIF | have | — | `have/OTaT/motivation.gif` | |
| A31 | Method | Process GIF | have | — | `have/OTaT/process.gif` | 2 MB |
| A32 | Tasks | Fr-Ma / VSR / ChartQA panel | have | — | `have/OTaT/tasks.png` | VSR is adapted from Mixed Signals (thesis 4.3), so both names are right |
| A33 | Method | Attention blocking masks | fix | C | `have/OTaT/attention_blocking.png` | **Animate candidate.** Redraw SVG: block region slides in |
| A34 | Method/Results | 5-panel demo figure (A–E) | fix | C | `have/OTaT/result_demo.png` | Split into steps: B token strip → SVG, D/E → interactive line chart (needs raw numbers) |
| A35 | Qualitative | Failure modes ×5 | fix | C | `have/OTaT/qualitative/*.pdf` | Convert PDF → SVG |
| A36 | Results | Quant tables | need | V+C | — | |

## Refs

- `refs/thesis.pdf` — thesis PDF (12 MB). See STATUS.md → open question on public repo.
