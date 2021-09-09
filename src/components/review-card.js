import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';

const ReviewCard = (props) => {
  const { reviewTitle, reviewComment, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating, author, termTaken } = props;

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
                  <div>
                    Term taken: {termTaken}
                  </div>
                </Card.Meta>
                <Card.Description>{reviewComment}</Card.Description>
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="Date" style={{ textAlign: 'right' }}>{reviewDate}</div>
                <Card.Meta className='reviewCardAuthor'>
                  {author}
                </Card.Meta>
                <div style={{ margin: '0 2px' }}>
                  Usefulness
                  <div>
                    <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue' />
                  </div>
                </div>
                <div style={{ margin: '0 2px' }}>
                  Workload
                  <div>
                    <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue' />
                  </div>
                </div>
                <div style={{ margin: '0 2px' }}>
                  Enjoyment
                  <div>
                    <Progress value={enjoymentProgress} total='5' progress='ratio' size='small' color='blue' />
                  </div>
                </div>
                <div style={{ margin: '0 2px' }}>
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
  author: PropTypes.string,
  termTaken: PropTypes.string,
};

export default ReviewCard;
