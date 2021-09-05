import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Checkbox } from 'semantic-ui-react';

const DropdownTagsMenu = (props) => {
  const { title, tagOptions, activeTags, setActiveTags } = props;

  /* const toggleSelection = (e, { label, checked }) => {
    if (checked) {
      setActiveTags([...activeTags, label]);
    } else {
      setActiveTags(activeTags.filter((el) => el !== label));
      // console.log(activeTags);
    }
    console.log(activeTags);
  };*/

  // This part works pretty sure
  const checkChecked = (label, activeTags) => {
    return (activeTags.indexOf(label) > -1);
  };


  const toggleSelectionDrop = (e, { text }) => {
    console.log(text);
    if (activeTags.indexOf(text) > -1) {
      setActiveTags(activeTags.filter((el) => el !== text));
    } else {
      setActiveTags([...activeTags, text]);
    }
  };

  const tagItems = (object) => {
    return (
      <Dropdown.Item
        text={object.value}
        onClick={toggleSelectionDrop}
      >
        <Checkbox
          label={object.value}
          checked={checkChecked(object.value, activeTags)}
        />
      </Dropdown.Item>
    );
  };

  // Not sure how to get the arguments from onclick, get hayes help pls
  return (
    <Dropdown
      text={title}
      item
      simple
      className='icon'
    >
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Filter by tag' />
        {tagOptions.map(tagItems)}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownTagsMenu.propTypes = {
  title: PropTypes.string,
  tagOptions: PropTypes.array,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default DropdownTagsMenu;
