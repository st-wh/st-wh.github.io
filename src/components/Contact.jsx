import styled from "styled-components";
import { Element } from "react-scroll";
import Title from "./Title";
import { Container } from "react-bootstrap";

// #region styled-components
const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
`;
// #endregion

// #region component
const Contact = () => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Contact"} />
        </Container>
        <Container className="text-center py-4">
          <p className="lead">
            For inquiries, please visit my institutional profile at Boston College.
          </p>
          {/* TODO: Replace with verified BC faculty profile URL, then switch to <a> */}
          <button className="btn btn-outline-primary mt-3" disabled>
            Boston College Faculty Profile
          </button>
        </Container>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;
