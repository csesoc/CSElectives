import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const Banner = (props) => {
  const { courseCode } = props;

  return (
    <Header
      as='h1'
      style={{ padding: '20px', textAlign: 'center', margin: '40', fontSize: '80px',
        color: 'black', marginRight: '20px' }}
      className='course-banner'
    >
      {courseCode}
    </Header>
  );
};

Banner.propTypes = {
  courseCode: PropTypes.string,
};

export default Banner;
