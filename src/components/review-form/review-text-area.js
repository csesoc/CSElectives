import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const ReviewTextArea = (props) => {
  const { reviewTitle, setReviewTitle, reviewComment, setReviewComment } = props;

  return (
    <>
      <Form.Input
        className='ratingTitle'
        placeholder='Enter your title here!'
        fluid
        value={reviewTitle}
        onChange={(e, { value }) => setReviewTitle(value)}
      />
      <Form.TextArea
        placeholder='Please write your review here: make sure you have read the terms and conditions
            before posting. Feel free to include your overall experience with the course,
            how you found the assessments/workload and anything else you wanted to share!'
        value={reviewComment}
        onChange={(e, { value }) => setReviewComment(value)}
      />
    </>
  );
};

ReviewTextArea.propTypes = {
  reviewTitle: PropTypes.string,
  setReviewTitle: PropTypes.func,
  reviewComment: PropTypes.string,
  setReviewComment: PropTypes.func,
};

export default ReviewTextArea;
