# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes, merged with project-specific instructions.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## Project Context

This is the academic and public-impact portfolio for **Dr. Stanton Wortham**. It is not a developer portfolio. It centralizes books, articles, films, research, teaching/mentorship, CV, and press needs, and makes the usefulness of the work legible to multiple audiences.

Read **`AGENTS.md`**, **`Checklist.md`**, and **`.impeccable.md`** before any architectural, UI, content, or deployment change.

### Source Hierarchy

When instructions conflict:

1. Current user prompt.
2. `Checklist.md` — stakeholder decisions.
3. `AGENTS.md` — canonical operating guide.
4. `.impeccable.md` — design register.
5. Existing repository source code.

### Core Product Direction

- First-person voice by default.
- Minimalist, typographical, Notion-adjacent visual language.
- Neutral background with one primary accent color; sans-serif typography.
- Selected Works plus full publication archive.
- Boston College profile/contact link instead of a standalone contact form at launch.

## Non-Negotiables

- **Never invent** publications, citations, academic history, film credits, roles, awards, dates, PDFs, or external links.
- **Never assume** unavailable packages: `@workspace/mobile-design-system`, `tokens.css`, `MobilePage`, `PageSection`, `BottomActionBar` do not exist in this repo.
- **Never claim completion** unless build, responsive, accessibility, and edge-case validation were attempted or explicitly marked as not run.
- **`Checklist.md` is the product strategy source of truth.**

## Finished Implementation Format

Every finished implementation response must include:

```
Micro-testing (commit: <type(scope): summary>):
- [ ] Build: <command/result or "not run">
- [ ] Responsive: <viewport(s) checked or "not run">
- [ ] A11y: <checks attempted or "not run">
- [ ] Visual System: No unnecessary hardcoded visual one-offs.
- [ ] Edge: <specific edge case checked>
```

Do not claim a task is complete if validation was not attempted. Say exactly what was and was not checked.
