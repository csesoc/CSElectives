import React from 'react';
import PropTypes from 'prop-types';
import { Header, Dropdown } from 'semantic-ui-react';

import ReviewModal from '../review-modal.js';

const ReviewsBar = (props) => {
  const { sortOptions, handleSortChange, courseCode, setLoginMessage, setLoginOpen } = props;

  return (
    <div className='review-heading'>
      <div>
        <Header as='h2'>
          Reviews
        </Header>
      </div>
      <div className='dropdown-reviews'>
        <Dropdown
          placeholder='Sort by'
          selection
          options={sortOptions}
          onChange={handleSortChange}
        />
      </div>
      <ReviewModal courseCode={courseCode} setLoginMessage={setLoginMessage} setLoginOpen={setLoginOpen} />
    </div>
  );
};

ReviewsBar.propTypes = {
  sortOptions: PropTypes.func,
  handleSortChange: PropTypes.func,
  courseCode: PropTypes.string,
  setLoginMessage: PropTypes.func,
  setLoginOpen: PropTypes.func,
};

export default ReviewsBar;

