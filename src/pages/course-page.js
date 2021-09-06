import React from 'react';
import { Grid, Dropdown, Button, Header } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import { useHistory } from 'react-router-dom';
import RatingsCard from '../components/review-card-ratings-only.js';
import '../styles/course-page.css';

const CoursePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/review');
  };
  return (
    <>

      <Header>
        <h1 style={{ padding: 20, textAlign: 'center', margin: 40, fontSize: '80px', color: 'black' }}>COMP1511</h1>
      </Header>


      <div>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <div className="card-displayer">
                <SummaryCard
                  summaryTitle="COMP1511 - Intro to Programming"
                  summaryLink="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP1511/"
                  overallRating="4"
                  numReviews="42"
                  // eslint-disable-next-line max-len
                  summaryDesc="This is a long description of the above course describing containing what to expect in the course"
                  usefulAvg="3"
                  workloadAvg="2"
                  difficultyAvg="4"
                  enjoymentAvg="3"
                />
              </div>


            </Grid.Column>
            <Grid.Column>
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
                        <Dropdown text='Sort by'>
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
                    description="I took COMP3311(databases) and it was one of my
                    favourite (and highest mark courses). The assignments
                    and exams are actually fun. Why? Because they are
                    somewhat relatable, e.g. Where can I buy a type of
                    Pizza that serves it, but also is the cheapest, blah,
                    blah. The practical work is also fun and you can take
                    it at your own pace. I like Jas as a lecturer too."
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
                    description="I took COMP3311(databases) and it was one of my
                    favourite (and highest mark courses). The assignments
                    and exams are actually fun. "
                    overallRating="2"
                    reviewDate="10/2/19"
                    reviewTitle="its okay..."
                    usefulProgress="2"
                    workloadProgress="5"
                    enjoymentProgress="3"
                    difficultyProgress="2"
                  />
                </div>

                <div className="card-displayer">
                  <ReviewCard
                    overallRating="2"
                    reviewDate="10/2/19"
                    reviewTitle="its okay..."
                    description="I took COMP3311(databases) and it was one of my
                    favourite (and highest mark courses). The assignments
                    and exams are actually fun. Why? Because they are
                    somewhat relatable, e.g. Where can I buy a type of
                    Pizza that serves it, but also is the cheapest, blah,
                    blah. "
                    usefulProgress="2"
                    workloadProgress="5"
                    enjoymentProgress="3"
                    difficultyProgress="2"
                  />
                </div>
                <div className="card-displayer">
                  <RatingsCard
                    overallRating="4"
                    reviewDate="11/2/19"
                    reviewTitle="Random Title"
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
