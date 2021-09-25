import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Icon } from 'semantic-ui-react';

const EmptyState = (props) => {
  const { handleClickHome } = props;

  return (
    <div className='no-reviews'>
      <Header>No reviews yet!</Header>
      <Button animated onClick={handleClickHome} size='big' color='blue' basic>
        <Button.Content visible> Check out more courses</Button.Content>
        <Button.Content hidden><Icon name='space shuttle' /></Button.Content>
      </Button>
    </div>
  );
};

EmptyState.propTypes = {
  handleClickHome: PropTypes.func,
};

export default EmptyState;

