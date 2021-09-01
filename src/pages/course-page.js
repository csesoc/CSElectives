import React from 'react';
import { Header, Label, Progress, Card, Grid } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';


const CoursePage = () => {
  return (
    <>
      <Header as='h1' style={{ padding: 20 }}>Course Page</Header>

      {/* Label component: https://react.semantic-ui.com/elements/label/ */}
      <Label color='red'>These label components</Label>
      <Label color='green' basic>would be helpful!</Label>

      {/* Progress component: https://react.semantic-ui.com/modules/progress/ */}
      <div>Maybe you can use this for your bar charts?</div>

      <div>This is an unrestricted width progress component</div>
      <Progress percent={10} />

      <div style={{ maxWidth: '25%', border: '1px solid black', padding: 10 }}>
        <span>
          Spans dont put new lines which you might find handy.
          You can restrict the width of the parent div to control the length of the progress component
        </span>
        <Progress percent={10} />
      </div>
      <div>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <ReviewCard reviewTitle="hi"/>
            </Grid.Column>
            <Grid.Column >
              <div className="card-displayer">
                <ReviewCard
                  reviewDate="10/2/20"
                  reviewTitle="wow i love this subject"
                  usefulProgress="20"
                  workloadProgress="90"
                  enjoymentProgress="20"
                  difficultyProgress="80"
                />
              </div>
              <div className="card-displayer">
                <ReviewCard
                  reviewDate="10/2/19"
                  reviewTitle="its okay..."
                  usefulProgress="100"
                  workloadProgress="40"
                  enjoymentProgress="60"
                  difficultyProgress="10"
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default CoursePage;
