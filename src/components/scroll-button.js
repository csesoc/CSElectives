
import React, { useState } from 'react';
import { Icon, Transition } from 'semantic-ui-react';
import scrollToElement from 'scroll-to-element';

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
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
