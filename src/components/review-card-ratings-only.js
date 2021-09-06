

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';

const RatingsCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating } = props;

  return (

    <div className='review-cards'>
      <Card fluid raised>
        <Card.Content>

          <Grid>
            <Grid.Row className='review-row-ratings-only'>
              <Grid.Column width={16}>
                <div className='course-review-card-header'></div>

                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Header as='h3' content={reviewTitle} />
                    </Grid.Column>
                    <Grid.Column>
                      <span className='course-review-card-date'>{reviewDate}</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Card.Meta className='course-review-card-star-rating'>
                  Overall: <Rating icon='star' defaultRating={overallRating} maxRating={5} disabled />
                </Card.Meta>

                <div>
                  <label>Usefulness</label>
                  <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
                <div>
                  <label>Workload</label>
                  <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
                <div>
                  <label>Enjoyment</label>
                  <Progress value={enjoymentProgress} total='5' progress='ratio' size='small' color='blue' />
                </div>
                <div>
                  <label>Difficulty</label>
                  <Progress value={difficultyProgress} total='5' progress='ratio' size='small' color='blue' />
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

