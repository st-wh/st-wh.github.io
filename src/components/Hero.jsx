import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

// #region styled-components
const StyledHero = styled.header`
  background-color: var(--color-bg);
  padding-top: var(--space-9);
  padding-bottom: var(--space-8);
  padding-left: var(--space-5);
  padding-right: var(--space-5);

  .hero-inner {
    max-width: var(--container-max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .hero-photo-wrap {
    display: flex;
    justify-content: flex-start;
  }

  .hero-photo {
    width: 120px;
    height: 120px;
    border-radius: var(--radius-md);
    object-fit: cover;
    object-position: center top;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
  }

  .hero-name {
    font-family: var(--font-serif);
    font-size: clamp(2.25rem, 5vw, 3rem);
    font-weight: 300;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-3) 0;
  }

  .hero-title {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    font-weight: 400;
    line-height: 1.55;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-6) 0;
  }

  .hero-subcopy {
    font-family: var(--font-sans);
    font-size: 1.1875rem;
    font-weight: 400;
    line-height: 1.55;
    color: var(--color-text-secondary);
    max-width: 560px;
    margin: 0 0 var(--space-6) 0;
  }

  .hero-cta {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    transition: color 100ms ease;

    &:hover {
      color: var(--color-accent-hover);
    }
  }

  @media (min-width: 640px) {
    .hero-inner {
      grid-template-columns: 1fr 240px;
      gap: 0 var(--space-8);
      align-items: start;
    }

    .hero-photo-wrap {
      order: 2;
      justify-content: flex-end;
      padding-top: var(--space-2);
    }

    .hero-photo {
      width: 100%;
      height: auto;
      aspect-ratio: 3 / 4;
    }
  }

  @media (max-width: 639px) {
    padding-top: var(--space-7);
    padding-bottom: var(--space-7);
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
  titleLines: PropTypes.arrayOf(PropTypes.string),
  headshot: PropTypes.string,
};

const Hero = ({ name, titleLines = [], headshot }) => {
  const displayName = name || "Stanton Wortham";

  return (
    <StyledHero>
      <div className="hero-inner">
        {headshot && (
          <div className="hero-photo-wrap">
            <img
              src={headshot}
              alt="Dr. Stanton Wortham"
              className="hero-photo"
            />
          </div>
        )}

        <div className="hero-text">
          <h1 className="hero-name">{displayName}</h1>

          {titleLines.length > 0 && (
            <p className="hero-title">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}

          {/* Draft A hero statement — provisional copy, pending stakeholder approval */}
          <p className="hero-subcopy">
            I study how language shapes who we become — in classrooms, in families, and
            across the arc of a life. My work brings together discourse analysis, the
            education of immigrant communities, and the question at the center of everything:
            what does it mean to form a whole person?
          </p>

          <Link
            to="About"
            smooth={true}
            offset={-64}
            duration={400}
            className="hero-cta"
            tabIndex={0}
            aria-label="Read more about Stanton Wortham"
          >
            Read more ↓
          </Link>
        </div>
      </div>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
