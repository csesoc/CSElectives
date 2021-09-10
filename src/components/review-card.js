import React from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';

const ReviewCard = (props) => {
  const { reviewTitle, reviewComment, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row className='review-row'>
              <Grid.Column width={11}>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta style={{ margin: '5px 0' }}>
                  Overall:
                  <Rating icon='star' rating={overallRating} maxRating={5} disabled />
                </Card.Meta>
                <Card.Description>{reviewComment}</Card.Description>
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="Date" style={{ textAlign: 'right' }}>{reviewDate}</div>
                <div className='review-bars'>
                  Usefulness
                  <div>
                    <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue' />
                  </div>
                </div>
                <div className='review-bars'>
                  Workload
                  <div>
                    <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue' />
                  </div>
                </div>
                <div className='review-bars'>
                  Enjoyment
                  <div>
                    <Progress value={enjoymentProgress} total='5' progress='ratio' size='small' color='blue' />
                  </div>
                </div>
                <div className='review-bars'>
                  Difficulty
                  <div>
                    <Progress value={difficultyProgress} total='5' progress='ratio' size='small' color='blue' />
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

ReviewCard.propTypes = {
  reviewTitle: PropTypes.string,
  reviewComment: PropTypes.string,
  usefulProgress: PropTypes.number,
  workloadProgress: PropTypes.number,
  enjoymentProgress: PropTypes.number,
  difficultyProgress: PropTypes.number,
  reviewDate: PropTypes.number,
  overallRating: PropTypes.number,
  description: PropTypes.string,
};

export default ReviewCard;
