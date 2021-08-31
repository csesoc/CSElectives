import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card } from 'semantic-ui-react';

const ReviewCard = (props) => {
  const { reviewTitle } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Card.Header>{reviewTitle}</Card.Header>
                <Card.Meta>Stars</Card.Meta>
                <Card.Description>
                 This is a long description of the above course describing what the course entails
                 and what to expect when you enroll in the course
                </Card.Description>
              </Grid.Column>
              <Grid.Column>
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
};

export default ReviewCard;
