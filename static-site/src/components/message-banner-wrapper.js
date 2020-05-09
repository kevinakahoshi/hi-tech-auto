import React from 'react';
import MessageBanner from './message-banner';

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
      {children}
    </>
  )
};

export default MessageBannerWrapper;
