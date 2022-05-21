import React, { useContext, useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useHistory, useParams } from 'react-router-dom';
import { LoadingContext } from '../App.js';
import PropTypes from 'prop-types';

import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import ReviewsBar from '../components/course-review/reviews-bar.js';
import EmptyState from '../components/course-review/empty-state.js';
import PlaceHolderSummary from '../components/course-review/placeholder-summary.js';
import PlaceHolderReview from '../components/course-review/placeholder-reviews.js';
import BlankSvg from '../assets/illustrations/blank_canvas.svg';
import ScrollButton from '../components/scroll-button.js';

import getAverageRating from '../helpers/AverageRating.js';
import getMergedAverageRating from '../helpers/MergedAverageRating.js';

import '../styles/course-page.css';

const CoursePage = (props) => {
  const { courses, setLoginMessage, setLoginOpen } = props;
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

  const scoreTotal = (review) => {
    return review.rating.overall
    + review.rating.enjoyment
    + review.rating.usefulness
    + review.rating.manageability;
  };


  const handleClick = () => {
    history.push('/review');
  };
  const handleClickHome = () => {
    history.push('/');
  };
  const getAverage = (ratingCategory) => {
    return getAverageRating(course, ratingCategory);
  };

  const year = new Date().getFullYear();

  const getLink = () => {
    return `https://www.handbook.unsw.edu.au/undergraduate/courses/${year}/${courseCode}/`;
  };

  const getSummaryTitle = () => {
    return `${course.title}`;
  };

  const getReviewDate = (review) => {
    const date = new Date(review.timestamp).getDate();
    const month = new Date(review.timestamp).getMonth() + 1;
    const year = new Date(review.timestamp).getFullYear();
    return `${date}/${month}/${year}`;
  };

  const getTags = () => {
    const tags = {
      terms: course.terms.map((term) => {
        if (term == 0) {
          return 'Summer';
        } else {
          return 'Term ' + term;
        }
      }),
    };
    return tags;
  };

<<<<<<< HEAD
  const [textOnly, setTextOnly] = useState(false);
  const handleClickTextOnly = () => {
    setTextOnly(!textOnly);
=======
  const getMergedAverage = (ratingCategory) => {
    return getMergedAverageRating(courses['COMP4920'], courses['SENG4920'], ratingCategory);
  };

  const getMergedNumReviews = () => {
    const compcourse = courses['COMP4920'];
    const sengcourse = courses['SENG4920'];
    return compcourse.reviews.length + sengcourse.reviews.length;
>>>>>>> main
  };

  const displayReview = (review) => {
    return (
      <>
        <ReviewCard
          courseCode={courseCode}
          overallRating={review.rating.overall}
          reviewId={review.id}
          reviewDate={getReviewDate(review)}
          reviewTitle={review.title}
          reviewComment={review.comment}
          usefulProgress={review.rating.usefulness}
          manageabilityProgress={review.rating.manageability}
          enjoymentProgress={review.rating.enjoyment}
          // author={review.displayAuthor ? review.author : 'Anonymous'}
          author={'Anonymous'}
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
          <div className='blank'>
            <Image className='blank-svg' fluid src={BlankSvg} />
          </div>
          <EmptyState handleClickHome={handleClickHome} />
        </>
      );
    }
    return (
      <>
        {course.reviews.sort((a, b) => {
          const aScore = scoreTotal(a);
          const bScore = scoreTotal(b);

          // Sorts reviews by ratings, total score and time created
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
            !(textOnly && review.comment.length == 0)
              ? <div key={i} className='reviews'>{ displayReview(review) }</div>
              : null
          );
        })}

      </>
    );
  };

  const checkMergedEmptyState = () => {
    const compcourse = courses['COMP4920'];
    const sengcourse = courses['SENG4920'];
    if (compcourse.reviews.length + sengcourse.reviews.length === 0) {
      return (
        <>
          <div className='blank'>
            <Image className='blank-svg' fluid src={BlankSvg} />
          </div>
          <EmptyState handleClickHome={handleClickHome} />
        </>
      );
    }
    const mergedReviews = compcourse.reviews.concat(sengcourse.reviews);
    return (
      <>
        {mergedReviews.sort((a, b) => {
          const aScore = scoreTotal(a);
          const bScore = scoreTotal(b);

          // Sorts reviews by ratings, total score and time created
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
            <div key={i} className='reviews'>
              {displayReview(review)}
            </div>
          );
        })}

      </>
    );
  };

  if (courseCode === 'COMP4920' || courseCode === 'SENG4920') {
    return (
      <>
        <div className='scroll-button-container'>
          <ScrollButton />
        </div>
        <Grid stackable>
          <Grid.Column width={7}>
            <div className='summary-card'>
              {loading
                ? <PlaceHolderSummary />
                : (
                  <SummaryCard
                    summaryTitle={getSummaryTitle()}
                    summaryLink={getLink()}
                    courseCode={'COMP4920 / SENG4920'}
                    overallRating={getMergedAverage('overall')}
                    numReviews={getMergedNumReviews()}
                    summaryDesc={course.description}
                    usefulAvg={getMergedAverage('usefulness')}
                    manageabilityAvg={getMergedAverage('manageability')}
                    enjoymentAvg={getMergedAverage('enjoyment')}
                    tags={getTags()}
                  />
                )
              }
            </div>
          </Grid.Column>
          <Grid.Column width={9}>
            <ReviewsBar
              sortOptions={sortOptions}
              handleSortChange={handleSortChange}
              handleClick={handleClick}
              courseCode={courseCode}
              setLoginMessage={setLoginMessage}
              setLoginOpen={setLoginOpen}
            />
            {loading ? <PlaceHolderReview /> : checkMergedEmptyState() }
          </Grid.Column>
        </Grid>
      </>
    );
  }


  return (
    <>
      <div className='scroll-button-container'>
        <ScrollButton />
      </div>
      <Grid stackable>
        <Grid.Column width={7}>
          <div className='summary-card'>
            {loading
              ? <PlaceHolderSummary />
              : (
                <SummaryCard
                  summaryTitle={getSummaryTitle()}
                  summaryLink={getLink()}
                  courseCode={courseCode}
                  overallRating={getAverage('overall')}
                  numReviews={course.reviews.length}
                  summaryDesc={course.description}
                  usefulAvg={getAverage('usefulness')}
                  manageabilityAvg={getAverage('manageability')}
                  enjoymentAvg={getAverage('enjoyment')}
                  tags={getTags()}
                />
              )
            }
          </div>
        </Grid.Column>
        <Grid.Column width={9}>
          <ReviewsBar
            sortOptions={sortOptions}
            handleSortChange={handleSortChange}
            handleClick={handleClick}
            courseCode={courseCode}
            setLoginMessage={setLoginMessage}
            setLoginOpen={setLoginOpen}
            handleClickTextOnly={handleClickTextOnly}
          />
          {loading ? <PlaceHolderReview /> : checkEmptyState() }
        </Grid.Column>
      </Grid>
    </>
  );
};

CoursePage.propTypes = {
  courses: PropTypes.object,
  setLoginMessage: PropTypes.func,
  setLoginOpen: PropTypes.func,
};

export default CoursePage;
