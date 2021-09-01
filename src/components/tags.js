import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Label } from 'semantic-ui-react';

const LabelExampleIcon = (props) => {
  const { code } = props;

  return (
    <div>
      <Label as='a'>
        {code}
        <Icon name='delete' />
      </Label>
    </div>
  );
};

LabelExampleIcon.propTypes = {
  code: PropTypes.string,
};

export default LabelExampleIcon;
