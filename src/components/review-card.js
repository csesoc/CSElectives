import React from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card, Progress, Rating, Message, Popup, Button, Modal, Icon, Header, Form } from 'semantic-ui-react';
import ReviewRating from './review-rating/review-rating';
import FlagModal from '../components/flag-modal.js';

const ReviewCard = (props) => {
  const { reviewTitle, reviewComment, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating, author, termTaken } = props;


  return (
    <div className='review-cards'>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta>
                  Overall:
                  <Rating icon='star' rating={overallRating} maxRating={5} disabled />
                  <div>
                    Term taken: {termTaken}
                  </div>
                </Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <div className="Date" style={{ textAlign: 'right' }}>{reviewDate}</div>
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
            <Grid.Row className='review-row'>
              <Grid.Column>
                <Card.Description>{reviewComment}</Card.Description>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <FlagModal />
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
