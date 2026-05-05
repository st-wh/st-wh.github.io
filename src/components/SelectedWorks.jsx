import styled from "styled-components";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { selectedWorks } from "../data/selectedWorks";

// #region styled-components
const StyledSection = styled.section`
  background-color: var(--color-bg);
  padding-top: var(--space-9);
  padding-bottom: var(--space-9);
  padding-left: var(--space-5);
  padding-right: var(--space-5);

  .section-inner {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .section-kicker {
    margin-bottom: var(--space-4);
  }

  .section-heading {
    margin: 0 0 var(--space-7) 0;
  }

  .works-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .work-entry {
    padding: var(--space-5) 0;
    border-top: 1px solid var(--color-border-whisper);
    display: grid;
    grid-template-columns: 3.5rem 1fr;
    gap: 0 var(--space-5);
  }

  .work-entry:last-child {
    border-bottom: 1px solid var(--color-border-whisper);
  }

  .work-year {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    color: var(--color-text-muted);
    line-height: 1.65;
    padding-top: 2px;
  }

  .work-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .work-title {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.45;
    color: var(--color-text-primary);
    margin: 0;
    transition: color 100ms ease;
  }

  .work-annotation {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.60;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .work-meta {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.50;
    color: var(--color-text-muted);
    letter-spacing: 0.01em;
    margin: 0;
  }

  .works-footer {
    margin-top: var(--space-7);
    font-family: var(--font-sans);
    font-size: 0.9375rem;
  }

  .works-footer a {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: 500;
    transition: color 100ms ease;
  }

  .works-footer a:hover {
    color: var(--color-accent-hover);
  }

  @media (max-width: 480px) {
    .work-entry {
      grid-template-columns: 1fr;
      gap: var(--space-2);
    }
  }
`;
// #endregion

// #region component
const SelectedWorks = () => {
  return (
    <Element name="Publications" id="publications-anchor">
      <StyledSection>
        <div className="section-inner">
          <p className="kicker section-kicker">Selected Works</p>
          <h2 className="section-heading">Landmark Publications</h2>

          <ul className="works-list" aria-label="Selected publications">
            {selectedWorks.map((work) => {
              const venue = work.publisher
                ? `${work.publisher}${work.volume ? `, ${work.volume}` : ""}${work.pages ? `, pp. ${work.pages}` : ""}`
                : work.journal
                ? `${work.journal}${work.volume ? ` ${work.volume}` : ""}${work.pages ? `, pp. ${work.pages}` : ""}`
                : null;

              return (
                <li key={work.id} className="work-entry">
                  <span className="work-year">{work.year}</span>
                  <div className="work-body">
                    <p className="work-title">{work.title}</p>
                    {work.annotation && (
                      <p className="work-annotation">{work.annotation}</p>
                    )}
                    <p className="work-meta">
                      {venue}
                      {work.coauthors && ` · ${work.coauthors}`}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="works-footer">
            <Link to="/publications">View full publication archive →</Link>
          </p>
        </div>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default SelectedWorks;
