import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Modal } from 'semantic-ui-react';

import Database from '../db/db.js';

import '../styles/review-page.css';
import CourseRatings from '../components/review-form/course-ratings';
// import AnonChoice from '../components/review-form/anon-choice';
import TermTakenSelect from '../components/review-form/term-taken-select';
import ReviewTextArea from '../components/review-form/review-text-area';
import ReviewChoice from './review-form/review-choice.js';
import { UserContext } from '../App.js';

const ReviewModal = (props) => {
  const user = useContext(UserContext);

  const { courseCode, setLoginMessage, setLoginOpen } = props;
  const [overall, setOverall] = useState(0);
  const [enjoyment, setEnjoyment] = useState(0);
  const [usefulness, setUsefulness] = useState(0);
  const [manageability, setManageability] = useState(0);

  const [anonymity, setAnonymity] = useState(true);
  const [reviewMessage, setReviewMessage] = useState(true);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [termTaken, setTermTaken] = useState('');
  const [checkTnc, setCheckTnc] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClick = () => setCheckTnc(!checkTnc);

  const handleSubmit = async () =>{
    const review = {
      author: user?.displayName,
      title: reviewMessage ? title : '',
      comment: reviewMessage ? comment : '',
      courseCode: courseCode,
      displayAuthor: !anonymity,
      rating: {
        enjoyment,
        overall,
        manageability,
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
    <>
      <Button
        secondary
        style={{ backgroundColor: 'var(--csesoc-navy)' }}
        content='Add a Review'
        labelPosition='left'
        icon='pencil'
        onClick={() => {
          if (user === null) {
            // not logged in
            setLoginMessage('You must be logged in to add a review');
            setLoginOpen(true);
          } else {
            // open submit review
            setOpen(true);
          }
        }}
      />
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Submit a review</Modal.Header>
        <div className='review-modal'>
          <Modal.Content>
            <p>Please write your review here: make sure you have read the terms and conditions
              before posting. Feel free to include your overall experience with the course,
              how you found the assessments/workload and anything else you wanted to share!
              All new reviews submitted will be displayed as anonymous.
            </p>
            <p><span className='required'>* Required</span>
              <span className='easterEgg'> YOU BETTER FILL IT OUT! ٩(๏_๏)۶ </span>
            </p>
            <Form>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1.5 }}>
                  <ReviewChoice
                    reviewMessage={reviewMessage}
                    setReviewMessage={setReviewMessage}
                  />
                  <ReviewTextArea
                    title={title}
                    setTitle={setTitle}
                    comment={comment}
                    setComment={setComment}
                    disabled={!reviewMessage}
                  />
                  <br />
                  <div
                    className="ui checkbox"
                  >
                    <input type="checkbox" name="example" onClick={handleClick} checkTnc={checkTnc} />
                    <label> I have read and agree with the
                      <a href="https://cselectives.csesoc.unsw.edu.au/termsandconditions"> terms and conditions.</a>
                      <span className='required'> *</span>
                    </label>
                  </div>
                </div>
                <div className='review-form-left'>
                  <div style={{ display: 'flex', flexGrow: 1 }}>
                    <CourseRatings
                      overall={overall}
                      setOverall={setOverall}
                      enjoyment={enjoyment}
                      setEnjoyment={setEnjoyment}
                      usefulness={usefulness}
                      setUsefulness={setUsefulness}
                      manageability={manageability}
                      setManageability={setManageability}
                    />
                  </div>
                  <div className='review-term-text'>
                    <b>
                      <label>When did you complete the course?<span className='required'> *</span></label>
                    </b>
                  </div>
                  <div
                    className='review-term-dropdown'
                  >
                    <TermTakenSelect termTaken={termTaken} setTermTaken={setTermTaken} />
                  </div>
                  {/* <div className='review-anon-text'>
                    <b>
                      <label>Would you like to remain anonymous?<span className='required'> *</span></label>
                    </b>
                  </div>
                  <div>
                    <AnonChoice anonymity={anonymity} setAnonymity={setAnonymity} />
                  </div> */}
                </div>
              </div>
              <div className='review-button'>
                <Button
                  content='Submit'
                  color='green'
                  type='submit'
                  disabled={!termTaken
                  || !overall
                  || !enjoyment
                  || !usefulness
                  || !manageability
                  || (reviewMessage && (!comment || !title))
                  || !checkTnc
                  }
                  onClick={handleSubmit}
                >
                </Button>
              </div>
            </Form>
          </Modal.Content>
        </div>
      </Modal>
    </>
  );
};

ReviewModal.propTypes = {
  courseCode: PropTypes.string,
  setLoginMessage: PropTypes.func,
  setLoginOpen: PropTypes.func,
};

export default ReviewModal;
