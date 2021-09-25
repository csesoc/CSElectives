import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const AnonChoice = (props) => {
  const { anonymity, setAnonymity } = props;

  return (
    <Form.Group inline>
      <Form.Radio
        label='Yes'
        name='anonymityGroup'
        value
        checked={anonymity}
        onChange={(e, { value }) => setAnonymity(value)}
      />
      <Form.Radio
        label='No'
        name='anonymityGroup'
        value={false}
        checked={!anonymity}
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
