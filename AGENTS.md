# Agent Handoff — MS Thesis Defense Deck

Read this first. Any agent (Claude Code, other assistants), any machine.

## Project

HTML presentation for Varun's MS thesis defense. Minimal visual style, selective interactivity.
Reference for approach: https://www.gritai.studio/blog/html-presentations

## Roles

- **Varun owns content.** `outline.md` is his. Do not rewrite slide content unless the slide's `Help` field says `content`/`both` or he asks. Put suggestions as `> 💬 …` lines under the slide.
- **Agent owns design + build.** Layout, typography, colour, animation, code in `deck/`.
- Content help only on request.

## Files

| File | Purpose | Who edits |
|---|---|---|
| `outline.md` | Slide-by-slide mock: role, takeaway, visual, notes | Varun (agents: 💬 only) |
| `assets.md` | Figure/GIF/video tracker, have vs need | Both |
| `STATUS.md` | Current phase, next steps, decision log | Agent updates at end of every session |
| `deck/` | Built presentation | Agent |
| `assets/` | Media (GIF/MP4/etc. tracked via Git LFS) | Both |
| `private/` | Gitignored. Thesis PDF, unpublished data | Never commit |

## Rules

1. Start of session: read `STATUS.md`, then `outline.md`.
2. End of session: update `STATUS.md` (what changed, next step, open questions). Commit.
3. Slide ids (`S01`, `B01`) and asset ids (`A01`) are stable keys. Never renumber.
4. Nothing from `private/` goes into committed files or external services.
5. Design decisions get logged in `STATUS.md` → Decisions, with the reason.
