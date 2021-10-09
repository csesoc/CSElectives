import React from 'react';
import PropTypes from 'prop-types';

import { Popup, Icon } from 'semantic-ui-react';

const palettes = {
  // Uses CSESoc color palette
  csesoc: ['#40404C', '#3F4E77', '#3D5BA2', '#3C69CD', '#3A76F8'],

  // Uses CSESoc blue
  blue: [
    'var(--csesoc-blue)',
    'var(--csesoc-blue)',
    'var(--csesoc-blue)',
    'var(--csesoc-blue)',
    'var(--csesoc-blue)',
  ],

  // Uses red yellow green gradient
  trafficlight: [
    'var(--pink-dark)',
    'var(--orange-dark)',
    'var(--yellow-dark)',
    'var(--green-dark)',
    'var(--cyan-dark)',
  ],
};

// Semantic UI's light grey
const unselectedColor = '#DCDDDE';

const ReviewRating = (props) => {
  const {
    icon,
    size,
    rating,
    clickable,
    hoverable,
    onChange,
    captions = [],
    palette = 'trafficlight',
    spacing = '0.25rem',
  } = props;
  const maxRating = 5;

  const clipPercentage = (idx) => {
    return 0 < rating - idx && rating - idx < 1
      ? (rating % 1) * 100
      : 100;
  };

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
            <Icon.Group
              size={size}
              onClick={() => clickable && onChange?.(rating === (idx + 1) ? 0 : idx + 1)}
              style={{ cursor: clickable && 'pointer', marginRight: spacing }}
            >
              <Icon name={icon} style={{ color: unselectedColor, margin: 0 }} />
              {idx < rating && (
                <Icon
                  name={icon}
                  style={{
                    color: palettes[palette][Math.ceil(rating) - 1],
                    clipPath: `polygon(0 0, 0 100%, ${clipPercentage(idx)}% 100%, ${clipPercentage(idx)}% 0)`,
                  }}
                />
              )}
            </Icon.Group>
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
  spacing: PropTypes.string,
};

export default ReviewRating;
