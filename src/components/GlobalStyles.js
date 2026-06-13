import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Backgrounds */
  --color-bg:              oklch(98.5% 0.005 80);
  --color-surface:         oklch(96.5% 0.006 80);
  --color-surface-raised:  oklch(94.5% 0.007 80);

  /* Text */
  --color-text-primary:    oklch(22% 0.012 60);
  --color-text-secondary:  oklch(40% 0.010 60);
  --color-text-muted:      oklch(46% 0.009 60);
  --color-text-inverse:    oklch(98% 0.003 80);

  /* Accent — warm slate blue */
  --color-accent:          oklch(45% 0.10 240);
  --color-accent-hover:    oklch(38% 0.10 240);
  --color-accent-subtle:   oklch(92% 0.04 240);
  --color-accent-text:     oklch(36% 0.10 240);

  /* Borders */
  --color-border:          oklch(85% 0.006 80);
  --color-border-whisper:  oklch(91% 0.005 80);
  --color-border-strong:   oklch(65% 0.008 60);

  /* Focus */
  --color-focus:           oklch(45% 0.10 240);

  /* Footer */
  --color-footer-bg:           oklch(20% 0.012 60);
  --color-footer-text:         rgba(200, 195, 186, 0.7);
  --color-footer-text-strong:  rgba(200, 195, 186, 1);

  /* Fonts */
  --font-serif: 'Source Serif 4', 'Iowan Old Style', 'Palatino Linotype', Georgia, ui-serif, serif;
  --font-sans:  'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif;

  /* Spacing (8px grid) */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;

  /* Border radius */
  --radius-sm:  3px;
  --radius-md:  6px;
  --radius-lg:  10px;
  --radius-xl:  16px;

  /* Shadows — warm-tinted with #26251e as shadow base */
  --shadow-sm:    rgba(38, 37, 30, 0.06) 0px 1px 4px,
                  rgba(38, 37, 30, 0.04) 0px 0px 0px 1px;
  --shadow-md:    rgba(38, 37, 30, 0.08) 0px 4px 16px,
                  rgba(38, 37, 30, 0.04) 0px 0px 0px 1px;
  --shadow-hover: rgba(38, 37, 30, 0.12) 0px 6px 20px,
                  rgba(38, 37, 30, 0.06) 0px 0px 0px 1px;

  /* Layout */
  --container-max:   1080px;
  --prose-max:       720px;
  --nav-height:      56px;
  --min-footer-height: 80px;
}

/* Reset & base */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: 17px;
  line-height: 1.65;
  font-feature-settings: "cv01" 1, "ss03" 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: calc(100vh - var(--nav-height) - var(--min-footer-height));
}

/* Heading font */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-optical-sizing: auto;
  color: var(--color-text-primary);
}

h1 {
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.015em;
}

h3 {
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.30;
  letter-spacing: -0.01em;
}

h4 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.40;
  letter-spacing: 0;
  font-family: var(--font-sans);
}

/* Kicker labels */
.kicker {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

/* Links */
a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  transition: color 100ms ease;
}

a:hover {
  color: var(--color-accent-hover);
  cursor: pointer;
}

/* Focus */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Section rhythm */
.academic-section {
  padding-top: var(--space-9);
  padding-bottom: var(--space-9);
}

.academic-section--surface {
  background-color: var(--color-surface);
}

/* Horizontal rule — whisper */
.divider-whisper {
  border: none;
  border-top: 1px solid var(--color-border-whisper);
  margin: var(--space-5) 0;
}

/* Skip-to-main-content link — visible only on keyboard focus */
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  z-index: 200;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: top 0ms;

  &:focus {
    top: var(--space-4);
  }
}
`;

export default GlobalStyles;
