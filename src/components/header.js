import React, { useState } from 'react';
import { Button, Container, Image, Menu, Input } from 'semantic-ui-react';
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
      <Container>
        <Menu.Item
          as={Link}
          to="/"
          name='home'
          onClick={handleItemClick}
        >
          <Image src={Logo} size='small' />
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
          position='right'
        >
          {activeItem !== 'home' && <Input icon='search' placeholder='COMP1511' /> }
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/login"
          name='login'
          onClick={handleItemClick}
        >
          <Button primary>Log In</Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
