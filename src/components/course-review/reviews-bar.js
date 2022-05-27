import React from 'react';
import PropTypes from 'prop-types';
import { Header, Dropdown, Radio } from 'semantic-ui-react';

import ReviewModal from '../review-modal.js';

const ReviewsBar = (props) => {
  const { sortOptions, handleSortChange, courseCode, setLoginMessage, setLoginOpen, handleClickTextOnly } = props;

  return (
    <>
      <div className='review-heading'>
        <div>
          <Header as='h2'>
            Reviews
          </Header>
        </div>
        <div className='dropdown-reviews'>
          <Dropdown
            fluid
            placeholder='Sort by'
            selection
            options={sortOptions}
            onChange={handleSortChange}
          />
        </div>
        <ReviewModal courseCode={courseCode} setLoginMessage={setLoginMessage} setLoginOpen={setLoginOpen} />
      </div>
      <div className='text-only-checkbox'>
        <Radio onClick={handleClickTextOnly} toggle label='Text only reviews' />
      </div>
    </>
  );
};

ReviewsBar.propTypes = {
  sortOptions: PropTypes.array,
  handleSortChange: PropTypes.func,
  courseCode: PropTypes.string,
  setLoginMessage: PropTypes.func,
  setLoginOpen: PropTypes.func,
  handleClickTextOnly: PropTypes.func,
};

export default ReviewsBar;

