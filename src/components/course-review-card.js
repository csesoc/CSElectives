import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';

const CourseReviewCard = (props) => {
  const { code, desc } = props;

  return (
    <div className='my-card'>
      <Card>
        <Card.Content>
          <Card.Header>{code}</Card.Header>
          <Card.Meta>{desc}</Card.Meta>
          <Rating icon='star' defaultRating={3} maxRating={5} disabled />
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
  desc: PropTypes.string,
};

export default CourseReviewCard;
