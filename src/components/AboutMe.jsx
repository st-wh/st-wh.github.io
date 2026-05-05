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
    margin-bottom: var(--space-7);
  }

  .about-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .about-prose {
    max-width: var(--prose-max);
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

  .about-photo-slot {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .about-photo {
    width: 220px;
    height: 220px;
    border-radius: var(--radius-md);
    object-fit: cover;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
  }

  .about-photo-placeholder {
    width: 220px;
    height: 220px;
    border-radius: var(--radius-md);
    background-color: var(--color-surface-raised);
    border: 1px dashed var(--color-border);
  }

  @media (min-width: 768px) {
    .about-layout {
      grid-template-columns: 1fr 240px;
      align-items: start;
    }
  }
`;
// #endregion

// #region component
const AboutMe = ({ headshot }) => {
  return (
    <Element name="About" id="about">
      <StyledAbout>
        <div className="about-inner">
          <p className="kicker about-kicker">About</p>

          <div className="about-layout">
            <div className="about-prose">
              {/*
                DRAFT COPY — Three paragraphs below are provisional.
                Pending approval from Dr. Wortham before final publication.
                [VERIFY] items noted inline in comments.
              */}
              <p>
                For more than three decades, I have been asking a deceptively simple
                question: how does education change a person? Not what students are taught,
                but who they become — how the daily texture of classroom talk, teacher
                expectation, and the stories we tell about ourselves accumulate into a sense
                of identity and a way of moving through the world.
              </p>
              <p>
                That question has taken me many places. Into rural Pennsylvania elementary
                schools, where I watched how teachers' language about a student could, over
                time, shape that student's sense of what kind of learner he was. Into the
                churches and civic institutions of a small Pennsylvania city, where Mexican
                immigrant families were building new lives in a country that had not expected
                them and was not sure how to receive them.{/* [VERIFY: acceptable phrasing in first-person voice] */}{" "}
                Into conversations about what it would mean to design schools and universities
                that attend to the whole person — not just measurable outcomes, but purpose,
                community, and formation.
              </p>
              <p>
                I have written six books, produced two documentary films, and spent the last
                several years hosting a podcast called{" "}
                <a
                  href="https://www.bc.edu/bc-web/sites/pulled-up-short.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pulled Up Short
                </a>
                , where I sit with scholars, educators, and thinkers to explore the questions
                in education that resist easy answers. I am currently Dean of the Lynch School
                of Education and Human Development at Boston College, where our work on
                formative education{/* [VERIFY: comfort with "formative education" in first-person voice here] */}{" "}
                — anchored in the{" "}
                <a
                  href="https://www.bc.edu/content/bc-web/schools/lynch-school/centers-initiatives/transformative-ed-lab.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transformative Education Lab
                </a>
                {" "}— gives those questions an institutional home. I chair the board of the{" "}
                <a
                  href="https://cped.memberclicks.net/board-of-directors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carnegie Project on the Education Doctorate
                </a>
                , and in 2019 I was elected to the{" "}
                <a
                  href="https://naeducation.org/member/stanton-wortham/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Academy of Education
                </a>
                .
              </p>
            </div>

            <div className="about-photo-slot">
              {headshot ? (
                <img
                  src={headshot}
                  alt="Dr. Stanton Wortham"
                  className="about-photo"
                  loading="lazy"
                />
              ) : (
                /* Headshot slot — drop headshot.jpg in public/images/ then update Home.jsx */
                <div className="about-photo-placeholder" aria-hidden="true" />
              )}
            </div>
          </div>
        </div>
      </StyledAbout>
    </Element>
  );
};
// #endregion

export default AboutMe;
