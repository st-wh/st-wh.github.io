# AGENTS.md

Canonical operating guide for coding agents working on the Dr. Stanton Wortham Academic Portfolio.

This repository prioritizes stakeholder-aligned content architecture, rigorous typography, accessibility, performance, and restrained academic design over rapid unstyled feature delivery.

Preserve the core aesthetic: eloquent minimalism, academic weight, public usefulness, and highly legible structure.

## Source of Truth Hierarchy

When instructions conflict, use this order:

1. Current user prompt/request.
2. `Checklist.md` stakeholder decisions.
3. `AGENTS.md`.
4. `.impeccable.md` design register.
5. Existing repository source code.
6. Current external documentation fetched through `plugin:context7:context7` or verified web/browser sources when needed.

Do not follow stale template assumptions if they conflict with the actual repository or stakeholder checklist.

## Current Template Context

The uploaded site template is a React portfolio app using:

- React 18 / Create React App
- React Bootstrap 2 / Bootstrap 5
- Sass and styled-components
- Redux Toolkit / RTK Query
- GitHub API data
- `HashRouter`
- GitHub Pages deployment

Important current files/areas:

- `src/config.js` — current editable content/config surface.
- `src/App.js` — app-level routing, theme, and data orchestration.
- `src/app/apiSlice.js` — GitHub API queries (to be replaced with static academic content).
- `src/components/` — reusable UI sections and cards.
- `src/pages/` — page-level composition.
- `public/index.html` and `public/manifest.json` — metadata/PWA shell.
- `package.json` — build and deployment configuration.

Use the actual files present in the repository. Do not assume `@workspace/mobile-design-system`, `tokens.css`, `MobilePage`, `PageSection`, or `BottomActionBar` exist unless they are found in the repository.

## Stakeholder-Approved Product Requirements

### Primary Purpose

The site must:

- centralize books, articles, films, research, teaching, CV, and public-facing work;
- help visitors understand why the work matters and how it can be useful;
- serve as a press/media kit for speaking engagements;
- preserve room for a future practical tool based on the persona/discourse-analysis agent concept.

### Target Audiences

The checklist selects all of the following. Since no numeric ranking is provided, preserve this order as the working priority order:

1. Academic peers and researchers.
2. University leadership and institutions.
3. Prospective graduate students.
4. Media, journalists, and conference organizers.

### Tone and Voice

Use first-person voice by default.

Preferred tone:

- personal but not casual;
- rigorous but accessible;
- useful to non-specialists;
- reflective and direct;
- institutionally credible without sounding generic.

Avoid third-person bio language unless creating a specific press-kit or formal-bio block.

## Launch Information Architecture

### Launch pages/sections

Build or preserve these launch areas:

1. Home
   - high-level summary;
   - recent/highlighted work if curated content exists;
   - brief first-person bio;
   - clear paths to Research, Publications, Teaching/Mentorship, CV, and contact via BC profile.

2. About
   - extended biography;
   - education;
   - academic appointments;
   - relevant institutional context;
   - candid photography when provided.

3. Research
   - overview of key areas;
   - at minimum, support linguistic anthropology and Latino diaspora as named checklist examples;
   - connect research areas to works and public relevance.

4. Publications
   - Books;
   - Chapters;
   - Articles;
   - Selected Works, approximately 15-20 curated items;
   - Full Archive categorized by type;
   - external publisher / Google Scholar links;
   - direct PDFs only for open-access materials;
   - film links may be embedded here when contextually appropriate.

5. Teaching / Mentorship
   - philosophy of education;
   - courses taught;
   - mentorship framing;
   - optional connection to the persona/discourse-analysis agent concept if supported by content.

6. CV
   - downloadable PDF and/or web-based CV.

7. External Contact Path
   - include Boston College profile/contact link;
   - do not create a standalone contact form for launch unless explicitly requested.

### Not launch pages unless explicitly reintroduced

- Dedicated Films/Documentaries page.
- Dedicated News/Media page.
- Standalone Contact page/form.

Films, news, and media can be referenced inside launch pages when validated content exists, but should not become major navigation items unless requested.

## Content Integrity Rules

Never hallucinate:

- publications;
- book titles;
- chapters;
- article metadata;
- film credits;
- institutional roles;
- degrees;
- awards;
- dates;
- biographies;
- external links;
- PDFs or open-access status.

