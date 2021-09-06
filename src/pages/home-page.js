import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Header, Input, Segment, Grid } from 'semantic-ui-react';

import CourseReviewCard from '../components/course-review-card.js';
import DropdownTags from '../components/dropdown-tag-menu';
import DropdownSort from '../components/dropdown-sort-menu';
import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import LabelExampleIcon from '../components/tags.js';
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

  // Returns an array of courses sorted in descending order of number of reviews
  const sortMostReviewed = () => {
    return Object.values(courses).sort(function(a, b) {
      return b.reviews.length - a.reviews.length;
    });
  };

  // This function creates the grid of course review cards
  const buildGrid = () => {
    const sortedCourses = sortMostReviewed();
    const gridArray = [];
    let gridRow = [];
    let i = 0;

    // Creates 2 rows of cards, each row being 3 cards long
    while (i < 2) {
      for (let i = 0; i < 3; i++) {
        gridRow.push(sortedCourses.shift());
      }
      gridArray.push(gridRow);
      gridRow = [];
      i++;
    }
    return gridArray.map((row, idx) => {
      return (
        <Grid.Row key={idx}>
          {row.map((eqt) => <Grid.Column key={eqt.id}> <CourseReviewCard
            code={eqt.courseCode} name={eqt.title} desc={eqt.description}
            numReviews={eqt.reviews.length}/> </Grid.Column>)}
        </Grid.Row>
      );
    });
  };

  const [activeTags, setActiveTags] = useState( [] );
  console.log(loading);

  const [query, setQuery] = useState('Home Page');
  const handleQueryChange = (e, { value }) => {
    setQuery(value);
    console.log(query);
  };

  return loading ? <span>loading</span> : (
    <>
      <Header as='h1'>{query}</Header>

      {/* {Object.values(courses).map((course) => {
        return <CourseReviewCard key={course.courseCode} code={course.courseCode}
          name={course.title} desc={course.description}/>;
      })} */}

      {/* {Object.keys(courses).map((courseCode, i) => { */}
      {/* return <Header key={i}>{courseCode}</Header>; */}
      {/* })} */}

      <Segment className="search-section-background">
        <Input size='massive' icon='search' fluid onChange={handleQueryChange}/>
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

      <Grid columns={3}>
        {buildGrid()}
      </Grid>
    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
};

export default HomePage;
