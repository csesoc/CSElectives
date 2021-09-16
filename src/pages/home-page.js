import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Header, Input, Segment, Grid } from 'semantic-ui-react';

import DropdownTagsMenu from '../components/dropdown-tag-menu';
import DropdownSortMenu from '../components/dropdown-sort-menu';
import HomePageTags from '../components/home-page-tags.js';
import CardGrid from '../components/card-grid.js';
import { LoadingContext } from '../App.js';
import '../styles/home-page.css';
import ReviewRating from '../components/review-rating/review-rating.js';

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
      <ReviewRating
        rating={4}
        icon='wheelchair'
        size='big'
        clickable
        hoverable
        captions={['🤬', '😥', '😐', '😀', '😍']}
      />

      <ReviewRating
        rating={1.5}
        icon='github'
        size='massive'
      />

      <ReviewRating
        rating={3.3}
        icon='star'
        size='large'
      />

      <Header as='h1'>{query}</Header>

      <Segment className="search-section-background">
        <Input size='massive' icon='search' fluid onChange={handleQueryChange} />

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
      </Segment>

      {/* Tags component */}
      <div className='my-front-page-tags'>
        <div className='tags-category'>
          <HomePageTags
            activeTags={activeMajorTags}
            setActiveTags={setActiveMajorTags}
            category='major'
          />
        </div>
        <div className='tags-category'>
          <HomePageTags
            activeTags={activeTermTags}
            setActiveTags={setActiveTermTags}
            category='term'
          />
        </div>
        <div className='tags-category'>
          <HomePageTags
            activeTags={activePrefixTags}
            setActiveTags={setActivePrefixTags}
            category='prefix'
          />
        </div>
      </div>

      {/* Code, name and desc hardcoded for testing purposes */}
      <Grid stackable doubling columns={3}>
        <CardGrid courses={courses} />
      </Grid>
    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
};

export default HomePage;
