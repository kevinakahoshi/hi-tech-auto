import React from 'react';
import MessageBannerWrapper from './src/components/message-banner-wrapper';

export const wrapPageElement = ({ element, props }) => (
  <MessageBannerWrapper {...props}>
    {element}
  </MessageBannerWrapper>
);
