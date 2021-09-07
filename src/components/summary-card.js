import React from 'react';
import PropTypes from 'prop-types';

import { Header, Grid, Progress, Rating, Icon } from 'semantic-ui-react';
import CoursePageTags from '../components/course-page-tags.js';

const SummaryCard = (props) => {
  const { summaryTitle, summaryLink, courseCode, overallRating, numReviews, summaryDesc,
    usefulAvg, workloadAvg, difficultyAvg, enjoymentAvg } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Grid>
        <Grid.Row className='grid-top'>
          <div className='my-course-page-tags'>
            <CoursePageTags />
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
        <Grid.Row className='grid-row'>
          <div style={{ width: '100%' }}>
            <span>
              Usefulness
            </span>
            <Progress
              className='bar-chart'
              color='blue'
              value={usefulAvg}
              total='5'
              progress='ratio'
              size='standard'
            />
            <span>
              Workload
            </span>
            <Progress
              className='bar-chart'
              color='blue'
              value={workloadAvg}
              total='5'
              progress='ratio'
              size='standard'
            />
            <span>
              Enjoyment
            </span>
            <Progress
              className='bar-chart'
              color='blue'
              value={enjoymentAvg}
              total='5'
              progress='ratio'
              size='standard'
            />
            <span>
              Difficulty
            </span>
            <Progress
              className='bar-chart'
              color='blue'
              value={difficultyAvg}
              total='5'
              progress='ratio'
              size='standard'
            />
          </div>
        </Grid.Row>
        <Grid.Row className='grid-row'>
          {summaryDesc}
        </Grid.Row>
        <Grid.Row className='grid-bottom'>
          <div>
            <h4>Topics</h4>
            <li>topic one</li>
            <li>topic two</li>
            <li>topic three</li>
            <li>topic four</li>
          </div>
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
};

export default SummaryCard;
