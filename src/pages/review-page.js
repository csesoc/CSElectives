import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Header, Button, Icon } from 'semantic-ui-react';

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
  const [enjoyability, setEnjoyability] = useState(0);
  const [usefulness, setUsefulness] = useState(0);
  const [workload, setWorkload] = useState(0);

  const [anonymity, setAnonymity] = useState(true);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [termTaken, setTermTaken] = useState('');
  const [course, setCourse] = useState('');

  const TimeStamp = new Date();

  const reviewObject = {
    author: 'Anonymous',
    displayAuthor: { anonymity },
    reviewtitle: { reviewTitle },
    reviewcomment: { reviewComment },
    rating: [{ overall },
      { difficulty },
      { enjoyability },
      { usefulness },
      { workload }],
    timestamp: { TimeStamp },
    termtaken: { termTaken },
    course: { course },
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
          enjoyability={enjoyability}
          setEnjoyability={setEnjoyability}
          usefulness={usefulness}
          setUsefulness={setUsefulness}
          workload={workload}
          setWorkload={setWorkload}
        />

        <CourseSelect courses={courses} course={course} setCourse={setCourse} />
        <TermTakenSelect termTaken={termTaken} setTermTaken={setTermTaken} />
        <AnonChoice anonymity={anonymity} setAnonymity={setAnonymity} />
        <ReviewTextArea
          reviewTitle={reviewTitle}
          setReviewTitle={setReviewTitle}
          reviewComment={reviewComment}
          setReviewComment={setReviewComment}
        />

        <Button color='green' animated='fade' type='submit' onClick={console.log({ reviewObject })}>
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
