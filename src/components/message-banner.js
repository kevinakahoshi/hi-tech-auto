import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const MessageBanner = () => {
  return (
    <Container fluid className="message-banner py-1">
      <Row>
        <Col xs={12}>
          <div className="d-flex justify-content-sm-center justify-content-start">
            <small className="text-white text-md-center my-auto">
              Hi-Tech Auto has permanently closed its doors as of 05/31/21
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MessageBanner;
