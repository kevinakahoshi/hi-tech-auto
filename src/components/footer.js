import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LocationMap from './location-map';
import FooterHours from './footer-hours';
import FooterSitemap from './footer-sitemap';

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
          <FooterSitemap />
        </Col>
        <Col
          lg={4}
          md={6}
          xs={12}
          className="d-flex">
          <FooterHours />
        </Col>
        <Col
        lg={4}
        xs={12}>
          <LocationMap />
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
