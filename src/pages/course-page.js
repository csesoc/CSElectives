import React from 'react';
import { Header, Label, Progress, Grid, Dropdown, Button } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import CourseReviewCard from '../components/course-review-card.js';
import { useHistory } from 'react-router-dom';


const CoursePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/review');
  };
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
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <div className="card-displayer">
                <SummaryCard summaryTitle="COMP1511"/>
              </div>
            </Grid.Column>
            <Grid.Column >
              <Grid.Column width={10}>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <div className='review-heading'>
                        <h2>Reviews</h2>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <div className='sort-reviews'>
                        <Dropdown text = 'Sort by'>
                          <Dropdown.Menu>
                            <Dropdown.Item text='Most Popular' />
                            <Dropdown.Item text='Most Recent' />
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <Button class="ui button" onClick={handleClick} className='review-button'>
                        Submit a review
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
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
