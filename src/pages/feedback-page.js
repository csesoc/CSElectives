import React from 'react';

const FeedbackPage = () => {
  return (
    <div className='feedback-form'>
      <iframe
        // eslint-disable-next-line max-len
        src="https://docs.google.com/forms/d/e/1FAIpQLScXynuaSnPXQ5ON0uEXdszEqM3V2NCJekriBdk_-b-UHY-GGA/viewform?embedded=true"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FeedbackPage;
