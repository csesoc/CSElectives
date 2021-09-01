import React from 'react';
import PropTypes from 'prop-types';

import { Label, Grid, Card } from 'semantic-ui-react';

const SummaryCard = (props) => {
  const { summaryTitle } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Label color= 'blue' style={{ margin: '0 0 8px 10px' }}>Level One</Label>
              <Label color= 'blue' style={{ margin: '0 0 8px 10px' }}>Introductory Course</Label>
              <Label color= 'blue' style={{ margin: '0 0 8px 10px' }}>something really long</Label>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Card.Header>{summaryTitle}</Card.Header>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP1511/">
                    COMP1511 Handbook
                </a>
                <Card.Meta>Stars + Num of reviews</Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <p>Bar graph</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className='my-grid-row'>
              <Card.Content>
              This is a long description of the above course describing containing what to expect
              from the course etc
              </Card.Content>
            </Grid.Row>
            <Grid.Row className='my-grid-row'>
              <Card.Content>
                <h4>Topics</h4>
                <li>topic one</li>
                <li>topic two</li>
              </Card.Content>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
};

SummaryCard.propTypes = {
  summaryTitle: PropTypes.string,
};

export default SummaryCard;
