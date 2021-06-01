import React from 'react';
import Header from './header';
import Footer from './footer';
import {
  Button,
  Modal,
  ModalBody
} from 'reactstrap';

const MessageBannerWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const closeModal = () => setIsOpen(() => false);

  return (
    <>
      <Header />
      {children}
      <Modal
        isOpen={Boolean(isOpen)}
        toggle={closeModal}
        centered={true}
        size="md"
        className="tablet-modal-dialog"
      >
        <ModalBody className="position-relative p-3" style={{ padding: '1rem !important' }}>
          <Button
            onClick={closeModal}
            className = "p-0 d-flex mr-0 ml-auto mb-3"
            style={{
              fontSize: '0'
            }}
            color="secondary"
            outline
          >
            <svg
              className="bi bi-x-square"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <h1
            className="text-center h3 mt-auto mr-auto mb-3 ml-auto"
            style={{
              maxWidth: '450px',
            }}
          >
            Hi-Tech Auto is Officially Closed for Business
          </h1>
          <p className="mb-0">
            Hi-Tech Auto has closed its doors permanently as of 05/31/21.
            We will no longer be taking on any new customers or appointments.
            We are thankful for the many years of support that the community
            has given us, and that we were able to serve your needs.
          </p>
        </ModalBody>
      </Modal>
      <Footer />
    </>
  )
};

export default MessageBannerWrapper;
