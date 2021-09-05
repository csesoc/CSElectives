import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const DropdownTags = (props) => {
  const { title, tagOptions, activeTags, setActiveTags } = props;

  const tagItems = (x) => {
    return (<Dropdown.Item>{x}</Dropdown.Item>);
  };

  // Need to change how an item is on the tag menu is displayed after selected

  return (
    <Dropdown
      placeholder={title}
      selection
      clearable
      className='icon'
      options={tagOptions}
    >
    </Dropdown>
  );
};

DropdownTags.propTypes = {
  title: PropTypes.string,
  tagOptions: PropTypes.array,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default DropdownTags;
