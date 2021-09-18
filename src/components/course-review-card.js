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
    const levelArray = [studyLevel, 'Level ' + code[4]];
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
      <Link to={page} className='card-container'>
        <Card className='course-review-card'>
          <Card.Content>
            <Card.Header>{code}</Card.Header>
            <Card.Meta>{name}</Card.Meta>
            <div floated='right'>
              <ReviewRating
                rating={overallRating}
                icon='star'
                size='large'
              />
            </div>
            <Card.Meta> {numReviews} reviews </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            {tags.map((label) => displayTags(label))}
          </Card.Content>
        </Card>
      </Link>
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
