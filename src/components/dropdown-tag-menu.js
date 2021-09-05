import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Checkbox } from 'semantic-ui-react';

const DropdownTags = (props) => {
  const { title, tagOptions, activeTags, setActiveTags } = props;

  const toggleSelection = (e, { label, checked }) => {
    if (checked) {
      setActiveTags([...activeTags, label]);
      console.log(activeTags);
    } else {
      setActiveTags(activeTags.filter((el) => el !== label));
      console.log(activeTags);
    }
  };

  const tagItems = (object) => {
    return (
      <Dropdown.Item key={object.value}>
        <Checkbox label={object.value} onChange={toggleSelection} />
      </Dropdown.Item>
    );
  };
  // Need to change how an item is on the tag menu is displayed after selected

  return (
    <Dropdown
      text = {title}
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

DropdownTags.propTypes = {
  title: PropTypes.string,
  tagOptions: PropTypes.array,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default DropdownTags;

/*
export default function App() {
  const [selection, setSelection] = useState([]);

  const toggleSelection = (e, { label, checked }) => {
    if (checked) {
      setSelection([...selection, label]);
    } else {
      setSelection(selection.filter(el => el !== label));
    }
  };

  return (
    <Segment basic>
      <p>Selection: {selection.length > 0 ? selection.join(", ") : "empty"}</p>

      <Dropdown item simple text="Select sports">
        <Dropdown.Menu>
          {sports.map(({ id, title }) => (
            <Dropdown.Item key={id}>
              <Checkbox label={title} onChange={toggleSelection} />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Segment>
  );
}
*/
