import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Checkbox } from 'semantic-ui-react';

const DropdownTagsMenu = (props) => {
  const { title, tagOptions, activeTags, setActiveTags } = props;

  const toggleSelectionDrop = (e, { text }) => {
    if (activeTags.includes(text)) {
      setActiveTags(activeTags.filter((el) => el !== text));
    } else {
      setActiveTags([...activeTags, text].sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      }));
    }
  };

  const tagItems = (object) => {
    return (
      <Dropdown.Item
        text={object.value}
        onClick={toggleSelectionDrop}
      >
        <Checkbox
          className={'checkbox-' + title.toLowerCase()}
          checked={activeTags.includes(object.value)}
          label={object.value}
        />

      </Dropdown.Item>
    );
  };

  return (
    <Dropdown
      text={title}
      item
      simple
      className='icon'
    >
      <Dropdown.Menu className={title.toLowerCase()}>
        <Dropdown.Header icon='tags' content={`Filter by ${title}`} />
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
