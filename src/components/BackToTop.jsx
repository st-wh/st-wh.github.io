import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

// #region styled-components
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transition: opacity 200ms ease, visibility 200ms ease;

  &.show-up {
    visibility: visible;
    opacity: 1;
  }

  .back-to-top-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background-color: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    box-shadow: var(--shadow-sm);
    transition: color 100ms ease, box-shadow 100ms ease;
    cursor: pointer;

    &:hover {
      color: var(--color-accent);
      box-shadow: var(--shadow-hover);
    }
  }
`;
// #endregion

// #region component
const BackToTop = ({ home = "Home" }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      if (window.scrollY > 500) {
        ref.current.classList.add("show-up");
      } else {
        ref.current.classList.remove("show-up");
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <StyledDiv ref={ref}>
      <Link to={home} smooth={true} duration={400} className="back-to-top-link" role="button" aria-label="Back to top">
        <Icon icon="fa6-solid:chevron-up" width="14" />
      </Link>
    </StyledDiv>
  );
};
// #endregion

export default BackToTop;
