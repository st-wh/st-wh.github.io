import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// #region styled-components
const StyledMain = styled.main`
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  padding: var(--space-9) var(--space-5);

  .notfound-inner {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .notfound-code {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin: 0 0 var(--space-5) 0;
  }

  .notfound-heading {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 300;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-5) 0;
  }

  .notfound-body {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    max-width: 480px;
    margin: 0 0 var(--space-7) 0;
  }

  .notfound-link {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 100ms ease;

    &:hover {
      color: var(--color-accent-hover);
    }
  }
`;
// #endregion

// #region component
const NotFound = () => {
  React.useEffect(() => {
    document.title = "Page not found — Stanton Wortham";
    return () => { document.title = "Stanton Wortham"; };
  }, []);

  return (
    <StyledMain>
      <div className="notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="notfound-heading">Page not found.</h1>
        <p className="notfound-body">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="notfound-link">
          ← Back to home
        </Link>
      </div>
    </StyledMain>
  );
};
// #endregion

export default NotFound;
