import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const CourseSelect = (props) => {
  const { courses, course, setCourse } = props;

  const dropdownOptionsArray = Object.values(courses).map((course) => ({
    key: course.courseCode,
    text: `${course.courseCode} - ${course.title}`,
    value: course.courseCode,
  }));

  return (
    <Form.Field>
      <label>What course are you reviewing?<span className='required'> *</span></label>
      <Form.Dropdown
        placeholder='Select the course you are reviewing'
        fluid
        search
        selection
        value={course}
        options={dropdownOptionsArray}
        onChange={(e, { value }) => setCourse(value)}
      />
    </Form.Field>
  );
};

CourseSelect.propTypes = {
  courses: PropTypes.object,
  course: PropTypes.string,
  setCourse: PropTypes.func,
};

export default CourseSelect;
