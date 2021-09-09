import React, { useState } from 'react';
import { Button, Container, Image, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../assets/logo.svg';

// This header will appear on all pages
const Header = (props) => {
  const [activeItem, setActiveItem] = useState('home');
  const { courses } = props;

  const dropdownOptionFunc = (course) => {
    return {
      key: course.courseCode,
      text: `${course.courseCode} - ${course.title}`,
      value: course.courseCode,
    };
  };

  const dropdownOptionArray = Object.values(courses).map((course) => dropdownOptionFunc(course));

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
          {activeItem !== 'home' && (
            <Dropdown
              icon='search'
              placeholder='Search course'
              search
              inline
              selection
              wrapSelection={false}
              options={dropdownOptionArray}
              className='searchbar-dropdown'
            />
          )
          }
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

Header.propTypes = {
  courses: PropTypes.object,
};

export default Header;
