import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';

const RatingsCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating } = props;

  return (

    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid raised>
        <Card.Content>

          <Grid>
            <Grid.Row className='review-row-ratings-only'>
              <Grid.Column width={16}>
                <div style={{ margin: '0px 260px 0px 0' }}></div>
                <span style={{ float: 'right' }}>{reviewDate}</span>
                <Card.Header >
                  <span>
                    <h3 >{reviewTitle}</h3>
                  </span>
                </Card.Header>
                <Card.Meta style={{ margin: '5px 0' }}>
                    Overall: <Rating icon='star' defaultRating={overallRating} maxRating={5} disabled />
                </Card.Meta>

                <div className='bar-chart-rows' >
                      Usefulness
                  <div>
                    <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
                <div className='bar-chart-rows'>
                    Workload
                  <div>
                    <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
                <div className='bar-chart-rows'>
                    Enjoyment
                  <div>
                    <Progress value={enjoymentProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
                <div className='bar-chart-rows'>
                    Difficulty
                  <div>
                    <Progress value={difficultyProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
};

RatingsCard.propTypes = {
  reviewTitle: PropTypes.string,
  usefulProgress: PropTypes.number,
  workloadProgress: PropTypes.number,
  enjoymentProgress: PropTypes.number,
  difficultyProgress: PropTypes.number,
  reviewDate: PropTypes.number,
  overallRating: PropTypes.number,
};

export default RatingsCard;
