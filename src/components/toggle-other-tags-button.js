import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const ToggleOtherTagsButton = () => {
  return (
    <Button floated='right' icon labelPosition='left'>
      <Icon name='filter' />
      Toggle Other Tags
    </Button>
  );
};

export default ToggleOtherTagsButton;