When structured content exists, use it. When content is missing, leave a placeholder, use a TODO, or request source material in the implementation notes.

For publications:

- Separate Selected Works from Full Archive.
- Categorize the archive by type.
- Link to external sources where verified.
- Host/download PDFs only when open-access status is provided or verified.
- Handle very long academic titles gracefully on mobile.

## Design Direction

The approved visual direction is:

- minimalist and typographical;
- Notion-adjacent;
- neutral background;
- one primary accent color;
- whisper borders;
- sans-serif typography;
- calm academic hierarchy.

Avoid:

- default Bootstrap appearance without refinement;
- traditional university-heavy styling unless requested;
- loud gradients;
- glassmorphism;
- heavy shadows;
- decorative icon clutter;
- dense unstructured grids;
- cramped publication metadata;
- hardcoded one-off styling scattered across components.

Open design decisions:

- final primary accent color;
- black-and-white versus color photography.

Until these are resolved, keep accent usage tokenized and photography treatment neutral.

## Styling Rules

Use the existing styling architecture unless a migration is approved.

Preferred order:

1. Existing shared styles.
2. Existing Sass/CSS variables or theme values.
3. New semantic variables when needed.
4. Component-level one-offs only when justified.

If a visual value appears repeatedly, promote it to a semantic variable or reusable pattern.

Use CSS custom properties or Sass variables for recurring decisions such as:

- background;
- surface;
- text primary;
- text muted;
- accent;
- border/whisper border;
- focus ring;
- spacing scale;
- typography scale.

## Agent and Skill Routing

Use available agents and skills intentionally. Route by task type. Do not invoke every agent for every task.

### Design and UI

**Impeccable-first workflow:**
Use `impeccable`, `design-taste-frontend`, `minimalist-ui`, `redesign-existing-projects`, and `vercel-react-best-practices` for:
- homepage redesign and academic section hierarchy;
- publication card/list/archive design;
- typographic refinement;
- responsive layout decisions;
- premium minimalist retrofit of the inherited template.

**Tresor design agents:**
- `@ui-ux-designer` — Create interface designs, wireframes, and establish the design system.
- `@frontend-developer` — Build React components, manage state, implement responsive layouts.
- `@frontend-ux-specialist` — Review and optimize UI components and user flows.
- `@brand-guardian` — Maintain visual identity and design consistency across pages.
- `@legacy-modernizer` — Convert template patterns to academic-portfolio-specific components.

**Recommended Impeccable workflow:**
1. `/impeccable teach` when establishing or updating `.impeccable.md`.
2. `/typeset` when editing headings, long academic text, publications, biography, CV, or section rhythm.
3. `/polish` before finalizing major UI components or page layouts.

### Architecture and Planning

**Tresor agents:**
- `@systems-architect` — Design the information architecture, evaluate component structure, plan data flow.
- `@architect-review` — Review architectural consistency before committing to a pattern.
- `@refactor-expert` — Refactor template code; establish clean SOLID component patterns.

**Tresor commands:**
- `/scaffold react-component <Name>` — Generate boilerplate for new academic-portfolio components.
- `/debt-analysis` — Identify and prioritize template technical debt to retire.
- `/code-health` — Baseline codebase quality score with improvement roadmap.

### Code Quality and Testing

**Skills:**
- `simplify` — For code quality, unnecessary complexity, duplication, and refactor review.
- `review` — For pull-request review.

**Tresor commands:**
- `/review` — Automated code review with security, performance, and config checks.
- `/review --scope staged` — Pre-commit code review.
- `/test-gen` — Generate unit, integration, and E2E tests for components and pages.

**Tresor agents:**
- `@test-engineer` — Create testing strategies and test suites for React components.
- `@root-cause-analyzer` — Debug unexpected behavior, regressions, and state issues.
- `@config-safety-reviewer` — Validate configuration files for safety and correctness.

**Standards to apply:**
- `/Users/jw-jang/.claude/tresor-resources/standards/style-guides/react.md`
- `/Users/jw-jang/.claude/tresor-resources/standards/style-guides/javascript.md`
- `/Users/jw-jang/.claude/tresor-resources/standards/style-guides/css.md`

### Security, Accessibility, and Compliance

**Skills:**
- `security-review` — For dependency changes, deployment, environment variables, forms, external links, file downloads, analytics, or API changes.
- `security-auditor` — OWASP compliance, vulnerability assessment.

