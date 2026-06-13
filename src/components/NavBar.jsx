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

  /* Desktop link list */
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

  /* Hamburger button — mobile only */
  .nav-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0;

    &:hover {
      color: var(--color-text-primary);
    }
  }

  /* Mobile drawer */
  .nav-drawer {
    display: none;
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background-color: rgba(250, 249, 247, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border-whisper);
    padding: var(--space-4) var(--space-5) var(--space-5);
    z-index: 99;
    list-style: none;
    margin: 0;

    &.open {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .drawer-link {
      font-family: var(--font-sans);
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      text-decoration: none;
      cursor: pointer;
      background: none;
      border: none;
      padding: var(--space-2) 0;
      text-align: left;
      width: 100%;
      transition: color 100ms ease;

      &:hover,
      &.active {
        color: var(--color-accent);
      }
    }

    .drawer-link-external {
      font-family: var(--font-sans);
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-muted);
      text-decoration: none;
      padding: var(--space-2) 0;
      display: block;
      transition: color 100ms ease;

      &:hover {
        color: var(--color-accent);
      }
    }
  }

  @media (max-width: 640px) {
    .nav-scroll-links,
    .nav-hide-mobile {
      display: none;
    }

    .nav-hamburger {
      display: flex;
    }
  }
`;
// #endregion

// #region component
const NavBar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer on route change
  React.useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div style={{ height: "var(--nav-height)" }} aria-hidden="true" />
      <StyledNav className={scrolled ? "scrolled" : ""} aria-label="Site navigation">
        <div className="nav-inner">
          <RouterLink to="/" className="nav-logotype" aria-label="Stanton Wortham, home">
            {siteOwnerName}
          </RouterLink>

          {/* Desktop link list */}
          <ul className="nav-links">
            {scrollLinks.map((link) => (
              <li key={link.id} className="nav-scroll-links">
                {isHome ? (
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
                ) : (
                  <RouterLink to="/" state={{ scrollTo: link.to }} className="nav-link">
                    {link.name}
                  </RouterLink>
                )}
              </li>
            ))}

            <li>
              <RouterLink
                to="/publications"
                className={`nav-link${pathname === "/publications" ? " active" : ""}`}
              >
                Publications
              </RouterLink>
            </li>

            {cvUrl && (
              <li>
                <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="nav-link">
                  CV
                </a>
              </li>
            )}

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

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setDrawerOpen((o) => !o)}
          >
            {drawerOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        <ul
          id="mobile-nav-drawer"
          className={`nav-drawer${drawerOpen ? " open" : ""}`}
          aria-hidden={!drawerOpen}
        >
          {scrollLinks.map((link) => (
            <li key={`drawer-${link.id}`}>
              {isHome ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  offset={-64}
                  duration={400}
                  className="drawer-link"
                  onClick={closeDrawer}
                  tabIndex={drawerOpen ? 0 : -1}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to="/"
                  state={{ scrollTo: link.to }}
                  className="drawer-link"
                  onClick={closeDrawer}
                  tabIndex={drawerOpen ? 0 : -1}
                >
                  {link.name}
                </RouterLink>
              )}
            </li>
          ))}
          <li>
            <RouterLink
              to="/publications"
              className={`drawer-link${pathname === "/publications" ? " active" : ""}`}
              onClick={closeDrawer}
              tabIndex={drawerOpen ? 0 : -1}
            >
              Publications
            </RouterLink>
          </li>
          {cvUrl && (
            <li>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-link"
                tabIndex={drawerOpen ? 0 : -1}
              >
                CV
              </a>
            </li>
          )}
          <li>
            <a
              href={bcProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-link-external"
              tabIndex={drawerOpen ? 0 : -1}
            >
              Boston College ↗
            </a>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};
// #endregion

export default NavBar;
