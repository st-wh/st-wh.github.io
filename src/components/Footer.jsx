import styled from "styled-components";
import { bcProfileUrl } from "../config";

// #region styled-components
const StyledFooter = styled.footer`
  background-color: var(--color-footer-bg);
  min-height: var(--min-footer-height);
  padding: var(--space-6) var(--space-5);
  display: flex;
  align-items: center;

  .footer-inner {
    max-width: var(--container-max);
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
  }

  .footer-copy {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    color: rgba(200, 195, 186, 0.7);
    margin: 0;
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: var(--space-5);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-link {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    color: rgba(200, 195, 186, 0.7);
    text-decoration: none;
    transition: color 100ms ease;

    &:hover {
      color: rgba(200, 195, 186, 1);
    }
  }
`;
// #endregion

// #region component
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {year} Stanton Wortham
        </p>

        <ul className="footer-links">
          <li>
            <a
              href={bcProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Boston College ↗
            </a>
          </li>
          <li>
            <a
              href="https://scholar.google.com/citations?user=sf4XfXUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Google Scholar ↗
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};
// #endregion

export default Footer;
