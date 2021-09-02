import React, { useState } from 'react';
import { Dropdown, Header, Input } from 'semantic-ui-react';
import CourseReviewCard from '../components/course-review-card.js';
import DropdownTags from '../components/dropdown-tag-menu';
import DropdownSort from '../components/dropdown-sort-menu';
import { Segment, Grid } from 'semantic-ui-react';


import ToggleOtherTagsButton from '../components/toggle-other-tags-button.js';
import LabelExampleIcon from '../components/tags.js';
import DropdownCourseSearchSelection from '../components/searchbar.js';

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

const HomePage = () => {
  const [activeTags, setActiveTags] = useState( [] );

  return (
    <>
      <Header as='h1'>Home Page</Header>

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

      {/* Check out the Dropdown component page for examples of inline dropdowns, and filter dropdowns */}

      <Grid columns='three'>
        <Grid.Row>
          <Grid.Column>
            <CourseReviewCard code="COMP1511" name="Programming Fundamentals"
              desc="An introduction to problem-solving via programming, which
              aims to have students develop proficiency in using a high level
              programming language. Topics: algorithms, program structures
              (statements, sequence, selection, iteration, functions),
              data types (numeric, character), data structures (arrays, tuples,
              pointers, lists), storage structures (memory, addresses),
              introduction to analysis of algorithms, testing, code quality,
              teamwork, and reflective practice. The course includes extensive
              practical work in labs and programming projects."/>
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard code="COMP1521" name="Computer Systems Fundamentals"
              desc="This course provides a programmer's view on how a computer
              system executes programs, manipulates data and communicates. It
              enables students to become effective programmers in dealing with
              issues of performance, portability, and robustness. It is
              typically taken in the term after completing COMP1511, but could
              be delayed and taken later. It serves as a foundation for later
              courses on networks, operating systems, computer architecture and
              compilers, where a deeper understanding of systems-level issues is
              required."/>
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard code="COMP1531" name="Software Engineering Fundamentals"
              desc="This course provides an introduction to software engineering
               principles: basic software lifecycle concepts, modern development
                methodologies, conceptual modeling and how these activities
                relate to programming. It also introduces the basic notions of
                team-based project management via conducting a project to design
                , build and deploy a simple web-based application. It is
                typically taken in the term after completing COMP1511, but could
                 be delayed and taken later. It provides essential background
                 for the teamwork and project management required in many later
                 courses."/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <CourseReviewCard code="COMP2511" name="Object Oriented Progamming"
              desc="This course aims to introduce students to the principles of
              object-oriented design and to fundamental techniques in
              object-oriented programming. It is typically taken in the second
              year of study, after COMP2521, to ensure an appropriate background
               in data structures. The knowledge gained in COMP2511 is useful in
                a wide range of later-year CS courses."/>
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard code="COMP2521" name="Data Structures and Algorithms"
              desc="The goal of this course is to deepen students' understanding
               of data structures and algorithms and how these can be employed
               effectively in the design of software systems. We anticipate that
                it will generally be taken in the second year of a program, but
                since its only pre-requisite is COMP1511, is it possible to take
                 it in first year. It is an important course in covering a range
                  of core data structures and algorithms that will be used in
                  context in later courses."/>
          </Grid.Column>
          <Grid.Column>
            <CourseReviewCard code="SENG2011" name="Workshop on Reasoning about Programs"
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
               verification tool to support learning."/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default HomePage;
