import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card } from 'semantic-ui-react';
import ReviewRating from './review-rating/review-rating';
import FlagModal from '../components/flag-modal.js';

import Admins from '../assets/admins.json';
import DeleteModal from './delete-modal';
import { UserContext } from '../App.js';

const ReviewCard = (props) => {
  const { reviewId, reviewTitle, reviewComment, usefulProgress, manageabilityProgress,
    enjoymentProgress, reviewDate, overallRating, author, termTaken } = props;

  const user = useContext(UserContext);

  return (
    <div className='review-cards'>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta>
                  <div className='star-ratings'>
                    <span>
                      Overall:
                    </span>
                    <ReviewRating
                      rating={overallRating}
                      icon='star'
                      size='standard'
                      palette='csesoc'
                    />
                  </div>
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
            <Grid.Row className='review-row'>
              <Grid.Column>
                <div className='review-ratings-container'>
                  <div className='review-ratings'>
                    <Card.Header>Enjoyment</Card.Header>
                    <ReviewRating
                      rating={enjoymentProgress}
                      icon='circle'
                      size='small'
                      palette='trafficlight'
                    />
                  </div>
                  <div className='review-ratings'>
                    <Card.Header>Usefulness</Card.Header>
                    <ReviewRating
                      rating={usefulProgress}
                      icon='circle'
                      size='small'
                      palette='trafficlight'
                    />
                  </div>
                  <div className='review-ratings'>
                    <Card.Header>Manageability</Card.Header>
                    <ReviewRating
                      rating={manageabilityProgress}
                      icon='circle'
                      size='small'
                      palette='trafficlight'
                    />
                  </div>
                </div>
                <Card.Description>{reviewComment}</Card.Description>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                {/* Only show delete button if the logged in user is an admin */}
                {Admins.includes(user?.email) && <DeleteModal reviewId={reviewId} />}
                <FlagModal reviewId={reviewId} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
};

ReviewCard.propTypes = {
  reviewId: PropTypes.string,
  reviewTitle: PropTypes.string,
  reviewComment: PropTypes.string,
  usefulProgress: PropTypes.number,
  manageabilityProgress: PropTypes.number,
  enjoymentProgress: PropTypes.number,
  reviewDate: PropTypes.number,
  overallRating: PropTypes.number,
  description: PropTypes.string,
  author: PropTypes.string,
  termTaken: PropTypes.string,
};

export default ReviewCard;
