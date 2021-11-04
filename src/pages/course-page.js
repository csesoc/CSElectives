import React, { useContext, useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useHistory, useParams } from 'react-router-dom';
import { LoadingContext } from '../App.js';
import PropTypes from 'prop-types';

import ReviewCard from '../components/review-card.js';
import SummaryCard from '../components/summary-card.js';
import ReviewModal from '../components/review-modal.js';
import ReviewsBar from '../components/course-review/reviews-bar.js';
import EmptyState from '../components/course-review/empty-state.js';
import PlaceHolderSummary from '../components/course-review/placeholder-summary.js';
import PlaceHolderReview from '../components/course-review/placeholder-reviews.js';
import BlankSvg from '../assets/illustrations/blank_canvas.svg';
import ScrollButton from '../components/scroll-button.js';

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
    return review.rating.difficulty
    + review.rating.enjoyment
    + review.rating.overall
    + review.rating.usefulness
    + review.rating.workload;
  };


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
    const average = total / count;
    return average.toFixed(1);
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
    const month = new Date(review.timestamp).getMonth();
    const year = new Date(review.timestamp).getFullYear();
    return `${date}/${month}/${year}`;
  };

  const getTags = () => {
    const tags = {
      level: course.studyLevel,
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

  // display review card
  const displayReview = (review) => {
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
            <div key={i} className='reviews'>
              {displayReview(review)}
            </div>
          );
        })}

      </>
    );
  };

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
                  workloadAvg={getAverage('workload')}
                  difficultyAvg={getAverage('difficulty')}
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
