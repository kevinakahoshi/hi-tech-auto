import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import {
  Link
} from 'gatsby';
import LocationMap from './location-map';

const Footer = () => (
  <footer
    className="bg-light pt-5 pb-3">
    <Container>
      <Row>
        <Col
          lg={4}
          md={6}
          xs={12}
          className="d-flex">
          <div
            className="footer-boxes p-3 mb-3 border rounded w-100 align-items-stretch">
            <h5
              className="h4">
              Sitemap
            </h5>
            <div
              className="footer-sitemap d-flex flex-wrap justify-content-between">
              <p>
                <Link
                  className="footer-nav-link"
                  to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="footer-nav-link"
                  to="/about/">
                  About
                </Link>
              </p>
              <p>
                <Link
                  className="footer-nav-link"
                  to="/services/">
                  Services
                </Link>
              </p>
              <p>
                <Link
                  className="footer-nav-link"
                  to="/contact/">
                  Contact
                </Link>
              </p>
            </div>
            <div
              className="dropdown-divider mt-0 mb-3"></div>
            <h5
              className="h4">
              Phone
            </h5>
            <p>
              <a
                className="footer-nav-link"
                href="+16264431788">
                626-443-1788
              </a>
            </p>
            <div
              className="dropdown-divider mt-0 mb-3"></div>
            <h5
              className="h4">
              Address
            </h5>
            <p
              className="mb-0">
              <a
                className="footer-nav-link"
                href="https://goo.gl/maps/FPit6BzCJBE5aPV38"
                target="_blank"
                rel="noopener noreferrer">
                  4534 Baldwin Ave,<br/>
                  El Monte, CA 91731
              </a>
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          md={6}
          xs={12}
          className="d-flex">
          <div
            className="footer-boxes p-3 mb-3 mb-lg-0 border rounded w-100 align-items-stretch">
            <h5
              className="h4">
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
            className="footer-boxes">
            <LocationMap />
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
