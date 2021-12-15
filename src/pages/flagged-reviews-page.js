import React, { useContext, useState, useEffect } from 'react';
import { AdminsContext, LoadingContext, UserContext } from '../App.js';

import '../styles/course-page.css';
import ReviewCard from '../components/review-card.js';
import db from '../db/db.js';
import { Header, Segment } from 'semantic-ui-react';

// Temporary page to see the reviews that have been flagged
const FlaggedReviewsPage = () => {
  const loading = useContext(LoadingContext);
  const admins = useContext(AdminsContext);
  const user = useContext(UserContext);

  const [flaggedReviews, setFlaggedReviews] = useState([]);

  useEffect(() => {
    const getFlaggedReviews = async () => {
      const newFlaggedReviews = await db.getFlaggedReviews();
      setFlaggedReviews(newFlaggedReviews);
    };
    getFlaggedReviews();
  }, []);

  // Only show this page if the user is an admin
  if (!admins.includes(user?.email)) return <Header as='h1' content='403 Forbidden' />;
  if (loading) return <></>;

  const getReviewDate = (review) => {
    const date = new Date(review.timestamp).getDate();
    const month = new Date(review.timestamp).getMonth();
    const year = new Date(review.timestamp).getFullYear();
    return `${date}/${month}/${year}`;
  };

  return (
    <>
      <Header as='h1' content='Flagged Reviews' />
      {flaggedReviews.length === 0
        ? <>No flagged reviews</>
        : flaggedReviews.map((flaggedReviewObject, idx) => (
          <Segment key={idx}>
            <Header as='h2' content={`${flaggedReviewObject.reviewId}: ${flaggedReviewObject.reason}`} />
            <ReviewCard
              courseCode={flaggedReviewObject.review.courseCode}
              overallRating={flaggedReviewObject.review.rating.overall}
              reviewId={flaggedReviewObject.reviewId}
              reviewDate={getReviewDate(flaggedReviewObject.review)}
              reviewTitle={flaggedReviewObject.review.title}
              reviewComment={flaggedReviewObject.review.comment}
              usefulProgress={flaggedReviewObject.review.rating.usefulness}
              manageabilityProgress={flaggedReviewObject.review.rating.manageability}
              enjoymentProgress={flaggedReviewObject.review.rating.enjoyment}
              author={flaggedReviewObject.review.displayAuthor ? flaggedReviewObject.review.author : 'Anonymous'}
              termTaken={flaggedReviewObject.review.termTaken}
            />
          </Segment>
        ))
      }
    </>
  );
};

export default FlaggedReviewsPage;
