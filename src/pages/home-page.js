import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Header, Input } from 'semantic-ui-react';
import { Segment, Grid } from 'semantic-ui-react';

import CourseReviewCard from '../components/course-review-card.js';
import DropdownTags from '../components/dropdown-tag-menu';
import DropdownSort from '../components/dropdown-sort-menu';
import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import LabelExampleIcon from '../components/tags.js';
import DropdownCourseSearchSelection from '../components/searchbar.js';
import ViewOptionsToggle from '../components/view-options-toggle.js';
import { LoadingContext } from '../App.js';

const majorOptions = [
  {
    key: 'Artificial Intelligence',
    text: 'Artificial Intelligence',
    value: 'Artificial Intelligence',
  },
  {
    key: 'Computer Networks',
    text: 'Computer Networks',
    value: 'Computer Networks',
  },
  {
    key: 'Database Systems',
    text: 'Database Systems',
    value: 'Database Systems',
  },
  {
    key: 'eCommerce Systems',
    text: 'eCommerce Systems',
    value: 'eCommerce Systems',
  },
  {
    key: 'Embedded Systems',
    text: 'Embedded Systems',
    value: 'Embedded Systems',
  },
  {
    key: 'Programming Languages',
    text: 'Programming Languages',
    value: 'Programming Languages',
  },
  {
    key: 'Security Engineering',
    text: 'Security Engineering',
    value: 'Security Engineering',
  },
];

const termOptions = [
  {
    key: 'Term 1',
    text: 'Term 1',
    value: 'Term 1',
  },
  {
    key: 'Term 2',
    text: 'Term 2',
    value: 'Term 2',
  },
  {
    key: 'Term 3',
    text: 'Term 3',
    value: 'Term 3',
  },
];


const HomePage = (props) => {
  const loading = useContext(LoadingContext);
  const { courses } = props;

  // This function creates the grid of course review cards
  const buildGrid = () => {
    const typeCopy = Object.values(courses);
    const gridArray = [];
    let gridRow = [];
    let i = 0;

    // Creates 2 rows of cards, each row being 3 cards long
    while (i < 2) {
      for (let i = 0; i < 3; i++) {
        gridRow.push(typeCopy.shift());
      }
      gridArray.push(gridRow);
      gridRow = [];
      i++;
    }
    return gridArray.map((row, idx) => {
      return (
        <Grid.Row key={idx}>
          {row.map((eqt) => <Grid.Column key={eqt.id}> <CourseReviewCard
            code={eqt.courseCode} name={eqt.title} desc={eqt.description} /> </Grid.Column>)}
        </Grid.Row>
      );
    });
  };

  const [activeTags, setActiveTags] = useState( [] );
  console.log(loading);

  return loading ? <span>loading</span> : (
    <>
      <Header as='h1'>Home Page</Header>

      {/* {Object.keys(courses).map((courseCode, i) => {
        return <Header key={i}>{courseCode}</Header>;
      })} */}

      {/* {Object.values(courses).map((course) => {
        return <CourseReviewCard key={course.courseCode} code={course.courseCode}
          name={course.title} desc={course.description}/>;
      })} */}

      <Segment className="search-section-background">
        <DropdownCourseSearchSelection className="searchbar"/>
        {/* Toggle other tags button */}
        {/* <ToggleOtherTagsButton></ToggleOtherTagsButton>*/}
        <div className='sort-dropdown-parent'>
          <div className='sort-dropdown-text'>
            Sort by:
          </div>
          <div className='sort-dropdown-menu'>
            <DropdownSort/>
          </div>

        </div>
        <div className='dropdown-tags-box'>
          <DropdownTags title='Major'
            tagOptions = {majorOptions}
            setActiveTags={setActiveTags}
            className='dropdown-tags'/>
        </div>
        <div className='dropdown-tags-box'>
          <DropdownTags title='Term Offering'
            tagOptions = {termOptions}
            setActiveTags={setActiveTags}
            className='dropdown-tags'/>
        </div>
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


      {/* Input component: https://react.semantic-ui.com/elements/input/ *
      <Input placeholder="You'll need a text box!"/>

      {/* Dropdown component --> scroll to search selection to implement options:
      https://react.semantic-ui.com/modules/dropdown/
      <Dropdown
        search
        selection
        placeholder="Or you could use a search dropdown!"
      /> */}

      {/* Tags component */}
      <div className='my-front-page-tags'>
        <LabelExampleIcon code="Level 1"/>
      </div>

      <ViewOptionsToggle/>

      {/* Check out the Dropdown component page for examples of inline dropdowns, and filter dropdowns */}

      <Grid columns={3}>
        {buildGrid()};
      </Grid>

    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
};

export default HomePage;
