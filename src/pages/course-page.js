import React from 'react';
import { Header, Label, Progress, Grid } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import CourseReviewCard from '../components/course-review-card.js';


const CoursePage = () => {
  return (
    <>
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div className="card-displayer">
                <SummaryCard summaryTitle="COMP1511 - Intro to Programming"/>
              </div>
            </Grid.Column>
            <Grid.Column >
              <Grid.Column width={10}>
                <div className="card-displayer">
                  <ReviewCard
                    overallRating="4"
                    reviewDate="10/2/20"
                    reviewTitle="wow i love this subject"
                    usefulProgress="3"
                    workloadProgress="2"
                    enjoymentProgress="4"
                    difficultyProgress="1"
                  />
                </div>
                <div className="card-displayer">
                  <ReviewCard
                    overallRating="2"
                    reviewDate="10/2/19"
                    reviewTitle="its okay..."
                    usefulProgress="2"
                    workloadProgress="5"
                    enjoymentProgress="3"
                    difficultyProgress="2"
                  />
                </div>
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default CoursePage;
