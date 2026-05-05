# CLAUDE.md

Canonical coding-agent instructions live in:

`@AGENTS.md`

Stakeholder-approved product direction lives in:

`@Checklist.md`

Design calibration lives in:

`.impeccable.md`

Read `AGENTS.md`, `Checklist.md`, and `.impeccable.md` before making architectural, UI, content, or deployment changes.

## Project Context

This repository is the academic and public-impact portfolio for Dr. Stanton Wortham.

It is not a generic developer portfolio. It should centralize academic work, make the usefulness of the work legible to multiple audiences, support press/speaking needs, and preserve a future path toward a practical persona/discourse-analysis tool.

## Core Product Direction

The stakeholder-approved direction is:

- First-person voice by default.
- Academic portfolio hub for books, articles, films, research, teaching/mentorship, CV, and external contact path.
- Minimalist, typographical, Notion-adjacent visual language.
- Neutral background with one primary accent color.
- Sans-serif typography.
- Selected Works plus full publication archive.
- Boston College profile/contact link instead of a standalone contact form at launch.

## Non-Negotiables

- Never invent publications, citations, academic history, film credits, roles, awards, dates, PDFs, or external links.
- Treat `Checklist.md` as the product strategy source of truth.
- Preserve eloquent minimalism, academic weight, and public usefulness.
- Use the actual repository architecture. Do not assume unavailable packages, components, or tools.
- Do not assume `@workspace/mobile-design-system`, `tokens.css`, `MobilePage`, `PageSection`, or `BottomActionBar` exist unless they are found in this repository.
- Do not claim implementation is done unless build, responsive, accessibility, and edge-case validation were attempted or explicitly marked as not run.

## Available Skills / Plugin Routing

Use only installed skills/plugins. Route them by task type.

### Design and UI

**Impeccable workflow skills:**
- `impeccable` — Design calibration, polish, typesetting
- `design-taste-frontend` — Senior UI/UX architecture and taste
- `minimalist-ui` — Clean editorial-style interfaces
- `redesign-existing-projects` — Retrofit premium quality onto existing layouts
- `vercel-react-best-practices` — React/Next.js performance and best practices

**Tresor design agents (prefix `@`):**
- `@ui-ux-designer` — Interface design, wireframes, design systems
- `@frontend-developer` — React components, state, responsive layouts
- `@frontend-ux-specialist` — UI component creation and review
- `@brand-guardian` — Brand identity and visual consistency
- `@legacy-modernizer` — Modernizing old or generic template code

**Recommended Impeccable flow:**
1. `/impeccable teach` when establishing or updating `.impeccable.md`.
2. `/typeset` when changing headings, long academic copy, publications, or page rhythm.
3. `/polish` before finalizing major page layouts or reusable components.

### Architecture and Planning

**Tresor agents:**
- `@systems-architect` — Information architecture, component design, technology evaluation
- `@architect-review` — Architectural consistency review
- `@refactor-expert` — Code refactoring, clean architecture, SOLID principles

**Workflow commands:**
- `/scaffold react-component <Name>` — Generate component boilerplate with tests
- `/debt-analysis` — Technical debt identification and prioritization
- `/code-health` — Comprehensive codebase health baseline

### Code Quality, Review, and Testing

**Skills:**
- `simplify` — Refactoring, duplication removal, maintainability checks
- `init` — Initialize or refresh codebase documentation
- `review` — Pull-request review

**Tresor commands:**
- `/review` — Automated code review with security, performance, config checks
- `/test-gen` — Generate comprehensive unit, integration, and E2E tests
- `/review --scope staged` — Pre-commit review

**Tresor agents:**
- `@test-engineer` — Testing strategies, QA, test creation
- `@root-cause-analyzer` — RCA, systematic debugging
- `@config-safety-reviewer` — Configuration safety, magic numbers, timeouts

### Security, Accessibility, and Compliance

