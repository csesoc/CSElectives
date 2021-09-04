import React from 'react';
import { Grid, Dropdown, Button, Header } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


const CoursePage = (props) => {
  const { courses } = props;

  const history = useHistory();
  const handleClick = () => {
    history.push('/review');
  };

  console.log(courses);
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <>
      <Header>
        <h1 style={{ padding: 20, textAlign: 'center', margin: 40, fontSize: '80px', color: 'black' }}>
          {courses.COMP1511.code}
        </h1>
      </Header>
      <div>
        <Grid stackable>
          <Grid.Column width={7} floated='left'>
            <div className="my-summary-card">
              <SummaryCard
                summaryTitle={courses.COMP1511.code + ' - ' + courses.COMP1511.title}
                summaryLink=
                  {'https://www.handbook.unsw.edu.au/undergraduate/courses/' + year + '/' + courses.COMP1511.code + '/'}
                overallRating="4"
                numReviews={courses.COMP1511.reviews.length}
                summaryDesc={courses.COMP1511.description}
                usefulAvg="3"
                workloadAvg="2"
                difficultyAvg="4"
                enjoymentAvg="3"
              />
            </div>
          </Grid.Column>
          <Grid.Column width={9} floated='right'>
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
                <Grid.Column width={8}>
                  <div className='review-button'>
                    <Button class="ui button" onClick={handleClick} className='review-button'>
                          Submit a review
                    </Button>
                  </div>
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
        </Grid>
      </div>
    </>
  );
};


CoursePage.propTypes = {
  courses: PropTypes.object,
};

export default CoursePage;
