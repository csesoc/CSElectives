import React from 'react';
import PropTypes from 'prop-types';

import CourseReviewCard from './course-review-card.js';

import { Grid, Icon } from 'semantic-ui-react';
import NoResultsFound from './no-results-found.js';

// This function creates the grid of course review cards
const CardGrid = (props) => {
  const { courses, majors, activeMajorTags, activeTermTags, activePrefixTags } = props;
  // Returns an array of courses sorted in descending order of number of reviews
  const sortMostReviewed = () => {
    return Object.values(courses).sort(function(a, b) {
      return b.reviews.length - a.reviews.length;
    });
  };

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


  const filterMajors = (courses) => {
    if (activeMajorTags.length > 0) {
      const filteredCourses = courses.filter((course) => (
        activeMajorTags.includes(getMajor(course))
      ));
      return filteredCourses;
    }
    return courses;
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

  const sortedCourses = sortMostReviewed();
  const prefixFilteredCourses = filterPrefix(filterTerms(filterMajors(sortedCourses)));
  const gridArray = [];
  const colSize = 3;
  for (let i = 0; i < prefixFilteredCourses.length; i += colSize) {
    const gridRow = prefixFilteredCourses.slice(i, i + colSize);
    gridArray.push(gridRow);
  }
  console.log(prefixFilteredCourses);
  if (prefixFilteredCourses.length != 0) {
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
  } else {
    return (<NoResultsFound />);
  }
};

CardGrid.propTypes = {
  courses: PropTypes.object.isRequired,
  majors: PropTypes.object.isRequired,
  activeMajorTags: PropTypes.array.isRequired,
  activeTermTags: PropTypes.array.isRequired,
  activePrefixTags: PropTypes.array.isRequired,
};

export default CardGrid;
