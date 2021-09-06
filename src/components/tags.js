import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

// Maybe what we can do here is make another component for tags which other
// components can use to input whatever tag they want
// For any questions please refer to Timmy


const Tag = (props) => {
  const { label, canDelete, clickable } = props;

  if (canDelete) {
    return (
      <Label key={label} as='a' circular>
        {label}
        <Icon name='delete' />
      </Label>
    );
  }
  if (clickable) {
    return (
      <Label key={label} as='a' circular>
        {label}
      </Label>
    );
  }
  return (
    <Label key={label} circular>
      {label}
    </Label>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  canDelete: PropTypes.bool,
  clickable: PropTypes.bool,
};

export default Tag;
