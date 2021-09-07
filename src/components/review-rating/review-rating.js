import React from 'react';
import PropTypes from 'prop-types';

import { Popup, Icon } from 'semantic-ui-react';

const palettes = {
  // Uses CSESoc color palette
  csesoc: ['#40404C', '#3F4E77', '#3D5BA2', '#3C69CD', '#3A76F8'],

  // Uses Semantic UI's red and yellow
  warm: ['#db2828', '#e9541c', '#f4790c', '#f99b00', '#fbbd08'],
};

// Semantic UI's light grey
const unselectedColor = '#DCDDDE';

const ReviewRating = (props) => {
  const { icon, size, rating, clickable, hoverable, captions, onChange } = props;
  const palette = props.palette ?? 'csesoc';
  const maxRating = 5;

  return (
    // Wrapping in div forces row direction even if parent has column direction
    <div>
      {new Array(maxRating).fill().map((_, idx) => (
        <Popup
          key={idx}
          inverted
          position='top center'
          disabled={!hoverable}
          trigger={
            <Icon
              name={icon}
              size={size}
              style={{
                cursor: clickable && 'pointer',
                color: idx < rating ? palettes[palette][rating - 1] : unselectedColor,
              }}
              onClick={() => clickable && onChange?.(rating === (idx + 1) ? 0 : idx + 1)}
            />
          }
          content={captions[idx]}
        />
      ))}
    </div>
  );
};

ReviewRating.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  rating: PropTypes.number,
  clickable: PropTypes.bool,
  hoverable: PropTypes.bool,
  captions: PropTypes.array,
  onChange: PropTypes.func,
  palette: PropTypes.string,
};

export default ReviewRating;
