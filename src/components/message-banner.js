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
      className="message-banner py-1">
      <Row>
        <Col
          xs={0}
          md={2} />
        <Col
          xs={10}
          md={8}>
            <div
              className="d-flex justify-content-sm-center justify-content-start">
              <small
                className="text-white text-md-center my-auto">
                Due to COVID-19, we are temporarily closed.  Thank you for understanding.
              </small>
            </div>
        </Col>
        <Col
          xs={2}>
          <div
            className="d-flex text-white h-100 justify-content-end">
            <svg
              onClick={props.closeBar}
              className="bi bi-x t message-banner-button my-auto pointer"
              width="1rem"
              height="1rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clipRule="evenodd"/>
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clipRule="evenodd"/>
            </svg>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MessageBanner;
