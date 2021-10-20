import React from 'react';
import { Icon } from 'semantic-ui-react';
import scrollToElement from 'scroll-to-element';

const ScrollToTopButton = () => {
  return (
    <div className='scroll-button-container'>
      <Icon
        name='chevron circle up'
        size='huge'
        className='scroll-up-button'
        onClick={
          () => scrollToElement('#root', {
            ease: 'in-out-cube',
            duration: 1000,
          })
        }
      />
    </div>
  );
};

export default ScrollToTopButton;
