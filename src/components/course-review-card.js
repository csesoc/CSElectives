import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react';

const CourseReviewCard = (props) => {
  const { code, name, desc } = props;
  const displayDesc = desc.length > 220 ? desc.substring(220, length) + '...' : desc;

  return (
    <div>
      <Card className='course-review-card'>
        <Card.Content>
          <Card.Header>{code}</Card.Header>
          <Card.Meta>{name}</Card.Meta>
          <Rating icon='star' defaultRating={3} maxRating={5} disabled />
          <Card.Meta> 42 reviews </Card.Meta>
          <Card.Description>
            {displayDesc}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

CourseReviewCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
};

export default CourseReviewCard;
