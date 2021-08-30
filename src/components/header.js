import { Image, Menu } from "semantic-ui-react";

import Logo from '../assets/logo.svg';

// This header will appear on all pages
const Header = () => {

  return (

    // Menu component: https://react.semantic-ui.com/collections/menu/
    // You will want to check out the 'pointing' and 'secondary' attributes to achieve the line effect specified in the Figma.
    <Menu>
      <Image src={Logo}/>
      <Menu.Item
        name='Menu Item 1'
      />
      <Menu.Item
        name='Menu Item 2'
      />

      {/* Temporary links for now */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/course">Course</a></li>
        <li><a href="/review">Review</a></li>
      </ul>
    </Menu>

  );
};

export default Header;