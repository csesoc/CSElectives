import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tags.js';
import ReviewRating from './review-rating/review-rating.js';

import { Card, Popup, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CourseReviewList = (props) => {
  const { code, name, numReviews, overallRating, terms, major, enjoyment, usefulness, manageability } = props;
  const page = `course/${code}`;
  const tags = {
    major: major,
    terms: terms.map((term) => {
      if (term == 0) {
        return 'Summer';
      } else {
        return 'Term ' + term;
      }
    }),
  };

  const getTags = (tags, majorOrTags) => {
    if (tags.major == '') {
      if (majorOrTags == 'major') {
        return;
      }
      return tags.terms.map((term) => <Tag key={term} className="term" label={term} />);
    } else {
      if (majorOrTags == 'major') {
        return <Tag key={tags.major} className="major" label={tags.major} />;
      } else {
        return [
          tags.terms.map((term) => <Tag key={term} className="term" label={term} />),
        ];
      }
    }
  };

  return (

    <div className='item-container'>
      <Item className='course-review-item' as={Link} to={page}>
        <Item.Content className='item-contents-container'>
          <div className='item-contents-code'>
            <Item.Header className='item-header'>{code}</Item.Header>
          </div>
          <div className='item-contents-name'>
            <Item.Description>{name}</Item.Description>
          </div>
          <div className='item-contents-tags'>
            <Item.Extra>{getTags(tags, 'tags')}</Item.Extra>
          </div>
          <div className='item-ratings-stars'>
            <ReviewRating
              rating={overallRating}
              icon='star'
              size='large'
              palette='trafficlight'
            />
          </div>
          <div className='item-contents-enjoyment'>
            <Item.Description>{enjoyment}</Item.Description>
          </div>
          <div className='item-contents-usefulness'>
            <Item.Description>{usefulness}</Item.Description>
          </div>
          <div className='item-contents-manageability'>
            <Item.Description>{manageability}</Item.Description>
          </div>
          <div className='item-contents-review-num'>
            <Card.Meta>{numReviews}</Card.Meta>
          </div>
        </Item.Content>
      </Item>
    </div>
  );
};

CourseReviewList.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  numReviews: PropTypes.number,
  overallRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  terms: PropTypes.array,
  major: PropTypes.string,
  enjoyment: PropTypes.number,
  usefulness: PropTypes.number,
  manageability: PropTypes.number,
};

export default CourseReviewList;
