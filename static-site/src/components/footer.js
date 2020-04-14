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
          <div
            className="p-3 mb-3 mb-md-0 border rounded">
            <h5>
              Sitemap
            </h5>
            <div
              className="footer-sitemap d-flex flex-wrap justify-content-between">
              <p
                className="mb-3 mb-md-0">
                <Link
                  to="/">
                  Home
                </Link>
              </p>
              <p
                className="mb-3 mb-md-0">
                <Link
                  to="/about/">
                  About
                </Link>
              </p>
              <p
                className="mb-3 mb-md-0">
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
            </div>
            <h5>
              Phone
            </h5>
            <p
              className="mb-0">
              <a
                href="+16264481733">
                626-448-1733
              </a>
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          md={6}
          xs={12}>
          <div
            className="p-3 mb-3 mb-md-0 border rounded">
            <h5>
              Hours
            </h5>
            <div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-3">Monday</p>
                <p
                  className="mb-3">9:00AM - 6:00PM</p>
              </div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-3">Tuesday</p>
                <p
                  className="mb-3">9:00AM - 6:00PM</p>
              </div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-3">Wednesday</p>
                <p
                  className="mb-3">9:00AM - 6:00PM</p>
              </div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-3">Thursday</p>
                <p
                  className="mb-3">Closed</p>
              </div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-3">Friday</p>
                <p
                  className="mb-3">9:00AM - 6:00PM</p>
              </div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-3">Saturday</p>
                <p
                  className="mb-3">9:00AM - 6:00PM</p>
              </div>
              <div
                className="d-flex justify-content-between">
                <p
                  className="mb-0">Sunday</p>
                <p
                  className="mb-0">9:00AM - 6:00PM</p>
              </div>
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
