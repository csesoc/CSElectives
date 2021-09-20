import React from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card, Progress, Rating, Message, Popup, Button, Modal, Icon, Header, Form } from 'semantic-ui-react';
import ReviewRating from './review-rating/review-rating';

const ReviewCard = (props) => {
  const { reviewTitle, reviewComment, usefulProgress, workloadProgress, difficultyProgress,
    enjoymentProgress, reviewDate, overallRating, author, termTaken } = props;

  const handleClickFlag = () => {

  };
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

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
                ok
              </Grid.Column>
              <Grid.Column>
                <Modal
                  trigger={
                    <Button className='ui button flag'>
                      <i className="flag outline icon"></i>
                      onClick={() => setFirstOpen(true)}
                    </Button>
                  }
                  size='tiny'
                  closeIcon
                  onClose={() => setFirstOpen(false)}
                  onOpen={() => setFirstOpen(true)}
                  open={firstOpen}
                >
                  <Header icon>
                    <Icon name='flag' />
                    What would you like to flag this for?
                  </Header>
                  <Modal.Content>
                    <Form>
                      <div>
                        <Form.Field
                          label='Contains hate speech'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                        <Form.Field
                          label='Contains spam'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                        <Form.Field>
                          <label>Other:</label>
                          <input placeholder='Enter reason here.' />
                        </Form.Field>
                      </div>
                      <br />
                    </Form>
                    <Modal.Actions>
                      <div className='flag-submit-button'>
                        <Button
                          onClick={() => setSecondOpen(true)}
                        >Submit
                        </Button>
                      </div>
                    </Modal.Actions>
                  </Modal.Content>
                  <Modal
                    onClose={() => setSecondOpen(false)}
                    open={secondOpen}
                    size='tiny'
                    closeIcon
                  >
                    <Header icon>
                      <Icon
                        name='paper plane'
                        color='green'
                      />
                      Thank you for submitting a report!
                    </Header>
                    <Modal.Content className="flag-submission-message">
                      We will review your report and notify you of our decision.
                    </Modal.Content>
                  </Modal>
                </Modal>
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
