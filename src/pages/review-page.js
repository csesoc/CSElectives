import React, { useState } from 'react';
import { Checkbox, Form, Header, Input, TextArea, Radio, Dropdown } from 'semantic-ui-react';
import '../styles/review-page.css';

import TermTakenSelection from '../components/term-taken-dropdown.js';

const ReviewPage = () => {
  const [question, setQuestion] = useState('');
  const handleQuestionChange = (e, { value }) => {
    setQuestion(value);
  };
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

  return (
    <>
      <Header as='h1'>Submit Review Page</Header>

      {/* Input component: https://react.semantic-ui.com/elements/input/ */}
      <Input placeholder="You'll need a text box!" />
      <br />

      {/* Checkbox component: https://react.semantic-ui.com/modules/checkbox/ */}
      <Checkbox label='You might want checkboxes...' />
      <br />

      {/* Radio button component: https://react.semantic-ui.com/modules/checkbox/#types-radio */}
      <Checkbox radio label='Or some radio buttons which in code is actually a checkbox lol...' />
      <br />

      {/* TextArea compoennt: https://react.semantic-ui.com/addons/text-area/ */}
      <Form>
        <TextArea placeholder='Maybe use this for reviews??????????' />
      </Form>

      <Form>
        <Form.Field>
          Are you:
        </Form.Field>
        <Form.Field>
          <Radio
            label='currently undertaking the course'
            name='radioGroup'
            value='undertaking'
            checked={question === 'undertaking'}
            onChange={handleQuestionChange}
          />
        </Form.Field>
        <Form.Field>
          or have you:
        </Form.Field>
        <Form.Field>
          <Radio
            label='completed the course'
            name='radioGroup'
            value='completed'
            checked={question === 'completed'}
            onChange={handleQuestionChange}
          />
        </Form.Field>
        <Form.Field>
          When did you complete it?
        </Form.Field>
      </Form>

      <Dropdown
        placeholder='Select term taken'
        fluid
        search
        selection
        options={termOptions}
      />
    </>
  );
};

export default ReviewPage;
