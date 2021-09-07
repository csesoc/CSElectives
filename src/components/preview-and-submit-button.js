import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const SubmitButton = () => {
  return (
    <Button color='green' animated='fade'>
      <Button.Content visible><Icon name='angle double right' /> </Button.Content>
      <Button.Content hidden>
        Submit
      </Button.Content>
    </Button>
  );
};

export default SubmitButton;
