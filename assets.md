# Asset Tracker

> Every figure, GIF, video, diagram the deck uses. One row each.
> Files: `assets/have/` (existing) · `assets/made/` (created for deck) · `assets/refs/` (inspiration, not shipped).

**Status:** `have` (usable as-is) · `fix` (needs crop/compress/convert/redraw) · `need` (must make) · `idea`
**Maker:** `V` (Varun) · `C` (Claude/agent) · `V+C`

## General

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A01 | Title, end card (S01, S48) | IIIT logo | have | — | `have/iiit-logo.jpg` | 1846×923 JPG, wired up. SVG/transparent PNG would be cleaner |
| A02 | Meet et al. (S02) | Collaborator photos (8, circular) | fix | V | `have/people/*` | 8 of 9 wired (Zeeshan added). Missing photos: Subhashini, Zeeshan |
| A03 | Intro | CNN specialist → billion-scale generalist timeline | need | C | — | Build as animated HTML timeline |
| A04 | Intro (3 works) | Key GIF per chapter | have | C | `made/{cuecan/prediction-rain,velociti/all-tests-banner,otat/process}.mp4` | S07 columns |
## Ch 2 — CueCAN / MTSVD

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A10 | MTSVD banner | Missing-signs video | have | C | `made/cuecan/mtsvd-intro.mp4` (S12), `prediction-rain.mp4` (S07), `prediction-flyover.mp4` (S18) | From ICRA_Video: Final_SpeedUp/1_MTSVD_Intro, predictions/selected/slowed1+2. H.264 CRF 28-32, 1600w |
| A11 | Problem | Key road-safety stats | need | V | — | Numbers + source; C renders as count-up |
| A12 | Prior works | Dataset comparison table | need | V+C | — | From paper; rebuild as HTML table |
| A13 | MTSVD | Collection details + stats | need | V | — | Numbers; C designs |
| A14 | CueCAN | Architecture diagram | fix | C | `made/cuecan/cuecan-unit.jpg` | Fig 2.4 from arXiv source, static. Animation candidate; parts in ICRA_Video/Cuecandiagram |
| A15 | Results | GradCAM examples | have | V | `made/cuecan/gradcam-ablation.jpg` | Fig 2.6. Alt: ICRA_gifs/cuecangrads.mp4 |
| A16 | Results | Tables | have | V+C | `made/cuecan/localization.jpg` | Fig 2.5 |
| A17 | Problem (S09) | Same kind of curve with and without its sign | have | V | `made/cuecan/missing-samples.mp4` | ICRA_gifs/Missing_Samples.mp4, labelled 2×2 grid. Alt: Fig 2.2 `made/cuecan/missing-sign-samples.jpg` |
| A18 | Training (S15) | Pipeline strip: sign, inpainted, encoder, decoder, mask | have | C | `made/cuecan/pipeline-teaser.jpg` | Fig 2.1 (teaser) stands in for the pipeline strip |
| A19 | MTSVD (S13) | Annotated frames with attribute tags | have | C | `made/cuecan/annotated-frames.jpg` | Fig 2.3. Alt: Final_SpeedUp/3_Annotation_Sample.mp4 |
## Ch 3 — VELOCITI

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A20 | VELOCITI banner | All-tests video | have | C | `made/velociti/all-tests-banner.mp4` | 2.8 MB, 1600w |
| A21 | Tests | Per-test GIFs ×7 | fix | — | `made/velociti/test-*.mp4` | All 7 converted to MP4 (76–148 KB each). Not placed yet |
| A22 | Problem | Compositionality explainer GIF | idea | — | maybe A21 coref | |
| A23 | Prior works | Benchmark comparison table | need | V+C | — | HTML table |
| A24 | VELOCITI | Test hierarchy / difficulty diagram | fix | V+C | `made/velociti/venn.png` | Fig 3.1 static. Animation candidate |
| A25 | Metrics | Traditional vs StrictVLE | need | V+C | — | Animate candidate (pairwise → strict) |
| A26 | Results / analysis | Tables, CoT, frame-rate, human eval plots | need | V | — | Numbers → interactive charts |
| A27 | — | `velo_man.ico` | have | — | `have/VELOCITI/velo_man.ico` | Mascot? Use as chapter icon |
| A28 | Metric (S26) | Entailment-score scatter per model | have | V+C | `made/velociti/scatter.png` | Fig 3.3 |
| A29 | Validation (S31) | OV-72B pass / Classic-only / fail examples | have | C | `made/velociti/qualitative-strict-classic-fail.jpg` | Supp. figs, three strips stacked |
## Ch 4 — OTaT

| ID | Slide | What | Status | Maker | File | Notes |
|---|---|---|---|---|---|---|
| A30 | Problem | Motivation GIF | have | — | `made/otat/motivation.mp4` | GIF → MP4 |
| A31 | Method | Process GIF | have | — | `made/otat/process.mp4` | GIF → MP4 |
| A32 | Tasks | Fr-Ma / VSR / ChartQA panel | have | — | `have/OTaT/tasks.png` |  |
| A33 | Method | Attention blocking masks | fix | C | `made/otat/lazy-vs-total.png` | Fig 4.2 vector render. Animation candidate |
| A34 | Method/Results | 5-panel demo figure (A–E) | have | C | `made/otat/bars-*.png` | Fig 4.4/4.5 on S38. VSR bars (Fig 4.8) rendered, not placed |
| A35 | Qualitative | Failure modes ×5 | fix | C | `made/otat/qualitative-*.jpg` | All 5 rendered. Not placed yet |
| A36 | Results | Quant tables | need | V+C | — | |

## Sources

- arXiv sources (figures as PDF/PNG): CueCAn 2303.02641, VELOCITI 2406.10889, OTaT 2607.03738. Rebuild with the figure script noted in STATUS.md.
- CueCAn media: Varun's `ICRA_Video` folder on OneDrive (raw drives, predictions, GradCAM, annotation videos). Not in the repo.

## Refs

- `refs/thesis.pdf` — thesis PDF (12 MB). See STATUS.md → open question on public repo.
