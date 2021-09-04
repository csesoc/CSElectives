import React from 'react';
import { Dropdown, Header, Input } from 'semantic-ui-react';
import CourseReviewCard from '../components/course-review-card.js';
import DropdownTags from '../components/dropdown-tag-menu';
import { Segment } from 'semantic-ui-react';

import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import LabelExampleIcon from '../components/tags.js';
import DropdownCourseSearchSelection from '../components/searchbar.js';
const HomePage = () => {
  return (
    <>
      <Header as='h1'>Home Page</Header>

      <Segment className="search-section-background">
        <DropdownCourseSearchSelection className="searchbar"/>
        {/* Toggle other tags button */}
        <ToggleOtherTagsButton></ToggleOtherTagsButton>
        <DropdownTags title = 'Major' tags = {['Yes']}/>
        <DropdownTags title = 'Level' tags = {['Yes']}/>
        <DropdownTags title = 'Term Offering' tags = {['Yes']}/>
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
        <CourseReviewCard code="COMP1511" name="Programming Fundamentals"
          desc="This is a placeholder for the actual course description."/>
        <CourseReviewCard code="COMP1521" name="Computer Systems Fundamentals"
          desc="This is a placeholder for the actual course description."/>
        <CourseReviewCard code="COMP1531" name="Software Engineering Fundamentals"
          desc="This is a placeholder for the actual course description."/>
        <CourseReviewCard code="COMP2511" name="Object Oriented Progamming"
          desc="This is a placeholder for the actual course description."/>
        <CourseReviewCard code="COMP2521" name="Data Structures and Algorithms"
          desc="This is a placeholder for the actual course description."/>
        <CourseReviewCard code="SENG2011" name="Workshop on Reasoning about Programs"
          desc="This is a placeholder for the actual course description."/>
      </div>

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default HomePage;
