import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
const Topbar = () => {
  return (
    <div className="top-bar-wrapper bg-secondary py-2">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 align-items0-center">
          <Col>
            <div className="top-bar-inner d-flex text-light justify-content-center justify-content-lg-start flex-column flex-md-row align-items-center">
              <div className="me-4 ">
                <span className="d-flex align-items-center">
                  <HiMail className="text-white fs-5 me-1" />
                  <a href="mailto:info@aroma.com" className="text-decoration-none text-white">info@aroma.com</a>
                </span>
              </div>
              <div className="div">
                <span className="d-flex align-items-center">
                  <IoCall className="text-white fs-5 " />
                  <a href="tel:+91 90549 19054 " className='text-decoration-none text-white'>+91 90549 19054</a>
                </span>
              </div>
            </div>
          </Col>
          <Col className="text-light pt-2 pt-lg-0">
            <div className="icon-text d-flex align-items-center justify-content-lg-end justify-content-center">
              <h6 className="mb-0">Follow Us :</h6>
              <div className="icon-box mx-2">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedin />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
