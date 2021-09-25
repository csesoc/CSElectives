import React from 'react';
import PropTypes from 'prop-types';

import { Header, Grid, Progress, Rating, Icon, Card } from 'semantic-ui-react';
import Tags from '../components/tags.js';
import '../styles/course-page.css';
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
            <Rating icon='star' defaultRating={overallRating} maxRating={5} disabled />
            {numReviews} Reviews
          </div>
        </Grid.Row>
        <Grid.Row className='barchart-row' columns={3}>
          <Grid.Column width={4}>
            Usefulness <br />
            Workload <br />
            Enjoyment <br />
            Difficulty
          </Grid.Column>
          <Grid.Column width={9}>
            <Progress
              className='bar-chart'
              color='blue'
              percent={(usefulAvg/5)*100}
              size='small'
            />
            <Progress
              className='bar-chart'
              color='blue'
              percent={(workloadAvg/5)*100}
              size='small'
            />
            <Progress
              className='bar-chart'
              color='blue'
              percent={(enjoymentAvg/5)*100}
              size='small'
            />
            <Progress
              className='bar-chart'
              color='blue'
              percent={(difficultyAvg/5)*100}
              size='small'
            />
          </Grid.Column>
          <Grid.Column width={3}>
            {usefulAvg}/5 <br />
            {workloadAvg}/5 <br />
            {enjoymentAvg}/5 <br />
            {difficultyAvg}/5 <br />
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
