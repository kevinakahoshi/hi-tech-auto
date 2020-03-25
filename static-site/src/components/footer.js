import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Footer = () => (
  <footer
    className="bg-light py-5">
    <Container>
      <Row>
        <Col
          xs={12}>
            <p
              className="text-center mb-0">Hi-Tech Auto © {new Date().getFullYear()}</p>
          </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
