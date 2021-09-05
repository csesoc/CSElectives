import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon, Button } from 'semantic-ui-react';

const ViewOptionsToggle = () => (
  <>
    <Button.Group icon>
      <Button>
        <Icon name='th' />
      </Button>
      <Button>
        <Icon name='list' />
      </Button>
    </Button.Group>
  </>
);

export default ViewOptionsToggle;
