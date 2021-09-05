import React from 'react';
import { Checkbox, Form, Header, Input, TextArea } from 'semantic-ui-react';
import '../styles/review-page.css';

const ReviewPage = () => {
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

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default ReviewPage;
