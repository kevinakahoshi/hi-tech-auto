import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const MessageBanner = (props) => {
  return (
    <Container
      fluid
      className="bg-secondary">
      <Row>
        <Col>
          <div
            className="d-flex justify-content-center p-3">
              <p
                className="my-auto mr-3 text-white">
                Due to COVID-19, we are temporarily closed.  Thank you for understanding.
              </p>
              <button
                onClick={props.closeBar}
                className="btn hi-tech-button">
                  Close
              </button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MessageBanner;
