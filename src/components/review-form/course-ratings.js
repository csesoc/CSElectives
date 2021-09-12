import React from 'react';
import PropTypes from 'prop-types';

import ReviewRating from '../review-rating/review-rating';

const CourseRatings = (props) => {
  const {
    overall, setOverall,
    difficulty, setDifficulty,
    enjoyment, setEnjoyment,
    usefulness, setUsefulness,
    workload, setWorkload,
  } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>
          Overall Rating
        </h2>
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
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }} className='ratingSystem'>
          <h3>
            Difficulty
          </h3>
          <ReviewRating
            rating={difficulty}
            icon='circle'
            size='large'
            clickable
            hoverable
            captions={['😍', '😀', '😐', '😥', '🤬']}
            onChange={(newDifficulty) => setDifficulty(newDifficulty)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }} className='ratingSystem'>
            <h3>
              Enjoyability
            </h3>
            <ReviewRating
              rating={enjoyment}
              icon='circle'
              size='large'
              clickable
              hoverable
              captions={['🤬', '😥', '😐', '😀', '😍']}
              onChange={(newEnjoyability) => setEnjoyment(newEnjoyability)}
            />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }} className='ratingSystem'>
          <h3>
            Usefulness
          </h3>
          <ReviewRating
            rating={usefulness}
            icon='circle'
            size='large'
            clickable
            hoverable
            captions={['🤬', '😥', '😐', '😀', '😍']}
            onChange={(newUsefulness) => setUsefulness(newUsefulness)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }} className='ratingSystem'>
            <h3>
              Workload
            </h3>
            <ReviewRating
              rating={workload}
              icon='circle'
              size='large'
              clickable
              hoverable
              captions={['😍', '😀', '😐', '😥', '🤬']}
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
