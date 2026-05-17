import styled from "styled-components";
import { Element } from "react-scroll";

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

  .media-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .media-entry {
    padding: var(--space-6) 0;
    border-top: 1px solid var(--color-border-whisper);
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .media-entry:last-child {
    border-bottom: 1px solid var(--color-border-whisper);
  }

  .media-type-tag {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .media-title {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.30;
    letter-spacing: -0.005em;
    color: var(--color-text-primary);
    margin: 0;
  }

  .media-description {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.65;
    color: var(--color-text-secondary);
    max-width: var(--prose-max);
    margin: 0;
  }

  .media-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-top: var(--space-2);
  }

  .media-link {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 100ms ease;
  }

  .media-link:hover {
    color: var(--color-accent-hover);
  }

  .media-credits {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.50;
    color: var(--color-text-muted);
    letter-spacing: 0.01em;
    margin: 0;
  }

  .media-awards {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.60;
    color: var(--color-text-muted);
    margin: 0;
  }
`;
// #endregion

// #region component
const PodcastMedia = () => {
  return (
    <Element name="Media" id="media">
      <StyledSection aria-labelledby="heading-podcast-film">
        <div className="section-inner">
          <p className="kicker section-kicker">Public Scholarship</p>
          <h2 id="heading-podcast-film" className="section-heading">Podcast and Film</h2>

          <ul className="media-list" aria-label="Podcast and film works">
            {/* Pulled Up Short */}
            <li className="media-entry">
              <span className="media-type-tag">Podcast · Ongoing</span>
              <h3 className="media-title">Pulled Up Short</h3>
              <p className="media-description">
                {/*
                  DRAFT — Provisional description, pending stakeholder approval.
                  [VERIFY: comfort with Gadamerian framing here]
                */}
                A podcast hosted through Boston College, in conversation with scholars,
                educators, and thinkers willing to sit with a genuinely hard question long
                enough to learn something from it. Each episode explores one contested
                question in education or philosophy and resists the quick answer.
              </p>
              <div className="media-links">
                <a
                  href="https://www.bc.edu/bc-web/sites/pulled-up-short.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  BC Podcast Page ↗
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/pulled-up-short/id1557763879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  Apple Podcasts ↗
                </a>
              </div>
            </li>

            {/* Adelante */}
            <li className="media-entry">
              <span className="media-type-tag">Documentary Film · 2014</span>
              <h3 className="media-title">Adelante</h3>
              <p className="media-description">
                A documentary following Mexican immigrants in Norristown, Pennsylvania, as
                they revitalized St. Patrick's Church and, with it, a neighborhood. Aired on
                more than thirty PBS affiliates and screened at over fifty college campuses.
                {/*
                  [VERIFY: confirm "executive producer" credit is correct in first-person voice]
                */}
              </p>
              <p className="media-awards">
                Silver Palm Award (Mexico International Film Festival, 2015) · Rising Star
                Award (Canada IFF, 2014) · Best Student Documentary (Catskill Mountains FF,
                2014)
              </p>
              <div className="media-links">
                <a
                  href="https://www.youtube.com/watch?v=SkclQtC45v8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </li>

            {/* Sobresalir */}
            <li className="media-entry">
              <span className="media-type-tag">Documentary Film · 2010</span>
              <h3 className="media-title">Sobresalir</h3>
              <p className="media-description">
                A shorter documentary made for teacher professional development, documenting
                how Mexican immigrant parents in the new Latino diaspora understand and
                navigate American schools.
              </p>
              <p className="media-credits">
                Stanton Wortham, Carlos Martínez, Sarah Lipinoga & Noam Osband
              </p>
            </li>
          </ul>
        </div>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default PodcastMedia;
