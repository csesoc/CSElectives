import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Header, Input, Segment, Grid } from 'semantic-ui-react';

import CourseReviewCard from '../components/course-review-card.js';
import DropdownTagsMenu from '../components/dropdown-tag-menu';
import DropdownSortMenu from '../components/dropdown-sort-menu';
import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import HomePageTags from '../components/home-page-tags.js';
import ViewOptionsToggle from '../components/view-options-toggle.js';
import CardGrid from '../components/card-grid.js';
import { LoadingContext } from '../App.js';
import '../styles/home-page.css';

const createDropdownOption = (item) => {
  return {
    key: item,
    text: item,
    value: item,
  };
};

const sorts = [
  'Most Popular',
  'Most Useful',
  'Most Enjoyable',
  'Lowest Difficulty',
];

const majors = [
  'Artificial Intelligence',
  'Computer Networks',
  'Database Systems',
  'eCommerce Systems',
  'Embedded Systems',
  'Programming Languages',
  'Security Engineering',
];

const terms = [
  'Summer Term',
  'Term 1',
  'Term 2',
  'Term 3',
];

const prefix = [
  'BINF',
  'COMP',
  'ENGG',
  'SENG',
];


const sortOptions = sorts.map((item) => createDropdownOption(item));

const majorOptions = majors.map((item) => createDropdownOption(item));

const termOptions = terms.map((item) => createDropdownOption(item));

const prefixOptions = prefix.map((item) => createDropdownOption(item));


const HomePage = (props) => {
  const loading = useContext(LoadingContext);
  const { courses } = props;
  const [activeMajorTags, setActiveMajorTags] = useState([]);
  const [activeTermTags, setActiveTermTags] = useState([]);
  const [activePrefixTags, setActivePrefixTags] = useState([]);
  const [query, setQuery] = useState('Home Page');

  const handleQueryChange = (e, { value }) => {
    setQuery(value);
    console.log(query);
  };

  return loading ? <span>loading</span> : (
    <>
      <Header as='h1'>{query}</Header>

      {/* {Object.keys(courses).map((courseCode, i) => { */}
      {/* return <Header key={i}>{courseCode}</Header>; */}
      {/* })} */}
      <Segment className="search-section-background">
        <Input size='massive' icon='search' fluid onChange={handleQueryChange} />
        {/* Toggle other tags button */}
        {/* <ToggleOtherTagsButton></ToggleOtherTagsButton>*/}
        <div className='sort-and-filter-container'>
          <div className='sort-dropdown-parent'>
            <div className='sort-dropdown-text'>
              Sort by:
            </div>
            <div className='sort-dropdown-menu'>
              <DropdownSortMenu options={sortOptions} />
            </div>

          </div>
          <div className='dropdown-tags-box'>
            <DropdownTagsMenu
              title='Major'
              tagOptions={majorOptions}
              activeTags={activeMajorTags}
              setActiveTags={setActiveMajorTags}
              className='dropdown-tags'
            />
          </div>
          <div className='dropdown-tags-box'>
            <DropdownTagsMenu
              title='Term'
              tagOptions={termOptions}
              activeTags={activeTermTags}
              setActiveTags={setActiveTermTags}
              className='dropdown-tags'
            />
          </div>
          <div className='dropdown-tags-box'>
            <DropdownTagsMenu
              title='Prefix'
              tagOptions={prefixOptions}
              activeTags={activePrefixTags}
              setActiveTags={setActivePrefixTags}
              className='dropdown-tags'
            />
          </div>
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
        <HomePageTags
          activeTags={activeMajorTags}
          setActiveTags={setActiveMajorTags}
        />
        <HomePageTags
          activeTags={activeTermTags}
          setActiveTags={setActiveTermTags}
        />
        <HomePageTags
          activeTags={activePrefixTags}
          setActiveTags={setActivePrefixTags}
        />
      </div>

      <ViewOptionsToggle />

      {/* Check out the Dropdown component page for examples of inline dropdowns, and filter dropdowns */}

      {/* Code, name and desc hardcoded for testing purposes */}
      <Grid columns={3}>
        <CardGrid courses={courses} />
      </Grid>
    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
};

export default HomePage;
