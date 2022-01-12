import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const ReviewChoice = (props) => {
  const { reviewMessage, setReviewMessage } = props;

  return (
    <Form.Group inline>
      <label><b>Would you like to add a comment?</b></label>
      <Form.Radio
        label='Yes'
        name='reviewGroup'
        value
        checked={reviewMessage}
        onChange={(e, { value }) => setReviewMessage(value)}
      />
      <Form.Radio
        label='No'
        name='reviewGroup'
        value={false}
        checked={!reviewMessage}
        onChange={(e, { value }) => setReviewMessage(value)}
      />
    </Form.Group>
  );
};

ReviewChoice.propTypes = {
  reviewMessage: PropTypes.bool,
  setReviewMessage: PropTypes.func,
};

export default ReviewChoice;
