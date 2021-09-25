import React from 'react';
import PropTypes from 'prop-types';

import CourseReviewCard from './course-review-card.js';
import { Grid } from 'semantic-ui-react';

// This function creates the grid of course review cards
const CardGrid = (props) => {
  const { courses } = props;
  // Returns an array of courses sorted in descending order of number of reviews
  const sortMostReviewed = () => {
    return Object.values(courses).sort(function(a, b) {
      return b.reviews.length - a.reviews.length;
    });
  };

  const getOverallRating = (course) => {
    let total = 0;
    let count = 0;
    course.reviews.forEach((review) => {
      total += review.rating['overall'];
      count++;
    });
    if (count === 0) {
      return 0;
    }
    const roundedAverage = Math.round(total / count * 10) / 10;
    return roundedAverage;
  };

  const sortedCourses = sortMostReviewed();
  const gridArray = [];
  const colSize = 3;
  for (let i = 0; i < sortedCourses.length; i += colSize) {
    const gridRow = sortedCourses.slice(i, i + colSize);
    gridArray.push(gridRow);
  }
  return gridArray.map((row, index) => {
    return (
      <Grid.Row key={index} stretched>
        {row.map((course) => (
          <Grid.Column key={course.id} columns='equal'>
            <CourseReviewCard
              code={course.courseCode}
              name={course.title}
              numReviews={course.reviews.length}
              overallRating={getOverallRating(course)}
              studyLevel={course.studyLevel}
              terms={course.terms}
            />
          </Grid.Column>))}
      </Grid.Row>
    );
  });
};

CardGrid.propTypes = {
  courses: PropTypes.object,
};

export default CardGrid;
