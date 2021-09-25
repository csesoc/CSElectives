

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card, Rating } from 'semantic-ui-react';
import ReviewRating from './review-rating/review-rating';

const RatingsCard = (props) => {
  const { reviewTitle, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating, author, termTaken } = props;

  return (
    <div className='review-cards'>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column width={8}>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta>
                  Overall:
                  <Rating icon='star' rating={overallRating} maxRating={5} disabled />
                  <div>
                    Term taken: {termTaken}
                  </div>
                </Card.Meta>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="Date rating-only-right">{reviewDate}</div>
                <Card.Meta className='reviewCardAuthor'>
                  {author}
                </Card.Meta>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4} className='review-row'>
              <Grid.Column width={3}>
                <Card.Header>Usefulness</Card.Header>
                <Card.Header>Workload</Card.Header>
              </Grid.Column>
              <Grid.Column width={5}>
                <ReviewRating
                  rating={usefulProgress}
                  icon='circle'
                  size='small'
                />
                <ReviewRating
                  rating={workloadProgress}
                  icon='circle'
                  size='small'
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Header>Enjoyment</Card.Header>
                <Card.Header>Difficulty</Card.Header>
              </Grid.Column>
              <Grid.Column width={5}>
                <ReviewRating
                  rating={enjoymentProgress}
                  icon='circle'
                  size='small'
                />
                <ReviewRating
                  rating={difficultyProgress}
                  icon='circle'
                  size='small'
                />
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
  author: PropTypes.string,
  termTaken: PropTypes.string,
};

export default RatingsCard;

