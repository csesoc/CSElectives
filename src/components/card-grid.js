import React from 'react';
import PropTypes from 'prop-types';

import CourseReviewCard from './course-review-card.js';
import { Grid, Icon } from 'semantic-ui-react';

// This function creates the grid of course review cards
const CardGrid = (props) => {
  const { courses, majors, activeMajorTags, activeTermTags, activePrefixTags, activeSort } = props;

  // SORT FUNCTIONS
  const sortMostReviews = (a, b) => {
    return b.reviews.length - a.reviews.length;
  };

  const sortHighestRated = (a, b) => {
    return getAverageRating(b, 'overall') - getAverageRating(a, 'overall');
  };

  const sortMostUseful = (a, b) => {
    return getAverageRating(b, 'usefulness') - getAverageRating(a, 'usefulness');
  };

  const sortMostEnjoyable = (a, b) => {
    return getAverageRating(b, 'enjoyment') - getAverageRating(a, 'enjoyment');
  };

  const sortBestWorkload = (a, b) => {
    return getAverageRating(b, 'workload') - getAverageRating(a, 'workload');
  };

  const sortsFunction = {
    'Most Reviews': sortMostReviews,
    'Highest Rated': sortHighestRated,
    'Most Useful': sortMostUseful,
    'Most Enjoyable': sortMostEnjoyable,
    'Best Workload': sortBestWorkload,
  };

  const sortCourses = () => {
    return Object.values(courses).sort(sortsFunction[activeSort]);
  };

  const getOverallRating = (course) => {
    let total = 0;
    let count = 0;
    course.reviews.forEach((review) => {
      total += review.rating['overall'];
      count++;
    });
    if (count === 0) {
      return <p>😢</p>;
    }
    const roundedAverage = Math.round(total / count * 10) / 10;
    return roundedAverage.toFixed(1);
  };

  const getAverageRating = (course, ratingCategory) => {
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

  // FILTER HELPER FUNCTIONS

  // Returns a major associated with a course
  const getMajor = (course) => {
    for (const major in majors) {
      if (majors.hasOwnProperty(major)) {
        if (majors[major].courses.includes(course.courseCode)) {
          return majors[major].title;
        }
      }
    }
    return false;
  };

  const filterTermsFilter = (course) => {
    for (let i = 0; i < course.terms.length; i++) {
      const activeTermTagsNum = activeTermTags.map(termsToNum);
      if (activeTermTagsNum.includes(course.terms[i])) {
        return true;
      }
    }
    return false;
  };

  const termsToNum = (term) => {
    if (term === 'Summer Term') {
      return 0;
    }
    // Term should look something like "Term 2", we want to extract the number at index 5
    return parseInt(term[5]);
  };

  // FILTER FUNCTIONS
  const filterMajors = (courses) => {
    if (activeMajorTags.length > 0) {
      const filteredCourses = courses.filter((course) => (
        activeMajorTags.includes(getMajor(course))
      ));
      return filteredCourses;
    }
    return courses;
  };

  const filterTerms = (courses) => {
    if (activeTermTags.length > 0) {
      const filteredCourses = courses.filter(filterTermsFilter);
      return filteredCourses;
    }
    return courses;
  };

  const filterPrefix = (courses) => {
    if (activePrefixTags.length > 0) {
      const filteredCourses = courses.filter((course) => (
        activePrefixTags.includes(course.courseCode.slice(0, 4))
      ));
      return filteredCourses;
    }
    return courses;
  };


  const sortedCourses = sortCourses();
  const prefixFilteredCourses = filterPrefix(filterTerms(filterMajors(sortedCourses)));
  const gridArray = [];
  const colSize = 3;
  for (let i = 0; i < prefixFilteredCourses.length; i += colSize) {
    const gridRow = prefixFilteredCourses.slice(i, i + colSize);
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


export default CardGrid;
