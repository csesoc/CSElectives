import React from 'react';
import { Dropdown } from 'semantic-ui-react';
const courseOptions = [
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },
  { value: 'COMP1511 - Programming Fundamentals', text: 'COMP1511 - Programming Fundamentals' },

];

const DropdownCourseSearchSelection = () => (
  <Dropdown
    className="searchbar"
    placeholder='Search for a course'
    icon='search'
    floating
    fluid
    search
    selection
    options={courseOptions}
    style={{ textAlign: 'center' }}
    scrolling
  />
);

export default DropdownCourseSearchSelection;