**Tresor commands:**
- `/audit` — Comprehensive multi-phase security audit.
- `/vulnerability-scan` — CVE scanning, dependency vulnerability analysis.
- `/compliance-check` — WCAG accessibility, GDPR, and regulatory compliance.

**Tresor agents:**
- `@security-auditor` — Security assessment, OWASP compliance review.
- `@legal-compliance-checker` — Privacy policies, GDPR, terms of service review.

Accessibility is a first-class concern: all public-facing academic content must be screen-reader friendly and WCAG 2.1 AA compliant.

### Performance

**Tresor commands:**
- `/profile` — Comprehensive performance profiling; identify rendering, bundle, and network bottlenecks.
- `/benchmark` — Load testing, Core Web Vitals measurement, Lighthouse scoring.

**Tresor agents:**
- `@performance-tuner` — Optimize rendering, lazy loading, and bundle size.
- `@performance-benchmarker` — Performance testing and comparative reporting.

### UI Testing and Validation

**Skills:**
- `webapp-testing` — Local web-app testing, route checks, viewport checks, accessibility spot checks, and smoke testing.
- `browse:ui-test` — Adversarial UI, responsive, and interaction testing.
- `browse:browser` — Interactive page inspection with Playwright.

### Documentation

**Skills:**
- `init` — When initializing or refreshing repo-level Claude documentation.

**Tresor commands:**
- `/docs-gen` — Auto-generate documentation from source code.

**Tresor agents:**
- `@docs-writer` — Technical documentation, README files, component API docs.
- `@content-writer` — Accessible content for academic topics aimed at non-specialist audiences.

### Deployment and Operations

Before changing deployment behavior, inspect:
- `package.json` homepage field;
- GitHub Pages configuration;
- routing mode (HashRouter vs BrowserRouter);
- public asset paths;
- potential custom domain / `CNAME` needs.

Preferred domains from the checklist:
1. `stantonwortham.com`
2. `stanton-ef-wortham.com`

Do not hardcode the final production domain until it is selected and configured.

**Tresor commands:**
- `/deploy-validate` — Pre-deployment validation (build, tests, security, a11y).
- `/health-check` — Production health verification after deployment.

**Tresor agents:**
- `@deployment-engineer` — CI/CD pipelines, GitHub Actions, GitHub Pages configuration.
- `@devops-troubleshooter` — Debug deployment failures and GitHub Pages issues.

### Browser and Research

- `browse:browser` — Interactive page inspection with Playwright.
- `browse:search` — Current web search.
- `browse:fetch` — Fetch known URLs without opening a full browser session.
- `browse:ui-test` — Adversarial UI, responsive, and interaction testing.
- `browse:company-research` — Institutional, media, organization, or stakeholder research.
- `plugin:context7:context7` — Current docs for React, React Router, Bootstrap, Redux Toolkit, GitHub Pages, or any library in use.

When external facts are needed, prefer authoritative sources such as institutional profiles, publisher pages, Google Scholar, official CVs, and verified open-access repositories.

Do not use web research to invent or fill academic facts without source support.

### Claude Code Configuration

- `update-config` — Claude Code settings, permissions, hooks, and environment variables.
- `fewer-permission-prompts` — Safe permission allowlists after commands are understood.
- `keybindings-help` — Keyboard shortcut customization.
- `loop` — Only for explicitly requested recurring prompt intervals.
- `schedule` — Only for explicitly requested remote agents or cron-like recurring work.
- `claude-api` — Only if Anthropic API/SDK app code is introduced.

### Workflow Orchestration

- `/prompt-create` — Generate optimized prompts for complex multi-step sub-tasks.
- `/prompt-run` — Execute prompts in sub-agents (parallel or sequential).
- `/todo-add` — Capture ideas mid-conversation with full context.
- `/todo-check` — Review and work on captured todos.
- `/handoff-create` — Generate comprehensive context handoff documents.
- `/whats-next` — Analyze current state and create a next-steps summary.

## Unavailable Tool Policy

Do not reference or require unavailable tools, including:

- `bibtex-doi-parser`
- `academic-citation-manager`
- `a11y-audit-pro`
- `semantic-html-validator`
- `video-performance-optimizer`
- `sanity-cms-architect`
- `structured-data-markup`

Use these installed substitutes instead:

