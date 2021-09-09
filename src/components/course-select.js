import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { LoadingContext } from '../App';

const CourseSelect = (props) => {
  const loading = useContext(LoadingContext);
  const { courses } = props;
  const dropdownOptions = (course) => {
    return {
      key: course.courseCode,
      text: course.courseCode + ' - ' + course.title,
      value: course.courseCode,
    };
  };

  if (loading) {
    return <span>loading...</span>;
  } else {
    const dropdownOptionsArray = Object.values(courses).map((course) => dropdownOptions(course));
    return (
      <Dropdown
        placeholder='Select the course you are reviewing'
        fluid
        search
        selection
        options={dropdownOptionsArray}
      />
    );
  };
};
CourseSelect.propTypes = {
  courses: PropTypes.object,
};

export default CourseSelect;
