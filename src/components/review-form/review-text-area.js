import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon } from 'semantic-ui-react';

const TITLE_MAX_LENGTH = 80;

const ReviewTextArea = (props) => {
  const { title, setTitle, comment, setComment, disabled } = props;

  const handleTitleChange = (e, { value }) => {
    if (value.length > TITLE_MAX_LENGTH) {
      setTitle(title);
    } else {
      setTitle(value);
    }
  };

  return (
    <Form.Field>
      <Form.Input
        placeholder={'Title'}
        fluid
        value={title}
        onChange={handleTitleChange}
        disabled={disabled}
      />
      <Form.TextArea
        style={{ resize: 'none' }}
        rows={16}
        placeholder={'Review'}
        fluid
        value={comment}
        onChange={(e, { value }) => setComment(value)}
        disabled={disabled}
      />
    </Form.Field>
  );
};

ReviewTextArea.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
  comment: PropTypes.string,
  setComment: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ReviewTextArea;
