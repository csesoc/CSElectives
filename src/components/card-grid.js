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
          <Grid.Column key={course.id} width={5}>
            <CourseReviewCard
              code={course.courseCode}
              name={course.title}
              desc={course.description}
              numReviews={course.reviews.length}
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
