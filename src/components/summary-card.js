import React from 'react';
import PropTypes from 'prop-types';

import { Header, Grid, Icon } from 'semantic-ui-react';
import Tag from './Tags/Tags';
import '../styles/course-page.css';
import ReviewRating from './review-rating/review-rating.js';

const SummaryCard = (props) => {
  const { summaryTitle, summaryLink, courseCode, overallRating, numReviews, summaryDesc,
    usefulAvg, manageabilityAvg, enjoymentAvg, tags } = props;

  return (
    <div>
      <Grid>
        <Grid.Row className='grid-top'>
          <div>
            <div className='course-code-header'>
              <Header>
                {courseCode}
              </Header>
            </div>
            <Header as='h1'>{summaryTitle}</Header>
            <div className='tags'>
              {tags.terms.map((term) => <Tag key={term} className="term" label={term} />)}
            </div>
            <a href={summaryLink} rel="noreferrer" target="_blank">
              <Icon name='external' /> {courseCode} Handbook Page
            </a> <br />
            <div className='star-ratings'>
              <span className='star-space'>
                <ReviewRating
                  rating={overallRating}
                  icon='star'
                  size='large'
                  palette='csesoc'
                />
              </span>
              {numReviews} Reviews
            </div>
          </div>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column width={5}>
            <div className='category-container'>
              Enjoyment <br />
              <div className='category-rating'>{enjoymentAvg}</div>
              <div className='category-small'>/5</div>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className='category-container'>
              Usefulness <br />
              <div className='category-rating'>{usefulAvg}</div>
              <div className='category-small'>/5</div>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className='category-container'>
              Manageability <br />
              <div className='category-rating'>{manageabilityAvg}</div>
              <div className='category-small'>/5</div>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='grid-bottom'>
          {summaryDesc}
        </Grid.Row>
      </Grid>

    </div>
  );
};

SummaryCard.propTypes = {
  summaryTitle: PropTypes.string,
  summaryLink: PropTypes.string,
  courseCode: PropTypes.string,
  overallRating: PropTypes.string,
  numReviews: PropTypes.number,
  summaryDesc: PropTypes.string,
  usefulAvg: PropTypes.string,
  manageabilityAvg: PropTypes.string,
  enjoymentAvg: PropTypes.string,
  tags: PropTypes.object,
};

export default SummaryCard;
