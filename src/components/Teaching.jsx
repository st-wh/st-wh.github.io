import styled from "styled-components";
import { Element } from "react-scroll";

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

  .teaching-body {
    max-width: var(--prose-max);
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .teaching-body p {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--color-text-primary);
    margin: 0;
  }

  .course-group {
    margin-top: var(--space-6);
  }

  .course-group-label {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-3) 0;
  }

  .course-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .course-entry {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.60;
    color: var(--color-text-primary);
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--color-border-whisper);
  }

  .course-entry:first-child {
    border-top: 1px solid var(--color-border-whisper);
  }
`;
// #endregion

// Course data — verified from VITA 23.docx
const courseGroups = [
  {
    institution: "Boston College",
    courses: ["Formative Education and Whole-Person Development"],
  },
  {
    institution: "University of Pennsylvania",
    courses: [
      "Approaches to Learning and Conceptions of Human Nature",
      "Beyond Context",
      "Education, Culture & Society",
      "Introduction to Ethnographic and Qualitative Methods",
      "Linguistic Anthropology of Education",
      "Methods of Discourse Analysis",
      "Narrating the Self",
      "Social Foundations of Education",
    ],
  },
  {
    institution: "Bates College",
    courses: [
      "Action Research in Psychology & Education",
      "Curriculum",
      "Learning",
      "Perspectives on Education",
    ],
  },
];

// #region component
const Teaching = () => {
  return (
    <Element name="Teaching" id="teaching">
      <StyledSection>
        <div className="section-inner">
          <p className="kicker section-kicker">Pedagogy</p>
          <h2 className="section-heading">Teaching and Mentorship</h2>

          <div className="teaching-body">
            <p>
              My approach to teaching is rooted in the same questions that animate my
              research: how do people come to understand themselves through the act of
              learning? I have taught courses in discourse analysis, qualitative methods,
              educational foundations, and the anthropology of education at every level,
              from undergraduate seminars to doctoral proseminars.
            </p>
            <p>
              I believe that good teaching, like good scholarship, requires sitting with
              uncertainty long enough to learn something from it.
            </p>
          </div>

          <div>
            {courseGroups.map((group) => (
              <div key={group.institution} className="course-group">
                <p className="course-group-label">{group.institution}</p>
                <ul className="course-list">
                  {group.courses.map((course) => (
                    <li key={course} className="course-entry">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Teaching;
