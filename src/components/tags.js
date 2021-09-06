import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';


const Tag = (props) => {
  const { label, clearable, clickable } = props;
  return (
    <Label key={label} as={clickable && 'a'} circular>
      {label}
      {clearable && <Icon name='delete' />}
    </Label>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  clearable: PropTypes.bool,
  clickable: PropTypes.bool,
};

export default Tag;
