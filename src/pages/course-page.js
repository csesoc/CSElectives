import React, { useContext, useState } from 'react';
import { Grid, Dropdown, Button, Header, Icon } from 'semantic-ui-react';
import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingsCard from '../components/review-card-ratings-only.js';
import '../styles/course-page.css';
import { LoadingContext } from '../App.js';
import NotFoundPage from '../pages/not-found-page.js';

const CoursePage = (props) => {
  const { courses } = props;
  const loading = useContext(LoadingContext);
  const history = useHistory();
  const { courseCode } = useParams();
  const [sort, setSort] = useState('most-recent');
  const handleSortChange = (e, { value }) => {
    setSort(value);
  };
  const course = courses[courseCode];
  const sortOptions = [
    {
      key: 'Most Recent',
      text: 'Most Recent',
      value: 'most-recent',
    },
    {
      key: 'Highest Rating to Lowest',
      text: 'Highest Rating to Lowest',
      value: 'rating-descending',
    },
    {
      key: 'Lowest Rating to Highest',
      text: 'Lowest Rating to Highest',
      value: 'rating-ascending',
    },
  ];

  const handleClick = () => {
    history.push('/review');
  };
  const handleClickHome = () => {
    history.push('/');
  };
  const getAverage = (ratingCategory) => {
    let total = 0;
    let count = 0;
    course.reviews.forEach((review) => {
      total += review.rating[ratingCategory];
      count++;
    });
    if (count === 0) {
      return 0;
    }
    const roundedAverage = Math.round(total / count * 10) / 10;
    return roundedAverage;
  };

  const year = new Date().getFullYear();

  const getLink = () => {
    return `https://www.handbook.unsw.edu.au/undergraduate/courses/${year}/${courseCode}/`;
  };

  const getSummaryTitle = () => {
    return `${course.courseCode} - ${course.title}`;
  };

  const getReviewDate = (review) => {
    const date = new Date(review.timestamp).getDate();
    const month = new Date(review.timestamp).getMonth();
    const year = new Date(review.timestamp).getFullYear();
    return `${date}/${month}/${year}`;
  };

  // check if review has text or not
  // if review doesn't have text, present in a rating card
  // if it does, present in a review card
  const checkReview = (review) => {
    if (!review.comment) {
      return (
        <>
          <RatingsCard
            overallRating={review.rating.overall}
            reviewDate={getReviewDate(review)}
            reviewTitle={review.title}
            usefulProgress={review.rating.usefulness}
            workloadProgress={review.rating.workload}
            enjoymentProgress={review.rating.enjoyment}
            difficultyProgress={review.rating.difficulty}
          />
        </>
      );
    };
    return (
      <>
        <ReviewCard
          overallRating={review.rating.overall}
          reviewDate={getReviewDate(review)}
          reviewTitle={review.title}
          reviewComment={review.comment}
          usefulProgress={review.rating.usefulness}
          workloadProgress={review.rating.workload}
          enjoymentProgress={review.rating.enjoyment}
          difficultyProgress={review.rating.difficulty}
          author={review.displayAuthor ? review.author : 'Anonymous'}
          termTaken={review.termTaken}
        />
      </>
    );
  };

  // check if course has reviews or not
  const checkEmptyState = () => {
    if (course.reviews.length === 0) {
      return (
        <>
          <div className='no-reviews'>
            <Header>No reviews yet!</Header>
            <Button animated onClick={handleClickHome} size='big' color='blue' basic>
              <Button.Content visible> Check out more courses</Button.Content>
              <Button.Content hidden><Icon name='space shuttle' /></Button.Content>
            </Button>
          </div>

        </>
      );
    }
    return (
      <>
        {course.reviews.sort((a, b) => {
          const aScore = a.rating.difficulty
            + a.rating.enjoyment
            + a.rating.overall
            + a.rating.usefulness
            + a.rating.workload;
          const bScore = b.rating.difficulty
            + b.rating.enjoyment
            + b.rating.overall
            + b.rating.usefulness
            + b.rating.workload;

          if (sort === 'rating-descending') {
            if (a.rating.overall === b.rating.overall) {
              if (aScore === bScore) return b.timestamp - a.timestamp;
              return bScore - aScore;
            }
            return b.rating.overall - a.rating.overall;
          }

          if (sort === 'rating-ascending') {
            if (a.rating.overall === b.rating.overall) {
              if (aScore === bScore) return a.timestamp - b.timestamp;
              return aScore - bScore;
            }
            return a.rating.overall - b.rating.overall;
          }

          // Default is most recent
          return b.timestamp - a.timestamp;
        }).map((review, i) => {
          return (
            <div key={i} className="card-displayer">
              {checkReview(review)}
            </div>
          );
        })}
      </>
    );
  };

  if (loading) return <span>loading...</span>;
  if (!course) return <NotFoundPage />;

  return (
    <>
      <Header
        as='h1'
        style={{ padding: '20', textAlign: 'center', margin: '40', fontSize: '80px',
          color: 'black' }}
      >
        {course.courseCode}
      </Header>
      <div>
        <Grid stackable>
          <Grid.Column width={7} floated='left'>
            <div className="summary-card">
              <SummaryCard
                summaryTitle={getSummaryTitle()}
                summaryLink={getLink()}
                courseCode={courseCode}
                overallRating={getAverage('overall')}
                numReviews={course.reviews.length}
                summaryDesc={course.description}
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
                <div className='review-heading'>
                  <div>
                    <Header as='h2'>
                      Reviews
                    </Header>
                  </div>
                  <div className='dropdown-reviews'>
                    <Dropdown
                      placeholder='Sort by'
                      selection
                      options={sortOptions}
                      onChange={handleSortChange}
                    />
                  </div>
                  <div>
                    <Button onClick={handleClick} className='review-button'>
                      Submit a review
                    </Button>
                  </div>
                </div>
              </Grid.Row>
            </Grid>
            {checkEmptyState()}
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
