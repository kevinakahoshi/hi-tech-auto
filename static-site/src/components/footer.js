import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Footer = () => (
  <footer
    className="bg-light pt-5 pb-3">
    <Container>
      <Row>
        <Col
          lg={4}
          xs={6}>
            <h5>
              Sitemap
            </h5>
            <p
              className="mb-0">
              Home
            </p>
            <p
              className="mb-0">
              About
            </p>
            <p
              className="mb-0">
              Services
            </p>
            <p>
              Contact
            </p>
          </Col>
          <Col
          lg={4}
          xs={6}>
            <h5>
              Address
            </h5>
            <p
              className="mb-0">
              Hi-Tech Auto
            </p>
            <p
              className="mb-0">
              4534 Baldwin Ave,
            </p>
            <p>
               El Monte, CA 91731
            </p>
          </Col>
          <Col
          lg={4}
          sm={6}
          xs={12}>
            <div
              className="bg-dark h-100 mb-3">
            </div>
          </Col>
        <Col
          xs={12}>
            <p
              className="text-center mt-1 mb-0">
                Hi-Tech Auto © {new Date().getFullYear()}
            </p>
          </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
