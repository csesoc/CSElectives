import React from 'react';
import { Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

// This header will appear on all pages
const Header = () => {
  return (

    // Menu component: https://react.semantic-ui.com/collections/menu/
    // You will want to check out the 'pointing' and 'secondary' attributes to
    // achieve the line effect specified in the Figma.
    <Menu>
      <Menu.Item as={Link} to="/">
        <Image src={Logo}/>
      </Menu.Item>
      {/* ELEC-79 Change this link to link to the login page */}
      <Menu.Item as={Link} to="/">
        <b>Log In</b>
      </Menu.Item>
      <Menu.Item as={Link} to="/course">
      Courses
      </Menu.Item>
      <Menu.Item as={Link} to="/review">
      Submit a review
      </Menu.Item>
    </Menu>

  );
};

export default Header;
