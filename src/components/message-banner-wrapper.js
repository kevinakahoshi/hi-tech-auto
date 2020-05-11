import React from 'react';
import MessageBanner from './message-banner';
import Header from './header';
import Footer from './footer';

const MessageBannerWrapper = ({ children }) => {
  const [closeMessageBanner, setCloseMessageBanner] = React.useState(false);

  const closeBar = () => {
    setCloseMessageBanner(true);
  }

  return (
    <>
      {closeMessageBanner
        ? null
        : <MessageBanner
        closeBar={closeBar} />}
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default MessageBannerWrapper;
