import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tags.js';
import ReviewRating from './review-rating/review-rating.js';

import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CourseReviewCard = (props) => {
  const { code, name, numReviews, overallRating, studyLevel, terms } = props;
  const page = `course/${code}`;

  const getTags = () => {
    const levelArray = [studyLevel];
    const withTermsArray = levelArray.concat(terms.map((term) => 'Term ' + term ));
    return withTermsArray;
  };

  const tags = getTags();
  const displayTags = (label) => {
    return (
      <Tag label={label} />
    );
  };

  return (
    <div className='card-container'>
      <Card className='course-review-card' as={Link} to={page}>
        <Card.Content>
          <div className='card-contents-container'>
            <div className='card-contents-cell-left'>
              <Card.Header className='card-header'>{code}</Card.Header>
              <Card.Description className='card-description'>{name}</Card.Description>
            </div>
            <div className='card-contents-cell-right'>
              <ReviewRating
                rating={overallRating}
                icon='star'
                size='large'
              />
              <Card.Meta> {numReviews} reviews </Card.Meta>
            </div>
          </div>
        </Card.Content>
        <Card.Content extra>
          {tags.map((label) => displayTags(label))}
        </Card.Content>
      </Card>
    </div>
  );
};

CourseReviewCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  numReviews: PropTypes.number,
  overallRating: PropTypes.number,
  studyLevel: PropTypes.string,
  terms: PropTypes.array,
};

export default CourseReviewCard;
