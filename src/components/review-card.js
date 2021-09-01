import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Progress } from 'semantic-ui-react';

const ReviewCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress, enjoymentProgress, reviewDate } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column >
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta>
                  Overall:
                  <div className="ui star rating" data-rating="4"></div>
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
              <Grid.Column >
                <div className="Date" style={{ textAlign: 'right' }}>{reviewDate}</div>
                <div style={{ margin: '10px' }}>
                  Usefulness
                  <div className="ui red progress">
                    <Progress percent={usefulProgress}/>
                  </div>
                </div>
                <div style={{ margin: '10px' }}>
                Workload
                  <div className="ui brown progress">
                    <Progress percent={workloadProgress}/>
                  </div>
                </div>
                <div style={{ margin: '10px' }}>
                Enjoyment
                  <div className="ui yellow progress">
                    <Progress percent={enjoymentProgress}/>
                  </div>
                </div>
                <div style={{ margin: '10px' }}>
                Difficulty
                  <div className="ui green progress">
                    <Progress percent={difficultyProgress}/>
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
};

export default ReviewCard;
