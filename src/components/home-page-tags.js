import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tags.js';

const HomePageTags = (props) => {
  const { activeTags, setActiveTags, category } = props;

  return (
    activeTags.map((tag) => (
      <Tag
        key={tag}
        className={category.toLowerCase()}
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        label={tag}
        clearable
      />
    ))
  );
};

HomePageTags.propTypes = {
  category: PropTypes.string,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default HomePageTags;
