import React from 'react';
import PropTypes from 'prop-types';

import ReviewRating from '../review-rating/review-rating';

const CourseRatings = (props) => {
  const {
    overall, setOverall,
    enjoyment, setEnjoyment,
    usefulness, setUsefulness,
    workload, setWorkload,
  } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
        <div className='overall-rating' style={{ display: 'flex' }}>
          <div>
            <h3 style={{ flexGrow: 1, marginRight: '1rem' }}>
              Overall Rating<span className='required'> *</span>
            </h3>
            <ReviewRating
              rating={overall}
              icon='star'
              size='big'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newOverall) => setOverall(newOverall)}
            />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <h4 style={{ flexGrow: 1, marginRight: '1rem' }}>
              Enjoyment<span className='required'> *</span>
            </h4>
            <ReviewRating
              rating={enjoyment}
              icon='circle'
              size='standard'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newEnjoyability) => setEnjoyment(newEnjoyability)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <h4 style={{ flexGrow: 1, marginRight: '1rem' }}>
              Usefulness<span className='required'> *</span>
            </h4>
            <ReviewRating
              rating={usefulness}
              icon='circle'
              size='standard'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newUsefulness) => setUsefulness(newUsefulness)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <h4 style={{ flexGrow: 1, marginRight: '1rem' }}>
              Manageability<span className='required'> *</span>
            </h4>
            <ReviewRating
              rating={workload}
              icon='circle'
              size='standard'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newWorkload) => setWorkload(newWorkload)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

CourseRatings.propTypes = {
  overall: PropTypes.number,
  setOverall: PropTypes.func,
  difficulty: PropTypes.number,
  setDifficulty: PropTypes.func,
  enjoyment: PropTypes.number,
  setEnjoyment: PropTypes.func,
  usefulness: PropTypes.number,
  setUsefulness: PropTypes.func,
  workload: PropTypes.number,
  setWorkload: PropTypes.func,
};

export default CourseRatings;
