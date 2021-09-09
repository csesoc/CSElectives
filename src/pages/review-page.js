import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Header, Button, Icon, Rating, TextArea } from 'semantic-ui-react';

import ReviewRating from '../components/review-rating/review-rating.js';
import CourseSelect from '../components/course-select.js';

import '../styles/review-page.css';

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
      <CourseSelect courses={courses} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <ReviewRating
          rating={overallRating}
          icon='heart'
          size='large'
          clickable
          hoverable
          captions={['🤬', '😥', '😐', '😀', '😍']}
          onChange={(newRating) => setOverallRating(newRating)}
        />
      </div>

      <div style={{ display: 'flex', marginTop: '10rem', justifyContent: 'center', alignItems: 'center' }}>
        <Rating icon='star' size='massive' maxRating={5} />
      </div>

      <Form>
        <Form.Group inline>
          <Form.Field>
            When did you complete the course?
            <Form.Dropdown
              placeholder='Select term taken'
              fluid
              search
              selection
              options={termOptions}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            Would you like to remain anonymous? <b>{anonymity}</b>
            <Form.Radio
              label='Yes'
              name='anonymityGroup'
              value='Yes'
              checked={anonymity === 'Yes'}
              onChange={handleAnonymityChange}
            />
            <Form.Radio
              label='No'
              name='anonymityGroup'
              value='No'
              checked={anonymity === 'No'}
              onChange={handleAnonymityChange}
            />
          </Form.Field>
        </Form.Group>
        <TextArea placeholder='Please write your review here: make sure you have read the terms and conditions
        before posting. Feel free to include your overall experience with the course,
        how you found the assessments/workload and anything else you wanted to share!'
        />
        <Button color='green' animated='fade' type='submit'>
          <Button.Content visible><Icon name='angle double right' /> </Button.Content>
          <Button.Content hidden>
            Submit
          </Button.Content>
        </Button>
      </Form>
    </>
  );
};

ReviewPage.propTypes = {
  courses: PropTypes.object,
};

export default ReviewPage;
