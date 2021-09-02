import React, { useState } from 'react';
import { Image, Menu } from 'semantic-ui-react';
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
        <Image src={Logo} className='logo-size'/>
      </Menu.Item>
      {/* ELEC-79 Change this link to link to the login page */}
      <Menu.Item
        as={Link}
        to="/"
        name='login'
        active={activeItem === 'login'}
        onClick={handleItemClick}
      >
        Log In
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
    </Menu>

  );
};

export default Header;
