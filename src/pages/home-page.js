import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Input, Segment, Grid, Image, Button, Checkbox, Item, Icon } from 'semantic-ui-react';
import scrollToElement from 'scroll-to-element';

import DropdownTagsMenu from '../components/dropdown-tag-menu';
import DropdownSortMenu from '../components/dropdown-sort-menu';
import HomePageTags from '../components/home-page-tags.js';
import CardGrid, { switchView } from '../components/card-grid.js';
import { LoadingContext } from '../App.js';
import '../styles/home-page.css';

import TopBar from '../components/course-review-list-topbar.js';

import FeedbackSvg from '../assets/illustrations/feedback.svg';
import ScrollButton from '../components/scroll-button.js';

const createDropdownOption = (item) => ({
  key: item,
  text: item,
  value: item,
});

const sorts = [
  'Most Reviews',
  'Most Enjoyable',
  'Most Useful',
  'Most Manageable',
  'Highest Rated',
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
  const [activeSort, setActiveSort] = useState('Most Reviews');
  const [query, setQuery] = useState('');

  const handleQueryChange = (e, { value }) => {
    setQuery(value);
  };

  const [viewState, setState] = useState('card');

  const topbar = () => {
    if (viewState === 'list') {
      return <TopBar />;
    }
  };

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
            <span className='desc'>enhancing your student experience.</span>
          </h2>
          <div className='start-reviewing'>
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
          <div className='dev-message'>
            <h4>
              Developer&apos;s Message <br />
            </h4>
            <p>
              Thanks for checking out CSElectives!
              Please note that this website is beta and still under development.
              If you have any feedback, feel free to provide it in the
              <a href="https://cselectives.csesoc.unsw.edu.au/feedback"> feedback form </a> :)
            </p>
          </div>
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
            <div className='search-bar-wrapper'>
              <div className='filter-wrapper'>
                <div className='dropdown-tags-box'>
                  <DropdownTagsMenu
                    title='Prefix'
                    tagOptions={prefixOptions}
                    activeTags={activePrefixTags}
                    setActiveTags={setActivePrefixTags}
                    className='dropdown-tags'
                  />
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
              </div>

              <div className='card-list-switch'>
                <Button.Group basic>
                  <Button
                    icon='grid layout'
                    onClick={() => setState('card')}
                  />
                  <Button
                    icon='bars'
                    onClick={() => setState('list')}
                  />
                </Button.Group>
              </div>
            </div>
          </div>

        </Segment>

        {/* Tags component */}
        <div className='front-page-tags'>
          <HomePageTags
            activeTags={activePrefixTags}
            setActiveTags={setActivePrefixTags}
            category='prefix'
          />
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
        </div>

        {/* Code, name and desc hardcoded for testing purposes */}
        {topbar()}
        {loading ? <span>loading...</span> : (
          <Grid stackable doubling container columns={viewState === 'card' ? 'three' : 'one'}>
            <CardGrid
              courses={courses}
              majors={majors}
              activeMajorTags={activeMajorTags}
              activeTermTags={activeTermTags}
              activePrefixTags={activePrefixTags}
              activeSort={activeSort}
              query={query}
              view={viewState}
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
  view: PropTypes.string,
};

export default HomePage;
