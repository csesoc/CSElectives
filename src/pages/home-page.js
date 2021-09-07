import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Header, Input, Segment, Grid } from 'semantic-ui-react';

import CourseReviewCard from '../components/course-review-card.js';
import DropdownTagsMenu from '../components/dropdown-tag-menu';
import DropdownSortMenu from '../components/dropdown-sort-menu';
import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import LabelExampleIcon from '../components/tags.js';
import ViewOptionsToggle from '../components/view-options-toggle.js';
import { LoadingContext } from '../App.js';
import '../styles/home-page.css';

const createDropdownOption = (item) => {
  return {
    key: item,
    text: item,
    value: item,
  };
};

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

const sorts = [
  'Most Popular',
  'Most Useful',
  'Most Enjoyable',
  'Lowest Difficulty',
];

const majorOptions = majors.map((item) => createDropdownOption(item));

const termOptions = terms.map((item) => createDropdownOption(item));

const sortOptions = sorts.map((item) => createDropdownOption(item));

const HomePage = (props) => {
  const loading = useContext(LoadingContext);
  const { courses } = props;

  const [activeTags, setActiveTags] = useState([]);
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
            activeTags={activeTags}
            setActiveTags={setActiveTags}
            className='dropdown-tags'
          />
        </div>
        <div className='dropdown-tags-box'>
          <DropdownTagsMenu
            title='Term'
            tagOptions={termOptions}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
            className='dropdown-tags'
          />
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
        <LabelExampleIcon activeTags={activeTags} setActiveTags={setActiveTags} />
      </div>

      <ViewOptionsToggle />

      {/* Check out the Dropdown component page for examples of inline dropdowns, and filter dropdowns */}

      {/* Code, name and desc hardcoded for testing purposes */}
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <CourseReviewCard
              code="COMP1511"
              name="Programming Fundamentals"
              desc="An introduction to problem-solving via programming, which
              aims to have students develop proficiency in using a high level
              programming language. Topics: algorithms, program structures
              (statements, sequence, selection, iteration, functions),
              data types (numeric, character), data structures (arrays, tuples,
              pointers, lists), storage structures (memory, addresses),
              introduction to analysis of algorithms, testing, code quality,
              teamwork, and reflective practice. The course includes extensive
              practical work in labs and programming projects."
            />
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard
              code="COMP1521"
              name="Computer Systems Fundamentals"
              desc="This course provides a programmer's view on how a computer
              system executes programs, manipulates data and communicates. It
              enables students to become effective programmers in dealing with
              issues of performance, portability, and robustness. It is
              typically taken in the term after completing COMP1511, but could
              be delayed and taken later. It serves as a foundation for later
              courses on networks, operating systems, computer architecture and
              compilers, where a deeper understanding of systems-level issues is
              required."
            />
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard
              code="COMP1531"
              name="Software Engineering Fundamentals"
              desc="This course provides an introduction to software engineering
               principles: basic software lifecycle concepts, modern development
                methodologies, conceptual modeling and how these activities
                relate to programming. It also introduces the basic notions of
                team-based project management via conducting a project to design
                , build and deploy a simple web-based application. It is
                typically taken in the term after completing COMP1511, but could
                 be delayed and taken later. It provides essential background
                 for the teamwork and project management required in many later
                 courses."
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <CourseReviewCard
              code="COMP2511"
              name="Object Oriented Progamming"
              desc="This course aims to introduce students to the principles of
              object-oriented design and to fundamental techniques in
              object-oriented programming. It is typically taken in the second
              year of study, after COMP2521, to ensure an appropriate background
               in data structures. The knowledge gained in COMP2511 is useful in
                a wide range of later-year CS courses."
            />
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard
              code="COMP2521"
              name="Data Structures and Algorithms"
              desc="The goal of this course is to deepen students' understanding
               of data structures and algorithms and how these can be employed
               effectively in the design of software systems. We anticipate that
                it will generally be taken in the second year of a program, but
                since its only pre-requisite is COMP1511, is it possible to take
                 it in first year. It is an important course in covering a range
                  of core data structures and algorithms that will be used in
                  context in later courses."
            />
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard
              code="SENG2011"
              name="Workshop on Reasoning about Programs"
              desc="This is a workshop course aimed at developing the skills of
              writing precise specifications of programs and translating these
              specifications into correct implementations. The course applies
              the rigorous modelling and verification techniques introduced in
              COMP2111 to a diverse and increasingly complex set of problems.
              Further methods for reasoning about programs are introduced,
              including methods for reasoning about termination,  program
              refinement and data refinement. The primary learning outcome is to
               develop students' abilities to apply these ideas to structure
               their thinking about programs, but the course may use a formal
               verification tool to support learning."
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  );
};

HomePage.propTypes = {
  courses: PropTypes.object,
};

export default HomePage;
