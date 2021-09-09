import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Header, Button, Icon, Rating, Input, TextArea } from 'semantic-ui-react';

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
  const [difficultyRating, setDifficultyRating] = useState(0);
  const [enjoyabilityRating, setEnjoyabilityRating] = useState(0);
  const [usefulnessRating, setUsefulnessRating] = useState(0);
  const [workloadRating, setWorkloadRating] = useState(0);

  const RatingForm = () => (
    <Form>
      <Form.Field>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2>
            Overall Rating
          </h2>
          <ReviewRating
            rating={overallRating}
            icon='star'
            size='big'
            clickable
            hoverable
            captions={['🤬', '😥', '😐', '😀', '😍']}
            onChange={(newOverallRating) => setOverallRating(newOverallRating)}
          />
        </div>
      </Form.Field>
      <Form.Field>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }} className='ratingSystem'>
            <h3>
              Difficulty
            </h3>
            <ReviewRating
              rating={difficultyRating}
              icon='circle'
              size='large'
              clickable
              hoverable
              captions={['😍', '😀', '😐', '😥', '🤬']}
              onChange={(newDifficultyRating) => setDifficultyRating(newDifficultyRating)}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }} className='ratingSystem'>
              <h3>
                Enjoyability
              </h3>
              <ReviewRating
                rating={enjoyabilityRating}
                icon='circle'
                size='large'
                clickable
                hoverable
                captions={['🤬', '😥', '😐', '😀', '😍']}
                onChange={(newEnjoyabilityRating) => setEnjoyabilityRating(newEnjoyabilityRating)}
              />
            </div>
          </div>
        </div>
      </Form.Field>
      <Form.Field>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }} className='ratingSystem'>
            <h3>
              Usefulness
            </h3>
            <ReviewRating
              rating={usefulnessRating}
              icon='circle'
              size='large'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newUsefulnessRating) => setUsefulnessRating(newUsefulnessRating)}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }} className='ratingSystem'>
              <h3>
                Workload
              </h3>
              <ReviewRating
                rating={workloadRating}
                icon='circle'
                size='large'
                clickable
                hoverable
                captions={['😍', '😀', '😐', '😥', '🤬']}
                onChange={(newWorkloadRating) => setWorkloadRating(newWorkloadRating)}
              />
            </div>
          </div>
        </div>
      </Form.Field>
    </Form>
  );

  return (
    <>
      <Header as='h1'>Submit Review Page</Header>
      <RatingForm />

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

        <Form.Field>
          <Input className='ratingTitle' placeholder='Enter your title here!' fluid />
          <TextArea placeholder='Please write your review here: make sure you have read the terms and conditions
            before posting. Feel free to include your overall experience with the course,
            how you found the assessments/workload and anything else you wanted to share!'
          />
        </Form.Field>

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
