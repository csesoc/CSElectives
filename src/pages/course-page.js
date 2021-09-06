import React, { useContext } from 'react';
import { Grid, Dropdown, Button, Header } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CourseReviewCard from '../components/course-review-card.js';
import RatingsCard from '../components/review-card-ratings-only.js';
import '../styles/course-page.css';
import { LoadingContext } from '../App.js';

const CoursePage = (props) => {
  const { courses } = props;
  const loading = useContext(LoadingContext);
  const history = useHistory();
  const handleClick = () => {
    history.push('/review');
  };

  const getAverage = (ratingCategory) => {
    let total = 0;
    let count = 0;
    courses.COMP1511.reviews.forEach((review) => {
      total += review.rating[ratingCategory];
      count++;
    });
    return total / count;
  };

  const year = new Date().getFullYear();

  const getLink = () => {
    return `https://www.handbook.unsw.edu.au/undergraduate/courses/${year}/`
    +`${courses.COMP1511.courseCode}/`;
  };

  const getSummaryTitle = () => {
    return `${courses.COMP1511.courseCode} - ${courses.COMP1511.title}`;
  };

  const getReviewDate = (review) => {
    const date = new Date(courses.COMP1511.reviews[review].timestamp).getDate();
    const month = new Date(courses.COMP1511.reviews[review].timestamp).getMonth();
    const year = new Date(courses.COMP1511.reviews[review].timestamp).getFullYear();
    return `${date}/${month}/${year}`;
  };

  if (loading) {
    return <span>loading...</span>;
  } else {
    console.log(courses.COMP1511);
    console.log(courses.COMP1511.reviews);
    return (
      <>
        <Header>
          <h1 style={{ padding: 20, textAlign: 'center', margin: 40, fontSize: '80px', color: 'black' }}>
            {courses.COMP1511.courseCode}
          </h1>
        </Header>
        <div>
          <Grid stackable>
            <Grid.Column width={7} floated='left'>
              <div className="summary-card">
                <SummaryCard
                  summaryTitle={getSummaryTitle()}
                  summaryLink={getLink()}
                  overallRating={getAverage('overall')}
                  numReviews={courses.COMP1511.reviews.length}
                  summaryDesc={courses.COMP1511.description}
                  usefulAvg={getAverage('usefulness')}
                  workloadAvg={getAverage('workload')}
                  difficultyAvg={getAverage('difficulty')}
                  enjoymentAvg={getAverage('enjoyment')}
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
                      <Dropdown text='Sort by'>
                        <Dropdown.Menu>
                          <Dropdown.Item text='Most Popular' />
                          <Dropdown.Item text='Most Recent' />
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <div className='review-button'>
                      <Button onClick={handleClick} className='review-button'>
                        Submit a review
                      </Button>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              {Object.keys(courses.COMP1511.reviews).map((review, i) => {
                return (
                  <div key={i} className="card-displayer">
                    <ReviewCard
                      overallRating={courses.COMP1511.reviews[review].rating.overall}
                      reviewDate={getReviewDate(review)}
                      reviewTitle={courses.COMP1511.reviews[review].title}
                      reviewComment={courses.COMP1511.reviews[review].comment}
                      usefulProgress={courses.COMP1511.reviews[review].rating.usefulness}
                      workloadProgress={courses.COMP1511.reviews[review].rating.workload}
                      enjoymentProgress={courses.COMP1511.reviews[review].rating.enjoyment}
                      difficultyProgress={courses.COMP1511.reviews[review].rating.difficulty}
                    />
                  </div>
                );
              })}
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
          </Grid>
        </div>
      </>
    );
  };
};

CoursePage.propTypes = {
  courses: PropTypes.object,
};

export default CoursePage;
