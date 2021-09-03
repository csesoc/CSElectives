import React, { useState } from 'react';
import { Button, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

// This header will appear on all pages
const Header = () => {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu pointing secondary>
      <Menu.Item
        as={Link}
        to="/"
        name='home'
        onClick={handleItemClick}
      >
        <Image src={Logo}/>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/course"
        name='courses'
        active={activeItem === 'courses'}
        onClick={handleItemClick}
      >
      Courses
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/review"
        name='review'
        active={activeItem === 'review'}
        onClick={handleItemClick}
      >
      Submit a review
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/login"
        name='login'
        onClick={handleItemClick}
        position='right'
      >
        <Button>Log In</Button>
      </Menu.Item>
    </Menu>

  );
};

export default Header;
