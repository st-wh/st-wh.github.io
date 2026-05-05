import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";

// #region styled-components
const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  .down-container {
    height: 10rem;
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
};

const Hero = ({ name, tagline }) => {
  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="display-2 fw-light mb-3">
              {name ?? ""}
            </h1>
            {tagline && (
              <p className="lead text-muted">{tagline}</p>
            )}
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
