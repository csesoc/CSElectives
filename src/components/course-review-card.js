import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';

const CourseReviewCard = (props) => {
  const { code } = props;

  return (
    <div style={{ display: 'block' }}>
      <Card>
        <Card.Content>
          <Card.Header>{code}</Card.Header>
          <Card.Meta>Introduction to Programming</Card.Meta>
          <Rating defaultRating={3} maxRating={5} disabled />
          <Card.Description>
          This is a long description of the above course describing what the course entails
          and what to expect when you enroll in the course
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

CourseReviewCard.propTypes = {
  code: PropTypes.string,
};

export default CourseReviewCard;
