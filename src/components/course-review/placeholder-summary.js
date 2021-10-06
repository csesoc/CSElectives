import React from 'react';
import { Grid, Placeholder } from 'semantic-ui-react';
import '../../styles/course-page.css';

const PlaceHolderSummary = () => {
  return (
    <>
      <div className='summary-card'>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Image />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='long' />
            <Placeholder.Line length='very long' />
            <Placeholder.Line length='medium' />
          </Placeholder.Paragraph>
        </Placeholder>
        <div className='placeholder-ratings'>
          <Grid columns={3}>
            <Grid.Column>
              <Placeholder style={{ width: '80%' }}>
                <Placeholder.Image square />
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder style={{ width: '80%' }}>
                <Placeholder.Image square />
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder style={{ width: '80%' }}>
                <Placeholder.Image square />
              </Placeholder>
            </Grid.Column>
          </Grid>
        </div>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line length='long' />
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='very long' />
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>

    </>
  );
};

export default PlaceHolderSummary;

