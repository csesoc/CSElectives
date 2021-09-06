import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

// Maybe what we can do here is make another component for tags which other
// components can use to input whatever tag they want
// For any questions please refer to Timmy


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
