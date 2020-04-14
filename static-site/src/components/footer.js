import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import {
  Link
} from 'gatsby';

const Footer = () => (
  <footer
    className="bg-light pt-5 pb-3">
    <Container>
      <Row>
        <Col
          lg={4}
          md={6}
          xs={12}>
          <h5>
            Sitemap
          </h5>
          <p
            className="mb-0">
            <Link
              to="/">
              Home
            </Link>
          </p>
          <p
            className="mb-0">
            <Link
              to="/about/">
              About
            </Link>
          </p>
          <p
            className="mb-0">
            <Link
              to="/services/">
              Services
            </Link>
          </p>
          <p>
            <Link
              to="/contact/">
              Contact
            </Link>
          </p>
        </Col>
        <Col
          lg={4}
          md={6}
          xs={12}>
          <h5>
            Hours
          </h5>
          <div
            className="mb-3">
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Monday</p>
              <p
                className="mb-0">9:00AM - 6:00PM</p>
            </div>
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Tuesday</p>
              <p
                className="mb-0">9:00AM - 6:00PM</p>
            </div>
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Wednesday</p>
              <p
                className="mb-0">9:00AM - 6:00PM</p>
            </div>
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Thursday</p>
              <p
                className="mb-0">Closed</p>
            </div>
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Friday</p>
              <p
                className="mb-0">9:00AM - 6:00PM</p>
            </div>
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Saturday</p>
              <p
                className="mb-0">9:00AM - 6:00PM</p>
            </div>
            <div
              className="d-flex justify-content-between mb-1">
              <p
                className="mb-0">Sunday</p>
              <p
                className="mb-0">9:00AM - 6:00PM</p>
            </div>
          </div>
        </Col>
        <Col
        lg={4}
        xs={12}>
          <div
            className="bg-dark h-100 mb-3 d-flex">
              <h6
                className="m-auto text-white">
                  Map goes here
              </h6>
          </div>
        </Col>
        <Col
          xs={12}>
          <p
            className="text-center mt-3 mb-0">
              Hi-Tech Auto © {new Date().getFullYear()}
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
