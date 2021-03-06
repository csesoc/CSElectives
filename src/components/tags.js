import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

const Tag = (props) => {
  const { label, className, activeTags, setActiveTags, clearable, clickable } = props;

  const removeTag = (e, { text }) => {
    setActiveTags(activeTags.filter((el) => el !== text));
  };

  return (
    <Label key={label} className={className} as={clickable && 'a'} circular>
      {label}
      {clearable && <Icon text={label} name='delete' onClick={removeTag} />}
    </Label>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  clickable: PropTypes.bool,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default Tag;
