import React, { useState } from 'react';
import { Button, Container, Image, Menu, Dropdown, Modal, Form } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../assets/logo.svg';

// This header will appear on all pages
const Header = (props) => {
  const [activeItem, setActiveItem] = useState('home');
  const { courses } = props;
  const history = useHistory();
  const [open, setOpen] = useState(false);

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

  const handleDropdownSelect = (e, { value }) => {
    history.push(`/course/${value}`);
    setActiveItem(value);
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
              options={dropdownOptionArray}
              className='searchbar-dropdown'
              onChange={handleDropdownSelect}
            />
          )
          }
        </Menu.Item>
        <Menu.Item>
          <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='tiny'
            trigger={<Button primary>Log In</Button>}
          >
            <Modal.Header>Log In</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p> Please login with the same credentials as your UNSW account</p>
                <Form id="theform">
                  <Form.Input label='zID' placeholder='zID' />
                  <Form.Input label='Password' type='password' placeholder='Password' />
                  <Button
                    type="submit"
                    form="theform"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

Header.propTypes = {
  courses: PropTypes.object,
};

export default Header;
