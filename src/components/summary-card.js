import React from 'react';
import PropTypes from 'prop-types';

import { Label, Grid, Card, Progress, Rating } from 'semantic-ui-react';


const SummaryCard = (props) => {
  const { summaryTitle } = props;

  return (
    <div style={{ display: 'block', margin: '20px' }}>
      <Card fluid raised>
        <Card.Content>
          <Grid>
            <Grid.Row className='my-grid-top'>
              <Label color= 'blue' style={{ margin: '0 0 8px 10px' }}>Level One</Label>
              <Label color= 'blue' style={{ margin: '0 0 8px 10px' }}>Introductory Course</Label>
              <Label color= 'blue' style={{ margin: '0 0 8px 10px' }}>something really long</Label>
            </Grid.Row>
            <Grid.Row className='my-grid-row'>
              <div>
                <Card.Header as='h2'>{summaryTitle}</Card.Header>
                <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP1511/"
                  rel="noreferrer" target="_blank">
                    COMP1511 Handbook
                </a> <br/>
                <Rating icon='star' defaultRating={3} maxRating={5} disabled/>
                <Card.Meta>42 reviews</Card.Meta>
              </div>
            </Grid.Row>
            <Grid.Row className='my-grid-row'>
              <div style={{ width: '100%' }}>
                <span>
                  Usefulness
                </span>
                <Progress className='bar-chart' color='blue' value={3} total='5' progress='ratio' size='standard'/>
                <span>
                  Workload
                </span>
                <Progress className='bar-chart' color='blue' value={2} total='5' progress='ratio' size='standard'/>
                <span>
                  Enjoyment
                </span>
                <Progress className='bar-chart' color='blue' value={4} total='5' progress='ratio' size='standard'/>
                <span>
                  Difficulty
                </span>
                <Progress className='bar-chart' color='blue' value={2} total='5' progress='ratio' size='standard'/>
              </div>
            </Grid.Row>
            <Grid.Row className='my-grid-row'>
              <Card.Content>
              This is a long description of the above course describing containing what to expect
              from the course etc
              </Card.Content>
            </Grid.Row>
            <Grid.Row className='my-grid-bottom'>
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
