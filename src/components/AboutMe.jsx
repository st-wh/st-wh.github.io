import styled from "styled-components";
import { Element } from "react-scroll";

// #region styled-components
const StyledAbout = styled.section`
  background-color: var(--color-surface);
  padding-top: var(--space-9);
  padding-bottom: var(--space-9);
  padding-left: var(--space-5);
  padding-right: var(--space-5);

  .about-inner {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .about-kicker {
    margin-bottom: var(--space-4);
  }

  .about-heading {
    margin: 0 0 var(--space-7) 0;
  }

  .about-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }

  .about-image-wrap {
    display: flex;
    justify-content: flex-start;
  }

  .about-image {
    width: 100%;
    max-width: 280px;
    height: auto;
    border-radius: var(--radius-md);
    object-fit: cover;
    border: 1px solid var(--color-border-whisper);
    box-shadow: var(--shadow-sm);
  }

  .about-prose {
    max-width: var(--prose-max);
  }

  .about-subsection {
    margin-bottom: var(--space-7);
  }

  .about-subsection:last-child {
    margin-bottom: 0;
  }

  .about-subheading {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-4) 0;
  }

  .about-prose p {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-5) 0;
  }

  .about-prose p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .about-layout {
      grid-template-columns: 200px 1fr;
      gap: var(--space-8);
      align-items: start;
    }

    .about-image {
      max-width: 100%;
    }
  }
`;
// #endregion

// #region component
const AboutMe = () => {
  return (
    <Element name="About" id="about">
      <StyledAbout aria-labelledby="about-heading">
        <div className="about-inner">
          <p className="kicker about-kicker">About</p>
          <h2 id="about-heading" className="about-heading">Biography</h2>

          <div className="about-layout">
            <div className="about-image-wrap">
              <img
                src={process.env.PUBLIC_URL + "/images/bio_image.jpeg"}
                alt="Dr. Stanton Wortham"
                className="about-image"
              />
            </div>

            <div className="about-prose">
              <div className="about-subsection">
                <p className="about-subheading">Academic Journey and Leadership</p>
                <p>
                  Stanton Wortham earned his B.A. with highest honors from Swarthmore
                  College and his Ph.D. from the University of Chicago in Human Development.
                  Before assuming his current deanship at Boston College, he served for ten
                  years as Associate Dean for Academic Affairs and twice as Interim Dean at
                  the University of Pennsylvania Graduate School of Education. At Penn, he
                  also served as an Academic Director for Wharton Executive Education in the
                  area of workplace learning, applying his insights into human behavior to
                  corporate and organizational agility.
                </p>
              </div>

              <div className="about-subsection">
                <p className="about-subheading">Research and the Latino Diaspora</p>
                <p>
                  An interdisciplinary scholar, Dr. Wortham has authored or edited 11 books
                  and over 100 articles and chapters. His notable books include{" "}
                  <em>Learning Identity</em> (2006), <em>Bullish on Uncertainty</em> (2009),{" "}
                  <em>Discourse Analysis beyond the Speech Event</em> (2015), and{" "}
                  <em>Migration Narratives</em> (2020). Recently, his work has focused deeply
                  on Mexican immigrant and Mexican American adolescents living in areas of the
                  United States that have only recently become home to large numbers of
                  Latinos. This decade-long ethnographic research explores the fluid
                  identities of both newcomers and host communities, a project that has
                  yielded traditional academic publications as well as the documentary film,{" "}
                  <em>Adelante</em>.
                </p>
              </div>

              <div className="about-subsection">
                <p className="about-subheading">Educational Philosophy</p>
                <p>
                  At Boston College, Dr. Wortham and his colleagues are implementing a
                  comprehensive model of "formative education." This philosophy asserts that
                  educators bear the responsibility of nurturing the whole person, extending
                  far beyond standardized academics to include the complex interrelations
                  among emotional, ethical, and spiritual development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledAbout>
    </Element>
  );
};
// #endregion

export default AboutMe;
