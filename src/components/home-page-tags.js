import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tags.js';

// Maybe what we can do here is make another component for tags which other
// components can use to input whatever tag they want
// For any questions please refer to Timmy


const HomePageTags = (props) => {
  const { activeTags, setActiveTags } = props;

  return (
    <div>
      {activeTags.map((tag) => (
        <Tag key={tag} label={tag} canDelete />
      ))}
    </div>
  );
};

HomePageTags.propTypes = {
  code: PropTypes.string,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default HomePageTags;
