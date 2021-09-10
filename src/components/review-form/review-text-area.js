import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const ReviewTextArea = (props) => {
  const { title, setTitle, comment, setComment } = props;

  return (
    <>
      <Form.Input
        className='ratingTitle'
        placeholder='Enter your title here!'
        fluid
        value={title}
        onChange={(e, { value }) => setTitle(value)}
      />
      <Form.TextArea
        placeholder='Please write your review here: make sure you have read the terms and conditions
            before posting. Feel free to include your overall experience with the course,
            how you found the assessments/workload and anything else you wanted to share!'
        value={comment}
        onChange={(e, { value }) => setComment(value)}
      />
    </>
  );
};

ReviewTextArea.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  comment: PropTypes.string,
  setComment: PropTypes.func,
};

export default ReviewTextArea;
