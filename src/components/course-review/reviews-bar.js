import React from 'react';
import PropTypes from 'prop-types';
import { Header, Dropdown, Button } from 'semantic-ui-react';

const ReviewsBar = (props) => {
  const { sortOptions, handleSortChange, handleClick } = props;

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
    </div>
  );
};

ReviewsBar.propTypes = {
  sortOptions: PropTypes.func,
  handleSortChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default ReviewsBar;

