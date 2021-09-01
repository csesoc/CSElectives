import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, StepTitle } from 'semantic-ui-react';


const DropdownTags = (props) => {
  const { title, tags } = props;

  const tagItems = (x) => {
    return (<Dropdown.Item>{x}</Dropdown.Item>);
  };

  return (
    <Dropdown
      text= {title}
      icon='filter'
      floating
      labeled
      button
      className='icon'
    >
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Filter by tag' />
        {tags.map(tagItems)}
        <Dropdown.Item>Important</Dropdown.Item>
        <Dropdown.Item>Announcement</Dropdown.Item>
        <Dropdown.Item>Discussion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownTags.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default DropdownTags;
