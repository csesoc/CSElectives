import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Checkbox } from 'semantic-ui-react';

const DropdownTagsMenu = (props) => {
  const { title, tagOptions, activeTags, setActiveTags } = props;

  const toggleSelectionDrop = (e, object ) => {
    if (activeTags.includes(object.text)) {
      setActiveTags(activeTags.filter((el) => el !== object.text));
    } else {
      setActiveTags([...activeTags, object.text].sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      }));
    }
  };

  const tagItems = (object, index) => {
    return (
      <Dropdown.Item
        key={index}
        text={object.text}
        value={object.value}
        onClick={(e, object) => toggleSelectionDrop(e, object)}
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
