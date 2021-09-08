import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tags.js';

const HomePageTags = (props) => {
  const { activeTags, setActiveTags } = props;

  return (
    activeTags.map((tag) => (
      <Tag key={tag} activeTags={activeTags} setActiveTags={setActiveTags} label={tag} clearable />
    ))
  );
};

HomePageTags.propTypes = {
  code: PropTypes.string,
  activeTags: PropTypes.array,
  setActiveTags: PropTypes.func,
};

export default HomePageTags;
