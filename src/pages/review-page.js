import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Header, Button, Icon } from 'semantic-ui-react';

import Database from '../db/db.js';

import '../styles/review-page.css';
import CourseRatings from '../components/review-form/course-ratings';
import CourseSelect from '../components/review-form/course-select';
import AnonChoice from '../components/review-form/anon-choice';
import TermTakenSelect from '../components/review-form/term-taken-select';
import ReviewTextArea from '../components/review-form/review-text-area';

const ReviewPage = (props) => {
  const { courses } = props;

  const [overall, setOverall] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [enjoyment, setEnjoyment] = useState(0);
  const [usefulness, setUsefulness] = useState(0);
  const [workload, setWorkload] = useState(0);

  const [anonymity, setAnonymity] = useState(true);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [termTaken, setTermTaken] = useState('');
  const [course, setCourse] = useState('');

  const rating = {
    enjoyment,
    overall,
    workload,
    difficulty,
    usefulness,
  };

  const handleSubmit = async () =>{
    const review = {
      author: 'anonymous',
      title,
      comment,
      courseCode: course,
      displayAuthor: anonymity,
      rating,
      recommendedCourses: [],
      termTaken,
      timestamp: Date.now() };
    console.log(review);

    const reviewId = await Database.addReview(review);
    console.log(reviewId);
  };

  return (
    <>
      <Header as='h1'>Submit Review Page</Header>

      <Form>
        <CourseRatings
          overall={overall}
          setOverall={setOverall}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          enjoyment={enjoyment}
          setEnjoyment={setEnjoyment}
          usefulness={usefulness}
          setUsefulness={setUsefulness}
          workload={workload}
          setWorkload={setWorkload}
        />

        <CourseSelect courses={courses} course={course} setCourse={setCourse} />
        <TermTakenSelect termTaken={termTaken} setTermTaken={setTermTaken} />
        <AnonChoice anonymity={anonymity} setAnonymity={setAnonymity} />
        <ReviewTextArea
          title={title}
          setTitle={setTitle}
          comment={comment}
          setComment={setComment}
        />

        <Button
          color='green'
          animated='fade'
          type='submit'
          onClick={handleSubmit}
        >
          <Button.Content visible><Icon name='angle double right' /></Button.Content>
          <Button.Content hidden>Submit</Button.Content>
        </Button>
      </Form>
    </>
  );
};

ReviewPage.propTypes = {
  courses: PropTypes.object,
};

export default ReviewPage;
