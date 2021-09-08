import React, { useState } from 'react';
import { Form, Header, Button, Icon, TextArea, Rating } from 'semantic-ui-react';
import '../styles/review-page.css';
import CourseSelect from '../components/course-select.js';
import PropTypes from 'prop-types';
import ReviewRating from '../components/review-rating/review-rating.js';

const termOptions = [
  { value: '21T2', text: '21T2' },
  { value: '21T1', text: '21T1' },
  { value: '20T3', text: '20T3' },
  { value: '20T2', text: '20T2' },
  { value: '20T1', text: '20T1' },
  { value: '19T3', text: '19T3' },
  { value: '19T2', text: '19T2' },
  { value: '19T1', text: '19T1' },
  { value: '18S2', text: '18S2' },
  { value: '18S1', text: '18S1' },
  { value: '17S2', text: '17S2' },
  { value: '17S1', text: '17S1' },
  { value: '16S2', text: '16S2' },
  { value: '16S1', text: '16S1' },
];

const ReviewPage = (props) => {
  const [question, setQuestion] = useState('');
  const handleQuestionChange = (e, { value }) => {
    setQuestion(value);
  };

  const [anonymity, setAnonymity] = useState(true);
  const handleAnonymityChange = (e, { value }) => {
    setAnonymity(value);
  };

  const { courses } = props;

  const [overallRating, setOverallRating] = useState(0);

  return (
    <>
      <Header as='h1'>Submit Review Page</Header>
    </>
  );
};


ReviewPage.propTypes = {
  courses: PropTypes.object,
};

export default ReviewPage;
