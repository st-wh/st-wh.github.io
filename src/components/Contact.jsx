import styled from "styled-components";
import { Element } from "react-scroll";
import { bcProfileUrl, cvUrl } from "../config";

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
    margin: 0 0 var(--space-5) 0;
  }

  .contact-body {
    max-width: var(--prose-max);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .contact-body p {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--color-text-primary);
    margin: 0;
  }

  .contact-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    align-items: center;
  }

  .contact-link-primary {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 100ms ease;
  }

  .contact-link-primary:hover {
    color: var(--color-accent-hover);
  }


`;
// #endregion

// #region component
const Contact = () => {
  return (
    <Element name="Contact" id="contact">
      <StyledSection aria-labelledby="heading-contact">
        <div className="section-inner">
          <p className="kicker section-kicker">Contact</p>
          <h2 id="heading-contact" className="section-heading">Get in Touch</h2>

          <div className="contact-body">
            <p>
              For speaking engagements, media inquiries, and academic correspondence,
              please visit my institutional profile at Boston College.
            </p>

            <div className="contact-actions">
              <a
                href={bcProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-primary"
              >
                Boston College Faculty Profile ↗
              </a>
            </div>

            {cvUrl && (
              <p>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-primary"
                >
                  Download CV (PDF) ↗
                </a>
              </p>
            )}
          </div>
        </div>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;
