import React from 'react';
import { Grid, GridColumn, Placeholder, Segment } from 'semantic-ui-react';
import '../../styles/course-page.css';

const PlaceHolderReview = () => {
  return (
    <>
      <div className='review-cards'>
        <Segment raised>
          <Grid columns={2}>
            <Grid.Column width={13}>
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length='short' />
                  <Placeholder.Line length='medium' />
                </Placeholder.Header>
              </Placeholder>
            </Grid.Column>
            <Grid.Column width={3}>
              <Placeholder>
                <Placeholder.Line length='long' />
                <Placeholder.Line length='very long' />
              </Placeholder>
            </Grid.Column>
          </Grid>
          <div className='placeholder-ratings'>
            <Grid columns={3}>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Image style={{ height: 30 }} />
                </Placeholder>
              </Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Image style={{ height: 30 }} />
                </Placeholder>
              </Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Image style={{ height: 30 }} />
                </Placeholder>
              </Grid.Column>
            </Grid>
          </div>
          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line length='long' />
              <Placeholder.Line length='very long' />
              <Placeholder.Line length='long' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </div>

    </>
  );
};

export default PlaceHolderReview;

