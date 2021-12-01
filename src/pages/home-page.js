import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Input, Segment, Grid, Image, Button } from 'semantic-ui-react';
import scrollToElement from 'scroll-to-element';
import { useLocation } from 'react-router-dom';

import DropdownTagsMenu from '../components/dropdown-tag-menu';
import DropdownSortMenu from '../components/dropdown-sort-menu';
import HomePageTags from '../components/home-page-tags.js';
import CardGrid from '../components/card-grid.js';
import { LoadingContext } from '../App.js';
import '../styles/home-page.css';

import FeedbackSvg from '../assets/illustrations/feedback.svg';
import ScrollButton from '../components/scroll-button.js';

const createDropdownOption = (item) => ({
  key: item,
  text: item,
  value: item,
});

const sorts = [
  'Highest Rated',
  'Most Reviews',
  'Most Useful',
  'Most Enjoyable',
  'Best Workload',
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
  const { courses, majors } = props;
  const [activeMajorTags, setActiveMajorTags] = useState([]);
  const [activeTermTags, setActiveTermTags] = useState([]);
  const [activePrefixTags, setActivePrefixTags] = useState([]);
  const [activeSort, setActiveSort] = useState('Highest Rated');
  const [query, setQuery] = useState('');

  const handleQueryChange = (e, { value }) => {
    setQuery(value);
    console.log(query);
  };

  console.log(majors);

  return (
    <>
      <div className='scroll-button-container'>
        <ScrollButton />
      </div>
      <section className='title-wrapper'>
        <div className='left'>
          <h1>
            <span className='cs'>cs</span>
            <span className='electives'>electives</span>
          </h1>
          <h2>
            {/* {'"'}student reviews, by students, for students{'"'} by Timmy Huang?? */}
            enhancing your student experience.
          </h2>

          <Button
            secondary
            content='Start reviewing!'
            onClick={
              () => scrollToElement('#search-section', {
                ease: 'in-out-cube',
                duration: 1000,
              })
            }
          />
        </div>

        <div className='right'>
          <div className='blob' />
          <Image className='feedback-svg' fluid src={FeedbackSvg} />
        </div>
      </section>

      <section id="search-section">
        <Segment>
          <Input
            size='massive'
            icon='search'
            placeholder='COMP1511'
            fluid
            onChange={handleQueryChange}
            style={{ fontFamily: 'nevis, sans-serif' }}
          />

          <div className='sort-and-filter-container'>
            <div className='sort-dropdown-parent'>
              <div className='sort-dropdown-text'>
                Sort by:
              </div>
              <div className='sort-dropdown-menu'>
                <DropdownSortMenu
                  activeSort={activeSort}
                  setActiveSort={setActiveSort}
                  options={sortOptions}
                />
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
        <div className='front-page-tags'>
          <HomePageTags
            activeTags={activeMajorTags}
            setActiveTags={setActiveMajorTags}
            category='major'
          />

          <HomePageTags
            activeTags={activeTermTags}
            setActiveTags={setActiveTermTags}
            category='term'
          />

          <HomePageTags
            activeTags={activePrefixTags}
            setActiveTags={setActivePrefixTags}
            category='prefix'
          />

        </div>

        {/* Code, name and desc hardcoded for testing purposes */}
        {loading ? <span>loading...</span> : (
          <Grid centered stackable doubling container columns='equal'>
            <CardGrid
              courses={courses}
              majors={majors}
              activeMajorTags={activeMajorTags}
              activeTermTags={activeTermTags}
              activePrefixTags={activePrefixTags}
              activeSort={activeSort}
            />
          </Grid>
        )}
      </section>
    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
  majors: PropTypes.object,
};

export default HomePage;
