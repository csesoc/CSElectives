import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress, Rating } from 'semantic-ui-react';

const ReviewCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row className='my-review-row'>
              <Grid.Column width={11}>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta style={{ margin: '5px 0' }}>
                  Overall:
                  <Rating icon='star' defaultRating={overallRating} maxRating={5} disabled/>
                </Card.Meta>
                <Card.Description >
                I took COMP3311(databases) and it was one of my
                favourite (and highest mark courses). The assignments
                and exams are actually fun. Why? Because they are
                somewhat relatable, e.g. Where can I buy a type of
                Pizza that serves it, but also is the cheapest, blah,
                blah. The practical work is also fun and you can take
                it at your own pace. I like Jas as a lecturer too.
                </Card.Description>
              </Grid.Column>
              <Grid.Column width={5} >
                <div className="Date" style={{ textAlign: 'right' }}>{reviewDate}</div>
                <div style={{ margin: '0 2px' }}>
                  Usefulness
                  <div>
                    <Progress value={usefulProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
                <div style={{ margin: '0 2px' }}>
                Workload
                  <div>
                    <Progress value={workloadProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
                <div style={{ margin: '0 2px' }}>
                Enjoyment
                  <div>
                    <Progress value={enjoymentProgress} total='5' progress='ratio' size='small' color='blue'/>
                  </div>
                </div>
                <div style={{ margin: '0 2px' }}>
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

ReviewCard.propTypes = {
  reviewTitle: PropTypes.string,
  usefulProgress: PropTypes.number,
  workloadProgress: PropTypes.number,
  enjoymentProgress: PropTypes.number,
  difficultyProgress: PropTypes.number,
  reviewDate: PropTypes.number,
  overallRating: PropTypes.number,
};

export default ReviewCard;
