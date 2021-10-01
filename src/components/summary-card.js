import React from 'react';
import PropTypes from 'prop-types';

import { Header, Grid, Progress, Rating, Icon, Card } from 'semantic-ui-react';
import Tags from '../components/tags.js';
import '../styles/course-page.css';
import ReviewRating from './review-rating/review-rating.js';
import { getQueriesForElement } from '@testing-library/dom';

const SummaryCard = (props) => {
  const { summaryTitle, summaryLink, courseCode, overallRating, numReviews, summaryDesc,
    usefulAvg, workloadAvg, difficultyAvg, enjoymentAvg, tags } = props;

  const displayTags = (label) => {
    return (
      <Tags
        label={label}
      />
    );
  };
  return (
    <div>
      <Grid>
        <Grid.Row className='grid-top'>
          <div className='my-course-page-tags'>
            {tags.map((label) => displayTags(label))}
          </div>
        </Grid.Row>
        <Grid.Row className='grid-row'>
          <div>
            <Header as='h2'>{summaryTitle}</Header>
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
        <Grid.Row className='barchart-row' columns={3}>
          <Grid.Column width={5}>
            <div className='category-container'>
              Usefulness <br />
              <div className='category-rating'>{usefulAvg}</div>
              <div className='category-small'>/5</div>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className='category-container'>
              Workload <br />
              <div className='category-rating'>{workloadAvg}</div>
              <div className='category-small'>/5</div>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className='category-container'>
              Enjoyment <br />
              <div className='category-rating'>{enjoymentAvg}</div>
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
  numReviews: PropTypes.string,
  summaryDesc: PropTypes.string,
  usefulAvg: PropTypes.string,
  workloadAvg: PropTypes.string,
  difficultyAvg: PropTypes.string,
  enjoymentAvg: PropTypes.string,
  tags: PropTypes.array,
};

export default SummaryCard;
