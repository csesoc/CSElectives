import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const AnonChoice = (props) => {
  const { anonymity, setAnonymity } = props;

  return (
    <Form.Group inline>
      <label>Would you like to remain anonymous?</label>
      <Form.Radio
        label='Yes'
        name='anonymityGroup'
        value='Yes'
        checked={anonymity === 'Yes'}
        onChange={(e, { value }) => setAnonymity(value)}
      />
      <Form.Radio
        label='No'
        name='anonymityGroup'
        value='No'
        checked={anonymity === 'No'}
        onChange={(e, { value }) => setAnonymity(value)}
      />
    </Form.Group>
  );
};

AnonChoice.propTypes = {
  anonymity: PropTypes.string,
  setAnonymity: PropTypes.func,
};

export default AnonChoice;
