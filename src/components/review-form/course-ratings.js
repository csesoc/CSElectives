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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <h4 style={{ flexGrow: 1, marginRight: '1rem' }}>
              Overall Rating<span className='required'> *</span>
            </h4>
            <ReviewRating
              rating={overall}
              icon='star'
              size='big'
              palette='csesoc'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newOverall) => setOverall(newOverall)}

            />
          </div>
        </div>
        <div>
          <h5 style={{ flexGrow: 1, marginTop: '1rem' }}>
            Enjoyment<span className='required'> *</span>
          </h5>
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <ReviewRating
              rating={enjoyment}
              icon='circle'
              size='standard'
              palette='trafficlight'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newEnjoyability) => setEnjoyment(newEnjoyability)}
              spacing='1.5rem'
            />
          </div>
          <h5 style={{ flexGrow: 1, marginTop: '1rem' }}>
            Usefulness<span className='required'> *</span>
          </h5>
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <ReviewRating
              rating={usefulness}
              icon='circle'
              size='standard'
              palette='trafficlight'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newUsefulness) => setUsefulness(newUsefulness)}
              spacing='1.5rem'
            />
          </div>
          <h5 style={{ flexGrow: 1, marginTop: '1rem' }}>
            Manageability<span className='required'> *</span>
          </h5>
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <ReviewRating
              rating={workload}
              icon='circle'
              size='standard'
              palette='trafficlight'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newWorkload) => setWorkload(newWorkload)}
              spacing='1.5rem'
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