**Skills:**
- `security-review` — Dependency, environment, credential, form, external-link, deployment changes
- `security-auditor` — Vulnerability assessment, OWASP compliance

**Tresor commands:**
- `/audit` — Comprehensive multi-phase security audit
- `/vulnerability-scan` — CVE scanning, dependency vulnerabilities
- `/compliance-check` — WCAG, GDPR, regulatory compliance

**Tresor agents:**
- `@security-auditor` — Security assessment, OWASP
- `@legal-compliance-checker` — Privacy policies, GDPR, regulatory

### Performance

**Tresor commands:**
- `/profile` — Comprehensive performance profiling, bottleneck identification
- `/benchmark` — Load testing, Core Web Vitals, performance scoring

**Tresor agents:**
- `@performance-tuner` — Profiling, optimization, scalability
- `@performance-benchmarker` — Performance testing and reporting

### UI Testing and Validation

**Skills:**
- `webapp-testing` — Local web-app testing, route checks, accessibility spot checks
- `browse:ui-test` — Adversarial UI and responsive testing
- `browse:browser` — Interactive web-page inspection with Playwright

### Documentation

**Skills:**
- `docs-gen` — Auto-generate documentation from code

**Tresor commands:**
- `/docs-gen` — Documentation generation from source

**Tresor agents:**
- `@docs-writer` — Technical documentation, user guides
- `@content-writer` — Accessible content explaining complex academic topics

### Deployment and Operations

**Tresor commands:**
- `/deploy-validate` — Pre-deployment validation (build, tests, security, accessibility)
- `/health-check` — Production health verification

**Tresor agents:**
- `@deployment-engineer` — CI/CD pipelines, GitHub Actions, GitHub Pages
- `@devops-troubleshooter` — Debug deployment issues

### Browser, Research, and External Docs

- `browse:search` — Current web search
- `browse:fetch` — Fetch known URLs without full browser session
- `browse:company-research` — Institution/media/research context
- `browse:browser` — Interactive inspection
- `plugin:context7:context7` — Current library/framework/API docs (React, Redux, Bootstrap, React Router, GitHub Pages)

Do not use web research to invent academic facts. Prefer provided content, official institutional profiles, publisher pages, Google Scholar, verified CVs, and verified open-access repositories.

### Claude Code Configuration

- `update-config` — Claude Code settings, permissions, hooks, environment variables
- `fewer-permission-prompts` — Safe permission allowlists
- `keybindings-help` — Keyboard shortcut customization
- `loop` and `schedule` — Explicitly requested recurring QA or cron work only
- `claude-api` — Only if Anthropic API/SDK app code is introduced

### Workflow Utilities

- `/prompt-create` — Generate optimized prompts for complex sub-tasks
- `/prompt-run` — Execute prompts in sub-agents (parallel or sequential)
- `/todo-add` — Capture ideas with full context mid-conversation
- `/todo-check` — Resume work on captured todos
- `/handoff-create` — Create comprehensive context handoff document
- `/whats-next` — Analyze conversation and create a handoff summary

## Standards References (Tresor)

When writing or reviewing code, apply standards from:
- `/Users/jw-jang/.claude/tresor-resources/standards/style-guides/react.md`
- `/Users/jw-jang/.claude/tresor-resources/standards/style-guides/javascript.md`
- `/Users/jw-jang/.claude/tresor-resources/standards/style-guides/css.md`
- `/Users/jw-jang/.claude/tresor-resources/standards/git-workflows/conventional-commits.md`

## Do Not Reference Unavailable Tools

Do not route work to tools that are not installed, including:

- `bibtex-doi-parser`
- `academic-citation-manager`
- `a11y-audit-pro`
- `semantic-html-validator`
- `video-performance-optimizer`
- `sanity-cms-architect`
- `structured-data-markup`

If academic metadata parsing, accessibility validation, media optimization, CMS modeling, or structured data work is needed, use the installed alternatives described in `AGENTS.md`.