- Academic citation/content formatting: provided structured data, verified external sources, `browse:fetch`, `@content-writer`, and careful manual normalization.
- Accessibility and semantic validation: `/compliance-check`, `webapp-testing`, `browse:ui-test`, `@security-auditor`, manual semantic HTML review.
- Media performance: `/profile`, `vercel-react-best-practices`, `webapp-testing`, and explicit image/video loading checks.
- Data modeling / structured data: `simplify`, `plugin:context7:context7`, `@systems-architect`, and manual schema/data modeling in repository data files.

## Blanket Permissions

The following commands are pre-approved and do not require per-use confirmation. Run them freely as part of normal development workflow.

### Build and Dev Server

Dev server runs on **port 3001** (set via `.env` → `PORT=3001`). Never use port 3000 for this project.

```bash
npm run build
npm start           # starts on http://localhost:3001
npm run test
```

All test URLs use port 3001:
- Home: `http://localhost:3001/#/`
- Publications: `http://localhost:3001/#/publications`
- Health check: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3001`

### Git Workflow

```bash
git status
git diff [--stat] [--staged]
git log [--oneline] [-n]
git add <specific files>   # stage by name, never git add -A or git add .
git commit -m "..."
git push origin main
```

### Browse CLI (UI Testing)

```bash
browse env local
browse env local --auto-connect
browse open <url>
browse snapshot
browse screenshot [path]
browse scroll <x> <y> <dx> <dy>
browse click <ref>
browse press <key>
browse get url
browse get title
browse get text <selector>
browse get html <selector>
browse stop
browse status
```

### Playwright / Node Test Scripts

```bash
node <inline or file script>   # for viewport tests, focus checks, console error checks
```

### File System

```bash
mkdir -p <path>              # create asset/directory scaffolding
ls <path>
find . -name "..."
grep -r "..." <path>
curl -s -o /dev/null -w "%{http_code}" http://localhost:3001   # health check only
kill <pid>                   # stop background dev server
```

### Limits That Still Apply

- Never `git push --force` or `git reset --hard` without explicit confirmation.
- Never `git add -A` or `git add .` — always stage named files.
- Never `rm -rf` or delete files without explicit confirmation.
- Never push to any remote other than `origin main` without explicit confirmation.
- Never run `curl` or `fetch` against external production URLs as part of automated scripts.

## Task Execution Protocol

For every UI, architectural, content, or deployment task:

1. Contextualize
   - Read `Checklist.md`, `AGENTS.md`, and `.impeccable.md` if present.
   - Identify whether the task affects content, design, architecture, testing, deployment, or factual academic data.

2. Inspect current implementation
   - Read relevant files before editing.
   - Prefer modifying existing components over creating duplicate patterns.
   - Confirm actual package/style/component availability instead of relying on assumptions.

3. Route agents and skills
   - Design work: Impeccable skills → `@ui-ux-designer`, `@frontend-developer`.
   - Architecture: `@systems-architect` → `/scaffold`.
   - Code quality: `simplify` → `/review` → `@refactor-expert`.
   - Testing: `/test-gen` → `@test-engineer`.
   - Security/a11y: `security-review` → `/audit` → `/compliance-check`.
   - Performance: `/profile` → `/benchmark` → `@performance-tuner`.
   - Library uncertainty: `plugin:context7:context7`.
   - UI validation: `webapp-testing`, `browse:ui-test`, `browse:browser`.

4. Implement minimally
   - Keep changes focused.
   - Avoid broad rewrites unless requested.
   - Do not introduce a new design system without justification.
   - Do not add heavy dependencies unless the benefit is clear and documented.

5. Validate
   - Run available build/test commands.
   - Smoke-test routes.
   - Check responsive behavior.
   - Check accessibility basics.
   - Report anything not tested.

## Finished Implementation Response Format

Every finished implementation response must include:

```text
Micro-testing (commit: <type(scope): summary>):
- [ ] Build: <command/result or "not run">
- [ ] Responsive: <viewport(s) checked or "not run">
- [ ] A11y: <checks attempted or "not run">
- [ ] Visual System: Verified no unnecessary hardcoded visual one-offs.
- [ ] Edge: <specific edge case checked, e.g., long publication title, empty archive, missing PDF, missing external URL>
```

Do not claim a task is complete if validation was not attempted. Say exactly what was and was not checked.
