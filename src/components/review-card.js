import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card } from 'semantic-ui-react';

const ReviewCard = (props) => {
  const { reviewTitle } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid>
        <Card.Content>
          <Grid divided>
            <Grid.Row columns={2}>
              <Grid.Column width={11}>
                <Card.Header>{reviewTitle}</Card.Header>
                <Card.Meta>Stars</Card.Meta>
                <Card.Description>
                 This is a long description of the above course describing containing the users review
                </Card.Description>
              </Grid.Column>
              <Grid.Column width={5}>
                Bar graph
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
