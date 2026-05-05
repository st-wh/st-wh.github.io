import React from "react";
import styled from "styled-components";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { bcProfileUrl, cvUrl, siteOwnerName } from "../config";

// #region constants
const scrollLinks = [
  { id: "sl-about", name: "About", to: "About" },
  { id: "sl-research", name: "Research", to: "Research" },
  { id: "sl-teaching", name: "Teaching", to: "Teaching" },
];
// #endregion

// #region styled-components
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background-color: rgba(250, 249, 247, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 200ms ease;

  &.scrolled {
    border-bottom-color: var(--color-border-whisper);
  }

  .nav-inner {
    max-width: var(--container-max);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space-5);
  }

  .nav-logotype {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-text-primary);
    text-decoration: none;
    letter-spacing: -0.005em;
    flex-shrink: 0;

    &:hover {
      color: var(--color-text-primary);
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 768px) {
    .nav-links {
      gap: var(--space-6);
    }
  }

  .nav-link {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    transition: color 100ms ease;
    white-space: nowrap;

    &:hover,
    &.active {
      color: var(--color-accent);
    }
  }

  .nav-link-external {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    white-space: nowrap;
    transition: color 100ms ease;

    &:hover {
      color: var(--color-accent);
    }
  }

  .spacer {
    height: var(--nav-height);
  }

  /* Mobile: hide scroll links and BC external link to prevent overflow */
  @media (max-width: 640px) {
    .nav-scroll-links {
      display: none;
    }
    .nav-hide-mobile {
      display: none;
    }
  }
`;
// #endregion

// #region component
const NavBar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div style={{ height: "var(--nav-height)" }} aria-hidden="true" />
      <StyledNav className={scrolled ? "scrolled" : ""} aria-label="Site navigation">
        <div className="nav-inner">
          <RouterLink to="/" className="nav-logotype" aria-label="Stanton Wortham, home">
            {siteOwnerName}
          </RouterLink>

          <ul className="nav-links">
            {/* Scroll links — home page only */}
            {isHome &&
              scrollLinks.map((link) => (
                <li key={link.id} className="nav-scroll-links">
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={400}
                    activeClass="active"
                    className="nav-link"
                    tabIndex={0}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}

            {/* Publications — always a router link */}
            <li>
              <RouterLink
                to="/publications"
                className={`nav-link${pathname === "/publications" ? " active" : ""}`}
              >
                Publications
              </RouterLink>
            </li>

            {/* CV — only rendered when cvUrl is set in config.js */}
            {cvUrl && (
              <li>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  CV
                </a>
              </li>
            )}

            {/* Boston College external link — hidden on mobile to prevent overflow */}
            <li className="nav-hide-mobile">
              <a
                href={bcProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-external"
              >
                Boston College ↗
              </a>
            </li>
          </ul>
        </div>
      </StyledNav>
    </>
  );
};
// #endregion

export default NavBar;
