import React from 'react';
import { Checkbox, Form, Header, Input, TextArea, Rating } from 'semantic-ui-react';
import '../styles/review-page.css';

const RatingForm = () => (
  <Form>
    <Form.Field>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
              Overall Rating
            </label>
          </div>
          <Rating icon='star' defaultRating={0} maxRating={5} size='massive' className='ratings' />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
              Usefulness
            </label>
          </div>
          <Rating icon='star' defaultRating={0} maxRating={5} className='ratings' />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
              Workload
            </label>
          </div>
          <Rating icon='star' defaultRating={0} maxRating={5} className='ratings' />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
              Enjoyability
            </label>
          </div>
          <Rating icon='star' defaultRating={0} maxRating={5} className='ratings' />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
              Difficulty
            </label>
          </div>
          <Rating icon='star' defaultRating={0} maxRating={5} className='ratings' />
        </div>
      </div>
    </Form.Field>
  </Form>
);

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
      <RatingForm />

      {/* TextArea compoennt: https://react.semantic-ui.com/addons/text-area/ */}
      <Form>
        <TextArea placeholder='Maybe use this for reviews??????????' />
      </Form>

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default ReviewPage;
