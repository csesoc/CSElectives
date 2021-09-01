import React from 'react';
import { Dropdown, Header, Input } from 'semantic-ui-react';
import CourseReviewCard from '../components/course-review-card.js';
import { Segment } from 'semantic-ui-react';

import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import LabelExampleIcon from '../components/tags.js';

const HomePage = () => {
  return (
    <>
      <Header as='h1'>Home Page</Header>

      <Segment className="search-section-background">
        {/* Toggle other tags button */}
        <ToggleOtherTagsButton></ToggleOtherTagsButton>
        {/* Manually increasing the segment size for now */}
        <br></br>
        <br></br>

        {/* TODO
          Add ELEC 69
          Add ELEC 68
          Add ELEC 69
          Add ELEC 75
        */}
      </Segment>

      {/* Input component: https://react.semantic-ui.com/elements/input/ */}
      <Input placeholder="You'll need a text box!"/>

      {/* Dropdown component --> scroll to search selection to implement options:
      https://react.semantic-ui.com/modules/dropdown/ */}
      <Dropdown
        search
        selection
        placeholder="Or you could use a search dropdown!"
      />


      {/* Tags component */}
      <div className='my-front-page-tags'>
        <LabelExampleIcon code="Level 1"/>
      </div>

      {/* Check out the Dropdown component page for examples of inline dropdowns, and filter dropdowns */}

      <div className="my-front-page-card">
        <CourseReviewCard code="COMP1511"/>
        <CourseReviewCard code="COMP2521"/>
        <CourseReviewCard code="SENG2011"/>
      </div>

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default HomePage;
