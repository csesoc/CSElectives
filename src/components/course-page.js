import React from 'react';
import { Header, Label, Progress } from 'semantic-ui-react';

const CoursePage = () => {
  return (
    <>
      <Header as='h1'>Course Page</Header>

      {/* Label component: https://react.semantic-ui.com/elements/label/ */}
      <Label color='red'>These label components</Label>
      <Label color='green' basic>would be helpful!</Label>

      {/* Progress component: https://react.semantic-ui.com/modules/progress/ */}
      <div>Maybe you can use this for your bar charts?</div>

      <div>This is an unrestricted width progress component</div>
      <Progress percent={10} />

      <div style={{ maxWidth: '25%', border: '1px solid black' }}>
        <span>
          Spans dont put new lines which you might find handy.
          You can restrict the width of the parent div to control the length of the progress component
        </span>
        <Progress percent={10} />
      </div>

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default CoursePage;
