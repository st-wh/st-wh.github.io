import styled from "styled-components";
import { Element } from "react-scroll";
import { researchAreas } from "../data/researchAreas";

// #region styled-components
const StyledSection = styled.section`
  background-color: var(--color-surface);
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

  .areas-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  .area-entry {
    padding: var(--space-6) 0;
    border-top: 1px solid var(--color-border-whisper);
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .area-entry:last-child {
    border-bottom: 1px solid var(--color-border-whisper);
  }

  .area-title {
    font-family: var(--font-serif);
    font-size: 1.1875rem;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.005em;
    color: var(--color-text-primary);
    margin: 0;
  }

  .area-description {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.65;
    color: var(--color-text-secondary);
    max-width: var(--prose-max);
    margin: 0;
  }

  @media (min-width: 640px) {
    .area-entry {
      grid-template-columns: 240px 1fr;
      align-items: start;
      gap: var(--space-6);
    }
  }
`;
// #endregion

// #region component
const ResearchAreas = () => {
  return (
    <Element name="Research" id="research">
      <StyledSection aria-labelledby="heading-research-areas">
        <div className="section-inner">
          <p className="kicker section-kicker">Scholarship</p>
          <h2 id="heading-research-areas" className="section-heading">Research Areas</h2>

          <ul className="areas-list" aria-label="Research areas">
            {researchAreas.map((area) => (
              <li key={area.id} className="area-entry">
                <h3 className="area-title">{area.title}</h3>
                <p className="area-description">{area.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default ResearchAreas;
