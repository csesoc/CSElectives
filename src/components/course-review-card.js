import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tags.js';
import ReviewRating from './review-rating/review-rating.js';

import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CourseReviewCard = (props) => {
  const { code, name, numReviews, overallRating, studyLevel, terms } = props;
  // const displayDesc = desc.length > 220 ? desc.substring(220, length) + '...' : desc;
  const page = `course/${code}`;

  const createTags = ({ terms }) => (
    <>
      {terms.map(function(terms, index) {
        return <Tag key={ index } label={terms} activeTags={[]} setActiveTags={()=>{}} />;
      })}
    </>
  );

  return (
    <div className='card-container'>
      <Link to={page} className='card-container'>
        <Card className='course-review-card'>
          <Card.Content>
            <Card.Header>{code}</Card.Header>
            <Card.Meta>{name}</Card.Meta>
            <div floated='right'>
              <ReviewRating
                rating={3.3}
                icon='star'
                size='large'
              />
            </div>
            <Card.Meta> {numReviews} reviews </Card.Meta>
            {/* <Card.Description>
              {displayDesc}
            </Card.Description> */}
          </Card.Content>
          <Card.Content extra>
            {createTags}
            <Tag label={studyLevel} activeTags={[]} setActiveTags={()=>{}} />
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
};

CourseReviewCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  // desc: PropTypes.string,
  numReviews: PropTypes.number,
  overallRating: PropTypes.number,
  studyLevel: PropTypes.string,
  terms: PropTypes.array,
};

export default CourseReviewCard;
