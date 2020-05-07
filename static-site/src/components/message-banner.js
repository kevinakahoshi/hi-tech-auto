import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const MessageBanner = ({ children }) => {
  const [closeMessageBanner, setCloseMessageBanner] = React.useState(false);

  const closeBar = () => {
    setCloseMessageBanner(true);
  }

  return (
    <>
      <Container
        fluid
        className="bg-secondary">
        <Row>
          <Col>
            <div
              className="d-flex justify-content-center p-3">
                <p
                  className="my-auto mr-3 text-white">
                  Due to COVID-19, we are temporarily closed.
                </p>
                <button
                  onClick={closeBar}
                  className="btn hi-tech-button">
                    Close
                </button>
            </div>
          </Col>
        </Row>
      </Container>
      {children}
    </>
  )
}

export default MessageBanner;
