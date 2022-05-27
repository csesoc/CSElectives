import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card } from 'semantic-ui-react';
import ReviewRating from './review-rating/review-rating';
import FlagModal from '../components/flag-modal.js';

import DeleteModal from './delete-modal';
import { AdminsContext, UserContext } from '../App.js';

const ReviewCard = (props) => {
  const { courseCode, reviewId, reviewTitle, reviewComment, usefulProgress, manageabilityProgress,
    enjoymentProgress, reviewDate, overallRating, author, termTaken } = props;

  const user = useContext(UserContext);
  const admins = useContext(AdminsContext);

  const isLongReview = reviewComment.length > 500 ? true : false;

  const [longReview, setLongReview] = useState(isLongReview); // not even sure if useState is needed for this
  const [seeMore, setSeeMore] = useState(false);

  const handleClick = () => setSeeMore(!seeMore);

  console.log('Now on course review: ' + reviewId);

  return (
    <div className='review-cards'>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column width={11}>
                <Card.Header><h3>{reviewTitle}</h3></Card.Header>
                <Card.Meta>
                  <div className='star-ratings'>
                    <span>
                      Overall:
                    </span>
                    <ReviewRating
                      rating={overallRating}
                      icon='star'
                      palette='csesoc'
                    />
                  </div>
                  <div>
                    Term taken: {termTaken}
                  </div>
                </Card.Meta>
              </Grid.Column>
              <Grid.Column width={5}>
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
                {/* eslint-disable-next-line max-len*/}
                <Card.Description className='review-description'>{longReview && !seeMore ? reviewComment.substring(0, 250) + '...' : reviewComment}</Card.Description>
                {/* eslint-disable-next-line max-len*/}
                {longReview && <Card.Description className='review-seemore' onClick={handleClick}><a>{seeMore ? 'See Less' : 'See More'}</a></Card.Description>}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className='review-row'>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                {/* Only show delete button if the logged in user is an admin */}
                {admins.includes(user?.email) && <DeleteModal reviewId={reviewId} courseCode={courseCode} />}
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
  courseCode: PropTypes.string,
  reviewId: PropTypes.string,
  reviewDate: PropTypes.string,
  reviewTitle: PropTypes.string,
  reviewComment: PropTypes.string,
  usefulProgress: PropTypes.number,
  manageabilityProgress: PropTypes.number,
  enjoymentProgress: PropTypes.number,
  overallRating: PropTypes.number,
  description: PropTypes.string,
  author: PropTypes.string,
  termTaken: PropTypes.string,
};

export default ReviewCard;
