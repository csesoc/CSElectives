import React, { useState } from 'react';
import { Checkbox, Form, Header, Input, TextArea, Radio, Dropdown } from 'semantic-ui-react';
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

const ReviewPage = () => {
  const [question, setQuestion] = useState('');
  const handleQuestionChange = (e, { value }) => {
    setQuestion(value);
  };

  const [anonymity, setAnonymity] = useState('');
  const handleAnonymityChange = (e, { value }) => {
    setAnonymity(value);
  };


  return (
    <>
      <Header as='h1'>Submit Review Page</Header>

      <Form>
        <Form.Group inline>
          <Form.Field>
            Are you:
            <Form.Radio
              label='currently undertaking the course'
              name='completionGroup'
              value='undertaking'
              checked={question === 'undertaking'}
              onChange={handleQuestionChange}
            />
          </Form.Field>
          <Form.Field>
            or have you:
            <Form.Radio
              label='completed the course'
              name='completionGroup'
              value='completed'
              checked={question === 'completed'}
              onChange={handleQuestionChange}
            />
          </Form.Field>
          <Form.Field>
            When did you complete it?
            <Form.Dropdown
              placeholder='Select term taken'
              fluid
              search
              selection
              options={termOptions}
            />
          </Form.Field>
        </Form.Group>
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
      </Form>
    </>
  );
};

export default ReviewPage;
