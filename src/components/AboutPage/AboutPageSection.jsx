import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../images/about-page-section.jpg";
import { useNavigate } from "react-router-dom";
const AboutPageSection = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/shop");
  };
  return (
    <div className="about-page-wrapper py-5">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 align-items-center">
          <Col className="about-page-section-box">
            <img src={about} alt="" className="img-fluid" />
          </Col>
          <Col>
            <div className="about-page-text">
              <h5 className="fw-light heading-small-global">
                <i>About us</i>
              </h5>
              <h2 className="global-heading">The Ultimate Aroma Experience</h2>
              <p className="global-para my-3">
                Rooted in a commitment to natural health, Aroma was founded with
                the vision of offering a holistic approach to wellness. Our
                journey began with a simple belief: that the Earth provides us
                with everything we need to lead healthy, vibrant lives. Guided
                by this philosophy, we set out to create a haven for those
                seeking natural solutions to enhance their well-being.
                <br />
                <br />
                Rooted in a commitment to natural health, Aroma was founded with
                the vision of offering a holistic approach to wellness. Our
                journey began with a simple belief: that the Earth provides us
                with everything we need to lead healthy, vibrant lives. Guided
                by this philosophy, we set out to create a haven for those
                seeking natural solutions to enhance their well-being.
              </p>
              <button className="global-btn mt-3" onClick={navigateHandler}>
                Shop Our Products
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPageSection;
