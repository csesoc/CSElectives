import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Icon, Modal, Image, Header } from 'semantic-ui-react';

import Database from '../db/db.js';

import '../styles/review-page.css';
import CourseRatings from '../components/review-form/course-ratings';
import AnonChoice from '../components/review-form/anon-choice';
import TermTakenSelect from '../components/review-form/term-taken-select';
import ReviewTextArea from '../components/review-form/review-text-area';

const ReviewPage = (props) => {
  const { courseCode } = props;

  const [overall, setOverall] = useState(0);
  const [enjoyment, setEnjoyment] = useState(0);
  const [usefulness, setUsefulness] = useState(0);
  const [workload, setWorkload] = useState(0);

  const [anonymity, setAnonymity] = useState(true);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [termTaken, setTermTaken] = useState('');

  const [open, setOpen] = useState(false);

  const handleSubmit = async () =>{
    const review = {
      author: 'anonymous',
      title,
      comment,
      courseCode: courseCode,
      displayAuthor: anonymity,
      rating: {
        enjoyment,
        overall,
        workload,
        usefulness,
      },
      recommendedCourses: [],
      termTaken,
      timestamp: Date.now(),
    };

    await Database.addReview(review);

    location.reload();
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Submit a review</Button>}
    >
      <Modal.Header>Submit a review</Modal.Header>
      <Modal.Content className='review-modal'>
        <p>Please write your review here: make sure you have read the terms and conditions
          before posting. Feel free to include your overall experience with the course,
          how you found the assessments/workload and anything else you wanted to share!
        </p>
        <p><span className='required'>* Required</span></p>
        <Form>
          <CourseRatings
            overall={overall}
            setOverall={setOverall}
            enjoyment={enjoyment}
            setEnjoyment={setEnjoyment}
            usefulness={usefulness}
            setUsefulness={setUsefulness}
            workload={workload}
            setWorkload={setWorkload}
          />
          <Form.Group>
            <div className='review-form'>
              <div className='review-anon-text'>
                <label>Would you like to remain anonymous?<span className='required'> *</span></label>
              </div>
              <div className='review-anon-radio'>
                <AnonChoice anonymity={anonymity} setAnonymity={setAnonymity} />
              </div>
              <div className='review-term-text'>
                <label>When did you complete the course?<span className='required'> *</span></label>
              </div>
              <div className='review-term-dropdown'>
                <TermTakenSelect termTaken={termTaken} setTermTaken={setTermTaken} />
              </div>
              <div className='review-text-text'>
                <label>Write your review here!
                  <span className='easterEgg'> YOU BETTER FILL IT OUT! ٩(๏_๏)۶ </span>
                </label>
              </div>
              <div>
                <div className='review-text-input'>
                  <ReviewTextArea
                    title={title}
                    setTitle={setTitle}
                    comment={comment}
                    setComment={setComment}
                  />
                </div>
              </div>
            </div>
          </Form.Group>
          <div className='review-button'>
            <Button
              color='green'
              animated='fade'
              type='submit'
              disabled={!termTaken
                    || !overall
                    || !enjoyment
                    || !usefulness
                    || !workload
                    || (comment && !title)
                    || (title && !comment)
              }
              onClick={handleSubmit}
            >
              <Button.Content visible><Icon name='angle double right' /></Button.Content>
              <Button.Content hidden>Submit</Button.Content>
            </Button>
          </div>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

ReviewPage.propTypes = {
  courseCode: PropTypes.string,
};

export default ReviewPage;
