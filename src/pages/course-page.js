import React from 'react';
import { Header, Label, Progress, Grid } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import CourseReviewCard from '../components/course-review-card.js';


const CoursePage = () => {
  return (
    <>
      <Header as='h1'>Course Page</Header>

      {/* Label component: https://react.semantic-ui.com/elements/label/ */}
      <Label color='red'>These label components</Label>
      <Label color='green' basic>would be helpful!</Label>

      {/* Progress component: https://react.semantic-ui.com/modules/progress/ */}
      <div>Maybe you can use this for your bar charts?</div>

      <div>This is an unrestricted width progress component</div>
      <Progress percent={10} />

      <div style={{ maxWidth: '25%', border: '1px solid black' }}>
        <span>
          Spans dont put new lines which you might find handy.
          You can restrict the width of the parent div to control the length of the progress component
        </span>
        <Progress percent={10} />
      </div>
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div className="card-displayer">
                <SummaryCard summaryTitle="COMP1511"/>
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <div className="card-displayer">
                <ReviewCard reviewTitle="COMP2521"/>
              </div>
              <div className="card-displayer">
                <ReviewCard reviewTitle="COMP1511"/>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default CoursePage;
