import React from "react";
import styled from "styled-components";
import { publications } from "../data/publications";

// #region styled-components
const StyledPage = styled.main`
  background-color: var(--color-bg);
  min-height: 100vh;
  padding-top: var(--space-9);
  padding-bottom: var(--space-10);
  padding-left: var(--space-5);
  padding-right: var(--space-5);

  .page-inner {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .page-kicker {
    margin-bottom: var(--space-4);
  }

  .page-heading {
    margin: 0 0 var(--space-4) 0;
  }

  .page-note {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.60;
    color: var(--color-text-muted);
    max-width: 640px;
    margin: 0 0 var(--space-8) 0;
  }

  .section-label {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin: var(--space-8) 0 0 0;
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border);
  }

  .pub-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .pub-entry {
    padding: var(--space-5) 0;
    border-bottom: 1px solid var(--color-border-whisper);
    display: grid;
    grid-template-columns: 3.5rem 1fr;
    gap: 0 var(--space-5);
  }

  .pub-year {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    color: var(--color-text-muted);
    line-height: 1.65;
    padding-top: 3px;
  }

  .pub-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .pub-title {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.50;
    color: var(--color-text-primary);
    margin: 0;
  }

  .pub-meta {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.55;
    color: var(--color-text-muted);
    letter-spacing: 0.01em;
    margin: 0;
  }

  .pub-coauthors {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.50;
    color: var(--color-text-muted);
    margin: 0;
  }

  .pub-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-top: var(--space-1);
  }

  .pub-link {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 100ms ease;
  }

  .pub-link:hover {
    color: var(--color-accent-hover);
  }

  .archive-note {
    margin-top: var(--space-8);
    padding: var(--space-5);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }

  .archive-note p {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.60;
    color: var(--color-text-secondary);
    margin: 0;
  }

  @media (max-width: 480px) {
    .pub-entry {
      grid-template-columns: 1fr;
      gap: var(--space-2);
    }
  }
`;
// #endregion

// Group publications by type, then sort by year descending within each group
const groupByType = (pubs) => {
  const books = pubs
    .filter((p) => p.type === "book")
    .sort((a, b) => b.year - a.year);
  const articles = pubs
    .filter((p) => p.type === "article")
    .sort((a, b) => b.year - a.year);
  return { books, articles };
};

// #region component
const Publications = () => {
  React.useEffect(() => {
    document.title = "Publications — Stanton Wortham";
    return () => {
      document.title = "Stanton Wortham";
    };
  }, []);

  const { books, articles } = groupByType(publications);

  const renderEntry = (pub) => {
    const venue =
      pub.type === "book"
        ? pub.publisher
        : [
            pub.journal,
            pub.volume && `${pub.volume}`,
            pub.pages && `pp. ${pub.pages}`,
          ]
            .filter(Boolean)
            .join(", ");

    return (
      <li key={pub.id} className="pub-entry">
        <span className="pub-year">{pub.year}</span>
        <div className="pub-body">
          <p className="pub-title">{pub.title}</p>
          {venue && <p className="pub-meta">{venue}</p>}
          {pub.coauthors && <p className="pub-coauthors">{pub.coauthors}</p>}
          {(pub.pdfUrl || pub.doi || pub.externalUrl) && (
            <div className="pub-links">
              {pub.pdfUrl && (
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  PDF
                </a>
              )}
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  doi:{pub.doi}
                </a>
              )}
              {pub.externalUrl && !pub.pdfUrl && !pub.doi && (
                <a
                  href={pub.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  Publisher ↗
                </a>
              )}
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <StyledPage id="main-content">
      <div className="page-inner">
        <p className="kicker page-kicker">Archive</p>
        <h1 className="page-heading">Publications</h1>
        <p className="page-note">
          Books and selected articles & chapters. For a complete list, visit{" "}
          <a
            href="https://scholar.google.com/citations?user=sf4XfXUAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          .
        </p>

        {/* Books */}
        <p className="section-label">Books Authored</p>
        <ul className="pub-list" aria-label="Authored books">
          {books.map(renderEntry)}
        </ul>

        {/* Articles */}
        <p className="section-label">Journal Articles (Selected)</p>
        <ul className="pub-list" aria-label="Journal articles">
          {articles.map(renderEntry)}
        </ul>

        <div className="archive-note">
          <p>
            This archive is partial at launch. For the complete publication record
            including book chapters, edited volumes, encyclopedia entries, and all
            journal articles, please visit{" "}
            <a
              href="https://scholar.google.com/citations?user=sf4XfXUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>{" "}
            or{" "}
            <a
              href="https://www.bc.edu/bc-web/schools/lynch-school/faculty-research/faculty-directory/stanton-wortham.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boston College Faculty Directory
            </a>
            .
          </p>
        </div>
      </div>
    </StyledPage>
  );
};
// #endregion

export default Publications;
