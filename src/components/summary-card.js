import React from 'react';
import PropTypes from 'prop-types';

import { Header, Grid, Progress, Rating } from 'semantic-ui-react';
import LabelExampleIcon from '../components/tags.js';

const placeholderActiveTags = ['Computer Networks', 'Database Systems'];

const placeholderFunction = () => {};

const SummaryCard = (props) => {
  const { summaryTitle, summaryLink, overallRating, numReviews, summaryDesc,
    usefulAvg, workloadAvg, difficultyAvg, enjoymentAvg } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Grid>
        <Grid.Row className='my-grid-top'>
          <div className='my-course-page-tags'>
            <LabelExampleIcon activeTags={placeholderActiveTags} setActiveTags={placeholderFunction} />
          </div>
        </Grid.Row>
        <Grid.Row className='my-grid-row'>
          <div>
            <Header as='h2'>{summaryTitle}</Header>
            <a href={summaryLink} rel="noreferrer" target="_blank">
              COMP1511 Handbook
            </a> <br />
            <Rating icon='star' defaultRating={overallRating} maxRating={5} disabled />
            {numReviews} Reviews
          </div>
        </Grid.Row>
        <Grid.Row className='my-grid-row'>
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
        <Grid.Row className='my-grid-row'>
          {summaryDesc}
        </Grid.Row>
        <Grid.Row className='my-grid-bottom'>
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
  overallRating: PropTypes.string,
  numReviews: PropTypes.string,
  summaryDesc: PropTypes.string,
  usefulAvg: PropTypes.string,
  workloadAvg: PropTypes.string,
  difficultyAvg: PropTypes.string,
  enjoymentAvg: PropTypes.string,
};

export default SummaryCard;
