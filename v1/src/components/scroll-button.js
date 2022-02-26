
import React, { useState } from 'react';
import { Icon, Transition } from 'semantic-ui-react';
import scrollToElement from 'scroll-to-element';

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false);
  let mobileView = false;
  const mediaQuery = window.matchMedia('(min-width: 480px)');

  const checkMobileView = (e) => {
    if (e.matches) {
      mobileView = false;
    } else {
      mobileView = true;
    }
  };

  checkMobileView(mediaQuery);
  mediaQuery.onchange = checkMobileView;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300 && mobileView === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <Transition visible={visible} animation='scale' duration={500}>
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
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Transition>
  );
};

export default ScrollButton;
