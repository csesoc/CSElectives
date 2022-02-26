import React, { useState } from 'react';
import { Container, Image, Menu, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginModal from './login-modal/login-modal.js';
import Logo from '../assets/cselectives_beta.png';

// This header will appear on all pages
const Header = (props) => {
  const [activeItem, setActiveItem] = useState('home');
  const { courses, open, setOpen, loginMessage, setLoginMessage } = props;
  // const history = useHistory();

  /*
  const dropdownOptionFunc = (course) => {
    return {
      key: course.courseCode,
      text: `${course.courseCode} - ${course.title}`,
      value: course.courseCode,
    };
  };
  */

  // const dropdownOptionArray = Object.values(courses).map((course) => dropdownOptionFunc(course));

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  /*
  const handleDropdownSelect = (e, { value }) => {
    history.push(`/course/${value}`);
    setActiveItem(value);
  };
  */

  return (
    <Menu secondary>
      <Container>
        <Menu.Item
          as={Link}
          to="/"
          name='home'
          onClick={handleItemClick}
        >
          <div className="logo">
            <img src={Logo} width="50" />

          </div>
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/feedback"
          name='feedback'
          active={activeItem === 'feedback'}
          onClick={handleItemClick}
        >
          Feedback Form
        </Menu.Item>
        { /*
        <Menu.Item
          position='right'
        >
          { (
            <Dropdown
              icon='search'
              placeholder='Search course'
              search
              inline
              selection
              options={dropdownOptionArray}
              className='searchbar-dropdown'
              onChange={handleDropdownSelect}
            />
          )
          }
        </Menu.Item>
        */ }

        <Menu.Item position='right'>
          <LoginModal open={open} setOpen={setOpen} loginMessage={loginMessage} setLoginMessage={setLoginMessage} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

Header.propTypes = {
  courses: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  loginMessage: PropTypes.string,
  setLoginMessage: PropTypes.func,
};

export default Header;
