import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

const LabelExampleIcon = (props) => {
  const { code } = props;

  return (
    <div>
      {/* this currently creates a tag bubble of EACH color for EACH label */}
      {colors.map((color) => (
        <Label color={color} key={color} as='a'>
          {code}
          <Icon name='delete' />
        </Label>
      ))}
    </div>
  );
};

LabelExampleIcon.propTypes = {
  code: PropTypes.string,
};

export default LabelExampleIcon;
