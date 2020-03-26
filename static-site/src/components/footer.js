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
          lg={4}
          sm={6}
          xs={12}>
            <div style={{'height':'300px'}}
              className="bg-dark">
            </div>
          </Col>
          <Col
          lg={4}
          sm={6}
          xs={12}>
            <div style={{'height':'300px'}}
              className="bg-dark">
            </div>
          </Col>
          <Col
          lg={4}
          sm={6}
          xs={12}>
            <div style={{'height':'300px'}}
              className="bg-dark">
            </div>
          </Col>
        <Col
          xs={12}>
            <p
              className="text-center mb-0">
                Hi-Tech Auto © {new Date().getFullYear()}
            </p>
          </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
